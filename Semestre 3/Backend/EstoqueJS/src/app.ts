import express from 'express'
import router from './routes/routes' 
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json());

app.use( '',router) 

const port = 3000
app.listen(port, () => {
    try {
        console.log(`servidor Rodando na porta ${port}`)
    }
    catch(err: any) {
        console.error("Erro encontrado: " + err)
    }
});
