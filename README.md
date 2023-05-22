# BloggerChallenge

This project show a favorite blogger list with a search option. This project uses localStorage to preserve data.

If you start to write a name or website in search data an autocomplete is shown with name of blogger, search button will filter table below by name or website. If user clean search input then all bloggers will be displayed.

## Install dependencies

This project uses Font-Awesome to uses icons in some actions. 

Install it this way:

`npm install @fortawesome/angular-fontawesome@0.12`

Note: Version 0.12 is compatible with Angular 15 which is used by this project

Install icons like this:

`npm install @fortawesome/free-solid-svg-icons`

After that, please run this command to install all other dependencies

`npm install`

## Run in development mode

This project runs in default 'production' environment, in order to run in development mode you must run:

`ng serve --configuration=development`

## Run testing

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Otherwise run `ng serve` to run project in a localhost

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.