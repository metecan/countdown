export const secondsToMinutes = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  return `${minutes < 10 ? `0${minutes}` : minutes}:${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}`;
};

export const minutesToSeconds = (time: string): number => {
  const [minutes, seconds] = time.split(':').map(Number);
  return minutes * 60 + seconds;
};
