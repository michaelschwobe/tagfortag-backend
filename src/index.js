import { GraphQLServer } from 'graphql-yoga';
import cookieParser from 'cookie-parser';

// Config
import './config'; // Has dotenv-flow config, must be first!

// Constants
import {
  BACKEND_HOSTNAME,
  BACKEND_PORT,
  BACKEND_SECRET,
  FRONTEND_ORIGIN,
  IS_PROD,
} from './constants';

// Local modules
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import tokenMiddleware from './middlewares/tokenMiddleware';
import userMiddleware from './middlewares/userMiddleware';
import { prisma } from './generated/prisma-client';

// -----------------------------------------------------------------------------

const defaultPlaygroundQuery = `mutation signinUser($email: String!, $password: String!) {
  signinUser(email: $email, password: $password) {
    token
    user {
      id
      email
    }
  }
}
`;

// Create server.
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({ ...req, prisma }),
});

// Add Express middleware.
server.express.use(cookieParser());
server.express.use(tokenMiddleware(BACKEND_SECRET));
server.express.use(userMiddleware(prisma));

// Start server.
server
  .start(
    {
      cors: {
        credentials: true,
        origin: FRONTEND_ORIGIN,
      },
      port: BACKEND_PORT,
      defaultPlaygroundQuery,
    },
    ({ port }) => {
      // eslint-disable-next-line no-console
      console.log(
        '✨ Server is now running at',
        `http${IS_PROD ? 's' : ''}://${BACKEND_HOSTNAME}:${port}`,
      );
    },
  )
  .catch(error => {
    // eslint-disable-next-line no-console
    console.error('💥 Server connection failure', error);
  });
