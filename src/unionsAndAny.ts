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
 