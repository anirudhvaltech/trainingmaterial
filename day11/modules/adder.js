function adder(num1, num2){
    return num1+num2 + multiplier(num1,num2);
};

function multiplier(num1, num2){
    return num1*num2;
}

//named export
// export{adder as add};//alias name

//default export-there can be many exports but only one default export and one named export
// export default adder;//you can import it with any name you want
export {multiplier,adder};//named export-import using the same name and curly braces 