import Loan from './models/Loan';
import PaymentTotal from './models/PaymentTotal';
import Payment from './models/Payment';
import toFixed from './utils/to-fixed';

export default class Calculator {
  static calculate(loan: Loan): void {
    loan.payments = this.calculatePayments(loan);
    loan.total = this.calculatePaymentTotal(loan);
  }

  static calculatePaymentTotal(loan: Loan): PaymentTotal {
    const principle = loan.amount - loan.downPayment;

    return new PaymentTotal(-1, principle, -1, new Date());
  }

  static calculatePayments(loan: Loan): Payment[] {
    const result: Payment[] = [];
    let currentPrinciple = loan.amount - loan.downPayment;
    const totalPaymentPerPeriod = this.totalPaymentPerPeriod(loan);
    let interestCumulative: number = 0;

    for (let i = 0; i < loan.years * loan.paymentsPerYear; i++) {
      const interestPaymentPerPeriod = this.interestPaymentPerPeriod(
        loan,
        currentPrinciple
      );
      interestCumulative += interestPaymentPerPeriod;
      interestCumulative = toFixed(interestCumulative, 2);
      const principlePaid = totalPaymentPerPeriod - interestPaymentPerPeriod;
      currentPrinciple -= principlePaid;
      currentPrinciple = toFixed(currentPrinciple, 2);

      const payment = new Payment(
        i + 1,
        totalPaymentPerPeriod,
        principlePaid,
        interestPaymentPerPeriod,
        currentPrinciple,
        interestCumulative
      );

      result.push(payment);
    }

    const lastPayment = result[result.length - 1];
    lastPayment.rebalance();

    return result;
  }

  static interestPaymentPerPeriod(loan: Loan, principle: number) {
    const amount = principle * (loan.interest / loan.paymentsPerYear / 100);
    return toFixed(amount, 2);
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

    return toFixed((loanAmount * (rate * multiplier)) / (multiplier - 1), 2);
  }
}
