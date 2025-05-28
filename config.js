const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'NUAHDBwT#X7j9wbhN4dIRUG_7TYUHjGfUCkj4CV8y_62nghyNE9k' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || ',' ,
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'vispermd' : process.env.SESSION_NAME, 

};

