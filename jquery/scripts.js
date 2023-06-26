// let  kaan = {
//     name:"kaan",
//     yearOfBirth:2008,
//     job:"student",
// }

// val = kaan;
// console.log(val);
// console.log(typeof val)

// function Student(name,yearOfBirth,job){
//     this.name= name;
//     this.yearOfBirth=yearOfBirth;
//     this.job=job;

//     console.log(this)

//     this.calculateAge = function(){
//         return 2021- this.yearOfBirth;
//     }
// }

// let Student = function(name,yearOfBirth,job){

// }

// let kaan = new Student("kaan",2008,"student");

// console.log(kaan.calculateAge())

///___________________________________________
//______________PROTOTYPE_____________________
//____________________________________________

// let Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };
// let aylin = new Person("aylin", 1980, "teacher");

// Person.prototype.calculateAge = function () {
//   return 2023 - this.yearOfBirth;
// };

// Person.prototype.getName =function(){
//     return this.name;
// }
// console.log(aylin.calculateAge())
// console.log(aylin.getName());


///___________________________________________
//______________Object.create_________________
//____________________________________________

let personProto = {
    calculateAge : function(){
        return 2021-this.yearOfBirth;
    }
}
let kaan = Object.create(personProto);

kaan.name="kaan0";
kaan.job="studeent";
kaan.yearOfBirth=2013;

console.log(kaan);
console.log(kaan.calculateAge())

let aylin = Object.create(personProto,{
    name : {value:"aylin"},
    yearOfBirth : {value:1980},
    job : {value:"teacher"}
})

console.log(aylin)