# MusicGPT Clone

A Next.js + Tailwind CSS app for creating and exploring AI-generated music, with Text-to-Speech and voice selection features. Uses PostgreSQL for backend data and supportsDocker-based development.

---

## 🚀 Features
- Modern Next.js frontend with Tailwind CSS
- Prompt box with "Create Anything" and "Text to Speech" tools
- Dynamic, paginated voice list fetched from backend
- Smooth UI transitions and loading states
- API endpoints for prompt and TTS requests (logs to backend)
- PostgreSQL database (raw SQL, no ORM)
- Docker Compose for easy DB setup

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
├── config/
│   └── db.ts              # PostgreSQL connection pool
├── lib/
│   └── seed.ts            # Seed script (optional)
├── public/
├── Dockerfile
├── docker-compose.yml
├── .env                   # Environment variables
├── init.sql               # DB schema and seed for Docker
└── ...
```

---

# Running with Docker Compose

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (includes Docker Compose)
  - Make sure Docker Desktop or Docker Engine is installed and running on your system.
  - You can verify installation with:
    ```sh
    docker --version
    docker-compose --version
    ```

## Docker Images Used

- **App:** [`node:20-alpine`](https://hub.docker.com/_/node) (for building and running the Next.js app)
- **Database:** [`postgres:15`](https://hub.docker.com/_/postgres) (for the PostgreSQL database)

This project is fully containerized for easy setup and deployment. Both the Next.js app and the PostgreSQL database run in Docker containers.

## 1. Prepare your `.env` file
Create a `.env` file in the project root with the following variables:

```env
DB_HOST=db
DB_PORT=5432
DB_NAME=
DB_USER=
DB_PASSWORD=
```

## 2. Build and start all services
From the project root, run:

```sh
docker-compose up --build
```

- This will build the Next.js app and start both the app and the database containers.
- The database will be initialized and seeded automatically using `init.sql` on first run.

## 3. Access the app
Open your browser and go to:

```
http://localhost:3000
```

## 4. Stopping and resetting
- To stop all containers:
  ```sh
  docker-compose down
  ```
- To reset the database (remove all data):
  ```sh
  docker-compose down -v
  docker-compose up --build
  ```

---

**That's it! You now have a fully working MusicGPT app and database running in Docker.**

---

## 📝 Design Decisions
- **PostgreSQL + raw SQL:** Simple, robust, and easy to seed/migrate.
- **API Layer:** Business logic in `/apis`, thin Next.js API routes in `/app/api`.
- **Prompt Box:** Responsive, animated, and uses Tailwind for styling.
- **Pagination:** Voices API supports `?page=1&pageSize=5` for scalable lists.
- **Logging:** All prompt and TTS requests are logged to the backend console for demo purposes.
- **Docker:** Compose used for DB, app runs in dev mode for hot reload.


## 🙏 Credits
- Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [PostgreSQL](https://www.postgresql.org/), and [Docker](https://www.docker.com/). 

## Recorded Video URL:
https://www.loom.com/share/0c5c40d0ba164412b20c56a24d56568d?sid=e9a5f386-4991-47a6-8ddb-daad452caf88

