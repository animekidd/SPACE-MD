require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAOJ4C1s80V+taQQAAIMHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9lY16bWMFLUGM6IgBxDuioihszEMJBZZys6pAcMJP2M*a*9rAnp6eh93ZXp6KpMg8ec7J*AbSjDA8xzUYfAM5JSXiuDnyOsdgALQiDDEFLRAgjsAAvMwNbbNW5Kqe3SDxaXZs01MRwpIp00zmY7Ue4j5fOGTivoJHC+TFMSb+LxLGMlaqRd2*W0g4jlh1SqXkJQ1QtZwsF85edKdDx9gofBqZr+DRZESEkjQy8hNOMEXxHNcrROjn4MPZSjlKNhJZt1ecrUvulYFtdoYj3V*eu9XQZY6XSJWXd2+fgx8q+7MQR0HUVn2b0g2iJwGr7AwdbxgpN9kVbf3oL3NhJ7zBZyRKcTANcMoJrz*Nu7lK7cA6yPDFcFe9eGjGFLaPq2VudHxrKCmHXWnB9FiWAvsc8BXc6eIS00yccX1kRe5k1FlaxTU6nizXW5Voc5*DpOweiPkz8BV998rl*De0Q7jy9SMry*tbBbYlWPkebrqx0fHmM46l92hjaJ9Ryy9nfk5+Ikejo+z8q7FVziDu2pzWRB8doP2i5D21IMSKMFNHoXxzmYf8BEv6K9QloqQzJbesqh7a9lTte19Y2zVLBGTjVr10cTVF1KeeqPtQvbMas2UwKun59lhfpUWsXaubmrv0h7bJd8LK*92tLWb0zmtX58dXXA9DcBAfLQAxRFhnCJOsrSJQbEFUFDa2KeYP9kF6*06bLuHo+Lr9WSeLVLYvkMtyEfazrPgxTeCM5S6cXtK1q+gBXKa+ZgxHEwI4xmtTcwYijADgz++tkCKK*6mW1OtK7ZASCjju7TI4wwF76K+f0S+nxUpt+vU15sDpmAgfIQx5ySNWENjkSLqn0iJ9RPiDAxCFDP8o0FMcQAGnBb4x9DqWdDw7vTm0HBVHbRA8tSDBI1HulARez1FlqHSH*S*sN9vTVqU57+nmIMWSFFzG6jkjtPf7L+ZMUFgxaIn39LUFE6gqLAflfqiYP+lyb8+AG7qRJgjkjMwADo1kHtmqZmzPaWZK7HY9WMVD1SwUeb73Z502OmweV1dh7OzorErMNks03G20A2+s5eMAw57B7IbG*Ogy1hr*+QBAxAYXVc6rmnPp37d1G74sRc28nChn16yHr22lkeTwu85YUtLxAN75Hkj13ffLGl6TwlPRfF4fTk4ljviJQFc3Vyw3u98VYLBLgkPv65GNcDlNPT9X4bH0xRSM7bst+daN7SgJW2X3On7ejeobDHZ6*tO*KVXoV12rGla8SzuQRzDSr7qXPu7IeF64Sr8dncYHJ7M*JzkOLvC4w8PdYI2LyGBD*3wXeh*lPQN+CN74RH66cc3zfMv0ypZq*xEBH3VrttTIdxJex6p0sXV6uRwzXN6ioiJM5ZT3eQgsfjawvkMeJhRhMwACw5ItACNCsaF0*TMPtFJV2Npmr01naMGFc*JmNLEsw4SnIwEOUeVDqw34Fvt1Y0yyeInRoGxlBNisbmtZrnNkf8fdCA2jzjSR88*gZQSwECFAMUAAAICADieAtbPNFfrWkEAACDBwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAACRBAAAAAA=',
  
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
