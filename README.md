[![Build Status](https://travis-ci.com/bezdonas/planet-clock.svg?branch=master)](https://travis-ci.com/bezdonas/planet-clock)

# Work in Progress

[Demo](https://planet-clock.herokuapp.com/)

Wall of clocks for different planets of solar system. As if the abstractions of day, hour, minute and second were the same as at the Earth(day equals rotation of the planet around its own axis). Fun side project.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Fast start

## Localy
- `npm install` - install requirements
- `npm start` -  launch in developement mode
- `npm test` - run tests
- `npm build` - build project

## Using docker
- `docker-compose build` - builds image
- `docker-compose up` - launches dev-server
- `npm run dtest` - runs jest inside docker via `docker-compose run planet-clock npm test`
- `npm run dcleanup` - cleans all docker stuff (containers, images, volumes) via `docker-compose down -v --rmi all`

### Test and production with Docker
1) `docker-compose -f docker-compose.prod.yml build` - build image for test/prod
2) `docker-compose -f docker-compose.prod.yml up` - run `npm run build` in test/prod environment
3) Test builded static project
(for prod:)
4) `docker-compose -f docker-compose.prod.yml down --rmi all -v` - clean up docker stuff after building dist
5) Serve builded static project

# styled-components

- https://www.styled-components.com/docs/
- https://github.com/styled-components/jest-styled-components

# pretty-quick

- https://github.com/azz/pretty-quick

# style guides

- https://github.com/piotrwitek/react-redux-typescript-guide
- https://github.com/airbnb/javascript/tree/master/css-in-javascript

# VSC plugins

- PeterJausovec.vscode-docker
- infeng.vscode-react-typescript
- eg2.tslint
- esbenp.prettier-vscode
- jpoissonnier.vscode-styled-components
