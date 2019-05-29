const userMiddleware = database => async (req, res, next) => {
  if (req.userId) {
    const user = await database.user({ id: req.userId }, '{ id, email }');
    req.user = user;
  }

  return next();
};

// -----------------------------------------------------------------------------

export default userMiddleware;
