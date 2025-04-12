"use client";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export function Input({ label, error, className = "", ...props }: InputProps) {
  const inputClasses = `
    w-full px-4 py-3 rounded-lg border
    ${error ? "border-red-500" : "border-gray-300"}
    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
    ${className}
  `;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input className={inputClasses} {...props} />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
