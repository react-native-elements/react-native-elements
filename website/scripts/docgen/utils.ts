export const snippetToCode = (snippet = '') =>
  snippet
    .replace(/%live (.*)/g, '```jsx live\n$1\n```')
    .replace(/%jsx (.*)/g, '```jsx\n$1\n```');

export const tagToTab = (tabLabels = [], tabItems = '') => {
  if (!tabLabels.length || !tabItems) return '';
  const rows = tabItems?.split('\n').map((val) => val.trim());
  return (
    `<Tabs defaultValue="${tabLabels[0]}" values={[${tabLabels.map(
      (label) => `{label: '${label}',value: '${label}'}`
    )}]}>\n` +
    rows
      .map(
        (value, index) =>
          `<TabItem value="${tabLabels[index]}">\n${snippetToCode(
            '%live ' + value
          )}\n</TabItem>`
      )
      .join('\n') +
    '</Tabs>'
  );
};
