const circle = {
radius: 1, 
location:{
    x:1,
    y:1
},
draw:function(){
    console.log('draw');
}
};

circle.draw();

//Factory function
function createCircle(radius){
    return{
        radius,
        draw:function(){
            console.log('drawing from factory');
        }
    };
}

const circle1 = createCircle(2);
circle1.draw(); 

//constructor function
function Circle(radius){
    this.radius = radius;
    this.draw= function(){
        console.log('draw from constructor');
    }
}

const Circle1 = new Function('radius',
`this.radius = radius;
this.draw= function(){
    console.log('draw from constructor');
}`);


const circle2 = new Circle(2);
circle2.draw();

for(let key in circle2){
    if(typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}