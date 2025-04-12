"use client";

import { useState, useCallback } from "react";
import { FormField } from "../types";

interface FormState {
  values: Record<string, string>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
}

interface UseFormProps {
  fields: FormField[];
  onSubmit: (values: Record<string, string>) => void;
}

export function useForm({ fields, onSubmit }: UseFormProps) {
  const [state, setState] = useState<FormState>({
    values: {},
    errors: {},
    touched: {},
  });

  const validateField = useCallback(
    (name: string, value: string) => {
      const field = fields.find((f) => f.name === name);
      if (!field) return "";

      if (field.required && !value) {
        return "This field is required";
      }

      if (field.validation?.pattern && !field.validation.pattern.test(value)) {
        return field.validation.message || "Invalid format";
      }

      return "";
    },
    [fields]
  );

  const handleChange = useCallback(
    (name: string, value: string) => {
      setState((prev) => ({
        ...prev,
        values: { ...prev.values, [name]: value },
        errors: { ...prev.errors, [name]: validateField(name, value) },
        touched: { ...prev.touched, [name]: true },
      }));
    },
    [validateField]
  );

  const handleBlur = useCallback((name: string) => {
    setState((prev) => ({
      ...prev,
      touched: { ...prev.touched, [name]: true },
    }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      // Validate all fields
      const newErrors: Record<string, string> = {};
      fields.forEach((field) => {
        const error = validateField(field.name, state.values[field.name] || "");
        if (error) {
          newErrors[field.name] = error;
        }
      });

      setState((prev) => ({
        ...prev,
        errors: newErrors,
        touched: Object.fromEntries(fields.map((f) => [f.name, true])),
      }));

      // If no errors, submit the form
      if (Object.keys(newErrors).length === 0) {
        onSubmit(state.values);
      }
    },
    [fields, state.values, validateField, onSubmit]
  );

  const resetForm = useCallback(() => {
    setState({
      values: {},
      errors: {},
      touched: {},
    });
  }, []);

  return {
    values: state.values,
    errors: state.errors,
    touched: state.touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  };
}
