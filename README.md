# Kollab

A modern web application for connecting brands and influencers, built with Django, React, TypeScript, and Vite.

## 🚀 Features

- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Authentication**: Secure sign-in and sign-up functionality
- **Responsive Design**: Works seamlessly across all devices
- **Type Safety**: Built with TypeScript for better developer experience
- **Fast Development**: Powered by Vite for lightning-fast builds
- **Dockerized**: Easy deployment with Docker and Docker Compose
- **PostgreSQL**: Robust database support

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Backend**: Django, Django REST Framework
- **Database**: PostgreSQL
- **Styling**: Tailwind CSS, shadcn/ui components
- **State Management**: React Context API
- **Routing**: React Router v6
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Containerization**: Docker, Docker Compose

## 📦 Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js (v18 or higher) - for local development
- Python 3.11 - for local development

### Docker Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/kollab.git
   cd kollab
   ```

2. Build and start the containers:

   ```bash
   docker compose up --build
   ```

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - PostgreSQL: localhost:5432

### Local Development Setup

1. Install dependencies:

   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   pip install -r requirements/local.txt
   ```

2. Start the development servers:

   ```bash
   # Frontend
   cd frontend
   npm run dev

   # Backend
   cd backend
   python manage.py runserver
   ```

## 📁 Project Structure

```
kollab/
├── frontend/          # React frontend application
│   ├── src/          # Source files
│   ├── public/       # Static assets
│   └── package.json  # Frontend dependencies
├── backend/          # Django backend application
│   ├── api/          # API endpoints
│   ├── db/           # Database models
│   └── settings.py   # Django settings
├── requirements/     # Python dependencies
├── docker-compose.yml # Docker Compose configuration
└── README.md         # Project documentation
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Vite](https://vitejs.dev/) for the amazing development experience
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Django](https://www.djangoproject.com/) for the robust backend framework
