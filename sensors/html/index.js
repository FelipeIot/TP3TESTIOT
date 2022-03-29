const express = require('express')
const app = express()

const httpPort = 8080

var count = -1;

app.get('/reset', function (req, res) {
   count = 0;
   res.sendFile('reset.html', { root: __dirname }); console.log('reset');
})

app.get('/hitcount', function (req, res) {
   res.send(
      `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Page HitCount</title>
</head>
<body>
<div id="count">${count}</div>  
</body>
</html>`);

   console.log('hitcount');
})



app.get('/hit', function (req, res) {
   ++count;
   res.send('hit ok'); console.log('get hit');

})

app.get('/multiplicar.html', function (req, res) {
   res.send(
      `<!DOCTYPE html>
      <html lang="en">
      <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Page Multiplicar</title>
      </head>
      <body>
      <form action="/multiplicar" method="get">
      <input type="text" name="a" id="a">
      <input type="text" name="b" id="b">
      <input type="button" value='send' id='send' onclick="res();">
      </form>
      <div id='rest'></div>
      </body>
      
      <script>
      
      function res() {
      
          var num1 = document.getElementById("a").value;
          var num2 = document.getElementById("b").value;
      
          document.getElementById("rest").innerHTML=num1*num2;
      }
      </script>
      
      </body>
      </html>`);
console.log('multiplicar.html');

})


app.post('/cargar_datos.php', function (req, res) {
   ++count;
   res.sendFile('postOk.html', { root: __dirname }); console.log('post hit');

})

app.get('/imagen.png', function (req, res) {
   ++count;
   res.sendFile('gok.png', { root: __dirname }); console.log('img hit');

})

app.listen(httpPort, () => console.log(`App listening on port ${httpPort}!`))

