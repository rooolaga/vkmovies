export const usePagination = (page: number, count: number) => {
  const res = [];

  switch (true) {
    case count <= 10:
      for (let i = 1; i <= 10; i++) {
        res.push(i)
      }
      break;
    case count > 10 && page <= 4:
      for (let i = 1; i <= 5; i++) {
        res.push(i)
      }
      res.push(0);
      res.push(count);
      break;
    case count > 10 && page > 4 && page >= count - 3:
      res.push(1);
      res.push(0);
      for (let i = 1; i <= 5; i++) {
        res.push(count - 5 + i);
      }
      break;
    default:
      res.push(1);
      res.push(0);
      for (let i = 1; i <= 5; i++) {
        res.push(page -3 + i);
      }
      res.push(0);
      res.push(count);
  }

  return res;
}
