export class invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        // this.client = c;
        // this.details = d;
        // this.amount = a;
        this.client = client;
        this.details = details;
        this.amount = amount;
        //readonly client: string,
        //private details: string,
        //public amount: number,
    }
    format() {
        return `${this.client} owes #${this.amount} for ${this.details}`;
    }
}
