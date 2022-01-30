function* range(start, end) {
  // eslint-disable-next-line no-plusplus
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
const rangeV2 = (start, end, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);

export { range, rangeV2 };
