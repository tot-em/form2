let name = document.querySelector('.name')
let email = document.querySelector('.email')
let password = document.querySelector('.password')
let confirmPassword = document.querySelector('.confirm-password')
let submitBtn = document.querySelector('.submit-btn')

// Feedback loops

submitBtn.addEventListener('click', ()=> {
    if(name.value.length < 1 ||
        email.value.length < 1 || 
        password.value.length < 1 || 
        confirmPassword.value.length < 1){
        alert('Fill all inputs!!')
    }else{
        if(password.value === confirmPassword.value){
            // window.open('home.html', '_blank') //Opens in new tab
            window.location.href = 'home.html' //Opens in same tab
        }else{
            alert('Password does not match your confirm password')
        }
    }
})
