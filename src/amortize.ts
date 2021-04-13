import Loan from "./models/Loan";

function amortize(
	amount: number,
	downPayment: number,
	interest: number,
	years: number,
	paymentsPerYear: number,
	startDate: Date
) {
	console.log("Loan");
	const loan: Loan = new Loan(
		amount,
		downPayment,
		interest,
		years,
		paymentsPerYear,
		startDate
	);
	loan.calculate();
}

export { amortize };
