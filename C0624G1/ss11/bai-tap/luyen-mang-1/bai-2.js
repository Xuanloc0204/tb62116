function timMax(arr){
    let max = array[0];
    for (let i= 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;

}

let array = [1,2,5,4,10,-2,9,8,25,18];
document.write('phan tu co gia tri lon nhat: '+ timMax(array));

