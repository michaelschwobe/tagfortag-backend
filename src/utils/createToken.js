import { sign } from 'jsonwebtoken';

// -----------------------------------------------------------------------------

const createToken = ({ userId, tokenSecret, tokenOptions = null }) =>
  sign({ userId }, tokenSecret, tokenOptions);

// -----------------------------------------------------------------------------

export default createToken;
