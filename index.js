console.clear()

var id = ""	//뭐하려고 만들어 놓은건데 까먹었음
var pw = ""
var idx = 1;

const crypto = require("crypto");
const axios = require('axios')
const request = require('request')

let setRepeat = 1000

console.log("[ + ] START")

async function apiRegister(regId,regPw) {
	try{
	id = regId
	pw = regPw
	
	const body = (`id=`+regId+`&pw=`+regPw)
	
  let getRes = await axios.post(
   `http://api.kakaolink.o-r.kr/new`,body,
      {
        headers: {
		"content-type": "application/x-www-form-urlencoded",
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
		},
      }
    )
	console.log('\x1b[36m[ SUCCESS ] ID: '+regId+' PW: '+regPw+'\x1b[0m -- \x1b[33mstatus: '+getRes.status)
	}catch(e){
		console.log("\x1b[31m[ ERROR ]"+" - "+e)
	}
}


async function apiWrite(id,pw,postText) {
	try{
	const body = (`context=`+postText+`&token=`+id+`/`+pw)
  let getRes = await axios.post(
   `http://api.kakaolink.o-r.kr/writing`,body,
      {
        headers: {
		"content-type": "application/x-www-form-urlencoded",	
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"

		},
      }
    )
	console.log('\x1b[32m[ POST ] '+postText+' - ID: '+id+'\x1b[0m -- \x1b[33mstatus: '+getRes.status)
	//console.log(getRes)
	}catch(e){
		console.log("\x1b[31m[ ERROR ]"+" - "+e)
	}
}


function loop(n) {
	var random = Math.floor(Math.random() * 1000000);
	
  setTimeout(function() {
	apiRegister(random,random) //실행함수 - 랜덤시 random 변수 사용
    idx++;

    if (idx <= n) {
      loop(n);
    }
  },300);
}

loop(setRepeat);
