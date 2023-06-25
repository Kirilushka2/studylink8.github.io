class Phone {
    constructor(name, company, operatingSystem, screen, price, battery, color){
        this.name = name;
        this.company = company;
        this.operatingSystem = operatingSystem;
        this.screen = screen;
        this.price = price;
        this.battery = battery;
        this.color = color;
    }

    info(){
        return `${this.company} ${this.name} ${this.color}`
    }

    credit_month_4(){
        let credit_price = this.price * (4/100);
        let months = 4;
        let total_price = credit_price * months + this.price;
        return `Загальна ціна 4 важкий місяців недоїдання - ${total_price}`

    }

    credit_month_6(){
    let credit_price = this.price * (5/100);
    let months = 6;
    let total_price = credit_price * months + this.price;
    return `Загальна ціна 6 важкий місяців недоїдання - ${total_price}`

    }

    credit_month_12(){
        let credit_price = this.price * (6/100);
        let months = 12;
        let total_price = credit_price * months + this.price;
        return `Загальна ціна 12 важкий місяців недоїдання - ${total_price}`

    }

}
let phone1 = new Phone("Iphone14", 'Apple', 'IOS', 5, 50000, 2500, 'white')

console.log(phone1.credit_month_12())

let phones = [phone1];

function addPhone(){
    let new_phone = new Phone(
        document.getElementById('Name').value,
        document.getElementById('Company').value,
        document.getElementById('Operation').value,
        document.getElementById('Screen').value,
        document.getElementById('Price').value,
        document.getElementById('Battery').value,
        document.getElementById('Color').value,
    )
    phones.push(new_phone)
}