// complete the given function

function palindrome(str){
	str=str.toLowerCase();
	let arr=str.split(" ");
    let s="";
	 arr.forEach((str)=>{
		  if(str!=''){
           s=s+str;
		  }
	 })
let start=0;
let end=s.length-1;
	while(start<end){
		if(s[start]!=s[end]){
			return false;
		}
		start++;
		end--;
	}
	return true;
}
module.exports = palindrome
