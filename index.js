const string = prompt('Введите слово для проверки на палиндром');

let palindrome = Array.from(string);
let isPalindrome = true;

for (let i = 0; i < palindrome.length / 2; i++) {
    if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
        alert('Это не палиндром');
        isPalindrome = false;
        break;
    }
};

if (isPalindrome) {
    alert("Это палиндром");
};