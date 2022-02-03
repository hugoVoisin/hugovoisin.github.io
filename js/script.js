function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 5

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s ;
  document.getElementById("nav_clock_time").innerText = time;
  document.getElementById("nav_clock_time").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();

function showDate(){
  var date = new Date();
  var y = date.getFullYear(); // 2022 - XXXX
  var mth = date.getMonth(); // 1 - 12
  var d = date.getDay(); // 1 - 31

  mth = (mth < 10) ? "0" + mth : mth;
  d = (d < 10) ? "0" + d : d;
  
  var time = y + "." + d + "." + mth;
  document.getElementById("nav_clock_date").innerText = time;
  document.getElementById("nav_clock_date").textContent = time;
  
  setTimeout(showDate, 1000);
  
}

showDate();

 // function to set a given theme/color-scheme
        function setTheme(themeName) {
            localStorage.setItem('theme', themeName);
            document.documentElement.className = themeName;
        }

        // function to toggle between light and dark theme
        function toggleTheme() {
            var h = date.getHours();
            if (h >= 20 && h <= 6) {
                setTheme('theme-light');
            } else {
                setTheme('theme-dark');
            }
        }

        // Immediately invoked function to set the theme on initial load
        (function () {
            if (localStorage.getItem('theme') === 'theme-dark') {
                setTheme('theme-dark');
                document.getElementById('slider').checked = false;
            } else {
                setTheme('theme-light');
              document.getElementById('slider').checked = true;
            }
        })();

