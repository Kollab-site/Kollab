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
echo "Running migrations..."
python manage.py migrate

# Create admin user if it doesn't exist
echo "Checking for admin user..."
python manage.py shell -c "
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(username='admin').exists():
    print('Creating admin user...')
    admin = User.objects.create_superuser(
        username='admin',
        email='admin@kollab.com',
        password='admin123',
        is_staff=True,
        is_superuser=True
    )
    print('Admin user created successfully!')
    print(f'Username: admin')
    print(f'Email: admin@kollab.com')
    print(f'Password: admin123')
else:
    print('Admin user already exists.')
"

# Execute the command passed to the container
exec "$@" 