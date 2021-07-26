
var userXID="";
for(let i=0;i<10;i++){userXID+=(Math.random()%100).toString(32).substring(2,4);}

var varAge="-1";
var varListenTime="-1";
var varMusicActivity="-1";
var varHarmonyEducation="-1";

var status = "inquiry";
//inquiry or selecting or selected

var seed = Math.floor( Math.random() * 100000 );

document.getElementById("memo").innerHTML=String(seed);

var curA="";//Z1A
var curB="";//Z1B

document.getElementById('sendButton').addEventListener('click', function(event){

	if(status=="inquiry"){
//		console.log(varAge,varListenTime,varMusicActivity,varHarmonyEducation);

		status="selecting";
		document.getElementById("questionnare").hidden = true;

		SetupTest();

	}else if(status=="selecting"){

		status="selected";
		document.getElementById("main_sentence").innerHTML="AはAI作曲家「田中しおん」、Bは「横道かおる」の作った曲でした";
		document.getElementById("sendButton").value="次の聴き比べに進む";
		document.getElementById("labelSendButton").innerHTML="次の聴き比べに進む";

		document.getElementById("faceA").src="F_13.png";
		document.getElementById("faceB").src="M_207.png";

		document.getElementById("label1").innerHTML="田中しおん";
		document.getElementById("label2").innerHTML="横道かおる";
		document.getElementById("exit_sentence").innerHTML="<a href=\"https://eita-nakamura.github.io/TestTest/thankyou.html\">今日の聴き比べはここまでにする</a>";

	}else if(status=="selected"){

		status="selecting";
		SetupTest();

	}//endif

});

document.getElementsByName('selector').forEach(function(e) {
	e.addEventListener("click", function() {
		if(status=="selecting"){
			if(document.querySelector("input:checked[name=selector]").value=="A"){
				ClickedA();
			}else{
				ClickedB();
			}//endif
		}//endif
	});
});

document.getElementById('boxA').addEventListener('click', function(event){
	if(status=="selecting"){
		ClickedA();
	}//endif
});
document.getElementById('boxB').addEventListener('click', function(event){
	if(status=="selecting"){
		ClickedB();
	}//endif
});

function ClickedA(){
	document.getElementById("sendButton").disabled=false;
	document.getElementById("boxA").style.backgroundColor = '#ff9245';
	document.getElementById("boxB").style.backgroundColor = '#eeeeee';
	document.getElementById("radio1").checked = true;
}//end ClickedA

function ClickedB(){
	document.getElementById("sendButton").disabled=false;
	document.getElementById("boxA").style.backgroundColor = '#eeeeee';
	document.getElementById("boxB").style.backgroundColor = '#ff9245';
	document.getElementById("radio2").checked = true;
}//end ClickedB

function SetupTest(){
	document.getElementById("boxA").hidden = false;
	document.getElementById("boxSpacer").hidden = false;
	document.getElementById("boxB").hidden = false;

	document.getElementById("main_sentence").innerHTML="AとBのメロディーを聴いて、良いと思う方を選んでください";
	document.getElementById("sendButton").value="結果を送る";
	document.getElementById("labelSendButton").innerHTML="結果を送る";

	document.getElementById("radio1").checked = false;
	document.getElementById("radio2").checked = false;
	document.getElementById("sendButton").disabled=true;
	document.getElementById("boxA").style.backgroundColor = '#eeeeee';
	document.getElementById("boxB").style.backgroundColor = '#eeeeee';

	document.getElementById("faceA").src="Mugao.png";
	document.getElementById("faceB").src="Mugao.png";

	document.getElementById("label1").innerHTML="Aの方が良い";
	document.getElementById("label2").innerHTML="Bの方が良い";

	seed = Math.floor( Math.random() * 100000 );
	document.getElementById("exit_sentence").innerHTML="";

	curA='Z'+String(seed%10+1)+'A';
	curB='Z'+String(seed%10+1)+'B';

	document.getElementById("Audio1A").src='https://eita-nakamura.github.io/Test2/Data/mp3/'+curA+'.mp3';
	document.getElementById("Audio1B").src='https://eita-nakamura.github.io/Test2/Data/mp3/'+curB+'.mp3';
}//end SetupTest



document.getElementsByName('age').forEach(function(e) {
	e.addEventListener("click", function() {
		varAge=document.querySelector("input:checked[name=age]").value;
		AnsweredQuestion();
	});
});

document.getElementsByName('listenTime').forEach(function(e) {
	e.addEventListener("click", function() {
		varListenTime=document.querySelector("input:checked[name=listenTime]").value;
		AnsweredQuestion();
	});
});

document.getElementsByName('musicActivity').forEach(function(e) {
	e.addEventListener("click", function() {
		varMusicActivity=document.querySelector("input:checked[name=musicActivity]").value;
		AnsweredQuestion();
	});
});

document.getElementsByName('harmonyEducation').forEach(function(e) {
	e.addEventListener("click", function() {
		varHarmonyEducation=document.querySelector("input:checked[name=harmonyEducation]").value;
		AnsweredQuestion();
	});
});

function AnsweredQuestion(){
	if(varAge!="-1" && varListenTime!="-1" && varMusicActivity!="-1" && varHarmonyEducation!="-1"){
		document.getElementById("sendButton").disabled=false;
	}//endif
}//end AnsweredQuestion




