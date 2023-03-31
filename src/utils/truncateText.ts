export const truncateText = (text: string, charsNumber = 10) =>
  `${text.slice(0, charsNumber)}...`;
