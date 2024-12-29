# Secrets Anonymous

An entertainment-based web app where users can anonymously share their secrets with the world. Built with Next.js, the app emphasizes anonymity while offering a sleek and engaging user experience.

## Features

- **Anonymous Sharing**: Post secrets without revealing your identity.
- **Dynamic Interactions**: Real-time updates powered by Next.js App Router and Server Actions.
- **Secure Authentication**: User authentication via NextAuth with Google OAuth.
- **Responsive Design**: Tailwind CSS ensures a modern and mobile-friendly UI.
- **Robust Backend**: MongoDB serves as the database to store and manage secrets.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router and Server Actions)
- **Authentication**: [NextAuth](https://next-auth.js.org/) with Google OAuth
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

Follow these instructions to set up the project on your local machine for development and testing.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A MongoDB database instance
- Google Cloud project for OAuth credentials

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/indbhatti/secrets-anonymous.git
   cd secrets-anonymous
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXTAUTH_SECRET=<your-nextauth-secret>
   NEXTAUTH_URL=http://localhost:3000

   GOOGLE_CLIENT_ID=<your-google-client-id>
   GOOGLE_CLIENT_SECRET=<your-google-client-secret>

   MONGODB_URI=<your-mongodb-connection-string>
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The app can be deployed to platforms like Vercel. Follow these steps:

1. Set up environment variables in the deployment platform.
2. Deploy the app using the platform’s CLI or web interface.

For detailed instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to reach out:

- Email: inderprbhatti@gmail.com
