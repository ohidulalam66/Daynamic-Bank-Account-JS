// Handle Login Button
document.getElementById('submit-btn').addEventListener('click', function(){

    // get User Email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    // get User Password
    const passwordFiled = document.getElementById('user-password');
    const userPassword = passwordFiled.value;
    
    // check user validation
    if(userEmail == 'islami@bank.com' && userPassword == 'bank'){
       window.location.href = 'banking.html';
    } 
    else{
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
    }
})