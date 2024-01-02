const fs = require("fs");
const data  = "This is Harsh Chandwani";
fs.writeFile("a.txt", data, (err)=> {
    console.log(err);
})

let sum = 0;
for(let i = 0; i < 1000; i++){
    sum += i;
}
console.log(sum);