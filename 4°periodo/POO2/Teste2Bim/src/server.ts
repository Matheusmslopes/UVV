import express from 'express';
import LanceRouter from './routes/LanceRoute';
import LeilaoRouter from './routes/LeilaoRoute';
import UserRouter from './routes/UserRoute';

const app = express();
app.use(express.json());

app.use(UserRouter);
app.use(LanceRouter);
app.use(LeilaoRouter);


app.listen(3000, function(){
    console.log("Server running on port 3000");
})