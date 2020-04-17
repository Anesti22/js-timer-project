const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {

    // callback methods
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset',
            perimeter * timeRemaining / duration - perimeter
        );
    },
    onComplete(){
        console.log('Timer is completed');
    }
});


// #1
// The value of 'this' inside of an arrow function
// const colors = {
//     printColor() {
//         console.log(this);

//         const printThis = () => {
//             console.log(this);
//         }

//         printThis();
//     }
// }

// colors.printColor();



// #2
// call bind apply
// const printThis = function () {
//     console.log(this)
// }

// printThis.call({color: 'red'});
// printThis.apply({color: 'red'});

// #3
// const colors =  {
//     printColor() {
//         console.log(this)
//     }
// }

// colors.printColor();