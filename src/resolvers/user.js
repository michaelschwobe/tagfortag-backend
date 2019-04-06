// Constants
import { BACKEND_SECRET } from '../constants';

// Utils
import createToken from '../utils/createToken';
import deleteCookie from '../utils/deleteCookie';
import getUserByEmail from '../utils/getUserByEmail';
import getUserId from '../utils/getUserId';
import sanitizeUser from '../utils/sanitizeUser';
import updateCookie from '../utils/updateCookie';
import verifyPassword from '../utils/verifyPassword';

// -----------------------------------------------------------------------------

export const User = {
  tags: ({ id }, args, ctx) => {
    return ctx.prisma.user({ id }).tags();
  },

  bookmarks: ({ id }, args, ctx) => {
    return ctx.prisma.user({ id }).bookmarks();
  },
};

// -----------------------------------------------------------------------------

export const Query = {
  me: (parent, args, ctx) => {
    const userId = getUserId({ ctx, tokenSecret: BACKEND_SECRET });
    return ctx.prisma.user({ id: userId });
  },
};

// -----------------------------------------------------------------------------

export const Mutation = {
  signupUser: async (parent, args, ctx) => {
    const userArgs = await sanitizeUser(args);
    const user = await ctx.prisma.createUser(userArgs);
    const token = createToken({ userId: user.id, tokenSecret: BACKEND_SECRET });
    updateCookie({ ctx, cookieName: 'token', cookieValue: token });
    return { token, user };
  },

  signinUser: async (parent, { email, password }, ctx) => {
    const user = await getUserByEmail({ ctx, email });
    await verifyPassword({ str: password, hash: user.password });
    const token = createToken({ userId: user.id, tokenSecret: BACKEND_SECRET });
    updateCookie({ ctx, cookieName: 'token', cookieValue: token });
    return { token, user };
  },

  signoutUser: (parent, args, ctx) => {
    deleteCookie({ ctx, cookieName: 'token' });
    return { message: 'Successfully signed out.' };
  },
};
