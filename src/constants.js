export const {
  // Node
  NODE_ENV = 'development',

  // Server
  BACKEND_HOSTNAME = 'localhost',
  BACKEND_PORT = 4000,
  BACKEND_SECRET = 'secret',

  // Client
  FRONTEND_ORIGIN = 'http://localhost:3000',
  FRONTEND_ADMINISTRATOR_EMAIL = 'user1@example.com',
  FRONTEND_ADMINISTRATOR_PASSWORD = 'secret',
} = process.env;

export const IS_PROD = NODE_ENV === 'production';
