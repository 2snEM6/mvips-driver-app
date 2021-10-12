const capitalizeFirstLetter = (text = ''): string => text[0].toUpperCase() + text.slice(1);

const capitalizeWords = (text: string): string => {
  const words = text.trim().split(' ');
  const capWords = words.map(word => capitalizeFirstLetter(word));

  return capWords.join(' ');
}

export default {
  capitalizeFirstLetter,
  capitalizeWords,
};
