/**
 * 1. read csv file
 * 2. parse to arrays
 * 3. console.log
 */

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
// expected output (example)
// [ 'id', 'bild' ]
// [ 123, 'https://...' ]
// [ 124, 'https://...' ]

  
