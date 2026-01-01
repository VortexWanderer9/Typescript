let language: {
    name: string;
    experience: number;
    level: "Beginner" | "Advance";
    isCoding: boolean;
}

language = {
    name: "Rust",
    experience: 23,
    level: "Advance",
    isCoding: false,
}


type platers = {
    name: string[];
    age: number[];
    team: string;
}

const pmgc: platers  = {
    name: ["Loffy", "Nilsu", "whyNot", "Kusal"],
    age: [18, 19, 17, 18],
    team: "K9"
}

type pmgc = {country: string}

let nepal :pmgc = {country: "nepal"}
let pakistan  = {country: "nepal", isPlaying: false}
nepal = pakistan



type User = {
    username: string;
    password: string;
}

type Address = {
    postcode: number;
    zipCode: number;
    street: string;
}
type Item = {
    name: string;
    quantity: number;
}

type order = {
    id: string;
    customer: User;
    items: Item[];
    address: Address;
}


type slots = {
    team: string[];
    totalTeams: number;
    isPaid: boolean
}

const makeSlotAvailable = (team: Partial<slots>) => {
    console.log("Today", team);
}
type Update = {
    device: string;
    ram: number;
    isRequestingUpdates: boolean;
}
const updateDevice = (request : Required<Update>) =>{
    console.log("Your Device is Updating");
}
updateDevice({
    device: "iphone 11",
    ram: 23,
    isRequestingUpdates: true
});

type millionaire = {
    name: string;
    age: number;
    country: string;
    degree: string;
    isRetired: boolean
}

type iam = Pick<millionaire, "name" | "age">

type become = Omit<millionaire, "name">
