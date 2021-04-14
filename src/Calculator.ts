import Loan from './models/Loan';
import PaymentTotal from './models/PaymentTotal';
import Payment from './models/Payment';

export default class Calculator {
  static calculate(loan: Loan): void {
    // loan.total = this.calculatePaymentTotal(loan);
    // loan.payments = this.calculatePayments(loan);
  }

  // static calculatePaymentTotal(loan: Loan): PaymentTotal {
  //   return new PaymentTotal();
  // }

  static calculatePayments(loan: Loan): Payment[] {
    const result: Payment[] = [];
    let last;

    for (let i = 0; i < loan.years * loan.paymentsPerYear; i++) {}

    return result;
  }

  static ratePerPeriod(interestRate: number, paymentsPerYear: number): number {
    return interestRate / paymentsPerYear / 100;
  }

  static interestPowerMultiplier(
    ratePerPeriod: number,
    paymentsPerYear: number,
    years: number
  ): number {
    return Math.pow(1 + ratePerPeriod, paymentsPerYear * years);
  }

  static interestPaymentPerPeriod(
    currentPrinciple: number,
    monthlyRate: number
  ): number {
    return this.toFixed(currentPrinciple * monthlyRate, 2);
  }

  static totalPaymentPerPeriod(loan: Loan): number {
    const loanAmount = loan.amount - loan.downPayment;
    const rate = this.ratePerPeriod(loan.interest, loan.paymentsPerYear);
    const multiplier = this.interestPowerMultiplier(
      rate,
      loan.paymentsPerYear,
      loan.years
    );

    return this.toFixed(
      (loanAmount * (rate * multiplier)) / (multiplier - 1),
      2
    );
  }

  static toFixed(amount: number, digits: number): number {
    return parseFloat(amount.toFixed(digits));
  }
}
