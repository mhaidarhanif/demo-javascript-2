export function load(key) {
  const parsedData = JSON.parse(localStorage.getItem(key));
  return parsedData;
}
