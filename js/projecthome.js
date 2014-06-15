$('#projectDetailsPage').live('pageshow', function(event) {
	getProjectContentList();
});

function getProjectContentList(){
	 $('#projectContentList').append('<li><a href="income.html">' +
				'<h4>Income</h4>' +
				'</a></li>'+
				'<li><a href="expense.html">' +
				'<h4>Expense</h4>' +
				'</a></li>'+
				'<li><a href="balance.html">' +
				'<h4>Balance</h4>' +
				'</a></li>'+
				'<li><a href="report.html">' +
				'<h4>Reports</h4>' +
				'</a></li>');
     $('#projectContentList').listview('refresh');
}
