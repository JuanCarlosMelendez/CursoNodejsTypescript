"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//EL PUERTO DEBE IR ANTES DE APP EXPRESSS SINO DA ERROR
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
dotenv_1.default.config();
// Servir contenido estatico
//En este caso el index.html y su contenido front
app.use(express_1.default.static('public'));
//Esta ruta quedaria en desuso ya que esta suplantada por la del public como localhost:3000
// app.get( '/', (req: Request,res: Response) => {
//     res.send( 'Hello World')  
// });
app.get('/hola', (req, res) => {
    res.send('Hello World desde su ruta');
});
app.get('*', (req, res) => {
    res.send('Eror Page not found');
});
app.listen(port, () => {
    console.log(`Ejemplo app listen en puerto ${port}`);
});
//# sourceMappingURL=app.js.map