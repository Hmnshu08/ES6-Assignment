console.log("hello!");
const character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
})

let char = 'mario';
let age = 30;

const circ = (dia: number) => {
    return dia * Math.PI;
}
console.log(circ(5))

function person(name) {
    if (name === "mario") {
        let greet = "Hello mario";
        console.log(greet);
    } else {
        let greet = "Hi there";
        console.log(greet);
    }
    //is not accessable
    // console.log(greet);
}
person("mario");



let num1;

const num2 = 8;

const obj1 = {
    name: "myself"
}

console.log(obj1.name);
//regular function
var getReagValue = function () {
    return 10;
}
function getVal(x) {
    return x = 10;
}

console.log(getReagValue);
console.log(getVal(10));

// const getArrayvalue=() =>{
//     return 10;
// }
//short cut
const getArrayvalue = () => 10;

var emp = {
    id: 1,
    greet: function () {
        console.log(this.id);
    }
}

emp.greet();

//default func parameters

let getValue = function (value = 10, bonus = 5) {
    console.log(value + bonus);
}
getValue();
getValue(20);
getValue(20, 30);
getValue(20, undefined);



const Order = {
    id: 1,
    title: "someDish",
    price: 250,
    printOrder: function () {
        console.log(this.id);
        console.log(this.title);
        console.log(this.price);
    },
    getPrice: function () {
        console.log(this.price);
    }
}

var copy = Object.assign({}, Order);

console.log(Order.id);
console.log(Order.title);
console.log(copy);





// const names = ("Tom","Evan","Jerry") => return 
// Q5a
let add = function (value1 = 10, more = 5) {
    console.log(value1 + more);
};

add();
add(20);
add(30, 25);

// Q5b
let userFriends = function (username, ...friends) {

    // console.log(friends);
    console.log(username);
    for (let i in friends) {
        console.log(friends[i]);
    }
}
let username = "hmnshu"

userFriends(username, "Abhi");
userFriends(username, "Mark", "Daniel", "Sam");





// Q5c
let printCapitalletters = ["hmnshu", "Abhi", "Mark", "Daniel", "Sam"];

let printCapitalNames = function (...printCapitalletters) {
    for (let i in printCapitalletters) {
        console.log(printCapitalletters[i].toUpperCase());
    }
}

printCapitalNames(...printCapitalletters)


// Q6
let modal = "A57";
let diskNo = 54;
let Name = "Mark";

let Sysnet = {
    modal,
    diskNo,
    Name
};

function addVal(modal, diskNo, Name) {
    return {
        modal,
        diskNo,
        Name
    }
}

let s = addVal("A56", 47, "Sameul");
console.log(s.modal);
console.log(s.diskNo);
console.log(s.Name);


// Q7a

let employee = ["Mark2", "Simon", "Brad", "Brook"];
let [, , emp3,] = employee;

console.log(emp3);


// Q7b
let organisation = {
    namme: "Luffy",
    Address: "Somethinf",
    pincode: 569854

}
let { namme: n, Address: A, pincode: pin } = organisation;

console.log(pin);


// Q8
class Account {
    //constructor method during object creation
    constructor(id, name, bal) {
        this.id = id;
        this.name = name;
        this.bal = bal;
        console.log(this.id + " " + this.name + " " + this.bal);

    }
    //static method
    static staticMethod() {
        console.log("tesing");
    }

    //prototype method
    totalBal() {
        console.log("Hello " + this.name + " has Balance left:" + this.bal + "$");
    }

    getInterst() {
        console.log(`Interst with balance of ${this.name} ` + this.bal * 3.3 + "$");
    }

}

class SavingAcc extends Account {
    constructor(id, name, bal) {

        super(id, name, bal);
        console.log(name + "Saving Account ");
    }
    getInterst() {
        console.log(`Interst with balance of ${this.name} ` + this.bal * 3.3 + "$");
    }
}

class CurrentAcc extends Account {
    constructor(id, name, bal) {

        super(id, name, bal);
        console.log(name + " Current Account ");
    }
    getInterst() {
        console.log(`Interst with balance of ${this.name} ` + this.bal * 3.3 + "$");
    }
}






let a = new Account(426, "Zoro", 2500);
Account.staticMethod();
a.totalBal();

let curr = new CurrentAcc(449, "Brook", 2550);
// console.log(curr.getInterst(this.bal));
curr.totalBal();
curr.getInterst();
a.getInterst();

// Assignment 2
// Q1


class fib {
    private previousNo = 0;
    private currentNo = 1;

    next() {
        let nextTerm;
        for (let i = 1; i < 10; i++) {
            console.log(this.previousNo);
            nextTerm = this.previousNo + this.currentNo;
            this.previousNo = this.currentNo;
            this.currentNo = nextTerm;
        }
    }
}

let f = new fib();
f.next();

// Q2
function getNextArmstrongNo() {
    for (let i = 1; i <= 1000; i++) {

        // converting number to string 
        let numberOfDigits = i.toString().length;

        let sum = 0;

        // create a temporary variable
        let temp = i;

        /* loop through a number to find if 
        a number is an Armstrong number */
        while (temp > 0) {

            let remainder = temp % 10;
            sum += remainder ** numberOfDigits;
            // removing last digit from the number
            temp = parseInt(temp / 10); // convert float into integer
        }

        if (sum == i) {
            console.log(i);
        }
    }
}

getNextArmstrongNo();


// Q3
function* iterableObj() {
    yield 'This';
    yield 'is';
    yield 'iterable.'
}
for (const val of iterableObj()) {
    console.log(val);
}



// Assignment 3
// Q1

// let promise = new Promise(function(resolve, reject) {
//     // Some imaginary 2000 ms timeout simulating a db call
//     setTimeout(()=> {
//         if (true) {
//             resolve({msg: 'It works', data: 'some data'});
//         } else {
//             // If promise can not be fulfilled due to some errors like network failure
//             reject(new Error({msg: 'It does not work'}));
//         }
//     }, 2000);
// });

// Q3
// interface Employee {
//     empCode: number;
//     empName: string;
//     getSalary: (number) => number; 
//     getManagerName(number): string; 
// }

// let empObj1 :Employee = {  
//     empCode:1,
//     empName:"Steve",
    
// }

// console.log(empObj1);
// console.log(empObj1.getSalary);
