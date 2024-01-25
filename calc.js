let first_element = '';
let second_element = '';
let operation = '';
let flag = false;

const digit = [
    '0', '1', '2',
    '3', '4', '5',
    '6', '7', '8',
    '9'
];
const action = ['-', '+', 'X', '/'];

const resultOutput = document.querySelector('.calc-screen p');

function clearAll() {
    first_element = '';
    second_element = '';
    operation = '';
    flag = false;
    resultOutput.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) 
        return;
    if (event.target.classList.contains('ac'))
        return;

    resultOutput.textContent = '';
    
    const key = event.target.textContent;
    if (digit.includes(key)) {
        if (second_element === '' && operation == '') {
            first_element += key;
            resultOutput.textContent = first_element;
        }
        else if (first_element !== '' && second_element !== '' && flag) {
            second_element = key;
            flag = false;
            resultOutput.textContent = second_element;
        }
        else {
            second_element += key;
            resultOutput.textContent = second_element;
        }
        
    }
    if (action.includes(key)){
        operation = key;
        resultOutput.textContent = operation;
        return;
    }
    if (key === '=') {
        if (second_element === '')
            second_element = first_element;
        switch (operation) {
            case '+':
                first_element = (+first_element) + (+second_element);
                break;
            case '-':
                first_element = first_element - second_element;
                break;
            case 'X':
                first_element = first_element * second_element;
                break;
            case '/':
                if (b === '0') {
                    resultOutput.textContent = 'Ошибка!';
                    first_element = '';
                    second_element = '';
                    operation = '';
                    return;
                }
                first_element = first_element / second_element;
                break;    
        }
        flag = true;
        resultOutput.textContent = first_element;
    }
}
