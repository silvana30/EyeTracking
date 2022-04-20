const local = {
	ip: 'localhost',
	port: "27017",
	database_name: "Users",
	username: "claudia",
	password: "claudia",
}

exports.getConnectionConfig = function(environment, callback){
	var configDB;
	switch(environment) {
		case 'local':
			configDB = local;
			break;
		default:
			configDB = local;	
	}
	callback(configDB);
}
