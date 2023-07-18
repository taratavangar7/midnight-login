document.querySelector('#email').addEventListener('blur', validation)
document.querySelector('#password').addEventListener('blur', validation)

function validation(e) {
    if (e.target.value == '') {
        // alert('Please Enter Your Password');
        e.target.parentElement.style = 'border-bottom:2px solid red'
        document.querySelector('#submit').disabled = true

    } else {
        console.log('Verified');
        e.target.parentElement.style = 'border-bottom:1px dotted green'
        document.querySelector('#submit').disabled = false
    }
}


// function submitValidation(e) {
//     e.preventDefault();
//     if (email && password='') {
//         saveEmailToLS('#email')
//         savePassToLS(#password)
//         alert("Logged-In Successfully!")
//     } else {
        
//     }
    
// }

// Show Hidden Password
const showHiddenPass = (password, loginEye) => {
    const input = document.querySelector('#password'),
        iconEye = document.querySelector('#loginEye')


    iconEye.addEventListener('click', () => {
        // Change Password To Text
        if (input.type === 'password') {
            input.type = 'text'

            // Icon Change 
            iconEye.classList.add('fa-eye')
            iconEye.classList.remove('fa-eye-slash')

        }else{
            // Change Password 
            input.type ='password'

             // Icon Change 
             iconEye.classList.remove('fa-eye')
             iconEye.classList.add('fa-eye-slash')
        }
    })
}
showHiddenPass('password', 'loginEye')