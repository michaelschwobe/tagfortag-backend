// Constants
import { BACKEND_SECRET } from '../constants';

// Utils
import getUserId from '../utils/getUserId';
import verifyEntity from '../utils/verifyEntity';

// -----------------------------------------------------------------------------

export const Tag = {
  author: ({ id }, args, ctx) => {
    return ctx.prisma.tag({ id }).author();
  },

  bookmarks: ({ id }, args, ctx) => {
    return ctx.prisma.tag({ id }).bookmarks();
  },
};

// -----------------------------------------------------------------------------

export const Query = {
  tag: (parent, { id }, ctx) => {
    return ctx.prisma.tag({ id });
  },

  tags: (parent, args, ctx) => {
    return ctx.prisma.tags();
  },

  tagsLatest: (parent, { first = 10 }, ctx) => {
    return ctx.prisma.tags({ first, orderBy: 'createdAt_DESC' });
  },
};

// -----------------------------------------------------------------------------

export const Mutation = {
  createTag: async (parent, { name }, ctx) => {
    const userId = getUserId({ ctx, tokenSecret: BACKEND_SECRET });
    return ctx.prisma.createTag({ name, author: { connect: { id: userId } } });
  },

  updateTag: async (parent, { id, ...data }, ctx) => {
    const userId = getUserId({ ctx, tokenSecret: BACKEND_SECRET });
    await verifyEntity({ ctx, userId, entityId: id, entityName: 'Tag' });
    return ctx.prisma.updateTag({ data, where: { id } });
  },

  deleteTag: async (parent, { id }, ctx) => {
    const userId = getUserId({ ctx, tokenSecret: BACKEND_SECRET });
    await verifyEntity({ ctx, userId, entityId: id, entityName: 'Tag' });
    return ctx.prisma.deleteTag({ id });
  },
};
