const solve = (
  bills: number[],
  billsN: number[],
  variation: number[],
  price: number,
  pos: number
): number[][] => {
  const result = [];

  let bill = bills.reduce((previousValue, currentValue, currentIndex) => {
    return previousValue + currentValue * variation[currentIndex];
  }, 0);

  if (bill < price) {
    for (let i = pos; i < bills.length; i++) {
      if (billsN[i] > variation[i]) {
        const newVariation = [...variation];
        newVariation[i]++;

        const newResult = solve(bills, billsN, newVariation, price, i);
        if (newResult != null) {
          result.push(...newResult);
        }
      }
    }
  } else if (bill === price) {
    result.push(variation);
  }

  return result;
};

const findHigherAndLowerBills = (result: number[][]): number[][] => {
  return [result[0], result.slice(-1)[0]];
};

export { solve, findHigherAndLowerBills };
