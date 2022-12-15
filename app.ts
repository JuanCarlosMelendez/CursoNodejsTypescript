import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

//EL PUERTO DEBE IR ANTES DE APP EXPRESSS SINO DA ERROR
const port = process.env.PORT || 3000;
//aqui estoy trabajando el git 1
const app = express();
dotenv.config();

// Servir contenido estatico
//En este caso el index.html y su contenido front
app.use( express.static('public'));

//Esta ruta quedaria en desuso ya que esta suplantada por la del public como localhost:3000
// app.get( '/', (req: Request,res: Response) => {
//     res.send( 'Hello World')  
// });

app.get( '/hola', (req: Request,res: Response) => {
    res.send( 'Hello World desde su ruta')
    
});

app.get( '*', (req: Request,res: Response) => {
    res.send('Eror Page not found')
});

app.listen( port, () => {
    console.log( `Ejemplo app listen en puerto ${port}` )
})

