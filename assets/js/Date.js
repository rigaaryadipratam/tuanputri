var tday=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
var tmonth=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;
if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

var clocktext=""+tday[nday]+", "+ndate+" "+tmonth[nmonth]+" "+nyear+"";
document.getElementById('clockbox2').innerHTML=clocktext;
}

GetClock();
setInterval(GetClock,1000);