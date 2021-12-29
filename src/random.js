export const randomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const createRandomLists = () => {
  let lists = Array.from([{}, {}, {}], (x) => x);

  lists = lists.map(() => {
    const result = {};
    const amountLists = randomNumber(4, 10);

    result.items = Array.from({ length: amountLists },
      () => ({
        color: 'black',
        num: randomNumber(0, 50),
        checked: !randomNumber(0, 1),
      }));

    return result;
  });

  return lists;
};
