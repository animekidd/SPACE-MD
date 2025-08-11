require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAKVtC1sJqnMIwgQAAJUIAAAKAAAAY3JlZHMuanNvbq1V246jRhD9lahfbYU7GEsjLTdfwIzxgBnsKA9t01xsDLi7sY1X*oR8Vv4rwp7ZXWWT3YkUnpqmu+qcU6eKz6CscoIc1ILhZ1Dj*AQp6pa0rREYAr1JEoRBH8SQQjAEmmvF52vmHY8rsjzFHlpv6gZHs0Dl+XPPcAO2F3hOXS149gnc+qBuNkW+UFA*ZmudxrBbsqMC*tsz+3M42pLVIMyoLZ*TSNDeo17VjK2nsCtiwhznJepVWfogDAsHNR6MMcfgw*HsXHIZ1XoMws5N5SzLbeH8Zpe7WlzGWWS4NLDclJNrsvlx+CPRLW1z2NOndVXxnUiNdSXs0u4Ttt0EdH2GmwjSeHFI55MH*BJnpYonsaopDltP6z72LO0nc6cB*4FnhxHOQTm2Z2v9MklXvivIsv30MzzNQGXH9R97qD6sub8YN8wcLsNFLk0BublFDYrHl2LukiVxtUbCPP0W+AefvfK*r*o7lv+ajyIqv2slj1H9PisMjOHS9J2XzOcLGSbas3OpK0mnD8GX2x0H57yHsK751koiVi54p6*moRRNBUxY70Y*GlTKWUZLr*Ch7TBP0K57bUJlyQjUZ1mZLEZ7Bc8H5XCksXL6WgU+y8TzjpGTjPnLGbGs6ERsSWeelHW1MfAK66hw4VOKTNeT+OfNxu9mZiqpj3dGe1RO43BkLv1AUZpTiiGNK*Kbo*n+D6A8clHW4zoXV5grKmpkBXDukt+lrZTj9Q4lDzBGZR+66Qb9+XIkKIe1AZ5An1Q42qLCEHxJCe0wq2LCIEpImD4271SHWmMDhVFdh6DIeAFUeUkSVUUUR18Ir+eM0gJrOtfS0RBHyS4OrgIDCluUB*cb2iCaZisaSqCYIiKzJkDWTE4lecUYyTqo1HH8fDIGuQHRCg81GDIKZKocqrKqrf+*wWEE0bWYCQKumDIhi6whmroiiZJMiexqmL9FMjvfVCiC304udNf5vogyTGhy7KpiwrG7zZ*wi326opqd+WW6NbIAyG32wjSvMyJR21poR4m+UnZHQ8wDCBBUFfSo4wit+5vI0xo4o7J47t0YusCxbosHeBvhdnKH4vTwm700DLr6j8xf*zD9LsEeiD4n5bFlWVZ1VVHAiyxA3FT9327QvsLkuMKMwL0vltHmiC6+rWM1NKg8V4rLmpZqQa+ErzvYEeBrV18flo70x7p8pkHk1egsM4iBVrEL6ylqUkQpTbr64TB*ndoH8PAobgQtLXRog4gYhhNqngYDF7nVencBEzMdUqc2I4trVmhWhvXmCRonYn+dlJ0ls9m1mVE*k1rRPFT1AF98vATeY6IdriqcsWo1O+Rd8mOwV+a4yCiWCH6iqdn14v9THZoN7AmkYznttYl7FZFOPncl5eOKV9HmmWkjPRKBH33Jr07LxO5gtl17vI85ZXeHo4Mbp5frT2fbQUbyM9f2u6*P6a5Og+Id8K9dOCPoB3vmNv*W9ivM3cf*uH+gtkwnx1blcMwmZxYZdSthfQxRuFVNfngsqJebgzyqWIwa1rgLqANKnwAQwBOWwg6ANcNZ2Lp2VS*SCToaVTLX3QLiCh2tfO+KdmUx6nPFzVE0iyToGxqB2azuatVtc+hfS90YDWPeY4BLe*AFBLAQIUAxQAAAgIAKVtC1sJqnMIwgQAAJUIAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAOoEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2349155977498',
  
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
