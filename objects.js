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
    let newArr = [];
    students.forEach(student=>{
        let sum = student.scores.reduce((a,b)=>a+b);
        const getNam= sum/student.scores.length;
        if(getNam>=85){
            newNum.push(student.name)
        }
    });
    console.log(newNum);
    return newNum
}
getNames();
const Car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function(){
    console.log('Make: ${this.make}, Model: ${this.model}, Year: ${this.year}');
    },
    age:function(){
        return (2024 - Car.year);
    },
};
console.log(car.age());

