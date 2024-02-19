import Express, {Request, Response} from 'express'
import Usersrouter from '../routes/user.router'
//configurações
const app = Express();
app.use(Express.json());
app.use(Usersrouter);
app.use(Express.urlencoded({extended: true}))

app.get('/', (request: Request, response: Response) =>{
    response.status(200).json({mensagem: "tudo funcionando"})
})


app.listen(8080, 'localhost', () => {
    console.log("Servidor on");
    
})