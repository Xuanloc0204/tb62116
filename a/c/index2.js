// khai bao lop
class Rectangle{
    width; height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    tinhChuVi(){
        let chuvi=(this.height+ this.width)*2;
        return chuvi;
    }
    tinhDientich(){
        let dientich=this.width*this.height;
        return dientich;
    }
}
// khoi tao doi tuong
let dtKA = new Rectangle(5, 12);
let dtHau = new Rectangle(5, 13);

// tinh chu vi dt hau
console.log(dtHau.tinhChuVi());
console.log(dtHau.tinhDientich());