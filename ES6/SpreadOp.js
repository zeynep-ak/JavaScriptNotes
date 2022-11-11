const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
// ...arr returns an unpacked array.

// Destructuring
const user = { name: 'Abc Xyz', age: 30 };
const { name, age } = user;

// new variable names
const { name: userName, age: userAge } = user;

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

let x = 8, y = 6;
[x, y] = [y, x]; // swap values

const [a1, b1, ...arr1] = [1, 2, 3, 4, 5, 7];
console.log(a1, b1); // 1, 2
console.log(arr1); // [3, 4, 5, 7]

//same
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
}
const profileUpdateCopy = ({ name, age, nationality, location }) => {
}