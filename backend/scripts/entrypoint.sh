#!/bin/bash

# Exit on error
set -e

# Function to wait for PostgreSQL
wait_for_postgres() {
    echo "Waiting for PostgreSQL..."
    while ! nc -z $POSTGRES_HOST $POSTGRES_PORT; do
        sleep 0.1
    done
    echo "PostgreSQL started"
}

# Wait for PostgreSQL if environment variables are set
if [ -n "$POSTGRES_HOST" ] && [ -n "$POSTGRES_PORT" ]; then
    wait_for_postgres
fi

# Run migrations
python manage.py migrate

# Create admin user if it doesn't exist
python manage.py shell -c "
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@example.com', 'admin')
    print('Admin user created successfully!')
else:
    print('Admin user already exists.')
"

# Execute the command passed to the container
exec "$@" 