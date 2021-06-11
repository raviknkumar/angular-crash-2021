# Angular notes

By default uses type script for files.


testing tools:
* karma
* jasmine

e2e: end to end testing

package.json:

```json
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "server": "json-server --watch db.json --port 5000"
```

tsconfig.json:
for configuring type script.

angular.json:
config file for angular

src:\
app:\
contains main application code

index.html
single page loaded in browser.
`<app-root>` is loaded with the angular components

main.ts:
* entry point to angular
* imports AppModule [Forms Module, http Module, create custom ones].
* App module is bootstrapped 
```ts
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
```
cli Automatically  creates components and writes this boiler plate code.

`BrowserModule` interact with DOM. \
`providers` \
`bootstrap`

### __Component files:__

#### component
component.ts : Type script file
main class with properties and methods
supply templates and style sheet

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title: string = "hello world"
    constructor(){
        // runs when ever a component is initialised
    }

    ngOnInit(): void {
        
        // life cycle to execute on component getting initialised.

        // http requests to fire for loading component.
    }
}
```
@Component is a decorator, using these props \
`selector`: used as tag in the html code used to embed it. \
generally named as `app-nameOfComponent` 

`templateUrl`: html file we use for rendering in browser.
`styleUrl`: we can have multiple style urls

#### __template__
html file specifying the template \
`<selector></selector>` this loads component in page. \
no need to specify any imports.


#### css file
css for styling

#### spec
spec file for tsting

Component contains properties, methods and life cycle methods.
by type-script, we can add the types for all properties

`$paramName: $type = $value` \
eg: myString: string = "hello world"
types available: `string`, `number`, `boolean` \
in the above component, title is a property.

__to use it in html, we can use string interpolation__
```html
<h1>{{ title }} </h1>
```
curly braces can contain any valid js expressions
``` js
{{ 1 + 5}}
{{ "hello".toUpperCase()}}
```

`styles.css`
is the global style sheet used in entire app


### generate a component
```
ng generate component path/name
ng generate component components/header
```
generates:
```
header.component.html
header.component.css
header.component.spec.ts
header.component.ts
```


### passing data to components
```html
<app-button color="red" text="click me!"></app-button>
```

in component
```ts
// import Input, to access input parameters passed to component

// import Output to access EventEmitters

// import Event Emitter to access EventEmitters

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {

  // inside class, declare with @Input() name: datatype;
  @Input() text: string;
  @Input() color: string;
  
  // @Output: nameOfevent = new EventEmitter();
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
```


#### Interface
```ts
export interface Task {
  id?: number; //optional
  text: string;
  day: string;
  reminder: boolean;
}
```

this interface can be used as custom dataType (like a class),

```ts
export const tasks :Task[] = [{
    "id" : 123,
    "text" : "hello",
    "day": "2021-06-21",
    "reminder" : true
}] 
```


### Managing Dependencies

using npm / yarn / ng: \
`ng add dependency_name` \
or \
`npm i dependency_name`

for new dependencies,
we have to bring the new module,
using import and add it to AppModule.

```ts
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// add module to imports
// for custom components, add it to declarations
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
```



