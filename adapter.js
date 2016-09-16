
 
var procedure1Statement = WL.Server.createSQLStatement("insert into NAME values(?,?,?,?,?,?,?)");
function procedure1(a,b,c,d,e,f,g) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : [a,b,c,d,e,f,g]
	});
}


var procedure2Statement = WL.Server.createSQLStatement("select * from NAME where USERNAME=? AND PASS=?");
function procedure2(a,b) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure2Statement,
		parameters : [a,b]
	});
}

