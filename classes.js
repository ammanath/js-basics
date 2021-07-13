'use strict';


class Car{
    constructor(doors, engine, color){
        this.doors= doors;
        this.engine= engine;
        this.color = color;
    }

    getCarStats(){
        return `This car has ${this.doors} doors, 
            a ${this.engine} engine and is of ${this.color} color`;
    }

    static totalDoors(car1, car2){
        const doors1 = car1.doors;
        const doors2 = car2.doors;
        return doors1 +  doors2;
    }
}

class SUV extends Car{
    constructor(doors, engine, color, brand){
        super(doors, engine, color);
        this.brand= brand;
        this.wheels = 4;
        this.ac=true;
    }

    getMyBrand(){
        return console.log(`This SUV is a ${this.brand}`);
    }

}

const cx5 = new Car(4, 'V6', 'Orange');
const suv = new SUV(4, 'V8', 'Blue','Mahindra');
console.log(suv);
console.log(suv.getMyBrand());
console.log(suv.getCarStats());

