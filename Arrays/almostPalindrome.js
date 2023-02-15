// palindrome but its ok if ONE character is off. So still return true if by removing max one character the string will be palidrome

function isPalindrome(str){
    let left = 0;
    let right = str.length - 1;
    let isPal = true;
    let allowance = 0;

    while(left < right) {
        if(str[left] === str[right]) {
            left += 1;
            right -= 1;
        }
        else {
            if(allowance < 1 && str[left + 1] == str[right]) {
                left += 2;
                right -= 1;
                allowance += 1;
            }
            else if (allowance < 1 && str[right -1] == str[left]) {
                right -= 2;
                left += 1;
                allowance += 1;
            }
            else {
                isPal = false;
                allowance = 500;
                break;
            }
        }
    }

    return isPal;
}