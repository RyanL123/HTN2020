<h1 align="center">Systemaa.tech</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/eaa2a594-9a19-44f8-90f8-567402b3249f/deploy-status)](https://app.netlify.com/sites/systemma/deploys)

## Inspiration

Going into this hackathon, we wanted to solve an issue that people faced in their daily lives. Not being able to effectively manage our time was an apparent challenge, especially during the pandemic. To counter this issue, we built a tool that allows us to manage our time more effectively by presenting a breakdown of how we spend time each day.

## What it does

While existing time management apps simply send notifications to your phone, we implemented the functionality to communicate with virtual assistants (Alexa, Google Home, etc.). The effect of a “real person’s voice” talking to you is much more motivating than interacting with text. Our app allows the user to talk with their virtual assistant throughout the day on how they spent their time. The user then uses a generated 6-character alphanumeric code to access their personal stats page, a color-coded visual representation of how they spent their time.

## How we built it

We used Voiceflow as our backend and used React to build our front end. The Voiceflow API is able to communicate with our frontend through Netlify functions and store the data on Firebase. The code system allows users to retrieve data associated with their code on any platform without the need to log in. A graph is then dynamically generated based on the data retrieved from Firebase

## Challenges we ran into

It was our team’s first time using Voiceflow, so we spent a good chunk of our time learning through online tutorials and mentors. Although we managed to implement the most important functionalities with Voiceflow by the end, we weren’t able to fully implement all the interactions we initially designed.

## Contributors

[Andy Chen](https://github.com/chen7944)

[Andrew Zhang](https://github.com/zhangandrew37)

[Curtis An](https://github.com/CurtisAn123)
