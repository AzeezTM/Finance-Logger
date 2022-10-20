// interface isPerson{
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }
// const me: isPerson = {
//     name: "Tunji",
//     age: 30,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log("i spent", amount);
//         return amount;
        
//     }
// };

// const greetPerson = (person: isPerson) => {
//     console.log("i spent my money with", person.name);
    
// }
// greetPerson(me);
// console.log(me);




import { invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";


// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new invoice("mubarak", "web work", 2000)
// docTwo = new Payment("kunle", "automobile work", 2500)


// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);




// const inOne = new invoice("tunji", "work with tunji's projrct", 2000 )
// const inTwo = new invoice("mubarak", "work with mubarak's projrct", 3000 )

// let invoices: invoice[] = [];
// invoices.push(inOne, inTwo);
// // inOne.client = "Azeez"
// // inTwo.client = "Kunle"
// // console.log(invoices);


// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
    
// })

//const log = document.querySelector(".item-list") as HTMLFormElement
const form = document.querySelector(".new-item-form") as HTMLFormElement;
//console.log(form.children);

//inputs

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;



const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul)

// log.addEventListener("delete", (e: Event) => {
//     e.preventDefault();
// })
form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber]

let doc: HasFormatter;
if (type.value === "invoice") {
    doc = new invoice(...values)
}else{
    doc = new Payment(...values)
}

   // console.log(

      //  doc
        // type.value,
        // tofrom.value,
        // details.value,
        // amount.valueAsNumber,
  //  );

  list.render(doc, type.value, "end")
    
});


//Generic


// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100)
//     return {...obj, uid};
// }
//     let docOne = addUID({name: "Kunle", age: 50});
//     console.log(docOne);

    //with interfaces
    // interface Resource <T> {
    //     uid: number;
    //     resourceName: string;
    //     data: T;
    // }
    // const docThree: Resource<object> = {
    //     uid: 1,
    //     resourceName: "person",
    //     data: { name: "Tunji"}
    // }

    // const docFour: Resource<string[]> = {
    //     uid: 2,
    //     resourceName: "shopping-list",
    //     data: ["bread", "milk", "sugar"]
    // }

    // console.log(docThree, docFour);


    //Enums
    // enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

    // interface Resource <T> {
    //     uid: number;
    //     resourceType: ResourceType;
    //     data: T;
    // }
    // const docFive: Resource<object> = {
    //     uid: 1,
    //     resourceType: ResourceType.BOOK,
    //     data: { title: "Tunji"}
    // }

    // const docSix: Resource<object> = {
    //     uid: 10,
    //     resourceType: ResourceType.AUTHOR,
    //     data: {name: "mubarak"}
    // }

    // console.log(docFive, docSix);




    // Tuples

    // let school: [string, number, boolean];
    // school = ["Kunle", 50, true];
    // school[0] = "Tunji"
    // console.log(school);
    


    

    
    
    


