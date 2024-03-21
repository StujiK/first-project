function invert(array) {
    for(i=0;i<array.length;i++)
    {
      if (array[i]<0) {
        array[i] * -1;
      }
      if (array[i]>0)
        array[i] * -1;
    }
   
      
    
    
    return array;
  }

  invert([1,2,3,4,5])