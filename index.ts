/*function greet(name: string) {
  return `Hello, ${name}`;
}

let username = "John";
console.log(greet(username));
*/
/*
function filterParirs(number: number[]): number[] {
  return number.filter(num => num % 2 === 0);
  } const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const pairs = filterParirs(numbers);
  console.log(pairs); // output [2, 4, 6, 8]
*/

/*
function sumDiagonals(matrix: number[][]): { diagonalprincipal: number, diagonalsecondary: number } {
  let sumprincipal =0;
  let sumsecondary = 0;

  for (let i = 0; i < matrix.length; i++) {
    sumprincipal += matrix[i][i];
    sumsecondary += matrix[i][matrix.length - i - 1];
}

return { diagonalprincipal: sumprincipal, diagonalsecondary: sumsecondary };
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
const { diagonalprincipal, diagonalsecondary } = sumDiagonals(matrix);
console.log(`sum Diagonal Principal: ${diagonalprincipal}`);
*/

/*
class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  showInfo(): void {
    console.log(`title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }

    isMoreRecentThan(anotherBook: Book): boolean {
      return this.year >= anotherBook.year;
    }
    }
    const book1 = new Book("One Hundred Years of Solitude", "Gabriel Garcia Marquez", 1967);
    const book2 = new Book("Don Quixote", "Miguel de Cervantes",1605 );

    book1.  showInfo();
    console.log(book1.isMoreRecentThan(book2)); 
*/

/*
import * as fs from 'fs';

interface Product {
    id: number;
    name: string;
    price: number;
}

// Read JSON file
function readJsonFile(path: string): Product[] {
    const data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
}

// Write JSON file
function writeJsonFile(path: string, products: Product[]): void {
    const data = JSON.stringify(products, null, 2);
    fs.writeFileSync(path, data, 'utf-8');
}

const filePath = './products.json';

// Read data
let products = readJsonFile(filePath);

// Modify a product
products[0].price = 99.99;

// Write changes
writeJsonFile(filePath, products);

console.log('File updated successfully.');
*/
/*
interface person {
  name: string;
  age: number;
}

function sortByAge(people: person[]): person[] {
  return people.sort((a, b) => a.age - b.age);
}

const people: person[] = [
  { name: 'John', age: 30 },
  { name: 'Anna', age: 35 },
  { name: 'Louis', age: 35 }
];

const peopleOrdered = sortByAge(people);
console.log(peopleOrdered);
*/

/*
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
*/
/*
function sumMatrices(a: number[][], b: number[][]): number[][] {
  let result: number[][] = [];
  for (let i = 0; i < a.length; i++) {
    result[i] = [];
    for (let j = 0; j < a[i].length; j++) {
      result[i][j] = a[i][j] + b[i][j];
    }
  }
  return result;
}

const matrix1 = [[1, 2], [3, 4]];
const matrix2 = [[5, 6], [7, 8]];
console.log(sumMatrices(matrix1, matrix2)); // [[6, 8], [10, 12]]
*/

/*
class Student {
  constructor(public name: string, public age: number) { }
}

class Teacher {
  constructor(public name: string, public subject: string) { }
}

class Course {
  public students: Student[] = [];
  
  constructor(public name: string, public teacher: Teacher) { }

  addStudent(student: Student) {
    this.students.push(student);
  }
}

const teacher = new Teacher('John Doe', 'Math');
const course = new Course('Algebra', teacher);
course.addStudent(new Student('Alice', 20));
course.addStudent(new Student('Bob', 22));

console.log(course);
*/
/*
function countWordOccurrences(text: string, word: string): number {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  return (text.match(regex) || []).length;
}

const text = "TypeScript is great. TypeScript is fun.";
console.log(countWordOccurrences(text, 'TypeScript')); // 2

*/

/*
function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

console.log(reverseString('TypeScript'));
*/

/*
function isPrime(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(11)); // true
console.log(isPrime(10)); // false

*/

/*
function sortArray(arr: number[]): number[] {
  return arr.sort((a, b) => a - b);
}

console.log(sortArray([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
*/

/*
async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData('https://jsonplaceholder.typicode.com/posts');
*/

/*
function countVowels(str: string): number {
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

console.log(countVowels('TypeScript')); // 3
*/

class Animal {
  constructor(public name: string) { }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

dog.speak(); // Buddy barks.
cat.speak(); // Whiskers meows.