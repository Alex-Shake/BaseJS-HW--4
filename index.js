function func1(num) {
    let square = num**2;
    console.log(square);
}

function func2(num1, num2) {
    let summ = num1+num2;
    console.log(summ);
}

function func3(num1, num2, num3) {
    let calc = (num1-num2)/num3;
    console.log(calc);
}

function func4(day) {
    switch (day) {
        case 1:
            console.log('Понедельник');
            break;
        case 2:
            console.log('Вторник');
            break;
        case 3:
            console.log('Среда');
            break;
        case 4:
            console.log('Четверг');
            break;
        case 5:
            console.log('Пятница');
            break;
        case 6:
            console.log('Суббота');
            break;
        case 7:
            console.log('Воскресенье');
            break;
    }
}

function func5(num1, num2) {
    if (+num1 == +num2) {
        console.log(true);
    } else {console.log(false);}
}

func5(1, 1)