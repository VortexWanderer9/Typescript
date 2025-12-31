let grade :number | string = '1st'
let status: | 'pending' | 'sent' | 'delivered' = 'sent'
const orders = ['12', '23', '45', '56', '67']
let currentOrder;
for(let order of orders){
    if(order == '45'){
      currentOrder = order
      break;
    }
}
console.log(currentOrder);
type serverRes ={
    type: string

}

function server(request: string | number){
    if(typeof request === 'string'){
        return `Your Response is ${request} type`
    } 
    return `your request is ${request} not valid`
}

function serveServer(req?: string){
    if(req){
        return `You got Response of ${req}`
    } 
    return `404 not found`
}

function message(text: 'sent' | 'delivered' | 'seen' | 'pending'){
     if(text === 'sent'){
        return `your message is sent`
     }
     if(text === 'delivered'){
        return "message has been delivered"
     }
     if(text === 'seen'){
        return 'Message have been seen'
     }
     return 'Network issue'
}
 class Payment {
    response() {
        `Payment have been Conformed`
    }
 } 

 class Order {
    response() {
        `Order have been Conformed`
    }
 } 

 function microService(request: Payment | Order){
    if(request instanceof Payment){
        return request.response()
    }
 }

 type User = {
    name: string,
    age: number,
    isLoin: boolean,
 }

 function newUser(traffic: any):traffic is User{
    return (
        typeof traffic === "object" &&
        traffic !== null &&
        typeof traffic.type === "string" &&
        typeof traffic.age === 'number'
    )
 }

 function createNewUser(user: User){
    if(newUser(user)){
        return `New User is Created ${user.name}`
    }
 }


 type fetch = {type: 'request'; status: '200'}
  type get = {type: 'user'; status: '200'}
   type post = {type: 'Admin'; status: '200'}

   type newAdmin = fetch | get | post

   function makeNewAdmin(user: newAdmin){
    switch(user.type){
        case "user":
            return 'user become Admin'
            break;
            case 'Admin':
                return "this user is already admin"
                break;
            case 'request':
                return "Get Request"
                break;
            default :
                return "Request Invalid"
                break;
    }
   }

   function getAdmin(user: post | get){
    if('Admin' in user){
        return "admin found" + user.Admin
    }
   }


type Player = {
    type: 'team',
    players: string
    team: string,
    numberOfTeam: number,
}
