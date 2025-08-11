require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAIRqC1t06KkZwgQAAJUIAAAKAAAAY3JlZHMuanNvbq1U2Y6jRhT9lahe2xqzGrDU0mDA2KYxeMFblIcylKEwa1Fg45E*IZ+V*4pwd8+MNMlMRwpPRS33nnPvOfcLyHJcIQu1YPgFFAQ3kKJuSdsCgSEY1acTIqAHAkghGAI8T2aW7EwKNCXNhTarrSPGU3vg+61kx4EsuxnLZLtK28jP4N4DRX1MsP+TgD687M1wPmjySMud6+iwutZsUeQXV+A3y7DZ2uJ2emO2q8XlGdy7iBATnIVGEaEUEZhYqHUhJh+Db6nM0swOxPMibRnppbfM+V1wVBuzxg4JA8U+XmdCjbYb42Pw3TFkVbZu5vbOMjIaN5Nw3Urrwosm4s7l4aTArAFD17upr*ArHGYomAYoo5i2H64752QXcazt+nrRGPpewYXk4aeXTazDurY2yRFPWNXuz8Psg8AFga61m8Gcl7Xtrx0mgHqr6reyYLxq+uRcm1myg+NNucj874G75F0r5*9Sd886coeaPcyF*XjiMGxWGdmOOqdNe7sWhsb2V*J4ey3tmjl*DL735NLxDK0Ds*BNbjZ215bjxxqD4UAJWLt9qVT*Zp+3mRF+gw9pTX6G8jLfsVOTZipz1uSFy5R8VMZ766rCuPWl2mX960uAIqQc51rJc9gLRjWVNsqcjhjPvJ4Z62IL55uqwzjopy*lZVbW8eL5weiM2mkAhuy9BwgKcUUJpDjPuj2OY3oABs0K+QTRR3mBf3XORv8Up*aySHesP4vRS7+trbkRuUcjwunMlRYLvSyv52fQAwXJfVRVKJjgiuaktVFVwRBVYPj7o1MdaYLSnKIZDjo58YLCiqIiSYIif64+XSJIK1gUnzJEQQ+cSJ7aCAwpqVEPPF6onKLqusFrY11gB*JAGIvCQFZFjVV0Y6xzHcf0Nesap6iiMC3AkJVEQWFlgVHuvf8JCC8IA4GTNEXnNFnUJIUfyQNVVGVOZ1WNVX4J5I8eyNCVviq5qz*P9sAJk4p6WV0kOQzeZf5+CH0*rzO6ajNf6xaIgOF324hSnIVVR63OIPEj3CCt4wGGJ5hU6GvLEUHBO5e3MablQadE3Z1vloPZBHTYu0A*FmfI*VieDHa3gYpvKPtt9defVX1GoAeSx+uBoCgcoyiCzA9Edsh97rbvX2F3WQJEIU4qMASas1Z52x4ZTv8oygvTVI1Q1UIVfKP5bqBXgc5GwrycxfosVgaVs5ss16m5DiRD3mwZw5BO*A7PtrYVrHH1*A9BwBCcRScZS9vSxII1suZp8UT4ZO8NaqaJYy8180XV1s3hmJ7QajNH5lksqWxu7RZyiZcQzO0TosXSCz2u+7VzulRjmVM7t*VAgBrso++TcTuvJBvlwJYnL7Tml8VI99fk4N3MxdNmVE2cW7OTfDKtzQwuB0stHLXuPq2ixTVTk5WxeGqkSGBTy7d3VkRJMU8PWaS+WvsxWpK3kY7fTIcfvyeMHhPyrVG*bOgr8E53zL33XYy3mfsvc2u0WiAd4v2l3fcR0ZMr44nRmUdXd7yho5HDK6yAN7GWeQIB984ARQLpKScpGIIqPULQAySvOxVPs1P+k0yaGk7V8JV2AiuqfnPGj2bjFeX1lkvyYgKrqKuAKahp3cm8VYtiRSF9NxpQu083PXD*G1BLAQIUAxQAAAgIAIRqC1t06KkZwgQAAJUIAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAOoEAAAAAA==',
  
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
