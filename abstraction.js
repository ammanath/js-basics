//Abstraction - Hide the details and show only the essentials
function Circle(radius){
    this.radius = radius;
    let defaultLocation = {x:0, y:0};
    let computeOptimumLocation = function(){
        //...
    }
    this.draw = function(){
        computeOptimumLocation();
        console.log('Draw');
    };

    Object.defineProperty(this, 'defaultLocation',{
        get:function(){
            return defaultLocation;
        },
        set:function(value){
            if(!value.x || !value.y)
                throw new Error('Invalid Location');
            defaultLocation = value;
        }
    });
}

const circle22 = new Circle(10);
circle22.defaultLocation={x:4,y:3};
console.log(circle22.defaultLocation);

