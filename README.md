# Andrew's Proxy
This repo is a proxy for Twitch.tv combining the modules from the following projects

## Related Projects
**Philip Nguyen** [@nguyephi](https://github.com/nguyephi) - [Video Player](https://github.com/hrr43fec-luke/video-player-service)
**Kraig Hanson** [@kraig5](https://github.com/kraig5) - [Chats](https://github.com/hrr43fec-luke/chat-service)
**Priscila Gonzalez** [@priscilagonzalez](https://github.com/priscilagonzalez) - [Video Carousel](https://github.com/hrr43fec-luke/video-carousel-service)
**Andrew Doolittle** [@azdoolittle](https://github.com/azdoolittle) - [Recommended Channels](https://github.com/hrr43fec-luke/rec-channels-service)

## Getting Started
After cloning repo,
1. Run `npm install` this and the remaining 4 repos
2. Initiate your Mongo database with `sudo service mongodb start` as well as your mySQL database with `sudo service mysql start`
3. Build the webpack bundles for each of the 4 services
4. Populate databases with the seed scripts from each of the 4 services
5. Start servers for this proxy as well as each of the 4 services
7. Finally view the rendered app on your browser at http://localhost:3000


