function btn() {
    var log, pas, log1, pas1;
    log = document.getElementById('login').value;
    pas = document.getElementById('password').value;
    log1 = 'Sabina';
    pas1 = 'qwerty';

    if (log == log1 && pas == pas1) {
        window.location.href = 'welcome.html';
    }
    else if (log == log1 && pas == '') {
        document.getElementById('out').innerHTML = 'Введите пароль';
    }
    else if (log == log1 && pas !== pas1) {
        document.getElementById('out').innerHTML = 'Вы ввели неправильный пароль';
    }
    else if (log == '' && pas == '') 
        document.getElementById('out').innerHTML = 'Введите логин и пароль';
    else if (pas == '') 
        document.getElementById('out').innerHTML = 'Введите пароль';
    else if (log == '') 
        document.getElementById('out').innerHTML = 'Введите логин';
    else window.location.href = 'error.html';
}