# Arte Numerologico

Arte Numerologico is a Spanish-language MERN application for learning and calculating numerology values. The app combines educational content about the symbolic meaning of numbers with calculators for names, birth dates, couples, and user profile data.

The repository contains two independent projects:

- `client/`: a React single-page application built with Create React App.
- `server/`: an Express API connected to MongoDB with user, profile, password reset, and numerology endpoints.

Live deployments:

- Frontend: https://mern-arte-numerologico.vercel.app
- Backend API: https://mern-arte-numerologico-apis.vercel.app

UX/UI design reference by Luisina Banega:

- https://www.figma.com/file/pMzefVf6ArPnaTiUwNwTOs/arte-numerol%C3%B3gico?type=design&node-id=0%3A1&mode=design&t=xqzQ7KwQ1OnCbq2F-1

## What the app does

The frontend exposes these main routes:

| Route | Purpose |
| --- | --- |
| `/` | Home page with the universal number of the day, a personal day message for logged-in users, and educational content about numbers 1 to 9. |
| `/name-numbers` | Calculates name numerology: Yo Exterior, Yo Interior, and Yo Real. |
| `/birthdate-numbers` | Calculates a life number from a birth date. |
| `/couple-numbers` | Calculates and compares name and birth-date numbers for two people. |
| `/profile` | Shows login/register forms or the logged-in user's profile data. |

Logged-in users can store their email, name, and birth date. The home page uses saved birth-date data to show the user's personal day number alongside the universal day number.

## Tech stack

Frontend:

- React 18
- React Router 6
- Create React App / `react-scripts`
- Material UI 5
- Bootstrap 5
- Axios

Backend:

- Node.js
- Express 4
- MongoDB and Mongoose
- bcryptjs for password hashing
- SendGrid for password reset emails
- Vercel serverless deployment

## Repository structure

```text
.
+-- client/
|   +-- public/                 # Static HTML and web app metadata
|   +-- src/
|   |   +-- assets/             # Icons and visual assets
|   |   +-- components/         # Shared UI, auth, profile, and numerology helpers
|   |   +-- pages/              # Route-level React pages
|   |   +-- App.js              # Router and app shell
|   |   +-- index.js            # React entry point
|   +-- package.json            # Frontend dependencies and scripts
|   +-- README.md               # Default Create React App documentation
+-- server/
|   +-- routes/
|   |   +-- api.js              # REST API routes and User model
|   |   +-- Numerology.js       # Backend numerology helper functions
|   |   +-- cryptAlgo.js        # Simple token encode/decode helper for password reset
|   +-- index.js                # Express app and MongoDB connection
|   +-- package.json            # Backend dependencies and scripts
|   +-- vercel.json             # Backend Vercel config
+-- vercel.json                 # Frontend Vercel config
+-- README.md                   # Repository overview
```

There is no root `package.json`; install and run `client` and `server` separately.

## Numerology logic

The main calculator logic lives in `client/src/components/Numerology.js`:

- `letrasANumeros(text, flag)` maps letters to numbers.
- `sumar(array)` sums an array of numbers.
- `reducir(number)` reduces a number to one digit.

The `flag` values for letter conversion are:

- `0`: all letters
- `1`: vowels only
- `2`: consonants only

The server has similar helper logic in `server/routes/Numerology.js` and exposes API endpoints for number calculations, although the current React calculators primarily run client-side.

## Backend API

All API routes are mounted under `/api`.

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/soloLetras` | Converts letters to a reduced numerology number. |
| `POST` | `/api/soloNumeros` | Sums and reduces a numeric array. |
| `POST` | `/api/register` | Registers a user with email and password. |
| `POST` | `/api/login` | Authenticates a user and returns user data. |
| `PUT` | `/api/name` | Updates the user's saved name. |
| `PUT` | `/api/birth` | Updates the user's saved birth date. |
| `POST` | `/api/history` | Pushes an object into the user's `history` array. |
| `POST` | `/api/forgotPassword` | Sends a password reset email through SendGrid. |
| `GET` | `/api/resetPassword` | Resets the user's password to a temporary value using a token query parameter. |

The MongoDB `User` model is defined in `server/routes/api.js` with these fields:

- `useremail`
- `password`
- `name`
- `day`
- `month`
- `year`
- `history`

## Local development

Prerequisites:

- Node.js and npm
- A MongoDB connection string
- A SendGrid API key if you want to test password reset emails

Install and run the backend:

```bash
cd server
npm install
npm start
```

The server runs on `http://localhost:5000` by default.

Create `server/.env` or configure equivalent environment variables before running the backend:

```bash
MONGODB_URI=your_mongodb_connection_string
SENDGRID_API_KEY=your_sendgrid_api_key
PORT=5000
```

Install and run the frontend in another terminal:

```bash
cd client
npm install
npm start
```

The React app runs on `http://localhost:3000`.

Current client API calls are hardcoded to the deployed backend URL (`https://mern-arte-numerologico-apis.vercel.app`). If you want the local frontend to call a local backend, update those Axios URLs or introduce an environment-based API base URL.

## Available scripts

Frontend scripts from `client/package.json`:

| Command | Description |
| --- | --- |
| `npm start` | Starts the React development server. |
| `npm test` | Starts the Create React App test runner. |
| `npm run build` | Builds the production frontend into `client/build/`. |
| `npm run eject` | Ejects Create React App configuration. |

Backend scripts from `server/package.json`:

| Command | Description |
| --- | --- |
| `npm start` | Starts the Express server with Node. |
| `npm test` | Placeholder script; no backend tests are implemented yet. |

## Deployment

The project is configured for Vercel:

- The root `vercel.json` builds the React app from `client/package.json` and routes SPA paths back to `client/index.html`.
- `server/vercel.json` deploys `server/index.js` with `@vercel/node`.

The deployed frontend and backend are currently separate Vercel projects.

## Current project notes

- Authentication state is held in React context and persisted in a `userData` browser cookie.
- Profile updates are written to MongoDB and then mirrored back into the cookie.
- Password reset email support depends on SendGrid.
- A `history` API exists on the backend, but there is no visible frontend history workflow yet.
- The client includes a generated Create React App test file; test coverage has not been expanded around the current numerology features.
