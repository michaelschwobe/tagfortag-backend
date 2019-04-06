const userMiddleware = database => async (req, res, next) => {
  if (!req.userId) {
    return next();
  }

  const user = await database.user({ id: req.userId }, '{ id, email }');

  req.user = user;

  return next();
};

// -----------------------------------------------------------------------------

export default userMiddleware;
