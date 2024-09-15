function formatTimeLeft(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}m : ${seconds}s`;
}

function updateTimer() {
    const targetDate = new Date('2024-06-13T23:59:59');
    const currentTime = new Date();
    const timeDifference = Math.floor((targetDate - currentTime) / 1000);

    const days = Math.floor(timeDifference / 86400);
    const hours = Math.floor((timeDifference % 86400) / 3600);
    const minutes = Math.floor((timeDifference % 3600) / 60);
    const seconds = timeDifference % 60;

    document.getElementById('days').textContent = `${days}d`;
    document.getElementById('hours').textContent = `${hours}h`;
    document.getElementById('minutes').textContent = `${minutes}m`;
    document.getElementById('seconds').textContent = `${seconds}s`;
}
setInterval(updateTimer, 1000);
updateTimer(); 
