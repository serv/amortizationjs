import toFixed from '../utils/to-fixed';

export default class Payment {
  id: number;
  totalPayment: number;
  principlePayment: number;
  interestPayment: number;
  principleRemaining: number;
  interestCumulative: number;

  constructor(
    id: number,
    totalPayment: number,
    principlePayment: number,
    interestPayment: number,
    principleRemaining: number,
    interestCumulative: number
  ) {
    this.id = id;
    this.totalPayment = totalPayment;
    this.principlePayment = principlePayment;
    this.interestPayment = interestPayment;
    this.principleRemaining = principleRemaining;
    this.interestCumulative = interestCumulative;
  }

  rebalance(): void {
    if (this.principleRemaining >= 0) {
      return;
    }

    this.totalPayment += this.principleRemaining;
    this.totalPayment = toFixed(this.totalPayment, 2);
    this.principlePayment += this.principleRemaining;
    this.principlePayment = toFixed(this.principlePayment, 2);

    this.principleRemaining = 0;
  }
}
