const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'A2dRyLYT#4QD8OVT1fYRMZhhU0OW_FXnkINOqrMwl2bWr6RNw1R0' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || ',' ,
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'vispermd' : process.env.SESSION_NAME, 

};

