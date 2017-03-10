$(document).ready(function() {
    // clear button function
    function clear() {
        $('#screen').children().remove()
    }
    //operator function
    function operation(equalsInput) {
        let answer = $('<span>').text(`${eval(equalsInput)}`)
        clear()
        answer.appendTo('#screen')
    }

    // equals button function
    function equals(equalsInput) {
        let getOperators = equalsInput.match(/\W/gi)
        let getMultOp = equalsInput.match(/x/gi)
        let getDivOp = equalsInput.match(/÷/gi)
        let mult;
        let divide;
        if (getMultOp !== null && getOperators === null && getMultOp.length < 2) {
            getOperators = []
            getOperators.push(getMultOp[0])
            mult = equalsInput.replace('x', '*')
            // do multiplication
            operation(mult)
        } else if ((getMultOp !== null && getOperators !== null) || (getMultOp !== null && getMultOp.length > 1) || getOperators.length > 1) {
            clear()
            let operatorError = $('<span>').attr('id', "operatorError").text('OPERATOR ERROR')
            operatorError.appendTo('#screen')
        } else if (getDivOp !== null) {
            divide = equalsInput.replace('÷', '/')
            //do division
            operation(divide)

        }
        // what to do if no operator ERROR
        else if (getOperators[0] === '+') {
            operation(equalsInput)

        } else if (getOperators[0] === '-') {
            operation(equalsInput)
        }
    }


    $('.buttons').on('click', function() {
        // clone button text and display on screen
        if (event.target.className !== 'buttons' && event.target.id !== 'clear' && event.target.id !== 'equals') {
            $(event.target).clone().appendTo('#screen')
        } else if (event.target.id === 'clear') {
            clear()
        } else if (event.target.id === 'equals') {
            let equalsInput = $('#screen').text()
            equals(equalsInput)
        }

    })

})
