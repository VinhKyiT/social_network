export const defineUrl = params => {
  let urlString = '';
  const baseParams = {
    text: '',
    level: '',
    language: '',
    closeCaption: '',
    price: '',
    status: 1,
    ratingFrom: 0,
    ratingTo: 5,
    videoDuringFrom: 0,
    videoDuringTo: 99999,
    pageNumber: 1,
    pageSize: 100,
    orderBy: '',
  };
  const newParams = { ...params };
  Object.keys(newParams).forEach(key => {
    if (newParams[key]) {
      if (urlString === '') {
        urlString += `${key}=${newParams[key]}`;
      } else {
        urlString += `&${key}=${newParams[key]}`;
      }
    }
  });
  return urlString;
};
