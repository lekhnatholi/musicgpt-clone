# MusicGPT Clone

A Next.js + Tailwind CSS app for creating and exploring AI-generated music, with Text-to-Speech and voice selection features. Fully containerized with Docker and uses Sequelize + PostgreSQL for backend data.

---

## 🚀 Features
- Modern Next.js frontend with Tailwind CSS
- Prompt box with "Create Anything" and "Text to Speech" tools
- Dynamic, paginated voice list fetched from backend
- Smooth UI transitions and loading states
- API endpoints for prompt and TTS requests (logs to backend)
- PostgreSQL database via Sequelize ORM
- Fully Dockerized for local development

---

## 🗂️ Project Structure

```
├── apis/                  # Backend logic for API endpoints
│   ├── voices.ts
│   ├── create-anything.ts
│   └── text-to-speech.ts
├── app/
│   ├── api/               # Next.js API routes
│   │   ├── voices/route.ts
│   │   ├── create-anything/route.ts
│   │   └── text-to-speech/route.ts
│   ├── page.tsx           # Main UI
│   └── ...
├── lib/
│   └── sequelize.ts       # Sequelize DB setup and models
├── public/
├── Dockerfile
├── docker-compose.yml
├── .env                   # Environment variables
└── ...
```

---

## ⚙️ Setup Instructions

### 1. **Local Development (without Docker)**

1. Install dependencies:
   ```sh
   npm install
   ```
2. Set up the database:
   - Ensure PostgreSQL is running and your `.env` has the correct `DATABASE_URL`.
   - (Optional) Create the `voices` table and seed data using a SQL script or Sequelize sync.
3. Start the dev server:
   ```sh
   npm run dev
   ```
4. Visit [http://localhost:3000](http://localhost:3000)

### 2. **With Docker Compose**

1. Build and run:
   ```sh
   docker-compose up --build
   ```
2. Visit [http://localhost:3000](http://localhost:3000)

---

## 📝 Design Decisions
- **Sequelize + PostgreSQL**: Robust DB for scalable development and seeding.
- **API Layer**: Business logic in `/apis`, thin Next.js API routes in `/app/api`.
- **Prompt Box**: Responsive, animated, and uses Tailwind for styling.
- **Pagination**: Voices API supports `?page=1&pageSize=5` for scalable lists.
- **Logging**: All prompt and TTS requests are logged to the backend console for demo purposes.
- **Docker**: Single-stage build for simplicity.

---

## 🧪 Testing
- Use the UI to submit prompts and TTS requests.
- Check backend logs (container or terminal) to see request payloads.
- Use the tools dropdown to switch between "Create Anything" and "Text to Speech".

---

## 📹 Demo
- Please see the attached screen recording for a walkthrough.

---

## 🙏 Credits
- Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Sequelize](https://sequelize.org/), and [Docker](https://www.docker.com/). 

docker-compose exec db psql -U $DB_USER -d $DB_NAME