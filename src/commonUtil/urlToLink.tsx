export const urlToLink = (url: string, str: string) => {
  let link = url.split(/(\/)/g);

  link = link.slice(Math.max(link.length - 4, 0));
  link[1] += str;
  const linkStr = link.join('');

  return linkStr;
};
