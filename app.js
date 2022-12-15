const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const homeRoutes = require('./src/routes/homeRoutes');
const registerRoutes = require('./src/routes/registerRoutes');
const singInRoutes = require('./src/routes/singInRoutes');


/*Archivos estaticos */
app.use('/', express.static('public'));

/* Archivos dinámicos con EJS */
app.use('/', homeRoutes);
app.use('/register', registerRoutes);
app.use('/singIn', singInRoutes);

/*Configaracion del motor de plantillas js */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './src/views'));

app.use((req,res) => {
    res.status(404).send('Lo siento página no encontrada');
});

/* Puerto*/
app.listen(PORT, () => console.log( `Servidor corriendo desde http://localhost:${PORT}`));

