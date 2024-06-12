const arr = Array(10).fill(0).map(() => Math.random() * 100 - 50); 
console.log(`Оригінальний масив: ${arr}`);

const newArr = arr.map(x => x < 0? -x : -x); 
console.log(`Новий масив: ${newArr}`);

newArr.sort((a, b) => a - b); 
console.log(`Відсортований масив: ${newArr}`);