class CountdownTimer {
  constructor(secs = 0, mins = 0, hours = 0, days = 0, t) {
    this.t = t;
    this.days = days;
    this.hours = hours;
    this.mins = mins;
    this.secs = secs;
    this.getTimeRemaining = this.getTimeRemaining.bind(this);
  }

  getTimeRemaining(endtime) {
    this.t = Date.parse(endtime) - Date.parse(new Date());
    this.days = Math.floor(this.t / (1000 * 60 * 60 * 24));
    this.hours =Math.floor((this.t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.mins = Math.floor((this.t % (1000 * 60 * 60)) / (1000 * 60));
    this.secs = Math.floor((this.t % (1000 * 60)) / 1000);
    return {
      total: this.t,
      days: this.days,
      hours: this.hours,
      minutes: this.mins,
      seconds: this.secs,
    };
  }

setClock(id, endtime) {
    const timer = document.getElementById(id);
    const daysSpan = timer.querySelector('[data-value="days"]');
    const hoursSpan = timer.querySelector('[data-value="hours"]');
    const minsSpan = timer.querySelector('[data-value="mins"]');
    const secsSpan = timer.querySelector('[data-value="secs"]');

    const updateClock = () => {
      const t = this.getTimeRemaining(endtime);

      daysSpan.textContent = t.days;
      hoursSpan.textContent = ('0' + t.hours).slice(-2);
      minsSpan.textContent = ('0' + t.minutes).slice(-2);
      secsSpan.textContent = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    };

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
}

const timer = new CountdownTimer();
const targetDate = '2021/04/27';
const targetDateFormat = new Date(Date.parse(targetDate));
timer.setClock('timer-1', targetDateFormat);

