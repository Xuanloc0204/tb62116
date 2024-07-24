    let array = [2, 4, 1, 7, 10, 23, 54, 19, 89, 99];
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 10) {
            count++;
        }
    }

document.write('tong so nguyen lon hon 10 la: ' + count);