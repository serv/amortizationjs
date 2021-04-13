export default class PaymentTotal {
	interest: number;
	principle: number;
	total: number;
	endDate: Date;

	constructor(
		interest: number,
		principle: number,
		total: number,
		endDate: Date
	) {
		this.interest = interest;
		this.principle = principle;
		this.total = total;
		this.endDate = endDate;
	}
}
