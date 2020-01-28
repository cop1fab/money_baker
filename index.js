import express from 'express';
import dotenv from 'dotenv';

const app = express();

const port = process.env.PORT || 8090

app.listen(port, () => {
    console.log(`server started, listening on port ${port}`);
})