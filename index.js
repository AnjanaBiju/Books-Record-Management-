const express = require('express');
const app = express();
const port=8081;
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});
app.all('*',(req,res)=>{
    res.status(404).json({message:'This route is not exist'});
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});