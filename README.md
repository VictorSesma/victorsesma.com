# Welcome to [VictorSesma.com](https://victorsesma.com/) frontend React Repository

This App is what you see when entering to the website [VictorSesma.com](https://victorsesma.com)
It is built using react as front-end part.

## How to start the app
If is the first time you are starting the project clone the repo, install npm and then:
`npm install`
If you have already isntalled it it should work with only:
`npm start`

## How to Depoy
Note I have followed this article to manage versions and cache: [https://dev.to/flexdinesh/cache-busting-a-react-app-22lk](https://dev.to/flexdinesh/cache-busting-a-react-app-22lk)
1. Install [npm and nodejs](https://nodejs.org/en/download/package-manager/)
2. Clone the repository (for example: `git clone git@github.com:leviatan89/victorsesma.com.git`)
3. `npm install` to download all the npm dependencies
4. Use any of these to commit:
```
    npm version patch — for releases with only bug fixes
    npm version minor — for releases with new features w/ or w/o bug fixes
    npm version major — for major releases or breaking features
```
5. `git push --tags` to update the tags.
6. Run `npm run build`
7. Copy all the files under `build` to your static web server

## How to run audits
To update and fix library issues run: `npm audit fix`