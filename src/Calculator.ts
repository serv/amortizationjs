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
    let currentPrinciple = loan.amount - loan.downPayment;
    const totalPaymentPerPeriod = this.totalPaymentPerPeriod(loan);

    for (let i = 0; i < loan.years * loan.paymentsPerYear; i++) {
      const interestPaymentPerPeriod = this.interestPaymentPerPeriod(
        loan,
        currentPrinciple
      );
      const principlePaid = totalPaymentPerPeriod - interestPaymentPerPeriod;
      currentPrinciple -= principlePaid;

      const payment = new Payment(
        i + 1,
        principlePaid,
        interestPaymentPerPeriod,
        currentPrinciple,
        -1,
        -1,
        -1
      );
      result.push(payment);
    }

    return result;
  }

  static interestPaymentPerPeriod(loan: Loan, principle: number) {
    const amount = principle * (loan.interest / loan.paymentsPerYear / 100);
    return this.toFixed(amount, 2);
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
