export function platformMappingHandler(value) {
  const formattedString = value
    .substring(value?.lastIndexOf('{') + 1, value?.lastIndexOf('}') - 1)
    .replace(/ /g, '')
    .replace(/\r\n/g, '');
  const platforms = formattedString.split(',');

  const platformTypes = { ios: '', android: '', web: '' };

  platforms.map((item) => {
    if (item !== '') {
      const [platform, type] = item.split(':');
      if (platform !== 'default') {
        platformTypes[platform] = type;
      } else {
        Object.keys(platformTypes).map((key) => {
          if (!platformTypes[key]) platformTypes[key] = type;
        });
      }
    }
  });
  const defaultValue = Object.keys(platformTypes)
    .map((key) => {
      return `${platformTypes[key]}(${key})`;
    })
    .join(',');

  return defaultValue;
}
