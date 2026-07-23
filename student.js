let students = [];
function attach(student) {
    students.push(student);
}
function detach(student) {
    let newStudents = [];
    for (let i of students) {
        if (i != student) {
            newStudents.push(i);
        }
    }
    students = newStudents;
}
function notify(event) {
    for (let i in students) {
        console.log(students[i] + " : " + event);
    }
}
attach("gatherin");
attach("dharun");
notify("Holiday Tomorrow");
attach("kicha");
detach("dharun");
notify("Exam on Monday");
notify("College Fest on Friday");
const age = 20
if(age < 19){
    console.log("not elligible")
}
else if( age == 18){
    console.log("congrats")
}
else{
    console.log("eligible")
}
