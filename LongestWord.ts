// ts-ignore:disable:no-console
/*
Have the function LongestWord(sen) take the sen parameter 
being passed and return the longest word in the string. If 
there are two or more words that are the same length, return 
the first word from the string with that length. Ignore punctuation 
and assume sen will not be empty. Words may also contain numbers, 
for example "Hello world123 567"
*/

function LongestWord(sen: string) { 
  // code goes here  
  let longestWord: string = "";
  const words = sen.split(" ");
  words.forEach((word) => {
    const specialCharRegex = new RegExp(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g);
    const hasNumbersRegex = new RegExp(/[0-9]+$/i);
    const hasNonAlphabeticalChars = specialCharRegex.test(word) || hasNumbersRegex.test(word);
    if (!hasNonAlphabeticalChars && word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord; 
}
   
let sentence = "fun&!! time";
// keep this function call here 
// @ts-ignore
console.log(LongestWord(sentence));

sentence = "I love cats";
// @ts-ignore
console.log(LongestWord(sentence));

sentence = "Hello world123 567";
// @ts-ignore
console.log(LongestWord(sentence));

/*
Time complexity is O(n) because we will have go through all
the words in the array.

Space complexity is O(1) because we are not creating any new
arrays, we are just creating some temporary variables

*/