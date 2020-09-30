
/* 1. Constants : Declare a Constant & Confirm its value connote be changed */

/*
        const num2=10;
        console.log(num2);
        num2=20;  --Not able assign value to const and giving an error 
        console.log(num2);

*/
/* Declare a varible inside if condition & make sure that is not accessible outside the if condition*/

/*
        var name="Nitin";

        console.log(name); /* return Nitin 

        if (name!=null)
        {
            let username=name;
            console.log(username); /* return Nitin 
        }
        else
        {
            let user_name="No Name";
            console.log(user_name); /* return no Name 
        }

        console.log(name); /* return Nitin 
        console.log(username); /* Local variblae not able to access outside the scop 
        console.log(user_name); /* Local variblae not able to access outside the scop 

*/


/* Enhancement Object copy : 

var obj={
    id:Number,
    title:String,
    price:Number
}
obj.id=1;
obj.title="title1";
obj.price=100;
printorder(obj)
getprise(1)
objectAssign();
function printorder(obj1)
{
    console.log(obj1.id);
    console.log(obj1.title);
    console.log(obj1.price);
}
function getprise(num)
{
    if (obj.id==1)
    {
        console.log(obj.price);
    }
}
function objectAssign()
{
    var newObj=obj;
    console.log(newObj);
}


*/


/* Array Function

var nameArray=['Tom','Ivan','Jerry'];

console.log(nameArray);

var New_NameArrar=[];

New_NameArrar.push([   +nameArray[0], +nameArray[0].length]);
New_NameArrar.push([   +nameArray[1], +nameArray[1].length]);
New_NameArrar.push([   +nameArray[2], +nameArray[2].length]);
console.log(New_NameArrar);

*/

/* Extended parameter Handling 

let getValue= function (value=10)
{
    console.log(value);
}

getValue();  //Return default value
getValue(100); // Return 100



let displayFriends = function(name,...friend){
    
    console.log(name);
    
    for(let i in friend){
        console.log(friend[i])
    }

}

var namefrnd="Nitin Gadge friends";
var arr_name=['ABC','XYZ','PQR']
displayFriends(namefrnd,...arr_name);

// Spreed function

let printCapitalname = function(...arr_name){
   
    for(let i in arr_name){
        console.log(arr_name[i].toUpperCase())
    }
}
var msg="Uppercase letter";
var name_arr=['nitin','Gadge','Aba','lmN','TJS']
printCapitalname(...name_arr);

*/    

/* Template Literals 

let LaptopModel="LNO277848";
let Desk=345;
let Name="Nitin Gadge"

console.log(`Team my name is ${Name} from Capgemini SEZ Airoli location. I am facing Laptop issue. My Desk number ${Desk} and my laptop serial numver is: ${LaptopModel}.`);

*/

/* De-structuring assignment 

let number_1=[1,2,3,4];

let [,,num3,]=number_1

console.log(num3);

let organization={
    name : "Capgemini",
    address : "Airoli Pincode 400078"
}
let {name:f,address:a}=organization;

console.log(f);
console.log(a.match(/400078/gi));
*/

/* Class & Modules */

class Account{
    constructor(id,name,balance)
    {
        console.log("Account constructor");
        this.id=id;
        this.name=name;
        this.balance=balance;
    }
}

class SavingAccount extends Account{
    constructor(interest,Cash_Cedit)
    {
        console.log("Saving account constructor");
        super(id,this.name,this.balance);
        this.interest=interest;
        this.Cash_Cedit=Cash_Cedit;
            
    }
}

class CurrentAccount extends Account{
    constructor(cinterest,cCash_Cedit)
    {
        console.log("current account constructor");
        super(id,this.name,this.balance);
        this.cinterest=cinterest;
        this.cCash_Cedit=cCash_Cedit;
    }
}

let a=new Account(3,"Nitin",5000);
console.log(a);
