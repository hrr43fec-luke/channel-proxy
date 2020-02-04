# rec-channels-proxy
This repo is a clone on Twitch.tv's Recommended Channels module.

## Motivation
This was a required project for Hack Reactor's Front End Capstone

## Getting Started
After cloning repo,
1. Run `npm install`.
2. Initiate your Mongo database with `sudo service mongodb start`
3. Create a `.env` file in the root directory and configure it with the following:
    * `PORT=`myPortNumber
    * `DATABASE_URL='mongodb://localhost/channels'`
    * `DB_NAME=channels`
    * `DB_USER=`myUsername
    * `DB_PASSWORD=`myPassword
4. Populate database use `npm run seed`.
5. Compile with webpack with a new terminal using `npm run build`.
6. Initiate server with a new terminal using `npm run start`.
7. Finally view the rendered app on your browser using the port number you chose.
