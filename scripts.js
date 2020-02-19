gameInfo = {
  botw: { name: "botw", hours: 87, year: 2017, width: "20%" },
  ssbu: { name: "ssbu", hours: 120, year: 2018, width: "30%" },
  ch: { name: "ch", hours: 32, year: 2017, width: "50%" },
  hld: { name: "hld", hours: 52, year: 2016, width: "30%" },
  gris: { name: "gris", hours: 6, year: 2018, width: "15%" }
};

setGame = function(game) {
  let bg = document.getElementById("bg");
  bg.style.backgroundImage = `url(img/cover/${game}.jpg)`;
  let logo = document.getElementById("logo");
  logo.src = `img/logo/${game}.png`;
  logo.style.width = eval("gameInfo." + game + ".width");
  let playtime = document.getElementById("hours");
  playtime.innerHTML = eval("gameInfo." + game + ".hours") + " hours played";
  let year = document.getElementById("year");
  year.innerHTML = eval("gameInfo." + game + ".year");
};
