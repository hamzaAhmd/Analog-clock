setInterval(() => {
  d = new Date();
  Hourtime = d.getHours();
  Minutetime = d.getMinutes();
  Secondtime = d.getSeconds();


  Hourtimerotation = 30 * Hourtime + Minutetime / 2;
  Minutetimerotation = 6 * Minutetime;
  Secondtimerotation = 6 * Secondtime;

  hours.style.transform = `rotate(${Hourtimerotation}deg)`;
  minutes.style.transform = `rotate(${Minutetimerotation}deg)`;
  seconds.style.transform = `rotate(${Secondtimerotation}deg)`;
}, 1000);

const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

document.getElementById('date').textContent = formattedDate;