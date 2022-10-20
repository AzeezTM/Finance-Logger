import { HasFormatter } from "../interfaces/HasFormatter.js";
export class invoice implements HasFormatter{
    // readonly client: string;
    // private details: string;
    // public amount: number;


    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){
        // this.client = c;
        // this.details = d;
        // this.amount = a;

        //readonly client: string,
        //private details: string,
        //public amount: number,
    }

    format(){
        return  `${this.client} owes #${this.amount} for ${this.details}`;
    }
 }
