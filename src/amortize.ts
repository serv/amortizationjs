import Loan from './models/Loan';

function amortize(
  amount: number,
  downPayment: number,
  interest: number,
  years: number,
  paymentsPerYear: number
) {
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

export { amortize };
