import path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

// -----------------------------------------------------------------------------

const typeDefsArray = fileLoader(path.join(__dirname, '.'));

const typeDefs = mergeTypes(typeDefsArray, { all: true });

// -----------------------------------------------------------------------------

export default typeDefs;
