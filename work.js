function sumArray(array) {
    if (array == null)
      {
        return 0;
      }
    let sum = 0; 
    for(i=0;i<array.length;i++) {
    const arrayElement = array[i];
    
      if (array.length<=2) {
        return 0;
      }
      else {
        let max = array[0];
        let min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
            if (array[i] < min) {
                min = array[i];
            }
        sum = sum + arrayElement - max - min;
        console.log(sum);
      }
      
  }
    return sum;
    
  }
}

sumArray([10, 5, 8, 3, 15, 12])

let max = array[0];
let min = array[0];

// Находим максимальное и минимальное значения
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
    if (array[i] < min) {
        min = array[i];
    }
}

// Суммируем все элементы, кроме максимального и минимального
for (let i = 0; i < array.length; i++) {
    if (array[i] !== max && array[i] !== min) {
        sum += array[i];
    }
}

console.log("Сумма всех элементов, кроме максимального и минимального:", sum);
