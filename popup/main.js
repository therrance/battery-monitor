const getStyle = (level) => {
  if (level <= 10) {
    return "empty";
  } else if (level <= 20) {
    return "low";
  } else if (level <= 50) {
    return "medium";
  } else if (level <= 80) {
    return "good";
  } else {
    return "full";
  }
};

navigator.getBattery().then((battery) => {
  let level = battery.level * 100;
  document.getElementById("status").innerHTML = `${level.toFixed(0)}%`;
  document.getElementById("batteryBody").setAttribute("class", getStyle(level));
  document.getElementById("indicator").style.height = 100 - level + "%";
});
