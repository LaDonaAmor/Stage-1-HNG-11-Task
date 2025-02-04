document.addEventListener('DOMContentLoaded', () => {
     function updateTime() {
          const now = new Date();
          const utcTime = now.toUTCString().split(' ')[4];
          const dayOfWeek = now.toLocaleString('en-US', {weekday: 'long'});

          document.getElementById('utc-time').textContent = utcTime;
          document.getElementById('day-of-week').textContent = dayOfWeek;
     }

     updateTime();
     setInterval(updateTime, 1000);
});
