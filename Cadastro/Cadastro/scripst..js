const password = document.getElementById('Senhas');
const icon = document.getElementById('icon');

function showhide(){
    if(password.type === 'passowrd'){
        password.setAttribute('type','text');
        icon.classList.add('hide')
    }else{
        password.setAttribute('type','passowrd');
        icon.classList.remove('hide')
    }
}