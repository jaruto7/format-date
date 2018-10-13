const formatDate = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - (hours * 3600)) / 60);
    const seconds = time - (hours * 3600) - (minutes * 60);

switch(time) {
    case seconds == 0:
        console.log(`Uptime: ~ 0 sec`);
        break;
    case seconds > 0:
        console.log(`Uptime: ~ ( ${seconds} ).toFixed( 0 ) sec`);
        break;
    case minutes > 0:
        console.log(`Uptime: ~ ( ${minutes} ).toFixed( 0 ) min  ( ${seconds} ).toFixed( 0 ) sec`);
        break;
    case hours > 0:
        console.log(`Uptime: ~ ( ${hours} ).toFixed( 0 ) hours  ( ${minutes} ).toFixed( 0 ) min  ( ${seconds} ).toFixed( 0 ) sec`);
        break;
    }  
}

module.exports = formatDate;