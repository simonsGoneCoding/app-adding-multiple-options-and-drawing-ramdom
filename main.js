const choices = [];
const btnAdd = document.querySelector('.add');
const btnReset = document.querySelector('.clean');
const btnShow = document.querySelector('.showAdvice');
const btnShowAll = document.querySelector('.showOptions');
const text = document.querySelector('h1');

//-----adding----- 
btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    if (input.value) {
        for (one of choices) {
            if (one === input.value) {
                alert('already added')
                return
            }
        }
        choices.push(input.value);
        alert(`${input.value} added`);
        input.value = '';
    } else {
        alert('can not add a empty string')
    }
})

//----reset-----