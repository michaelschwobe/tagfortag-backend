// Config
import '../src/config'; // Has dotenv-flow config, must be first!

// Constants
import {
  FRONTEND_ADMINISTRATOR_EMAIL,
  FRONTEND_ADMINISTRATOR_PASSWORD,
} from '../src/constants';

// Local modules
import { prisma } from '../src/generated/prisma-client';
import sanitizeUser from '../src/utils/sanitizeUser';

// -----------------------------------------------------------------------------
// User data
// -----------------------------------------------------------------------------

const createUserPromise = sanitizedUser => prisma.createUser(sanitizedUser);

const createUser = async user => {
  const sanitizedUser = await sanitizeUser(user);
  return createUserPromise(sanitizedUser);
};

const createUsers = async users => {
  try {
    const responses = await Promise.all(users.map(user => createUser(user)));
    // eslint-disable-next-line no-console
    console.log('✨ Success! createUsers:', responses);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('💥 Failure! createUsers error:', error);
  }
};

// -----------------------------------------------------------------------------
// Attempt to seed the database
// -----------------------------------------------------------------------------

// Create `ADMINISTRATOR` permissioned users.
createUsers([
  {
    email: FRONTEND_ADMINISTRATOR_EMAIL,
    password: FRONTEND_ADMINISTRATOR_PASSWORD,
  },
  // {
  //   email: 'user2@example.com',
  //   password: 'secret',
  // },
]);
