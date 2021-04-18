# amortization.js

amortization.js is a javascript package that calculates payment information for a loan or a mortgage.

## Installation

```bash
npm i amortizationjs
```

## Usage

```javascript
import amortize from 'amortizationjs';
const totalAmount = 200_000;
const downPayment = 50_000;
const interestRate = 5;
const years = 30;
const paymentsPerYear = 12;
const loan = new Loan(
  totalAmount,
  downPayment,
  interestRate,
  years,
  paymentsPerYear
);

console.log(loan.total);
console.log(loan.payments);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
