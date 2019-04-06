import { verify } from 'jsonwebtoken';

// -----------------------------------------------------------------------------

const tokenMiddleware = secret => (req, res, next) => {
  const { token } = req.cookies;

  if (token) {
    const { userId } = verify(token, secret);
    req.userId = userId;
  }

  next();
};

// -----------------------------------------------------------------------------

export default tokenMiddleware;
