import express from 'express';
import routes from "./routes/index.route";

const application = express();
const port = 3000;

application.use(express.json());
application.use(routes);

application.listen(port, () =>{
   console.log(`Server started at http://localhost:${port}`);
});