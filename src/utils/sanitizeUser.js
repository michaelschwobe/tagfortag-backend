import { hash } from 'bcryptjs';

// -----------------------------------------------------------------------------

const sanitizeUser = async ({ email, password, ...args }) => {
  const hashedPassword = await hash(password, 10);

  return {
    ...args,
    email: email.toLowerCase(),
    password: hashedPassword,
  };
};

// -----------------------------------------------------------------------------

export default sanitizeUser;
