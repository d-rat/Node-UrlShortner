let express = require('express');
let app = express();

const connectDB = require('./config/db');

connectDB();

// Body Parser
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/urls'));

app.listen(3333, () => console.log('server started at port 3333'));
