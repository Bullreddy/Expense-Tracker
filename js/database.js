var dbName = "expensetracker";
var version = "5.0";
var displayName =  "Expense Tracker";
var size = "100000";

function opendatabase(){
	var db = window.openDatabase(dbName,version,displayName,size);
	return db;
}

function createDefaultTables(){
	var user = window.localStorage.getItem("user");
//	alert("user  --> "+user);
	if(!isEmpty(user)){
		window.location.href = "projects.html";
	}else{
	var db = opendatabase();
	db.transaction(loadTables,errorCB,successCB);
	}
}

function loadTables(tx){
	 tx.executeSql('CREATE TABLE IF NOT EXISTS user (userName unique,password,dob,sex,emailID,mobile)');
	 tx.executeSql('CREATE TABLE IF NOT EXISTS project (projectID unique,projectDesc,startDate,endDate,status,estimatedCost,actualCOst,dateCreated,dateModified,userCreated,userModified)');
	 var query = "INSERT INTO project (projectID ,projectDesc) VALUES ('sample','Sample Test Project')";
	 tx.executeSql(query);
	 tx.executeSql('CREATE TABLE IF NOT EXISTS income (incomeID unique,IncomeDesc,projectID,receivedFrom,receivedBy,receivedAmount,receivedDate,receiptNo,remarks,dateCreated,dateModified,userCreated,userModified)');
	 tx.executeSql('CREATE TABLE IF NOT EXISTS expense (expenseID unique,expenseDesc,projectID,purpose,category,productGroup,spentBy,spentOn,amount,remarks,billno,billImagePath,productImagePath,dateCreated,dateModified,userCreated,userModified)');
	 tx.executeSql('CREATE TABLE IF NOT EXISTS balance (balanceID unique,balanceDesc,projectID,amount,holdeBy,givenBy,remarks,dateCreated,dateModified,userCreated,userModified)');
}


function errorCB(err) {
    //alert("Error processing SQL: "+err.code);
    alert("Error processing SQL: "+err.message);
}

function successCB() {
    //alert("success!");
}