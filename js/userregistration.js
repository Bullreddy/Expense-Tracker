function register(){
	if(validateRegistration()){
		var db = opendatabase();
		db.transaction(saveUser,errorCB,successCallBack);
	}
}

function validateRegistration(){
	if(!userregistrationform.username.value){
		showMessageDialog(" please enter username");
		return false;
	}
	if(!userregistrationform.password.value){
		showMessageDialog(" please enter password");
		return false;
	}
	if(!userregistrationform.confirmpassword.value){
		showMessageDialog(" please enter confirmpassword");
		return false;
	}
	if(!userregistrationform.emailID.value){
		showMessageDialog(" please enter emailID");
		return false;
	}
	if(!userregistrationform.mobile.value){
		showMessageDialog(" please enter mobile");
		return false;
	}
	return true;
}

function saveUser(tx){
	var userName = userregistrationform.username.value;
	var password = userregistrationform.password.value;
	var sex = userregistrationform.sex.value;
	var emailID = userregistrationform.emailID.value;
	var mobile = userregistrationform.mobile.value;
	var query = "INSERT INTO user (userName,password,sex,emailID,mobile) VALUES ('"+userName+"','"+password+"','"+sex+"','"+emailID+"','"+mobile+"' )";
//	alert(query);
	tx.executeSql(query);
}

function successCallBack() {
	alert("registration Success");
	window.localStorage.setItem("user",userregistrationform.username.value);
	//var user = window.localStorage.getItem("user");
	//alert("user  --> "+user);
	window.location.href = "projects.html";
}