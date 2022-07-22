'stric mode';

const index = (() => {
    let sliderElement = document.querySelector('#slider');
    let sizePassword = document.querySelector('#valor');
    let containerPassword = document.querySelector('#container-password');
    let novaSenha = '';
    
    function generatePassword() {
        let password = document.querySelector('#password');
        let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@!*';
        let pass = '';

        for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
            pass += charset.charAt(Math.floor(Math.random() * n));
        }

        containerPassword.classList.remove("hide");
        password.innerHTML = pass;
        novaSenha = pass;
    }

    function copyPassword() {
        alert('Senha copiada com sucesso!');
        navigator.clipboard.writeText(novaSenha);
    }

    function events() {
        containerPassword.addEventListener('click', copyPassword);

        document.querySelector('#button').addEventListener('click', generatePassword);
    
        slider.addEventListener('input', () => sizePassword.innerHTML = sliderElement.value);
    }

    function init() {
        sizePassword.innerHTML = sliderElement.value;
        events();
    }

    return {
        init
    };
})();

index.init();