$(document).ready(function() {
    // clear button function
    function clear() {
        $('#screen').children().remove()
    }
    // equals button function
    function equals(equalsInput) {
        // .prevUntil() to specify text before an opperator
        // .nextUntil() for after an opperator
        // .closest()
        //iterate through input object

        let getOperators = equalsInput.match(/\W/gi)
        let getMultOp = equalsInput.match(/x/gi)
        let getDivOp = equalsInput.match(/÷/gi)
        console.log("mult operator", getMultOp);
        console.log("get operators", getOperators);
        console.log("type of getOperators", typeof getOperators);
        let mult;
        let divide;
        if (getMultOp !== null && getOperators === null && getMultOp.length < 2) {
            getOperators = []
            getOperators.push(getMultOp[0])
            mult = getMultOp[0].replace('x', '*')
            // do multiplication
        } else if ((getMultOp !== null && getOperators !== null) || (getMultOp !== null && getMultOp.length > 1) || getOperators.length > 1) {
            // getOperators.push(getMultOp[0])
            clear()
            let operatorError = $('<span>').attr('id', "operatorError").text('OPERATOR ERROR')
            operatorError.appendTo('#screen')
        } else if (getDivOp !== null) {
            divide = getDivOp[0].replace('÷', '/')
            //do division
        }
        // what to do if no operator ERROR
        else if (getOperators[0]=== '+'){
          let operands = equalsInput.split('+')
          // console.log("operands", operands);
          let firstOperand = parseInt(operands[0])
          let secondOperand = parseInt(operands[1])
          let sum = $('<span>').text(firstOperand + secondOperand)
          clear()
          sum.appendTo('#screen')
        }
        else if (getOperators[0] === '-'){

        }

        console.log(getOperators);
        // console.log("getMultOp", getMultOp);
        // console.log("new div operator", divide);
        //     console.log("new mult operator", mult);
    }


    $('.buttons').on('click', function() {
        // clone button text and display on screen
        if (event.target.className !== 'buttons' && event.target.id !== 'clear' && event.target.id !== 'equals') {
            console.log(event.target);

            $(event.target).clone().appendTo('#screen')
        } else if (event.target.id === 'clear') {
            clear()

        } else if (event.target.id === 'equals') {
            let equalsInput = $('#screen').text()


            console.log(typeof equalsInput);
            console.log(equalsInput);
            equals(equalsInput)
        }






    })








})
