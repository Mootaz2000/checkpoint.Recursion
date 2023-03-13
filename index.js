function isPalindrome (str,left,right) {

    if ( left >= right) {
        return true
    }
    if (str[left]=== str[right]) {
        return isPalindrome(str,left+1,right-1)
    }else if (str[left] !== str[right]) {
        console.log ("it's not a polindrome");
        return false
    }
}


var str= "hola"
console.log(isPalindrome(str,0,str.length-1))