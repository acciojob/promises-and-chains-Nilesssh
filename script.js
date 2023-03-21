//your JS code here. If required.
function formData() {
		var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
  console.log(name);
  console.log(age);
		if(age > 18){
			window.alert(`Welcome, ${name}. You can vote.`)
		}else{
			window.alert(`Oh sorry ${name}. You aren't old enough.`)
		}
}