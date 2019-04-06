# tagfortag-backend

TODO: Write tagfortag-backend description

TODO: Write tagfortag-backend README.md

## Configuration

TODO: Write "Configuration" intro.

### Database

TODO: Write "Database" setup.

### Environment

Create 2 files in the root of this project:

1. `.env.development.local`
2. `.env.production.local` (optional)

Copy/Paste the template and update with you own variables.

**Template:**

```sh
# Database
PRISMA_ENDPOINT="__YOUR_PRISMA_ENDPOINT__"
PRISMA_SECRET="__YOUR_PRISMA_SECRET__"

# Server
BACKEND_HOSTNAME="localhost"
BACKEND_PORT=4000
BACKEND_SECRET="__YOUR_BACKEND_SECRET__"

# Client
FRONTEND_ORIGIN="http://localhost:3000"
FRONTEND_ADMINISTRATOR_EMAIL="__YOUR_FRONTEND_ADMINISTRATOR_EMAIL__"
FRONTEND_ADMINISTRATOR_PASSWORD="__YOUR_FRONTEND_ADMINISTRATOR_PASSWORD__"
```

## Usage

TODO: Write "Usage" intro.

### Development Quick Start

Run this command to install Node modules and then start the server:

```sh
yarn && yarn start
```

When prompted, open up [http://localhost:4000](http://localhost:4000) to view the [GraphQL Playground](https://github.com/prisma/graphql-playground) IDE.

### Scripts

TODO: Write better script descriptions.

#### `yarn lint`

Runs ESLint against the entire project.

#### `yarn test` or `yarn test:ci`

Runs the Jest in an interactive or coverage mode.
By default, interactive mode runs tests related to files changed since the last commit.

#### `yarn start`

Starts the server.

#### `yarn seed` or `yarn seed:production`

Runs a script to add initial data to the development or production database.

#### `yarn deploy` or `yarn deploy:production`

Generates the Prisma Client and deploys the schema to the development or production database.

## License

MIT
