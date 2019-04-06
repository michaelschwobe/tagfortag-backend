export class EmailError extends Error {
  constructor(email) {
    super(`No user found for email: ${email}`);
  }
}

const getUserByEmail = async ({ ctx, email }) => {
  const user = await ctx.prisma.user({ email });

  if (!user) {
    throw new EmailError(email);
  }

  return user;
};

// -----------------------------------------------------------------------------

export default getUserByEmail;
