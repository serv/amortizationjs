import Loan from './models/Loan';

export default function amortize(
  amount: number,
  downPayment: number,
  interest: number,
  years: number,
  paymentsPerYear: number
): Loan {
  const loan: Loan = new Loan(
    amount,
    downPayment,
    interest,
    years,
    paymentsPerYear
  );
  loan.calculate();
  return loan;
}
