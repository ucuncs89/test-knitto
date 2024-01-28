import { fizzBuzz } from "./functions/fizzbuzz";
import { isPalindrome } from "./functions/palindrome";

function runFizzBuzzProgram(numberInput: number): void {
  console.log("Program FizzBuzz");
  console.log(`FizzBuzz for ${numberInput}:`, fizzBuzz(numberInput));
}

function runPalindromeProgram(word: string): void {
  console.log("Program Palindrome");
  console.log(`Is "${word}" a palindrome?`, isPalindrome(word));
}

function main(): void {
  const numberInput = 50;
  const word = "Eva, can I see bees in a cave";

  runFizzBuzzProgram(numberInput);
  runPalindromeProgram(word);
}

main();
