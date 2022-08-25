export function helperShuffleArray(array) {
  const shuffleArray = [...array];

  for (var i = shuffleArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = shuffleArray[i];
    shuffleArray[i] = shuffleArray[j];
    shuffleArray[j] = shuffleArray;
  }
  return shuffleArray;
}
