const container = document.querySelector (".container");
container.style.padding="0px 100px 100px 100px";

const heading = document.querySelector("#heading");
heading.style.color="blue";
heading.style.textAlign="center";
heading.style.fontSize="60px";

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const date = new Date();
const day = days[date.getDay()];
const month = date.getMonth();
const year = date.getFullYear();
const hour = date.getHours();
const minute = date.getMinutes();

var dateTime = document.querySelector(".date-time");
dateTime.rows[0].cells[0].innerHTML=`Date: ${day} / ${month} / ${year}`;
dateTime.rows[0].cells[1].innerHTML=`Time: ${hour} : ${minute}`;
dateTime.rows[0].cells[2].innerHTML=`Location: Room 42`;
dateTime.rows[0].cells[0].style.padding="10px";
dateTime.rows[0].cells[1].style.padding="10px";
dateTime.rows[0].cells[2].style.padding="10px";
dateTime.style="color:grey; width:500px; margin:auto; display:block";

const blueTitle = document.querySelector(".blue-title");
blueTitle.style.color="blue";


