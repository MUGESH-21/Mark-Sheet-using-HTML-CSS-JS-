var diptheory = document.getElementById("diptheory");
var totaldip = document.getElementById("totaldip");
var opmtheory = document.getElementById("opmtheory");
var totalopm = document.getElementById("totalopm");
var asictheory = document.getElementById("asictheory");
var totalasic = document.getElementById("totalasic");
var wctheory = document.getElementById("wctheory");
var totalwc = document.getElementById("totalwc");
var WDtheory = document.getElementById("WDtheory");
var totalwd = document.getElementById("totalwd");
var OEtheory = document.getElementById("OEtheory");
var totaloe = document.getElementById("totaloe");
var dippratical = document.getElementById("dippratical");
var totaldipp = document.getElementById("totaldipp");
var opmpratical = document.getElementById("opmpratical");
var totalopmp = document.getElementById("totalopmp");
var totalmark = document.getElementById("totalmark");
var precentage = document.getElementById("precentage");
var resultpf = document.getElementById("resultpf");
var totalworddip=document.getElementById("totalworddip")
var totalwordopm=document.getElementById("totalwordopm");
var totalwordasic=document.getElementById("totalwordasic");
var totalwordwc=document.getElementById("totalwordwc");
var totalwordWD=document.getElementById("totalwordWD");
var totalwordOE=document.getElementById("totalwordOE");
var totaldipword=document.getElementById("totaldipword");
var totalwordoppm=document.getElementById("totalwordoppm");
var totalinwords=document.getElementById("totalinwords");
var total=0;
function check1(){
    if(diptheory.value!=null &&diptheory.value>=50 && diptheory.value<=100){
    totaldip.innerHTML=diptheory.value;
    total=total+Number(diptheory.value)
    totalworddip.innerHTML=convertword(diptheory.value);
}
else if(diptheory.value!=null && diptheory.value<=100){
    totaldip.innerHTML=diptheory.value;
    total=total+Number(diptheory.value)
        resultpf.innerHTML="FAIL";
        totalworddip.innerHTML=convertword(diptheory.value);
}
}
function check2(){
    if(opmtheory.value!=null && opmtheory.value>=50 && opmtheory.value<=100){
        totalopm.innerHTML=opmtheory.value;
        total=total+Number(opmtheory.value)
        totalwordopm.innerHTML=convertword(opmtheory.value);
    }
    else if(opmtheory.value!=null && opmtheory.value<50){
        totalopm.innerHTML=opmtheory.value;
        total=total+Number(opmtheory.value)
        resultpf.innerHTML="FAIL";
        totalwordopm.innerHTML=convertword(opmtheory.value);
}
}
function check3(){
    if(asictheory .value!=null && asictheory.value>=50 && asictheory .value<=100){
        totalasic.innerHTML=asictheory .value;
        total=total+Number(asictheory.value)
        totalwordasic.innerHTML=convertword(asictheory .value)
    }
        else if(asictheory .value!=null && asictheory .value<50){
            totalasic.innerHTML=asictheory .value;
            total=total+Number(asictheory .value)
            resultpf.innerHTML="FAIL";
            totalwordasic.innerHTML=convertword(asictheory .value)
        }
}
function check4(){
    if(wctheory.value!=null && wctheory.value>=50 && wctheory.value<=100){
        totalwc.innerHTML=wctheory.value;
        total=total+Number(wctheory.value)
        totalwordwc.innerHTML=convertword(wctheory.value)
    }
    else if(wctheory.value!=null && wctheory.value<50){
        totalwc.innerHTML=wctheory.value;
        total=total+Number(wctheory.value)
        resultpf.innerHTML="FAIL";
        totalwordwc.innerHTML=convertword(wctheory.value)
}
}
function check5(){
    if(WDtheory.value!=null && WDtheory.value>=50 && WDtheory.value<=100){
        totalwd.innerHTML=WDtheory.value;
        total=total+Number(WDtheory.value)
        totalwordWD.innerHTML=convertword(WDtheory.value);
    }
    else if(WDtheory.value!=null && WDtheory .value<50){
        totalwd.innerHTML=WDtheory .value;
        total=total+Number(WDtheory .value)
        resultpf.innerHTML="FAIL";
        totalwordWD.innerHTML=convertword(WDtheory.value);
    }
}
function check6(){
    if(OEtheory.value!=null && OEtheory.value>=50 && OEtheory.value<=100){
        totaloe.innerHTML=OEtheory.value;
        total=total+Number(OEtheory.value)
        totalwordOE.innerHTML=convertword(OEtheory.value);
    }
    else if(OEtheory.value!=null && OEtheory.value<50){
        totaloe.innerHTML=OEtheory.value;
        total=total+Number(OEtheory.value)
        resultpf.innerHTML="FAIL";
        totalwordOE.innerHTML=convertword(OEtheory.value);
    }
}
function check7(){
    if(dippratical.value!=null && dippratical.value>=50 && dippratical.value<=100){
        totaldipp.innerHTML=dippratical.value;
        total=total+Number(dippratical.value)
        totaldipword.innerHTML=convertword(dippratical.value)
    }
    else if(dippratical.value!=null && dippratical.value<50){
        totaldipp.innerHTML=dippratical.value;
        total=total+Number(dippratical.value)
        resultpf.innerHTML="FAIL";
        totaldipword.innerHTML=convertword(dippratical.value)
    }
}
function check8(){
    if(opmpratical.value!=null && opmpratical.value>=50 && opmpratical.value<=100){
        totalopmp.innerHTML=opmpratical.value;
        total=total+Number(opmpratical.value)
        totalmark.innerHTML=total;
        precentage.innerHTML=(total/8)+"%";
        resultpf.innerHTML="PASS";
        grade(total);
        totalwordoppm.innerHTML=convertword(opmpratical.value)
        totalinwords.innerHTML=convertword(total)

    }
    else if(opmpratical.value!=null && opmpratical.value<50){
        totalopmp.innerHTML=opmpratical.value;
        total=total+Number(opmpratical.value)
        totalmark.innerHTML=total;
        precentage.innerHTML=(total/8)+"%";
        resultpf.innerHTML="FAIL";
        grade(total);
        totalwordoppm.innerHTML=convertword(opmpratical.value)
        totalinwords.innerHTML=convertword(total)
    }
}

var gradeno = document.getElementById("gradeno");

function grade(total){
    let value =  total/8 ; 
    if(value >= 90){
        gradeno.innerHTML="O";
    }
    else if(value<90 && value>=80){
        gradeno.innerHTML="A+";
    }
    else if(value<80 && value>=70){
        gradeno.innerHTML="A";
    }
    else if(value<70 && value>=60){
        gradeno.innerHTML="B";
    }
    else if(value<60 && value>=50){
        gradeno.innerHTML="B";
    }
    else{
        gradeno.innerHTML="U";
    }
}

let num = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE']
function convertword(total){
    let ans =''
    let div=total;
    console.log(div)
    if(div==100){
        return 'one zero zero'
    }
    else if(div<10){
        console.log(div)
        return('ZERO'+num[div])
    }
    else{
        while(div!=0){
            let rem = div%10;
            ans=num[rem]+' '+ans
            div=Math.floor(div/10);
        }
        return ans;
    }
}