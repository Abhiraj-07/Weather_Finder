import http from "http";
import fs from "fs";
import requests from "requests";
const homeFile = fs.readFileSync("./main.html", "utf-8")
let la = 23.259933;
let lon = 77.412615;  
const replaceVal = ( tempVal , orgVal) => {
  let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
  temperature = temperature.replace("{%city%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  temperature = temperature.replace("{%max_temp%}", orgVal.main.temp_max);
  temperature = temperature.replace("{%min_temp%}", orgVal.main.temp_min);
  temperature = temperature.replace("{%desc%}", orgVal.weather[0].main);
  return temperature;
};
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      `https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lon}&appid=73481b74e333c1babafea2311fa64d16`
    )
      .on("data", (chunck) => {
        const obJdATA = JSON.parse(chunck);
        let arrData = [obJdATA];
        // const temperature = arrData[0].main.temp;
        // const min_temp= arrData[0].main.temp_min;
        // const max_temp= arrData[0].main.temp_max;
        const realTimeData = arrData
          .map((val) => replaceVal(homeFile, val))
          .join("");
        res.write(realTimeData);
      })
      .on("end", (err) => {
        if (err) console.log(err);
        console.log("end");
        res.end();
      });
  }
});
server.listen(80, () => {
  console.log(`server started at 80`);
});
