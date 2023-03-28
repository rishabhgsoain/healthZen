const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/healthZen', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log('Connection Done')
}).catch((err) => {
    console.log('Error in connection of db')
});