/* $(document).on('click', '#submit', function(){
	   alert("income submit");
 });

${'#incomeform'}.submit(
function(){
	   alert("income submit");
});
*/

$('#submit').live('tap', function() {
		var db = opendatabase();	
		db.transaction(saveIncome,errorCB,successCB);
});

function saveIncome(tx){
	   var amount = $('#amount').val();
	   var receivedFrom = $('#receivedFrom').val();
	   var receivedby = $('#receivedby').val();
	   var receiveddate = $('#receiveddate').val();
	   var remarks = $('#remarks').val();
	   
	 //  alert(amount +"--------"+receivedFrom +"--------"+receivedby +"--------"+receiveddate +"--------"+remarks +"--------");
	   var query = "INSERT INTO income (incomeID ,receivedFrom,receivedBy,receivedAmount,receivedDate,remarks) VALUES ('"+remarks+"','"+receivedFrom+"','"+receivedby+"','"+amount+"','"+receiveddate+"','"+remarks+"')";
	   alert(query);
	   tx.executeSql(query);
}

function successCB() {
	 $('#amount').text="";
	 $('#receivedFrom').text="";
	 $('#receivedby').text="";
	 $('#receiveddate').text="";
	 $('#remarks').text="";
}