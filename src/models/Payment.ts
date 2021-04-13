export default class Payment {
	id: number;
	principlePayment: number;
	interestPayment: number;
	principleRemaining: number;
	interestRemaining: number;
	principleCumulative: number;
	interestCumulative: number;

	constructor(
		id: number,
		principlePayment: number,
		interestPayment: number,
		principleRemaining: number,
		interestRemaining: number,
		principleCumulative: number,
		interestCumulative: number
	) {
		this.id = id;
		this.principlePayment = principlePayment;
		this.interestPayment = interestPayment;
		this.principleRemaining = principleRemaining;
		this.interestRemaining = interestRemaining;
		this.principleCumulative = principleCumulative;
		this.interestCumulative = interestCumulative;
	}
}
