let interval = setInterval(() => {
  navigator.getBattery().then((battery) => {
    let level = battery.level * 100;
    if (level <= 20 && !battery.charging) {
      alert("Battery level is low. Please charge you laptop.");

      clearInterval(interval);
    }
  });
}, 60000);
