class product {
    constructor(item: string, price: number){
        this.item = item
        this.price = price
    }

item: string;
price: number;
}

const newOrder = new product("Iphone 11", 2999)


class laptop {
    public os: string = "Linux"
    private distro: string = "Ubuntu"
    show(){
        return this.distro
    }
    protected ip_address = "19.168.1.1"
}
class ip{
        protected ip_address = "19.168.1.1"
}

const browser = new laptop()

class user extends ip {
    getIp(){
        return this.ip_address
    }
}
const myUser = new user()
myUser.getIp()

class bank {
    #balance = "$20000"
    getBalance(){
        return this.#balance
    }
}

class customer {

    private _user = "Unique"
    get people(){
      return this._user
    }
    set people(name: string){
        this._user = name
    }
}


class nepal {
    static hope = "Nope !"
    constructor (public peace: string){}
}

abstract class war{
    abstract avoid(): void
}
class greed extends war{
    avoid(){
        console.log("This world is not your private home or your father property !");
    }
}

class power {
    rule(){}
}

class protect {
    constructor(private family: power){}
    legacy(){
        this.family.rule()
    }
}