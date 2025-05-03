#!/bin/bash

# Exit on error
set -e

# Collect static files
python manage.py collectstatic --noinput

# Run Gunicorn for production
gunicorn backend.wsgi:application --bind 0.0.0.0:8000 --workers 4 --timeout 120 