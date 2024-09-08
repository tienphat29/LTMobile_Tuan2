import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Helper function to check if a number is prime
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

// Function to get the first N prime numbers
const getFirstNPrimes = (n) => {
  const primes = [];
  let num = 2;
  while (primes.length < n) {
    if (isPrime(num)) primes.push(num);
    num++;
  }
  return primes;
};

// Function to calculate the sum of the first N prime numbers
const sumOfFirstNPrimes = (n) => {
  const primes = getFirstNPrimes(n);
  return primes.reduce((acc, curr) => acc + curr, 0);
};

// Function to get distances between the first N primes
const distanceBetweenPrimes = (n) => {
  const primes = getFirstNPrimes(n);
  const distances = [];
  for (let i = 1; i < primes.length; i++) {
    distances.push(primes[i] - primes[i - 1]);
  }
  return distances;
};

// Function to add two positive numbers of indefinite size
const addLargeNumbers = (num1, num2) => {
  let carry = 0;
  let result = '';
  const maxLength = Math.max(num1.length, num2.length);
  num1 = num1.padStart(maxLength, '0');
  num2 = num2.padStart(maxLength, '0');
  
  for (let i = maxLength - 1; i >= 0; i--) {
    let sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }
  
  if (carry) {
    result = carry + result;
  }
  
  return result;
};

// Function to count the number of words in a text
const countWords = (text) => {
  return text.trim().split(/\s+/).length;
};

// Function to capitalize the first letter of each word
const capitalizeFirstLetter = (text) => {
  return text.replace(/\b\w/g, char => char.toUpperCase());
};

// Function to calculate the sum of numbers in a comma-delimited string
const sumOfCommaDelimitedString = (str) => {
  return str.split(',').map(Number).reduce((acc, curr) => acc + curr, 0);
};

// Function to extract words from a text
const extractWords = (text) => {
  return text.match(/\b\w+\b/g) || [];
};

// Function to convert a CSV text to a bi-dimensional array
const csvToArray = (csvText) => {
  return csvText.trim().split('\n').map(row => row.split(','));
};

// Function to convert a string to an array of characters
const stringToArray = (str) => {
  return str.split('');
};

// Function to convert a string to an array of ASCII codes
const stringToAsciiArray = (str) => {
  return str.split('').map(char => char.charCodeAt(0));
};

// Function to convert an array of ASCII codes to a string
const asciiArrayToString = (arr) => {
  return arr.map(code => String.fromCharCode(code)).join('');
};

// Function to implement the Caesar cipher
const caesarCipher = (str, shift) => {
  return str.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      const base = code >= 65 && code <= 90 ? 65 : 97;
      return String.fromCharCode(((code - base + shift) % 26 + 26) % 26 + base);
    }
    return char;
  }).join('');
};

// Function to implement bubble sort
const bubbleSort = (arr) => {
  let sortedArray = [...arr];
  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = 0; j < sortedArray.length - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
      }
    }
  }
  return sortedArray;
};

// Function to calculate the distance between two points (x1, y1) and (x2, y2)
const calculateDistance = (x1, y1, x2, y2) => {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

// Function to check if two circles intersect
const doCirclesIntersect = (x1, y1, r1, x2, y2, r2) => {
  const distance = calculateDistance(x1, y1, x2, y2);
  return distance < (r1 + r2);
};

// Function to extract a specific column from a bi-dimensional array
const extractColumn = (array, columnIndex) => {
  return array.map(row => row[columnIndex]);
};

// Function to convert a binary string to a number
const binaryStringToNumber = (binaryStr) => {
  return parseInt(binaryStr, 2);
};

// Function to calculate the sum of all numbers in a jagged array
const sumJaggedArray = (arr) => {
  let sum = 0;
  for (const item of arr) {
    if (Array.isArray(item)) {
      sum += sumJaggedArray(item);
    } else {
      sum += item;
    }
  }
  return sum;
};

// Function to find the maximum number in a jagged array
const findMaxInJaggedArray = (arr) => {
  let max = -Infinity;
  for (const item of arr) {
    if (Array.isArray(item)) {
      max = Math.max(max, findMaxInJaggedArray(item));
    } else {
      max = Math.max(max, item);
    }
  }
  return max;
};

// Function to deep copy a jagged array
const deepCopyJaggedArray = (arr) => {
  return arr.map(item => Array.isArray(item) ? deepCopyJaggedArray(item) : item);
};

// Function to find the longest word in a string
const longestWord = (text) => {
  const words = text.match(/\b\w+\b/g) || [];
  return words.reduce((longest, current) => current.length > longest.length ? current : longest, '');
};

// Function to shuffle an array of strings
const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Function to return an array of n unique random numbers from 1 to n
const generateUniqueRandomNumbers = (n) => {
  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  return shuffleArray(numbers).slice(0, n);
};

// Function to find the frequency of letters in a string
const letterFrequency = (str) => {
  const freq = {};
  for (const char of str) {
    if (char.match(/[a-z]/i)) {
      const letter = char.toLowerCase();
      freq[letter] = (freq[letter] || 0) + 1;
    }
  }
  return Object.entries(freq);
};

// Function to calculate Fibonacci(500) with high precision
const fibonacciHighPrecision = (n) => {
  const bigIntFibonacci = (n) => {
    if (n <= 1) return BigInt(n);
    let a = BigInt(0);
    let b = BigInt(1);
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  };
  return bigIntFibonacci(n).toString();
};

// Function to calculate 70! with high precision
const factorialHighPrecision = (n) => {
  const bigIntFactorial = (n) => {
    if (n === 0 || n === 1) return BigInt(1);
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
      result *= BigInt(i);
    }
    return result;
  };
  return bigIntFactorial(n).toString();
};

