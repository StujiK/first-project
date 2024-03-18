const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

  // insert your code from previous task here

  const fs = require('node:fs');
  try {
    const data = fs.readFileSync('Inventory.csv', 'utf8');
  
    // split data into lines
      const lines = data.split('\r\n');
      let html = "<html>\n<body>\n<table>\n<tr>\n";
      // each line
      for(let i = 0; i <lines.length; i++) { 
          const fields = lines[i].split(';');
          html += "<tr>\n";
          fields.forEach(field => {
            html += `<td>${field}</td>\n`;
          });
          html += "</tr>\n";
      } 
  
      html += "</table>\n</body>\n</html>";
      console.log(html);
  } catch (err) {
    console.error(err);
  }

  res.send(html)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
