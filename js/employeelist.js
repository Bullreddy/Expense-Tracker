var serviceURL = "http://localhost/directory/services/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
		$('#employeeList').append('<li><a href="employeedetails.html?id=Lokesh Devareddy">' +
					'<h4>Lokesh Devareddy</h4>' +
					'<p>Software Deeloper</p>' +
					'</a></li>');
		$('#employeeList').listview('refresh');
}