// Local modules
import toProperCase from './toProperCase';

// -----------------------------------------------------------------------------

export class EntityError extends Error {
  constructor(entityName) {
    super(`${toProperCase(entityName)} not found or you’re not the author`);
  }
}

const verifyEntity = async ({
  ctx,
  userId,
  entityId,
  entityName,
  noThrow = false,
}) => {
  const key = entityName.toLowerCase();

  const isEntity = await ctx.prisma.$exists[key]({
    id: entityId,
    author: { id: userId },
  });

  if (!noThrow && !isEntity) {
    throw new EntityError(entityName);
  }

  return isEntity;
};

// -----------------------------------------------------------------------------

export default verifyEntity;
