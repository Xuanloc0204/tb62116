class temperature {
    nhietdo;

    constructor(nhietdo) {
        this.nhietdo = nhietdo;
    }
    doF(){
    let F= this.nhietdo*9/5+32;
        return F;
    }
    doK(){
        let K =this.nhietdo + 273.15;
        return K;
    }
}
let doC = new temperature(25);
console.log(doC.doF());
console.log(doC.doK());
