export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function formatUptime(hours) {
  const days = Math.floor(hours / 24);
  const h = hours % 24;
  return `${days}d ${h}h`;
}

export function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
