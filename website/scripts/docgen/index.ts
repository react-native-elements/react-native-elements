import { generateDocumentation } from './generateDocumentation';

import { runFileScript } from './getComponentFiles';

const filePaths = runFileScript();

generateDocumentation(filePaths);
