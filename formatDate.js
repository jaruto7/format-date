const formatDate = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - (hours * 3600)) / 60);
    const seconds = time - (hours * 3600) - (minutes * 60);

    if(seconds < 0 && seconds < 60) {
        console.log(`Uptime: ~  ${seconds.toFixed( 0 )} sec`);
    }else if(minutes > 0) {
        console.log(`Uptime: ~ ${minutes.toFixed( 0 )} min ${seconds.toFixed( 0 )} sec`);
    }else if(hours > 0) {
        console.log(`Uptime: ~ ${hours.toFixed( 0 )} hours ${minutes.toFixed( 0 )} minutes ${seconds.toFixed( 0 )} sec`);
    }else if(seconds === 0){
        console.log(`Uptime: ~ 0 sec`);
    }
}
module.exports = formatDate;