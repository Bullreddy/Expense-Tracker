function isEmpty(data){
	if(data != null && data != undefined && data.length >0){
		return false;
	}
	return true;
}

function showMessageDialog(message){
	alert(message);
}