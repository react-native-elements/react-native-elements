import { generateDocumentation } from './generateDocumentation';
import { generateComponentDocs } from './generateComponentDocs';

const a = generateComponentDocs('../../../src/Avatar/Avatar.tsx');
const b = generateDocumentation('../../../src/Avatar/Avatar.tsx');

console.log(a['Avatar'].tags);
