const people = [
    firstPerson = {
        name:'Alice',
        age: 17
    },
    secondPerson = {
        name: 'Eunice',
        age: 22
    },
    thirdPerson = {
        name: 'Charlie',
        age: 14
    },
    forthPerson = {
        name: 'Max',
        age: 19
    },
    
]
function namesString(person){
    return person.filter(person=>
         person.age>=18).map(person=>person.name)
}
console.log(namesString(people))

// const overEighteen = 18

// const overEight = (objArray) => {
//     const overEight = [];
//     const aboveEighteen = [];
//     const length = objArray.length;
//     for (let i = 0; i < objArray.length; i++) {
//       if ((objArray[i].age <= maxAge)) {
//         overEight.push(i)} else {
//         aboveEighteen.push(i);
//         }
//       }
//       return overEight;
//   };
//   console.log({name:people.name});


// Write a function that takes an array of objects, where each object represents a product with a name, price, and category property. The function should return an object that groups the products by their categories, with the category names as keys and the arrays of products as values. const products = [
//     { name: 'Laptop', price: 1200, category: 'Electronics' },
//     { name: 'Shirt', price: 25, category: 'Clothing' },
//     { name: 'Headphones', price: 80, category: 'Electronics' },
//     { name: 'Shoes', price: 60, category: 'Clothing' },
//   ];
const product = [
    firstProduct = {
        name:'Laptop',
        price: 1200,
        category: 'Electronics'
    },
    secondProduct = {
        name:'Shirt',
        price: 25,
        category: 'Clothing'
    },
    thirdProduct = {
        name: 'Headphones',
        price: 80,
        category: 'Electronics' 
    }, 
    forthProduct = {
        name:'Shoes',
        price: 60,
        category: 'Clothing'
    }
]
function groupProducts(productss){
    let newProducts = []
    return productss.reduce((groupProducts, product)=>{
        const{category,...rest}= product;
        if (!newProducts[category]){
            newProducts[category]=[];
        }
        newProducts[category].push(rest);
        return newProducts
    },{});
}
console.log(groupProducts(product))
// Given an array of objects, where each object represents a student with a name and an array of scores, write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85. const students = [
//     { name: 'John', scores: [90, 80, 85] },
//     { name: 'Jane', scores: [95, 92, 88] },
//     { name: 'Jim', scores: [70, 80, 75] },
//     { name: 'Jill', scores: [85, 90, 84] },
//   ];
const student = [
     firstStudent = {
        name: 'John',
        scores: [90 ,80 ,85],
     },
     secondStudent = {
        name: 'Jane',
        scores: [95, 92,88]
     },
     thirdStudent = {
        name: 'Jim',
        scores: [70, 80, 75]
     },
     forthStudent = {
        name: 'Jill',
        scores: [85, 90, 84]
     }
]
function getNames(students){
    return students.filter(student=>{
        const averageScore=
        students.scores.reduce((total,score)=>total+
        score,0)/ student.scores.length;
        return averageScore>=85;
    }).map(student=>student.name);
}
// Given an object representing a car, with properties for the make, model, year, and a method to display the car's information, write a function that takes the car object and adds a new method to the object called age. The age method should return the current age of the car based on the current year and the car's year property. const car = {
//     make: 'Ford',
//     model: 'Ranger',
//     year: 2023,
//     displayInfo: function() {
//       console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
//     },
//   };
function Car(make,model,year){
    this.make= make;
    this.model= model;
    this.year= year;
}
Car.prototype.age=function(){
    const currentYear= newDate().getFullYear();
    return currentYear-this.year;
};