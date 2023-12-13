const extendHex = (shortHex) => {
  // write your code here
	if(shortHex.length===4){
		let a=`#${shortHEX[1]}${shortHEX[1]}${shortHEX[2]}${shortHEX[2]}${shortHEX[3]}${shortHEX[3]}`
		  console.log(a);
	}
	else{
		let a=`#${shortHEX[0]}${shortHEX[0]}${shortHEX[1]}${shortHEX[1]}${shortHEX[2]}${shortHEX[2]}`
		 console.log(a);
	}
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
