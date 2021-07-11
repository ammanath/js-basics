
function StopWatch(){
    let duration = 0;
    let intervalId;
    this.start = function(){
        intervalId = setInterval(setDuration,1000);
        console.log('Started...');
    };
    this.stop=function(){
        clearInterval(intervalId);
        console.log('Stopped!');
    }
    this.reset=function(){
        duration = 1;
        clearInterval(intervalId);
        console.log('Reset : ' + duration);
    }

    this.printInterval = function(){
        console.log('Duration : ' +  duration);
    }

    let setDuration = function(){
        duration = duration + 1;
    }
}