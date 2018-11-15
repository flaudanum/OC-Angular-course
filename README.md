# ApplicationCours

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# ANGULAR basics

## Installation

First install **Node.js**. Next update npm to the latest version:

```
npm install -g npm@latest
```

Install **Angular command line interface**:

```
npm install -g @angular/cli
```

Install the package [Bootstrap](https://getbootstrap.com/):

```
npm install bootstrap@latest
or
npm install bootstrap@3.3.7
```
Beware of incompatibilities between versions 3.x and 4.x.

## Getting the version of a package

Use command `npm -v`:
```
npm -v <package name>
```

## Create a new project

For creating a new *Angular project* called `my-new-project`:

```
ng new my-new-project
```

A new folder is created. `ng` is the base command of [Angular CLI](https://cli.angular.io/).

For creating  a new project with SCSS style sheets and without unit test templates:

```
$ ng new mon-projet-angular --style=scss --skip-tests=true
```

## Run the application

Change to the directory of the project and open the application in the default web browser with the command:

```
$ ng serve --open --poll=1000
```

Option ` --poll=1000` is required for auto-reload.

## Generate a new component in the application

From the app's main path, a component called `my-new-comp` is created as follows:

```
$ ng generate component my-new-comp
$ ng g c my-new-comp
```

This command makes two modifications in directory `src/`. First a new folder with the new component's name is created in `src/app/`.
Second, file `src/app/app.module.ts` is updated with:

* an importation of the component:
  ```typescript
  import { AuthComponent } from './my-new-comp/my-new-comp.component';
  ```
* the attribute `import` of the argument of the decorator `@NgModule` is updated with the class identifier `MyNewComponent`

## OpenClassroom's blog site activity

First, create a new project with command `ng new`. The style sheets of the project use *SCSS*. Code templates for *unit testing* are skipped.

```
$ ng new activite-blog --style=scss --skip-tests=true
```

Next change to the project directory and install pacakge *Bootstrap* in the project. The option `--save` not required anymore for registering the package in the dependency file `package.json`.

```
$ cd activite-blog/
$ npm install boostrap
or
$ npm install --save-dev bootstrap@latest
```

Bootstrap must be manually added to the project. Edit file `.angular-cli.json` and add the path to the `bootstrap.css` style sheet to the array `.apps[0].styles` in the JSON document. The path of reference is `src/`:

```JSON
{
  "apps": [
    {
      "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.css",
        "styles.scss"
      ],
    }
  ],
}
```

Run the application:

```
$ ng serve --open
```

### Components post-list and post-list-item

Creation of component `post-list`:

```
$ ng g c post-list
```

The associated class is named `PostListComponent`. This command created the folder `src/app/post-list/` and its content. File `src/app/app.module.ts` was also modified:

In array `declarations`
```javascript
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

and with the importation of the newly created component:

```javascript
import { PostListComponent } from './post-list/post-list.component';
```

Creation of component `post-list-item`:

```
$ ng g c post-list-item
```

## Property binding

Do not forget to import `Input`.

```javascript
import { Component, Input, OnInit } from '@angular/core';
```
