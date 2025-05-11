from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

User = get_user_model()

class Command(BaseCommand):
    help = 'Creates a superuser with the correct settings'

    def handle(self, *args, **options):
        if not User.objects.filter(email='admin@kollab.com').exists():
            User.objects.create_superuser(
                username='admin',
                email='admin@kollab.com',
                password='admin123',
                is_staff=True,
                is_superuser=True
            )
            self.stdout.write(self.style.SUCCESS('Successfully created superuser'))
        else:
            self.stdout.write(self.style.WARNING('Superuser already exists')) 