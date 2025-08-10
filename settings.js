require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAI6+CVu7WOl3jQQAAPwHAAAKAAAAY3JlZHMuanNvbpVV2Y6jOBT9F78m6rCFJVJJAyQpCFmALCSM5sEBQ5ywOMZkoZV*H5Gq6i5Nz7RqeDK2ufece889fAdFiSvkoDsYfAeE4gtkqF2yO0FgAIw6SRAFXRBDBsEAzOzcaXyyOF7iS57aC8m4juAuzufn28izHdnyOhyb4Xydr1*AowtIvc9w9JuAY5*546233OidaXGRyzCMQroTp9ldl+0pHQXx3eCxHztX*QU82ogQU1ykI3JAOaIwc9DdhZh+DX40DitCdgnnBYHhTcJNaHVWJ7Z2O1Z62HkpPqpGqqzrILt+DT4Mg5Hwul2XKDC9FUuq8zXD82YinPT+5Hi+3hp15*XynmSt3+BXOC1QbMeoYJjdv1x3zvKE0s0M2oxWkReXND95SuP6w3Ej2mve9fWxNGXkCLPT14DvVlTUJo1v945BnvE963YJc1+YYV1TquFNIaujHtxZOBfsz8Bd+qGV0*+p+264vNWHAzPPo1Po7LenqDhw2JnyIrVUTDbShKCbZ0723Bfhn506DSJ1ox2pvg6yfKnfyXi+2k8FvLwW1Xnt7B2fmPYsKH*Ch6ymv0Opja1im6URPOtOzEx9NJM3kWvS1B9mTRbYsHbU89Q+q752qae8UEAcb6Kmv17PM6uaiPNwt9NIwfunYyW7u6ljqb6RvjwZndDdjsGAf3QBRSmuGIUMl0W7J0hCF8D4skQRRexZXrBZwPDCmq08vYpjtzCPrjM721s3OFh7J5iPX7mZLQ3n4fhwfQFdQGgZoapCsYUrVtL7DFUVTFEFBn8+O9WSpigvGZrgGAyAIEoaL*YlWVAE6Y*q2*UAWQUJ+VYgBrogoWU+Q2DAaI264PmFxo21viyp8lBXxJGqDPtDdSRwQ9XUDNk0uJZj*pZ1hXNUMZgTMOCVvqSoYl9SH391QYFu7E1ALW2R74IE04qti5pkJYw*1PVxCKOorAu2vBeR2S4QBYNP24gxXKRVS60uII0O+ILMlgcYJDCr0I9KI4riDy7v7mGWcSuAeShvPX0ughZ7G+jX4gwk9df6ZM97vCIoqsIrvMZpqiy0N9uDxw+IbcQYMYizCgyAOYPLfn9njqZBR1S911d9lOpmqoOflD40+qaBXI3nNhbo3HUsJVnC48LQx04cxmSn5S40jU7eh*IO228a+GeQ1u7wrElO2gIik3Pz5R521CjEoSI4mTjcyKXGc1DMyN70C8rt3Xqcu0fz3ClTx3UWTTIdkl7vmp+EGurk4lsbdwGDoffSZovRBUfoczIxbXqID+P9Quu5veYqsjOanEyechupvBru+rbr2dwWrgg58mZHjhfHpFYmvbx3ixz6SkLrjjpVXyHbmi3Csh8VkW*qb9PznN7s3TXxu67x8zXB6GlCBWxb+IXmvSFvRcY9up+CvPvaf3iDEV6s1dJm52Z1P3RELi+b1DOWRbCFgRsehTRNSB3UuY3tCDxatZMMsqSkefuXKGJa4hh0AS3rVrV2kZS*SWbqnD16N44MVkz*OQn*NlzS2y2XlsSC1aGtwquk53Ur67tOyJJB9jFYQG8f42iCx99QSwECFAMUAAAICACOvglbu1jpd40EAAD8BwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAC1BAAAAAA=',
  
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
