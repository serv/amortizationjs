import Calculator from '../../src/Calculator';
import Loan from '../../src/models/Loan';

describe('Calculator', () => {
  describe('.totalPaymentPerPeriod', () => {
    it('200000, 50000, 5.375, 30', () => {
      const loan = new Loan(200_000, 50_000, 5.375, 30, 12, new Date());

      const paymentPerPeriod = Calculator.totalPaymentPerPeriod(loan);

      console.log(paymentPerPeriod);
    });
  });

  describe('.ratePerPeriod', () => {
    it('5.375', () => {
      const ratePerPeriod = Calculator.ratePerPeriod(5.375, 12);
      console.log(ratePerPeriod);
    });
  });

  describe('.interestPowerMultiplier', () => {
    it('5.375', () => {
      const ratePerPeriod = Calculator.ratePerPeriod(5.375, 12);

      const multiplier = Calculator.interestPowerMultiplier(
        ratePerPeriod,
        12,
        30
      );

      console.log(multiplier);
    });
  });
});