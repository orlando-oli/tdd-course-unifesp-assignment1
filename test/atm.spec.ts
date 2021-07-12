import { findHigherAndLowerBills, solve } from '../src/atm';

const hasArray = (arr1: any[], arr2: any[]): boolean => {
  return arr1.some((element) =>
    element.every((value: any, index: number) => value === arr2[index])
  );
};

const sum = (arr: number[]) => {
  return arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
};

describe('atm', () => {
  const expectedResult1 = [2, 2, 0, 0];
  const expectedResult2 = [1, 3, 2, 1];

  const bills = [100, 50, 20, 10];
  const billsN = [10, 10, 10, 10];

  const initialVariation = bills.map(() => 0);
  const toWithdraw = 300;

  it('should return a proper solution set for a given withdrawal', () => {
    const result = solve(bills, billsN, initialVariation, toWithdraw, 0);

    expect(hasArray(result, expectedResult1)).toBeTruthy();
    expect(hasArray(result, expectedResult2)).toBeTruthy();
  });

  it('should find the set with higher and lower bills', () => {
    const result = solve(bills, billsN, initialVariation, toWithdraw, 0);

    const [higher, lower] = findHigherAndLowerBills(result);

    expect(sum(higher)).toBeLessThan(sum(lower));
  });
});
