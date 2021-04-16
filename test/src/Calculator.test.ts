import { expect } from 'chai';
import Calculator from '../../src/Calculator';
import Loan from '../../src/models/Loan';

describe('Calculator', () => {
  describe('.calculatePayments', () => {
    it('200000, 50000, 5.375, 30', () => {
      const loan = new Loan(200_000, 50_000, 5.375, 30, 12);
      const payments = Calculator.calculatePayments(loan);

      expect(payments.length).to.eql(12 * 30);
      expect(payments[0].totalPayment).to.eql(839.96);

      const lastPayment = payments[payments.length - 1];
      expect(lastPayment.id).to.eql(12 * 30);
      expect(lastPayment.principleRemaining).to.eql(0);
    });
  });

  describe('.calculatePaymentTotal', () => {
    it('200000, 50000, 5.375, 30', () => {
      const loan = new Loan(200_000, 50_000, 5.375, 30, 12);
      loan.payments = Calculator.calculatePayments(loan);

      const paymentTotal = Calculator.calculatePaymentTotal(loan);
    });
  });

  describe('.totalPaymentPerPeriod', () => {
    it('200000, 50000, 5.375, 30', () => {
      const loan = new Loan(200_000, 50_000, 5.375, 30, 12);
      const paymentPerPeriod = Calculator.totalPaymentPerPeriod(loan);

      expect(paymentPerPeriod).to.eql(839.96);
    });
  });

  describe('.interestPaymentPerPeriod', () => {
    it('200000, 50000, 5.375, 30', () => {
      const loan = new Loan(200_000, 50_000, 5.375, 30, 12);
      const interestPerPeriod = Calculator.interestPaymentPerPeriod(
        loan,
        200_000 - 50_000
      );

      expect(interestPerPeriod).to.eql(671.88);
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
