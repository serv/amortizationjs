import PaymentTotal from './PaymentTotal';
import Payment from './Payment';
import Calculator from '../Calculator';
import toFixed from '../utils/to-fixed';

export default class Loan {
  amount: number;
  downPayment: number;
  downPaymentRatio: number;
  interest: number;
  years: number;
  paymentsPerYear: number;
  total: PaymentTotal;
  payments: Payment[];
  monthlyPayment: number;

  constructor(
    amount: number,
    downPayment: number,
    interest: number,
    years: number,
    paymentsPerYear: number
  ) {
    this.amount = amount;
    this.downPayment = downPayment;
    this.downPaymentRatio = this.calculateDownPaymentRatio(amount, downPayment);
    this.interest = interest;
    this.years = years;
    this.paymentsPerYear = paymentsPerYear;
    this.total = new PaymentTotal(0, 0, 0);
    this.payments = [];
    this.monthlyPayment = 0;
  }

  calculateDownPaymentRatio(amount: number, downPayment: number): number {
    if (amount === 0 || downPayment === 0) {
      return 0;
    }

    return toFixed(downPayment / amount, 4);
  }

  calculate() {
    Calculator.calculate(this);
  }
}
