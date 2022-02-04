export const cacheImages = () => [];

interface CacheFontType {
  [key: string]: any;
}
let cachedFonts: CacheFontType = {};

const cacheFont = (name: string, link: string) => {
  const styleBody = `@font-face { src: url(${link}); font-family: ${name}; }`;
  const style: HTMLStyleElement = document.createElement('style');
  style.type = 'text/css';
  if (style.style) {
    style.style.cssText = styleBody;
  } else {
    style.appendChild(document.createTextNode(styleBody));
  }
  document.head.appendChild(style);
  cachedFonts[name] = link;
};

export const cacheFonts = (fonts) => {
  let jobs = [];
  fonts.forEach((a) => {
    const fontName: string[] = Object.keys(a);
    if (!cachedFonts[fontName[0]]) {
      jobs.push(cacheFont(fontName, a[fontName[0]]));
    }
  });
  return jobs;
};
