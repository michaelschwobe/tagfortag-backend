export const defaultCookieOptions = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24 * 30, // 1 month
};

const updateCookie = ({
  ctx,
  cookieName,
  cookieValue,
  cookieOptions = defaultCookieOptions,
}) => ctx.response.cookie(cookieName, cookieValue, cookieOptions);

// -----------------------------------------------------------------------------

export default updateCookie;
