#!/bin/bash

# Exit on error
set -e

# Run Django development server with debug mode
python manage.py runserver 0.0.0.0:8000 