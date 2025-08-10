require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIACMOCluBeVRpigQAAPsHAAAKAAAAY3JlZHMuanNvbpVUa4+iSBT9L*VVMwoIiEknC*gAERvF92Y*lFBgCQVYVaA48b9vsLtnOpnZSS+finrce865597vIMsxQw6qweA7KCiuIEfNktcFAgNglFGEKGiDEHIIBmDrZHqOL16ZY1dyDmxr9JSMlKkSHTJPrce20PeCjp3PpP4LeLRBUR5THPwh4CbwXL2YBRhhe08Xhv4qsddUKeyjJvt6RdB8krt139sPFy*g0USEmOIsHhUnRBCFqYNqD2L6NfhE9zpVjUsnlcnxqi6ny9owMnLtxXxoYOPV4VdupaPC2ehfgy9v8HYudm6d+lSYZ8HPwmVtSNf7hFyWd9PQXIfcL1K5xNvkDT7DcYZCO0QZx7z+su6u0butvVlaGKPDLVIWe8HSt8cisUbBbFclVnd4HcvzOrns2NeAKxE5dVpWtiJHl*vSdEF3t+F+0vGJKIdSN5Av2arYHfXJLf8M3KMfXkn+j+6+7pKbebifJ61oSxaoQuPpOhx6I5PhOV5e9SgQdKUwT2L3a*B56gTerTVDteh6ZFZJka9WqDU*YL9*X4+oneRnvCXTcbb4CR*ykv4JZQHnnY548pc3Rz1XM1TBKM7H092lI252aX23SDSzV7LE7kPsW*ao5WqXsltsPDnpx*b00kPFDFGdkm1*r1CCkTzN8OLlyShBtR2CgfBoA4pizDiFHOdZsyf22gCGlY8CivhTXbB3ooPZcoYyDYOK7PfyebbZnc8q7GZ50lKH+0Pf1W7uCbPkBbRBQfMAMYZCCzOe09pFjMEYMTD4+1mohjNFJOdoikMwAKLU0wRJ7imiKvb+Yt+uJ8gZLIpvGeKgDSKaExeBAaclaoPnC0kXx4Ku9aSu2Dd1aSSpXa2r6CNBl3o91VAaiuQt6woTxDgkBRgIqtxTta7cUx**tEGGbvzNPw1rSWiDCFPG11lZpDkMP8z1cQiDIC8z7tdZYDYLRMHg0zbiHGcxa6iVGaTBCVfIbHiAQQRThn4IjSgKP7i8Dw8zD5v6T+eaMNxMd6DB3gT6VZyBLPyqT*q8J6ii2lcFVdC6Wl8Rm5vNweMHxCZiiDjEKQMDYLrYl+W9ObIrQeovJhN9FOtmrIOflD4s+uYB0g*nNhbp3HMsNfLh+dXQx054CIu9RjxoGi0iQ2WP7dP15TdBmuFkZBPPUjSFqKPYXvYDrZ6xI7wbN1r6zHMWIyu1gvuYhbtXMk8nh0Dh+wkN9tOodD24CibZbhpJ4npurmV4TkLNd0z9pckWogoH6HMyZpyjUyhF4TC4hvbUq44iyzpyt5gb+3O82RidmafQxeg0u+kWVZPxxUoubvfqxUO7xsnt3Neud40p66t8q8br5Mp2yfm9eZ7Nm74PTfzua*z8jTB6zqAMNiX8QvHekDcm6z7an4K8j7X*GA3GobJWvs0v91V9akldkt*jheFn2x3ceoezGMdRUW5LYmM7AI*G7UUKeZRTAgYAZiHNcQjagOZl41o7i*I*JDP1rj2K36inkHH9Zyf8rrmEt1sezQsLslOjwqSnk7Kxda0Xhc8h*2gsoDefdTbB419QSwECFAMUAAAICAAjDgpbgXlUaYoEAAD7BwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAACyBAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2349135462724',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'animekidd',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
