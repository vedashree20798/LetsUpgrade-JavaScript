// Print string in reverse order

let nam = "LetsUpgrade-Javascript";
let newstr = "";  //declare new string to store reversed string
for(let i=nam.length-1; i>=0; i--){
    newstr = newstr + nam[i];
}
console.log("Original string: "+nam);
console.log("Reversed string: "+newstr);