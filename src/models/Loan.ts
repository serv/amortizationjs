import PaymentTotal from './PaymentTotal';
import Payment from './Payment';
import Calculator from '../Calculator';

export default class Loan {
  amount: number;
  downPayment: number;
  interest: number;
  years: number;
  paymentsPerYear: number;
  total: PaymentTotal;
  payments: Payment[];

  constructor(
    amount: number,
    downPayment: number,
    interest: number,
    years: number,
    paymentsPerYear: number
  ) {
    this.amount = amount;
    this.downPayment = downPayment;
    this.interest = interest;
    this.years = years;
    this.paymentsPerYear = paymentsPerYear;
    this.total = new PaymentTotal(0, 0, 0);
    this.payments = [];
  }

  calculate() {
    Calculator.calculate(this);
  }
}
