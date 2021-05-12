const local = {
	ip: 'localhost',
	port: "27017",
	database_name: "admin",
	username: "silva",
	password: "silva",
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
