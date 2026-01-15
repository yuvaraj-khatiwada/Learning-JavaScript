// we are given array of marks of student. filter out the marks of students that scored 90+

let mark = [34, 53, 67, 90, 91, 98, 44,95];

let std = mark.filter((num) => {
    return num>90;
});
console.log(std);
