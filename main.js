// Selector 
const warnginEl = document.querySelector('.warning')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const button = document.querySelector('#button')


button.addEventListener(
    'click',
    (e) => {
        e.preventDefault();
        if(username.value === ''){
            warnginEl.style.display = 'block'
            warnginEl.textContent = 'Input Your Username'
        }
        if(password.value === ''){
            warnginEl.style.display = 'block'
            warnginEl.textContent = 'Password Required'
        }
        if(username.value === '' && password.value === ''){
            warnginEl.style.display = 'block'
            warnginEl.textContent = 'Username and Password is required'
        }
    }
)