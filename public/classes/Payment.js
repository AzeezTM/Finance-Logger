export class Payment {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(recipient, details, amount) {
        // this.client = c;
        // this.details = d;
        // this.amount = a;
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        //readonly client: string,
        //private details: string,
        //public amount: number,
    }
    format() {
        return `${this.recipient} is owed #${this.amount} for ${this.details}`;
    }
}
