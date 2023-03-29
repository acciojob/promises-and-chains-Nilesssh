//your JS code here. If required.
function formData() {
	setTimeout(()=>{nice()},4000);
}

function nice() {
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
		if(age >= 18){
			window.alert(`Welcome, ${name}. You can vote.`)
		}else{
			window.alert(`Oh sorry ${name}. You aren't old enough.`)
		}
}