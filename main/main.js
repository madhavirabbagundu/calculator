const sumOfValues = require('./sum');
const substractOfValues = require('./substract')
const multiplicationOfValues = require('./mul')
const divisionOfValues = require('./divide')

function calucate(data){
    if(data === "sum"){
        sumOfValues();
    }
    if(data==="substract"){
        substractOfValues();

    }
    if(data === "multiplication"){
        multiplicationOfValues();
    }
    if(data === 'division'){
        divisionOfValues()
    }

    
}
calucate('sum')
calucate('substract')
calucate('multiplication')
calucate('division')
