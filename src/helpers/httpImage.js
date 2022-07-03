export const HttpImage = imgLink => {
  if (imgLink) {
    return imgLink.replace(/^http:\/\//i, 'https://');
  }
};
