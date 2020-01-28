import express from 'express';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';


const app = express();

const schema =  buildSchema(`
  type Query{
      message: String
  }
`);

const root = {
    message: () => 'Welcome to Authors Haven'
}

const port = process.env.PORT || 8090


app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true
}));
app.listen(port, () => {
    console.log(`server started, listening on port ${port}`);
})