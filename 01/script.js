const btn = document.querySelector('[href="https://ctco.lv/careers/vacancies/"]');

btn.addEventListener('click', () => {

    btn.style.visibility = 'hidden';
});

let count: number = 0
document.addEventListener('click', function(event) {
    count += 1;
        if( count >= 5 )
            window.alert("5 clicks already, STOP!")
        console.log(count)
});

