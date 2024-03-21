let games = ["1:0", "2:0", "3:0", "4:0","2:1", "3:1", "4:1", "3:2", "4:2", "4:3"];
console.log(games[0]);



function toCsvText(array1) {
    // let output = '';
     //let com = ',';
    // const array = [1,20,3,4]
    // for(i=0;i<array.length;i++) {
       
    // const arrayElement = array[i];
     //  if (i > 0) {
      //   output = output + com + arrayElement;
       
         
      //else  }
       
      ////  output = output + arrayElement
      // }
   
     
   //  }
     
    // output += '\n';
     //return output;
     
    // console.log(output);
   
       //  let output = '';
       //  let com = ',';
     //    for(i=0;i<array1.length;i++) {
           for(j=0;j<array1[i].length;j++) {  
             const arrayElement = array1[i][j];
             if (i > 0) {
                output = output + com + arrayElement;
             } else {
               output = output + arrayElement;
             }
             output += '\n';
             return output;
          }
           
         }
     
               
               
     console.log(output);
         }






         if (array = null || []) {
          return 0;
        }
        
        {
            let sum = 0;
            for(i=0;i<array.length;i++) {
            const arrayElement = array[i];
            const maxValue = Math.max.apply(null, array);
            const minValue = Math.min.apply(null, array);
            sum = sum +  - maxValue - minValue;
            
          
        }