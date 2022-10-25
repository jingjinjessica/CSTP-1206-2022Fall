let obj = {
    name: "Jin",
    getName: function(){
        console.log(this.name);
    }
}
obj.getName();

var gmae = "Call of Duty"
let obj2 = {
    game: "Apex",
    getGame: function()
    {
        console.log(this.game);
    }
}

let city = "Monteral";
var student = {
    name :"Jin",
    college : "Vcc",
    city: "Van",
    address:{
        city:"Vancouver",
        province: "BC",
        getCity:()=>{
            console.log(this.city);
        }
    }
}
student.address.getCity();


