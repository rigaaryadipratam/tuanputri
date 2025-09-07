
var tday=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
var tmonth=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour==0){ap=" Waktunya Kamu Tidur";}
	else if(nhour==1){ap=" Waktunya Kamu Tidur";}
	else if(nhour==2){ap=" Waktunya Kamu Tidur";}
	else if(nhour==3){ap=" Waktunya Kamu Tidur";}
	else if(nhour==4){ap=" Waktunya Kamu Tidur";}
	else if(nhour==5){ap=" Waktunya Kamu Tidur";}
	else if(nhour==6){ap=" Selamat Pagi, Kamu";}
	else if(nhour==7){ap=" Selamat Pagi, Kamu";}
	else if(nhour==8){ap=" Selamat Pagi, Kamu";}
	else if(nhour==9){ap=" Selamat Pagi, Kamu";}
	else if(nhour==10){ap=" Selamat Pagi Menjelang Siang, Kamu";}
	else if(nhour==11){ap=" Selamat Pagi Menjelang Siang, Kamu";}
	else if(nhour==12){ap=" Selamat Siang, Kamu";}
	else if(nhour==13){ap=" Selamat Siang, Kamu";}
	else if(nhour==14){ap=" Selamat Siang, Kamu";}
	else if(nhour==15){ap=" Selamat Sore, Kamu";}
	else if(nhour==16){ap=" Selamat Sore, Kamu";}
	else if(nhour==17){ap=" Selamat Sore, Kamu";}
	else if(nhour==18){ap=" Selamat Berbuka, Kamu";}
	else if(nhour==19){ap=" Selamat Malam, Kamu";}
	else if(nhour==20){ap=" Selamat Malam, Kamu";}
	else if(nhour==21){ap=" Selamat Malam, Kamu";}
	else if(nhour==22){ap=" Selamat Malam, Kamu";}
	else if(nhour==23){ap=" Selamat Malam, Kamu";}


if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;



var clocktext=" "+ap+" ";
document.getElementById('clockbox3').innerHTML=clocktext;
}

GetClock();
setInterval(GetClock,1000);

