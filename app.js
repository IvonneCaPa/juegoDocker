/** Cargamos extensiones */
import express from 'express'
import morgan from 'morgan';

/** crear la aplicacion */
const app = express();

/** asignar puerto */
const port = 3000;

/** le decimos a la app que utilice a morgan */
app.use(morgan('dev'))

/** le decimos a la app que utilice los recursos public */
app.use(express.static('public'));

/** Que vaya a la ruta raiz que se abrira el juego */
app.get('/', (req, res) => {
	res.sendFile("index");
});

/** Arrancamos el servidor */
app.listen(port, () =>{
    console.log(`servidor en http://localhost:${port}`);
    })
    

