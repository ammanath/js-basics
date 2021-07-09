
function StopWatch(){
    this.duration = 0;
    this.start = function(){
        console.log('Started...');
    };
    this.stop=function(){
        console.log('Stopped!');
    }
    this.reset=function(){
        this.duration = 0;
        console.log('Reset');
    }
}