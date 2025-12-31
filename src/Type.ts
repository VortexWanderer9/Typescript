let name: string | number = "John";
name = 12
let isEditing :boolean = true


let response: any = "43"
let numericalNumber : number = (response as string).length
type Books = {
    name: string
}

let bookString = '{"name":"who moved my cheese"';
let bookObject  = JSON.parse(bookString) as Books
const inputHtml = document.getElementById("username") as HTMLInputElement
let value:any;
value = "TypeScript"
value  = [1,234,5,6]
if(typeof value === 'string'){
    value.toUpperCase()
}

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error);
    }
    console.log("error", error);
    
}


const data:unknown = "learn Typescript"
const stringData:string = data as string
type Role = "IGL" | "Supporter"

function getYourOwnRole (role: Role) :void{
    if(role == 'IGL'){
        console.log("Your work is to make team survive !");
       return;
    }
    if(role == 'Supporter'){
        console.log("You have to support Your team from back !");
        return;
    }
    return role;
}
