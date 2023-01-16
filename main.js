// Selector 
const warnginEl = document.querySelector('.warning')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const button = document.querySelector('#button')
const cursolEl = document.querySelector('.cursor')
const container = document.querySelector('.container')


button.addEventListener(
    'click',
    (e) => {
        e.preventDefault();
        if(username.value === ''){
            warnginEl.style.display = 'block'
            warnginEl.textContent = 'Input Your Username'
        }else if(password.value === ''){
            warnginEl.style.display = 'block'
            warnginEl.textContent = 'Password Required'
        }else{
            warnginEl.textContent = ''
        }
    }
)

window.addEventListener('mousemove',cursor)

function cursor(e){
    cursolEl.style.top = e.pageY + 'px'
    cursolEl.style.left = e.pageX + 'px'
}

