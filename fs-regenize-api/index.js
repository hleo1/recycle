const express = require('express');
const app = express();
const cors = require('cors');
const usersRouter = require('./src/api/user-routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

app.use(logger);
app.use('/api/user', usersRouter);
app.use('/api/auth', require('./src/api/auth-routes'));
app.use('/api/list', require('./src/api/list-routes'));
 
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));