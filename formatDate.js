const formatDate = (time) => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - (hours * 3600)) / 60);
    let seconds = time - (hours * 3600) - (minutes * 60);
    console.log(time);

switch(time) {
    case seconds:
        // console.log(`Uptime: ~ 0 sec`);
        console.log(`Saturday`);
        break;
    case seconds:
        // console.log(`Uptime: ~ ( ${seconds} ).toFixed( 0 ) sec`);
        console.log(`Sunday`);
        break;
    case minutes:
        // console.log(`Uptime: ~ ( ${minutes} ).toFixed( 0 ) min  ( ${seconds} ).toFixed( 0 ) sec`);
        console.log(`Monday`);
        break;
    case hours:
        // console.log(`Uptime: ~ ( ${hours} ).toFixed( 0 ) hours  ( ${minutes} ).toFixed( 0 ) min  ( ${seconds} ).toFixed( 0 ) sec`);
        console.log(`Tuesday`);
        break;
    }  
}

module.exports = formatDate;