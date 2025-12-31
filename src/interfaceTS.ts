type Player = {
    name: string;
    age: number;
    role: String;
    experience: number;
    isAvailable: boolean;
}

function getNewPlayer(newPlayer :Player){
    console.log(newPlayer);
    
}
function uploadYourProfile(newPlayer :Player){
    console.log(newPlayer);
}

type os = {
    language: string;
    year: number;
    isFree: boolean;
}

class bestOs implements  os{
    language = 'Rust'
    year = 10
    isFree = true;
}


interface learn{
learners: "Beginners" | "Advance"
}

class c implements learn{
learners: "Beginners" | "Advance" = "Beginners"
}

type request = {ok: true} | {ok: false}


type pubg = {ram: number}
type freefire = {rom: number}

const play : pubg & freefire = {
    ram: 4,
    rom: 128
}

type screams = {
    team: string;
    join?: boolean
}
const server :screams = {team: "K9"}
const vip :screams = {team: "Z9", join: true}
