import PaymentTotal from "./PaymentTotal";
import Payment from "./Payment";

export default class Loan {
	amount: number;
	downPayment: number;
	interest: number;
	years: number;
	paymentsPerYear: number;
	startDate: Date;
	total: PaymentTotal;
	payments: Payment[];

	constructor(
		amount: number,
		downPayment: number,
		interest: number,
		years: number,
		paymentsPerYear: number,
		startDate: Date
	) {
		this.amount = amount;
		this.downPayment = downPayment;
		this.interest = interest;
		this.years = years;
		this.paymentsPerYear = paymentsPerYear;
		this.startDate = startDate;
		this.total = new PaymentTotal(0, 0, 0, new Date());
		this.payments = [];
	}

	calculate() {}
}
