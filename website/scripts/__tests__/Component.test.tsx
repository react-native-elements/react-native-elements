import 'react-native';
import { generateDocumentation } from '../docgen/generateDocumentation';
import path from 'path';
import fs from 'fs';

it('generates markdown correctly', async () => {
  const files = [path.join(__dirname, '..', 'Component.tsx')];
  await generateDocumentation(files);
  const filePresent = fs.existsSync(
    path.join(__dirname, '..', '..', 'docs', 'main', 'Component.md')
  );
  expect(filePresent).toBe(true);
});

it('validate generated markdown', async () => {
  const markdown = await fs.readFileSync(
    path.join(__dirname, '..', '..', 'docs', 'main', 'Component.md'),
    'utf8'
  );
  fs.unlinkSync(
    path.join(__dirname, '..', '..', 'docs', 'main', 'Component.md')
  );
  expect(markdown).toMatchSnapshot();
});
