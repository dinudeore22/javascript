let professor = {
name : "deore",
age: "84yrs",
clg: "SIEM",
graduated: "Banaras Univercity",
postgraduation: "pune univercity",

degrees : {
    engineering: "CSC",
    phd : "Adv.programing",
    diploma: "web Designing",

},
certificate : ["Hacker rank Participation","Certicate in IEF course", "certifiucate in Advance Programming"],

professorDetails:function() {
let details = `Engineering :${professor.degrees.engineering} phd:${professor.degrees.phd} diploma:${professor.engineering.diploma}`;

return details;

}







};
console.log(`===Add a functiion with return value===`);
let professional= professor.professorDetails()
console.log(`Teacher degrees & Total degrees are :${professional}`);

console.log(`=====Add new property in total experience as 14yrs========`);
professor.experience =`84 yrs`
console.table(professor);
console.log(`Total experience is : ${professor.experience}`);console.log(`**Modify existing Property**`);
console.log(`Before Modification`);
console.log(professor);
professor.age = 50;
console.log(`After modification`);
console.log(professor);
console.log(`**add array**`);
console.log(`Before Modification`);
console.log(professor.certificate);
let professionalCertificate =professor.certificate.push("ORACLE Certificate")
console.log(`After Modification`);
//console.log(professionalCertificate);
console.log(professor.certificate  );
console.log(`**log Last three element**`);

let lastElement = professor.certificate.slice(3)
console.log(lastElement);





console.log(professor);