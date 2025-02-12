# Todo App 

## Overview

This is a simple Todo application built with Next.js and Clerk for authentication. The app allows users to sign in and manage their tasks efficiently.

## Features

- User authentication with Clerk
- Add, edit, and delete tasks
- Responsive design

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-v0.1.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Todo
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## File Structure

- `/src/app/(user)/signin/[[...signin]]/page.tsx`: Sign-in page component using Clerk.
- `/src/app/layout.tsx`: Root layout component.
- `/src/app/page.tsx`: Home page component.
- `/src/app/globals.css`: Global CSS file.
- `/src/components/custom/navBar.tsx`: Custom navigation bar component.
- `/middleware.ts`: Middleware for Clerk authentication.
- `/next.config.ts`: Next.js configuration file.
- `/package.json`: Project dependencies and scripts.
- `/tailwind.config.ts`: Tailwind CSS configuration file.
- `/tsconfig.json`: TypeScript configuration file.

## Clerk Configuration

To configure Clerk for authentication, follow these steps:

1. Sign up for a Clerk account at [Clerk](https://clerk.dev/).
2. Create a new Clerk application in the Clerk dashboard.
3. Copy the Clerk frontend API key and backend API key.
4. Create a `.env.local` file in the root of your project and add the following environment variables:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your-frontend-api-key>
   CLERK_API_KEY=<your-backend-api-key>
   ```
5. Update the `ClerkProvider` component in `src/app/layout.tsx` with your Clerk frontend API key:
   ```tsx
   <ClerkProvider frontendApi="<your-frontend-api-key>">
   ```

## Deployment

To deploy the application, follow these steps:

1. Build the application:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm start
   ```
3. Deploy the application to your preferred hosting provider, such as Vercel, Netlify, or AWS.
