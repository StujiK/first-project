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
         sum = sum + arrayElement;
      }
      
        let max = array[0];
        let min = array[0];
         for (let j = 1; j < array.length; j++) {
        if (array[i] > max) {
          max = array[j];
      }
        if (array[j] < min) {
          min = array[j];
          }
      sum += array[i];
      }
      
      sum -= max;
      sum -= min;
      return sum;
  }
      
  }