function App() {
  const [output, setOutput] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <div>
        <button onClick={() => setOutput(getFirstNPrimes(27).join(', '))}>First 27 Distinct Numbers</button>
          <button onClick={() => setOutput(getFirstNPrimes(100).join(', '))}>First 100 Prime Numbers</button>
          <button onClick={() => setOutput(distanceBetweenPrimes(100).join(', '))}>Distances Between First 100 Prime Numbers</button>
          <button onClick={() => setOutput(addLargeNumbers('12345678901234567890', '98765432109876543210'))}>Add Large Numbers</button>
          <button onClick={() => setOutput(countWords('This is a sample text with several words.'))}>Count Words in Text</button>
          <button onClick={() => setOutput(capitalizeFirstLetter('this is a sample text.'))}>Capitalize First Letter of Each Word</button>
          <button onClick={() => setOutput(sumOfCommaDelimitedString('1,2,3,4,5'))}>Sum of Comma-Delimited String</button>
          <button onClick={() => setOutput(extractWords('This is a sample text with several words.').join(', '))}>Extract Words from Text</button>
          <button onClick={() => setOutput(JSON.stringify(csvToArray('a,b,c\n1,2,3\nx,y,z')))}>Convert CSV Text to Array</button>
          <button onClick={() => setOutput(stringToArray('hello').join(', '))}>String to Array of Characters</button>
          <button onClick={() => setOutput(stringToAsciiArray('hello').join(', '))}>String to ASCII Array</button>
          <button onClick={() => setOutput(asciiArrayToString([104, 101, 108, 108, 111]))}>ASCII Array to String</button>
          <button onClick={() => setOutput(caesarCipher('hello', 3))}>Caesar Cipher (Shift 3)</button>
          <button onClick={() => setOutput(bubbleSort([5, 3, 8, 1, 2]).join(', '))}>Bubble Sort Array</button>
          <button onClick={() => setOutput(calculateDistance(0, 0, 3, 4))}>Distance Between Points (0,0) and (3,4)</button>
          <button onClick={() => setOutput(doCirclesIntersect(0, 0, 5, 3, 4, 4))}>Do Circles Intersect (0,0,5) and (3,4,4)</button>
          <button onClick={() => setOutput(extractColumn([[1, 2], [3, 4]], 1).join(', '))}>Extract Column 1</button>
          <button onClick={() => setOutput(binaryStringToNumber('1101'))}>Binary String to Number</button>
          <button onClick={() => setOutput(sumJaggedArray([1, [2, [3]], 4])).toString()}>Sum of Jagged Array</button>
          <button onClick={() => setOutput(findMaxInJaggedArray([1, [2, [3]], 4]).toString())}>Max in Jagged Array</button>
          <button onClick={() => setOutput(JSON.stringify(deepCopyJaggedArray([1, [2, [3]], 4])))}>
            Deep Copy Jagged Array
          </button>
          <button onClick={() => setOutput(longestWord('Find the longest word in this sentence.'))}>Longest Word</button>
          <button onClick={() => setOutput(shuffleArray(['apple', 'banana', 'cherry']).join(', '))}>Shuffle Array</button>
          <button onClick={() => setOutput(generateUniqueRandomNumbers(5).join(', '))}>Unique Random Numbers (1-5)</button>
          <button onClick={() => setOutput(JSON.stringify(letterFrequency('hello world!')))}>Letter Frequency</button>
          <button onClick={() => setOutput(fibonacciHighPrecision(500))}>Fibonacci(500)</button>
          <button onClick={() => setOutput(factorialHighPrecision(70))}>Factorial(70)</button>
        </div>
        <pre>{output}</pre>
      </header>
    </div>
  );
}

export default App;

