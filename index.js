function findLongestWordWithVowels(sentence) {
    const countVowels = (word) => {
      return word.replace(/[^]/g, '').length;
    };
  
    const words = sentence.split(/\s+/).filter(word => /^[a-zA-Z]+$/.test(word));
  
    words.sort((a, b) => {
      if (b.length === a.length) {
        return countVowels(b) - countVowels(a);
      }
      return b.length - a.length;
    });
  
    return words[0] || '';
  }
  
  // Example usage:
  const sentence = "This is a test sentence with several words of different length";
  const longestWord = findLongestWordWithVowels(sentence);
  console.log("Longest word:", longestWord);