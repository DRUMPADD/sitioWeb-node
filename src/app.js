const express = require('express');
const app = express();
const path = require('path');


app.set('port', 5000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// ?? Rutas
app.use(require('./routes/index'));

// ?? Archivos estáticos
app.use(express.static(path.join(__dirname,'public')));

// ?? Servidor en el puerto 5000
app.listen(app.get('port'), () => {
    console.log('Server on port',app.get('port'));
});