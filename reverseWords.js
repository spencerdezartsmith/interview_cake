// You're working on a secret team solving coded transmissions.

// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place

const message = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];

function reverseWords(message) {
  reverseChars(message, 0, message.length - 1);
  let startOfWord = 0;
  
  for (let i = 1; i < message.length; i++) {
    if (message[i] === ' ' || i === message.length - 1) {
      if (message[i] == ' ') {
        reverseChars(message, startOfWord, i - 1);
        startOfWord = i + 1;
      } else {
        reverseChars(message, startOfWord, i);
      }
    }
  }
<<<<<<< HEAD
  
=======
>>>>>>> 833f2633d92d02dd8b1f023ed9d8ceca5207fb49
  return message;
}

function reverseChars(message, leftIdx, rightIdx) {
  while (leftIdx < rightIdx) {
    let temp = message[leftIdx];
    message[leftIdx] = message[rightIdx];
    message[rightIdx] = temp;

    leftIdx++;
    rightIdx--;
  }

  return message;
}

