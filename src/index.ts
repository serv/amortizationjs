import Calculator from './Calculator';
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

function calculatePrinciple(
  monthlyPayment: number,
  interest: number,
  years: number,
  paymentsPerYear: number
): number {
  return Calculator.calculatePrinciple(
    monthlyPayment,
    interest,
    years,
    paymentsPerYear
  );
}

export { amortize, calculatePrinciple as calculatePrinciple };
