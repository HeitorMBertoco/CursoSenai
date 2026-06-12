import express from 'express'
import router from './routes/user.routes';
const app = express();
app.use(express.json());
const port = 3000;
app.use('/api/alunos', router);
app.listen(port, () => {
    try{
    console.log(`servidor Rodando na porta ${port}`)
    }
    catch(err: any){
        console.error("Erro encontrado: " + err)
    }
});

