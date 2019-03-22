# Netent

This project was built using Angular version 7.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## About The Project

This project is about a custom `Configurable` drop down which accepts dataset with generic keys i.e.(we can specify keys for our data in configuration object).

It takes 3 inputs

a) List Of Items

b) List Of Selected Items

c) Configuration Object containing 

	i) Key for the value of item e.g gameId

	ii)Key for the display value of item e.g gameName

	iii) Placeholder label e.g. Select game

	iv) Select All Text Label

	v) Unselect all Text Label

	vi)Option to enable/disable select/unselect option

	vii) Option to disable filter

	viii) Filter text
	
	ix) No Of selected Chips to display e.g 5
	
d) The components emit the list of selected items whenever the selection changes

The component is very dynamic , re-usable and flexible.

## Browser Coverage

1. Google Chrome v72

2. Internet Explorer v11

3. Edge

4. Mobile - Samsung Galaxy S8 and other emulators

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
