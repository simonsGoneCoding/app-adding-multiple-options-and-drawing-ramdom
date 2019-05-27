const choice = ['dad', 'lal'];
const addBtn = document.querySelector('.add');
const resetBtn = document.querySelector('.clean');
const adviceBtn = document.querySelector('.showAdvice');
const optionsBtn = document.querySelector('.showOptions');
const advice = document.querySelector('h1');

// dodawanie 
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value.length) {
        for (any of choice) {
            if (any === input.value) {
                window.alert(`juz takie mamy`);
                return;
            }
        }
        choice.push(input.value);
        alert(`dodales ${input.value}`)
        input.value = '';
        console.log(choice);
    } else {
        window.alert(`uzupelnij pole`)
    }
})

//reset 
resetBtn.addEventListener('click', (e) => {
    e.preventDefault()
    choice.length = 0;
    // choice = [];
    advice.textContent = '';
})

//porada 
adviceBtn.addEventListener('click', () => {
    const choiceIndex = Math.floor(Math.random() * choice.length);
    advice.textContent = choice[choiceIndex];
})

//mozliwosci 
optionsBtn.addEventListener('click', () => {
    alert(choice.join('---'));
    // let options = 'mozliwe opcje to: --- ';
    // for (i = 0; i < choice.length; i++) {
    //     options += choice[i] + ' --- ';
    // }
    // window.alert(options);
})