var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
console.log("hello!");
var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
var char = 'mario';
var age = 30;
var circ = function (dia) {
    return dia * Math.PI;
};
console.log(circ(5));
function person(name) {
    if (name === "mario") {
        var greet = "Hello mario";
        console.log(greet);
    }
    else {
        var greet = "Hi there";
        console.log(greet);
    }
    //is not accessable
    // console.log(greet);
}
person("mario");
var num1;
var num2 = 8;
var obj1 = {
    name: "myself"
};
console.log(obj1.name);
//regular function
var getReagValue = function () {
    return 10;
};
function getVal(x) {
    return x = 10;
}
console.log(getReagValue);
console.log(getVal(10));
// const getArrayvalue=() =>{
//     return 10;
// }
//short cut
var getArrayvalue = function () { return 10; };
var emp = {
    id: 1,
    greet: function () {
        console.log(this.id);
    }
};
emp.greet();
//default func parameters
var getValue = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = 5; }
    console.log(value + bonus);
};
getValue();
getValue(20);
getValue(20, 30);
getValue(20, undefined);
var Order = {
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
};
var copy = Object.assign({}, Order);
console.log(Order.id);
console.log(Order.title);
console.log(copy);
// const names = ("Tom","Evan","Jerry") => return 
// Q5a
var add = function (value1, more) {
    if (value1 === void 0) { value1 = 10; }
    if (more === void 0) { more = 5; }
    console.log(value1 + more);
};
add();
add(20);
add(30, 25);
// Q5b
var userFriends = function (username) {
    var friends = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        friends[_i - 1] = arguments[_i];
    }
    // console.log(friends);
    console.log(username);
    for (var i in friends) {
        console.log(friends[i]);
    }
};
var username = "hmnshu";
userFriends(username, "Abhi");
userFriends(username, "Mark", "Daniel", "Sam");
// Q5c
var printCapitalletters = ["hmnshu", "Abhi", "Mark", "Daniel", "Sam"];
var printCapitalNames = function () {
    var printCapitalletters = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        printCapitalletters[_i] = arguments[_i];
    }
    for (var i in printCapitalletters) {
        console.log(printCapitalletters[i].toUpperCase());
    }
};
printCapitalNames.apply(void 0, printCapitalletters);
// Q6
var modal = "A57";
var diskNo = 54;
var Name = "Mark";
var Sysnet = {
    modal: modal,
    diskNo: diskNo,
    Name: Name
};
function addVal(modal, diskNo, Name) {
    return {
        modal: modal,
        diskNo: diskNo,
        Name: Name
    };
}
var s = addVal("A56", 47, "Sameul");
console.log(s.modal);
console.log(s.diskNo);
console.log(s.Name);
// Q7a
var employee = ["Mark2", "Simon", "Brad", "Brook"];
var emp3 = employee[2];
console.log(emp3);
// Q7b
var organisation = {
    namme: "Luffy",
    Address: "Somethinf",
    pincode: 569854
};
var n = organisation.namme, A = organisation.Address, pin = organisation.pincode;
console.log(pin);
// Q8
var Account = /** @class */ (function () {
    //constructor method during object creation
    function Account(id, name, bal) {
        this.id = id;
        this.name = name;
        this.bal = bal;
        console.log(this.id + " " + this.name + " " + this.bal);
    }
    //static method
    Account.staticMethod = function () {
        console.log("tesing");
    };
    //prototype method
    Account.prototype.totalBal = function () {
        console.log("Hello " + this.name + " has Balance left:" + this.bal + "$");
    };
    Account.prototype.getInterst = function () {
        console.log("Interst with balance of " + this.name + " " + this.bal * 3.3 + "$");
    };
    return Account;
}());
var SavingAcc = /** @class */ (function (_super) {
    __extends(SavingAcc, _super);
    function SavingAcc(id, name, bal) {
        var _this = _super.call(this, id, name, bal) || this;
        console.log(name + "Saving Account ");
        return _this;
    }
    SavingAcc.prototype.getInterst = function () {
        console.log("Interst with balance of " + this.name + " " + this.bal * 3.3 + "$");
    };
    return SavingAcc;
}(Account));
var CurrentAcc = /** @class */ (function (_super) {
    __extends(CurrentAcc, _super);
    function CurrentAcc(id, name, bal) {
        var _this = _super.call(this, id, name, bal) || this;
        console.log(name + " Current Account ");
        return _this;
    }
    CurrentAcc.prototype.getInterst = function () {
        console.log("Interst with balance of " + this.name + " " + this.bal * 3.3 + "$");
    };
    return CurrentAcc;
}(Account));
var a = new Account(426, "Zoro", 2500);
Account.staticMethod();
a.totalBal();
var curr = new CurrentAcc(449, "Brook", 2550);
// console.log(curr.getInterst(this.bal));
curr.totalBal();
curr.getInterst();
a.getInterst();
// Assignment 2
// Q1
var fib = /** @class */ (function () {
    function fib() {
        this.previousNo = 0;
        this.currentNo = 1;
    }
    fib.prototype.next = function () {
        var nextTerm;
        for (var i = 1; i < 10; i++) {
            console.log(this.previousNo);
            nextTerm = this.previousNo + this.currentNo;
            this.previousNo = this.currentNo;
            this.currentNo = nextTerm;
        }
    };
    return fib;
}());
var f = new fib();
f.next();
// Q2
function getNextArmstrongNo() {
    for (var i = 1; i <= 1000; i++) {
        // converting number to string 
        var numberOfDigits = i.toString().length;
        var sum = 0;
        // create a temporary variable
        var temp = i;
        /* loop through a number to find if
        a number is an Armstrong number */
        while (temp > 0) {
            var remainder = temp % 10;
            sum += Math.pow(remainder, numberOfDigits);
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
function iterableObj() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 'This'];
            case 1:
                _a.sent();
                return [4 /*yield*/, 'is'];
            case 2:
                _a.sent();
                return [4 /*yield*/, 'iterable.'];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
for (var _i = 0, _a = iterableObj(); _i < _a.length; _i++) {
    var val = _a[_i];
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
