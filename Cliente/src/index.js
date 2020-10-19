const dotenv = require('dotenv');
dotenv.config();// corre eventos al unisono 
const app = require('./app');
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});