const program :string[] = ['c', 'c++', 'rust']
const average :number[] = [1,2,6,8,4,7]
const progress :Array<number> = [2.4, 6.7, 45]

type know = {
    what: string;
    time: number;
}

const learn :know[] = [
    {what: "c++", time: 1}
]

const players :readonly string[] = ["Loffy", "zoro"];
let books :[string, number, boolean?]
books = ["white night", 23, true]
books = ["white night", 23]


const booksList : [name: string, rating: number, isFinished: boolean] = ["WhiteNight", 23, true]

enum request{
    Pending,
    sent,
    delivered,
    seen,
    response
}
const usr23 = request.Pending

function message(type: request){
    console.log(`User is ${type} state`);
}

message(request.Pending)

const enum messages{
    Pending,
    sent,
    delivered,
    seen,
    response
}