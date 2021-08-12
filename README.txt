Platform:
Windows 10 operating system
XAMPP v3.2.2

jQuery has been used and has been linked in the q2.html using the Google API

There was some issue with my sendgrid account so I made another API to send email and hosted on my own sever.
To recieve the email, just change the value of the variable email in the script.js file with your email and you will receive the email (it may be in the spam folder).
When the project is hosted locally, the mail function does not work sometimes due to CORS error. It can be checked using the console logs of the tab. If such a thing happens, then an extension can be downloaded 'https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en' which can help to enable CORS.