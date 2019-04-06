// Constants
import { BACKEND_SECRET } from '../constants';

// Utils
import getUserId from '../utils/getUserId';
import verifyEntity from '../utils/verifyEntity';

// -----------------------------------------------------------------------------

export const Bookmark = {
  author: ({ id }, args, ctx) => {
    return ctx.prisma.bookmark({ id }).author();
  },

  tags: ({ id }, args, ctx) => {
    return ctx.prisma.bookmark({ id }).tags();
  },
};

// -----------------------------------------------------------------------------

export const Query = {
  bookmark: (parent, { id }, ctx) => {
    return ctx.prisma.bookmark({ id });
  },

  bookmarks: (parent, args, ctx) => {
    return ctx.prisma.bookmarks();
  },

  bookmarksLatest: (parent, { first = 10 }, ctx) => {
    return ctx.prisma.bookmarks({ first, orderBy: 'createdAt_DESC' });
  },
};

// -----------------------------------------------------------------------------

export const Mutation = {
  createBookmark: async (parent, { url, name }, ctx) => {
    const userId = getUserId({ ctx, tokenSecret: BACKEND_SECRET });
    return ctx.prisma.createBookmark({
      url,
      name,
      author: { connect: { id: userId } },
    });
  },

  updateBookmark: async (parent, { id, ...data }, ctx) => {
    const userId = getUserId({ ctx, tokenSecret: BACKEND_SECRET });
    await verifyEntity({ ctx, userId, entityId: id, entityName: 'Bookmark' });
    return ctx.prisma.updateBookmark({ data, where: { id } });
  },

  deleteBookmark: async (parent, { id }, ctx) => {
    const userId = getUserId({ ctx, tokenSecret: BACKEND_SECRET });
    await verifyEntity({ ctx, userId, entityId: id, entityName: 'Bookmark' });
    return ctx.prisma.deleteBookmark({ id });
  },
};
