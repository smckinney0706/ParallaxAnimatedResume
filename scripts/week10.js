
var person = {
	gender: "Female",
	age: "12",
	tallness: "Grande",
	speak: function(){
		alert(this.gender);
	}

};

person.age = 25;

person.speak();