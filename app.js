class PomodoroTimer {
    constructor(minutes, seconds) {
        this.minutes = minutes;
        this.seconds = seconds;
    }
    start() {
        const displayTime = document.querySelector('.time');
        const timer = setInterval(() => {
            displayTime.innerHTML = `${this.minutes} : ${this.seconds}`;
            this.seconds--;
            if (this.seconds < 0) {
                this.minutes--;
                this.seconds = 59;
            }
            if (this.minutes < 0) {
                clearInterval(timer);
            }
        }, 1000);
    }
}

const pomodoro = new PomodoroTimer(25, 0);
pomodoro.start();
