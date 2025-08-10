require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIABsLClu7*0+8UAQAAHQHAAAKAAAAY3JlZHMuanNvbpVVXZOiOBT9L3nVmgGURqzqqgX8gEYURVHcmocIESLfSRBwyv++hU53z8PuVC9PIbl177nnnJv8BFmOKTJRC8Y*QUHwFTLULVlbIDAGanU+IwL6IIAMgjHwVliGQ93erK25Nlv6KE+yTUGvw*C2i9k8dkSjMfdNcsriV3Dvg6I6Jdj*Q0LoSp5E9FmtBhEcnhZQNou33dQTbXG5jLUkI5i3OHlXN7tXcO8yQkxwFk6LCKWIwMRErQ0x+Rp8cz47umYjGWGwtSy5LqPspr7NrfWknBzsPGap1xoy7wSJ*zX48WhFrvFqOBgS323idEkHcYOzZOd6Td1s8tSNmLtv3*a894RPcZihwAhQxjBrv877vF54AbVZrKzKrY1X00bFUzNYVIt1rMtKna1CfAwjbaB8Dbhv8aVXW5tQgu7pTbsYnm4V+9O2mY4O+8Zf50FSnAnaEMz9Dtwm716J*w*vO4VqU7x0ermiX+ZbqPgHQ7IV2qj59*XAP7lpvSOHy6KdcV+DL0hT1+dbY7b1FnPDc+xWpZF5OlrrXVQ1bGhMguuidE37Mv2ED1lF*oRyFpNivvdL3VGvspIy4UgzqHF0vr2hrcmhVXE7X05RrpRN3Vtm6tnRrdLBFS3gmkMXaTJJJ81LxF14JFBS7JGo7dX166OjGLVGAMb8vQ8ICjFlBDKcZ489YdQHMLg6yCeIPegFBenJB6Ny6Qi71dpNzp79tizl2NDqk0mrcr3CPZNN6lAwXkEfFCT3EaUo0DFlOWktRCkMEQXjv3*0QYYa9hSuKzfg++CMCWW7rCqSHAbvqr4fQt*Pq4w5beZr3QIRMOY+txFjOAtpx2OVQeJH+Iq0CDIKxmeYUPTRISIoAGNGKvQxtVoedMSPHMFSZV4GfZA+BMFBp+lgKPMDcfgiSMJwLHJ*0W91lxcWxbcMMdAHySOOlwRpJPESL3Py6EXoIruD+wfELmOAGMQJBWOgWcgRRU+brhbFYLSez5VpqGihAj5bevfGk*t0FCwNLJClberS2YGXlarMzOAYFJ6c2lBTe6kIXzxsRPXrvyTpjOQK5dVdibPvcOe8hbamh7qxLmxNtn2WIJxuvAOaTkPJcT1sX4I3fbFrq3hSlqf0wkbepo5nQ5hTOeOEetuDRl0nk85IfRCgK*bR78WQaS0joSTiDvE1VgQkNhuTpnrvuLjuR6qpbOTb3DwvdWGorFZLfStqtkWubr3P3JPEzV5eZOm73rIkFv2NKPMjq7RV5enax9Qkv24r*PBTJ1b3e8boMfwZ7CT8gnhP5J3JuHv*tyS*7pP*mEn1eNW3jsHK27aNegMuzW*hWnWy*QHu7eNFCMNzUe2r1MCGD+73H31QJJCdc5J2j0sWkBwHoA9IXnWuNbJz*odimsIZ0*DZegIpUz4nYYtTRBlMCzDmJXEojWROHjyjbJIXOqRRx8J8qKRVZ+tWKQqHQfY+WEDpvtmSB*d*AFBLAQIUAxQAAAgIABsLClu7*0+8UAQAAHQHAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHgEAAAAAA==',
  
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
