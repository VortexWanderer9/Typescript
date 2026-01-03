function getName(person: string): string {
    return `Hello, ${person}`
}

console.log(getName("john Doe"));

type na = {
    name: string;
    age?: number;
    experience?: number;
    isAvailable: boolean;
}


function makeTeam(names: na) {
  console.log('New team registered!');
}

type newUser = {
    first_name: string;
    last_name: string;
    location?: string;
    isLogin: boolean;
    email: string;
    number: number;
}
function createNewUser(request: newUser){}
