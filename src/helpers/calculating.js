export const calculateRating = reviews => {
  let sum = 0;
  for (let i = 0; i < reviews?.length; i++) {
    sum += reviews[i]?.rating;
  }
  return sum / reviews?.length;
};

export const calculateAmountOfLectures = course => {
  let sum = 0;
  for (let i = 0; i < course?.sections?.length; i++) {
    sum += course?.sections[i]?.lectures?.length;
  }
  return sum;
};
