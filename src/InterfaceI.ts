interface beauty{
flower: string;
price: number;
}

const buy:beauty = {
    flower: "Rose",
    price: 12
}

interface taxCharge{
    (price: number): number;
}

const applyTax: taxCharge = (p) => Math.floor(p * 0.4)

interface camera {
    open(): void;
    flip(): void;
    photo(): void;
    close(): void;
}

const iphone: camera = {
    open(){
        console.log("Camera Opened !");
    },
    flip() {
        console.log("Camera has been flipped");
    },
    photo(){
        console.log("You can take photo !");
    },
    close(){
        console.log("we are now in home");
    }
}

interface update {
    [version: string]: number
}

const device : update = {
    iphone11: 12.6,
    iphone12: 23.6
}

// interface can be merge with same name;;;;