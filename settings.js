require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIABFvC1uTi9jzvwQAAJQIAAAKAAAAY3JlZHMuanNvbq1V246jOBD9lZVfE02HO0RqabgFSJoEQm7Nah8cMMQJt2CThIzyCftZ+18r0t3Ts5rZmV5peTLGrjrn1KniCyhKTNAEtWD4BVQ1PkGKuiVtKwSGQGuSBNWgD2JIIRgC01rJxeGyYcNLuWyqFkONd9PTk3NKk3A5Ofp8w+PprqUZ*whufVA12wxHPwnYXD1Gh4q2H09GkwazO16MMvuQPrVRz56hKLImFnzCRz8*PIJbFxHiGhepWe1QjmqYTVDrQVx*DH7j4iyYb6TE7VntOsZTJfWUzdbat8L4ksbWypINIu*4ozX4GPwe63uxiIVyx1nzXGgzOjueT9tL5bjk1KwntZk9bzlPu*rlC3yC0wLFTowKimn7Yd316XkUjFnVdthrmpyXpbubTRdVFa*5kKT1al8wRrkO+XFhfgy4tlKvPdUumfGMkfnx6GD0YqZJJebMOuJiqVRoKlneUTOzfwD36jevHP6L7qonyaqIT9wsyker8FDq+SrZuC2X6+vcN5TjgmWPYl67rPNB3W3nnITB9rhlG0gfeKj750gnjCsJ11PM706ZcyWCYOxZ*x0+pE39M5ShEoajRFJnyTaJPP6ka4vdIVs8uSG33xO6TeBW7AW0ijKudS9ZutQ8T8wmJitej6Fpi*toe3Z6qAwrR9kep*ycaWzVf7wzOqDWicGQufVBjVJMaA0pLotuT5D6AManAEU1ond1AaMEeBTXbRtuip7h54tR*JRB0cgduGBVTWMsa8OEmHmYPD+CPqjqMkKEoNjGhJZ16yJCYIoIGP5+L1THuUZ5SdEYx2AIWI5XGEFQJIlX5M*k03kHKYFV9alAFPRBUpe5i8CQ1g3qg*sNRpc0QTRGgsiZisYYiqAygizJsjFQOFU2O4r5S9YFzhGhMK*AkJEEXmEHgsLd+v8bEM1UDZ2T5IHKajKjstpIHrCyKg4kc8QIvwDC3*7ogwJd6IuRO*k5pg8SXBO6LJoqK2H85vK3jzCKyqagQVtEerdANRh+s40oxUVKOmpNAetoh09I73iAYQIzgr5WHNUofuPyOsX0Mu6M6K+l9Wiy0kCHvQv0vThD6Xt5CtidBiq+ouK34K8*SXNAoA+y+22RVxR2oCi8zIkCM5Q+d9u3r7C7LDGiEGekGy+zjcq5rmY6VyrIvmWpTqrqqQreab71z4tBxxo*PY73xniviGS2seeL3FrEkimv1gPTlBJug8drdxIvMHn8QZCukLMnKc38ycGpZ*HkwjdTY7qg3qARhPxg6ardPCwlPWxc345JOqmswD*Vz47fK*1kHyhjL3mIL+KZq1wKmY3h9w7CTlcfu2wxOuEIfZssNlY+NMWpEUrx5TKdHiTJt4NnFtua3JwH64u+nj2woiGVhD9Xla8sHM6Wng2sh+PldD4nm427Csx5yV*VwX4+D*Ji9NbZ98mSvU50*Np0+P6aYHQfkK+F+mVBX4B3vhvc+t*EeB25*zbKAx8ZED+f2+cHVBvZZbAUdgcOXbzRimrajFMYHq*2erHka3DrGqDKIE3KOgdDQPItBH1Ql03nYqdIyp*9hdTUUdMX2hkkVH3vjB81G*tyyqvLyoZk1ylg8WredDZv1aoKKKRvjQbU7rFsCdz+BlBLAQIUAxQAAAgIABFvC1uTi9jzvwQAAJQIAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAOcEAAAAAA=='
  
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
