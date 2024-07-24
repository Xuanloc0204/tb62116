function dienTichHinhTron (r) {
    let acreage = Math.PI * r * r;
    return acreage;
}
function chuViHinhTron (r) {
    let perimeter = 2 * r * Math.PI;
    return perimeter;
}
let r =5;
document.write(dienTichHinhTron(r))
document.write(chuViHinhTron(r))