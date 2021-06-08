const days=[
"Sunday",
"Moday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
];
const months=[
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"Decmber",
];



const eventtext=document.querySelector(".event_text");
const numberBoxes=document.querySelectorAll(".countdown_box h4");
const countdownbox=document.querySelector('.countdown_box')
const buttons=document.querySelectorAll('.btn');

const eventDateObj=new Date(2021, 4, 31, 12, 08, 00);


const eDay=eventDateObj.getDay();
const emonth=eventDateObj.getMonth();
const eDate=eventDateObj.getDate();
const eYear=eventDateObj.getYear();
const eHours=eventDateObj.getHours();
const eMinutes=eventDateObj.getMinutes();

eventtext.textContent=`This product will be available on ${days[eDay]}, ${eDate} ${months[emonth]}`;
const numFormat=(num)=>(num< 10 ? `0${num}`: num);
console.log();
function getCountDown(){
	const eTime=eventDateObj.getTime();
	const cTime=new Date(). getTime()
	const timeDeff=eTime-cTime;



	const oneSeconds=1000;
	const oneMinutes=oneSeconds*60;
	const oneHours=oneMinutes*60;
	const oneDays=oneHours*24;

	const remainingDays=Math.floor(timeDeff/oneDays);
	const remainingHours=Math.floor((timeDeff%oneDays)/oneHours);
	const remainingMinutes=Math.floor((timeDeff%oneHours)/oneMinutes);
	const remainingSeconds=Math.floor((timeDeff%oneMinutes)/oneSeconds);
	const timeValue=[remainingDays,remainingHours,remainingMinutes,remainingSeconds];

	if (timeDeff<0) {

countdownbox.style.display="none";
eventtext.textContent="sale is live";
buttons.forEach((btn) => {
	btn.classList.remove("btn_disabled");

});
	}else{


	numberBoxes.forEach((countdown_box,index)=>{
		countdown_box.textContent=numFormat(timeValue[index]);
	});
	}
		
	};	
	let countdown=setInterval(getCountDown,1000);
getCountDown();