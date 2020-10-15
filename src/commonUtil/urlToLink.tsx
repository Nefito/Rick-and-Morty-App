export const urlToLink = (url: string, str: string, elNum: number) => {
  let link = url.split(/(\/)/g);

  link = link.slice(Math.max(link.length - elNum, 0));
  link[1] += str;
  const linkStr = link.join('');

  return linkStr;
};
