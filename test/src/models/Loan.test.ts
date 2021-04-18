import { expect } from 'chai';
import Loan from '../../../src/models/Loan';

describe('Loan', () => {
  it('.contructor', () => {
    const loan: Loan = new Loan(200_000, 50_000, 5, 30, 12);

    expect(loan.downPaymentRatio).to.eql(0.25);
  });
});
