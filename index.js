const os = require( 'os' );
const formatDate = require( './formatDate' );
const time = formatDate( os.uptime() );
 
formatDate(time);



