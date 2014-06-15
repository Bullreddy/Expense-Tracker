var serviceURL = "http://localhost/directory/services/";

var employees;

var db = opendatabase();

$('#projectListPage').live('pageinit', function(event) {
	getProjectList();
});

function getProjectList() {
	db.transaction(fetchProjects,errorCB);
}

function fetchProjects(tx){
	tx.executeSql('SELECT * FROM PROJECT', [], querySuccess, errorCB);
}

function querySuccess(tx,results){
	var len = results.rows.length;
    console.log("Projects table: " + len + " rows found.");
    for (var i=0; i<len; i++){
    	var project = results.rows.item(i);
        console.log("Row = " + i + " ID = " + project.projectID + " Data =  " + project.projectDesc);
        $('#projectList').append('<li><a href="projecthome.html">' +
				'<h4>' + project.projectDesc +'</h4>' +
				'</a></li>');
        $('#projectList').listview('refresh');
    }
}