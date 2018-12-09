import { config } from 'dotenv-flow';

// -----------------------------------------------------------------------------

// Configure the default environment.
config({ default_node_env: 'development' });

// TODO: Write backend.
const hello = str => `Hello ${str || 'World'}!`;

// -----------------------------------------------------------------------------

export default hello;
