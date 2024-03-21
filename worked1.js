function sumArray(array) {
    if (array == null)
      {
        return 0;
      }
   if (array.length<=2) {
        return 0;
      }
    let sum = 0; 
    let max = array[0];
    let min = array[0];
    for(i=0;i<array.length;i++) {
    const arrayElement = array[i];
        if (array[i] > max) {
          max = array[i];
      }
        if (array[i] < min) {
          min = array[i];
          }
        sum = sum + arrayElement;
      }
  
      sum -=max;
      sum -=min;
      return sum;
      
  }