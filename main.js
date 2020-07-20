//1
console.log("Ви можете використати функцію getArea(number) в конслолі та об'єкт myMath з різними методами :)")
function getArea(number){
    if(this._isEmpty(number)) return this._returnMessage('тут має бути числове значення радіуса')
    if(isNaN(number)) return myMath._returnMessage()
    return ("Площа кола дорівнює : " + (myMath.PI * myMath.pow(number, 2)).toFixed(2))
}
//2
getSqrt();
function getSqrt() {
    let num = prompt('Дізнатись корінь квадратний числа!', 'тут має бути число')
    if (!isFinite(num)) {
        alert('Повинно бути числове значення!')
    } else if (num < 0) {
        alert('Введіть додатнє число')
    } else if (num == '' || num == null) {
        alert('Будь ласка , введіть число!')
    } else {
        let result = Math.sqrt(+num);
        alert(`Корінь квадратний з ${num} це : ${result}`);
        return false
    }
    getSqrt()

}

//3
const myMath = {
    'PI': 3.141592653589793,
    'pow': function (number, degree) {
        if (myMath._isEmpty(arguments)) return myMath._returnMessage('Введіть число та степінь')
        if(!myMath._isInt(arguments)) return myMath._returnMessage()
        return number ** degree
    },
    'abs': function (number) {
        if (myMath._isEmpty(arguments)) return myMath._returnMessage('Введіть число')
        if(!myMath._isInt(arguments)) return myMath._returnMessage()
        return (number < 0) ? number * -1 : number
    },
    'max': function () {
        if (myMath._isEmpty(arguments)) return myMath._returnMessage('Введіть числа')
        if(!myMath._isInt(arguments)) return myMath._returnMessage()
        let max = arguments[0];
        for (let i = 0; i < arguments.length; i++) {
            if (max < arguments[i]) max = arguments[i]
        }
        return max
    },
    'min': function () {
        if (myMath._isEmpty(arguments)) return myMath._returnMessage('Введіть числа')
        if(!myMath._isInt(arguments)) return myMath._returnMessage()
        let min = arguments[0];
        for (let i = 0; i < arguments.length; i++) {
            if (min > arguments[i]) min = arguments[i]
        }
        return min
    }
}
Object.prototype._isEmpty = function (inner) {
    if (inner.length == 0) {
        return true
    }    
    return false
}
Object.prototype._returnMessage = function (message) {
    if (message == undefined) message = 'Введіть числове значення'
    return message
}
Object.prototype._isInt = function(inner) {
    let bool = true
    for(let i = 0 ; i< inner.length; i++){
        if(!Number.isInteger(inner[i])) bool = false
    }
    return bool
}
