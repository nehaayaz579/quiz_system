import inquirer  from "inquirer";
let score = 0;
let quiz1 = await inquirer.prompt(
    {
        message:"How do you declare a variable in Typescript?",
        name:"Q1",
        type:"list",
        choices:["var","let","const","All of the above"]
        
         }
    
)
if (quiz1.Q1 === "All of the above"){
    console.log(`Your answer is correct and your score is ${++score}`)
}else{
    console.log("Your answer is incorrect!!")
}


let quiz2 = await inquirer.prompt(
    {
        message:"Which symbol is used for type assertions in typescript?",
        name:"Q2",
        type:"list",
        choices:[":","as","=>","@"]
    }
    
)
if (quiz2.Q2 === "as"){
    console.log(`Your answer is correct and your score is ${++score}`)
}else{
    console.log("Your answer is incorrect!!")
}

let quiz3 = await inquirer.prompt(
    {
        message:"How do you define a boolean type in typescript?",
        name:"Q3",
        type:"list",
        choices:["boolean","Boolean","bool","Bool"]
    }
    
)
if (quiz3.Q3 === "boolean"){
    console.log(`Your answer is correct and your score is ${++score}`)
}else{
    console.log("Your answer is incorrect!!")
}

let quiz4 = await inquirer.prompt(
    {
        message:"which keyword is used to inherit a class in typescript?",
        name:"Q4",
        type:"list",
        choices:["implements","extends","inherits","derives"]
    }
    
)
if (quiz4.Q4 === "extends"){
    console.log(`Your answer is correct and your score is ${++score}`)
}else{
    console.log("Your answer is incorrect!!")
}

let quiz5 = await inquirer.prompt(
    {
        message:"How do you specify an optional property in an interface?",
        name:"Q5",
        type:"list",
        choices:["property?","property!","property","property: optional"]
    }
    
)
if (quiz5.Q5 === "property?"){
    console.log(`Your answer is correct and your score is ${++score}`)
}else{
    console.log("Your answer is incorrect!!")
}

let quiz6 = await inquirer.prompt(
    {
        message:"Which of the following is a feature of typescript?",
        name:"Q6",
        type:"list",
        choices:["strong typing","OOP","Compile time errors","All of the above"]
    }
    
)
if (quiz6.Q6 === "All of the above"){
    console.log(`Your answer is correct and your score is ${++score}`)
}else{
    console.log("Your answer is incorrect!!")
}

let quiz7 = await inquirer.prompt(
    {
        message:"Which file extension is used for typescript files?",
        name:"Q7",
        type:"list",
        choices:[".js",".ts",".tsx",".jsx"]
    }
    
)
if (quiz7.Q7 === ".ts"){
    console.log(`Your answer is correct and your score is ${++score}`)
}else{
    console.log("Your answer is incorrect!!")
}

let quiz8 = await inquirer.prompt(
    {
        message:"What is the output type if the type of operator in typescript?",
        name:"Q8",
        type:"list",
        choices:["string","number","boolean","object"]
    }
    
)
if (quiz8.Q8 === "string"){
    console.log(`Your answer is correct and your score is ${++score}`)
}else{
    console.log("Your answer is incorrect!!")
}

let quiz9 = await inquirer.prompt(
    {
        message:"How do you define a tuple type in typescript?",
        name:"Q9",
        type:"list",
        choices:["[string,number]","{string,number}","(string,number)","<string,number>"]
    }
    
)
if (quiz9.Q9 === "[string,number]"){
    console.log(`Your answer is correct and your score is ${++score}`)
}else{
    console.log("Your answer is incorrect!!")
}

let quiz10 = await inquirer.prompt(
    {
        message:"Which typescript configuration file is used to compile a typescript project?",
        name:"Q10",
        type:"list",
        choices:["config.ts","tsconfig.ts","typescript.json","tsconfig.json"]
    }
    
)
if (quiz10.Q10 === "tsconfig.json"){
    console.log(`Your answer is correct and your score is ${++score}`)
}else{
    console.log("Your answer is incorrect!!")
}
