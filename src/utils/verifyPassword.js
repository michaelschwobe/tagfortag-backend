import { compare } from 'bcryptjs';

// -----------------------------------------------------------------------------

export class PasswordError extends Error {
  constructor() {
    super('Invalid password');
  }
}

const verifyPassword = async ({ str, hash, noThrow = false }) => {
  const isPassword = await compare(str, hash);

  if (!noThrow && !isPassword) {
    throw new PasswordError();
  }

  return isPassword;
};

// -----------------------------------------------------------------------------

export default verifyPassword;
