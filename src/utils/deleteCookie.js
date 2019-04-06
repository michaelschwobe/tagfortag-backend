const deleteCookie = ({ ctx, cookieName }) => {
  ctx.response.clearCookie(cookieName);
};

// -----------------------------------------------------------------------------

export default deleteCookie;
