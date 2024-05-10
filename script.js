const makeChange = (n) => {
  // your name here
	let values = [25,10,5,1];
	let romanLetters = ["q","d","n","p"];
	let str="";
    for(let i=0;i<values.length;i++){
        while(n>=values[i]){
            n-=values[i];
            str+=`${romanLetters[i]}`
        }
    }
    let qcnt=0,dcnt=0,ncnt=0,pcnt=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='q')
            qcnt++;
        else if(str[i]=='d')
            dcnt++;
        else if(str[i]=='n')
            ncnt++;
        else if(str[i]=='p')
            pcnt++;
    }

    let obj = {
        "q" : qcnt,
        "d" : dcnt,
        "n" : ncnt,
        "p" : pcnt,
    }

    return obj;
};

// Do not the change the code below
const c = prompt("Enter c: ")
alert(JSON.stringify(makeChange(c)));
