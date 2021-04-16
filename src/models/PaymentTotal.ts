export default class PaymentTotal {
  interest: number;
  principle: number;
  total: number;

  constructor(interest: number, principle: number, total: number) {
    this.interest = interest;
    this.principle = principle;
    this.total = total;
  }
}
