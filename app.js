//1- Write a function findLargest that takes three numbers as arguments and returns the largest of the three.// 

function findLargest(a, b, c) {
    return Math.max(a, b, c);
  }
  
  console.log(findLargest(5, 10, 3)); // Output: 10
  console.log(findLargest(8, 2, 6)); // Output: 8

//2- Write a function reverseWords that takes a string as an argument and returns a new string where the order of the words in the sentence are reversed, but the words themselves aren't.//
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
  }
  
  console.log(reverseWords("Hello world!")); // Output: "world! Hello"
  console.log(reverseWords("The quick brown fox")); // Output: "fox brown quick The"
  console.log(reverseWords("JavaScript is fun")); // Output: "fun is JavaScript"

//3-Write a function findLongestWord that takes an array of strings as an argument and returns the longest word in the array. If there are multiple words with the same length, return the first one.//
function findLongestWord(words) {
    let longestWord = words[0];
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  
  console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // Output: "banana"
  console.log(findLongestWord(["dog", "elephant", "cat"])); // Output: "elephant"
  console.log(findLongestWord(["red", "blue", "green"])); // Output: "green"

//4-Write a function countWords that takes a string as an argument and returns an object where each key is a word in the sentence and the corresponding value is the number of times that word appears in the sentence.//
function countWords(sentence) {
    const words = sentence.split(' ');
    const wordCounts = {};
    for (let word of words) {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    }
    return wordCounts;
  }
  
  console.log(countWords("hello world hello")); // Output: { hello: 2, world: 1 }
  console.log(countWords("this is a test this is only a test")); // Output: { this: 2, is: 2, a: 2, test: 2, only: 1 }

