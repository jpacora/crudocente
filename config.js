(function (appSettings) {

    appSettings.mongodb = {
        credentials: '', // username:password@
        host: 'localhost',
        port: ':27017', // :port
        dbName: 'crm_db'
    }
    
    appSettings.env = 'prod';

})(module.exports);