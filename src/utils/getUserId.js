import { verify } from 'jsonwebtoken';

// -----------------------------------------------------------------------------

export class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}

const getUserId = ({ ctx, tokenSecret }) => {
  const Authorization = ctx.request.get('Authorization');

  if (!Authorization) {
    throw new AuthError();
  }

  const token = Authorization.replace('Bearer ', '');
  const { userId } = verify(token, tokenSecret);

  return userId;
};

// -----------------------------------------------------------------------------

export default getUserId;
