function listOut(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 5 === 0) {
            document.write(a[i] + "<br>");
        }
    }
}
let a=[1,2,5,10,43,15,37,87];
listOut(a)