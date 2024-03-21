const fs = require("node:fs");
const express = require("express");
const { PassThrough } = require("node:stream");
const app = express();
const port = 3000;

app.use(express.static('assets'))

app.get("/", (req, res) => {
  // insert your code from previous task here

  const fs = require("node:fs");
  try {
    const data = fs.readFileSync("Inventory.csv", "utf8");

    // split data inÍto lines
    const lines = data.split("\n");
    let html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="//cdn.muicss.com/mui-0.10.3/css/mui.min.css" rel="stylesheet" type="text/css" />
    <script src="//cdn.muicss.com/mui-0.10.3/js/mui.min.js"></script>
    <link href="/style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <table class="mui-table">
    <thead>`;
    // each line

    const page = 1;
    const pageSize = 10;

    const pageTotal = lines.length / pageSize;
    for (u = 0; u < pageTotal; u++) {
      console.log("page " + u);
    }

    for (let i = page * pageSize; i <= page * pageSize + (pageSize - 1); i++) {
      const fields = lines[i].split(";");
      html += "<tr>\n";
      if (i == 0) {
        for (let j = 0; j < fields.length; j++) {
          html += `<th>${fields[j]}</th>`;
        }
      } else {
        for (let k = 0; k < fields.length; k++) {
          if (k == 1) {
            html += `<td><img src="${fields[1]}" alt="image"/></td>\n`;
          } else if (k == 0) {
            html += `<td>${fields[0].split("-")[1]}</td>\n`;
          } else {
            html += `<td>${fields[k]}</td>\n`;
          }
        }
      }

      html += "</tr>\n";
    }

    html += `</table>`;

    html+= `<ul\n>`;

    // print pages
    for (let x = 1;x<=pageTotal;x++){
      html+= `<li>${x}</li>`;
    

    }
    html += `</ul\n>`;

    html += `</body>\n</html>\n`;

    res.send(html);
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

////const array = [1,1,3];
// let fElem = array[0];
/// for (let j = 0;j<array.length;j++){
// const arrayElement = array[j];
//  if (j == 0 ){
//console.log(array[0]*10);
// }
// else {
// console.log(array[j]);
//}

//}

//const array = [1,2,3,4];
//const perPage = 2;
//const pageTotal = array.length / perPage;
//for (let p = 0;p<pageTotal;p++) {
//console.log("page " + (p+1));
//for(let u = p * perPage;u<=(p+1)*perPage-1;u++) {
//console.log(array[u]);

//}

//}
