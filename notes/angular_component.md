## Angular Component

Components are the main building block for Angular applications. Each component consists of:

* An HTML template that declares what renders on the page `componentName.component.html`
* A Typescript class that defines behavior
`componentName.component.ts`
* A CSS selector that defines how the component is used in a template
`componentName.component.css`
* Optionally, CSS styles applied to the template
* Spec Component for testing (A testing specification file)
`componentName.component.spec.ts`

<br>

### Generate a component
__`ng generate component pathForNewComponent`__

<br>

### Understanding Component
Sample code : $(component-name).component.ts.
```ts
// import Component for decorator
// import OnInit for life cycle
import { Component, OnInit } from '@angular/core';

/* decorator 
- selector: 
    name to be used for tag in html
- templateUrl: 
    path for the html template file
- styleUrls: 
    Select the styles for the component's template. In most cases, you define the styles for your component's template in a separate file. we can have multiple style urls pointing to multiple style files
*/
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

// exporting for enabling access by other files
export class AboutComponent implements OnInit {

  // injecting dependencies and executing code that has to be executed, after class getting initialised
  constructor() { }

  // init lifecycle method
  ngOnInit(): void {
  }

}
```

COMPONENT DECORATOR:  
The @Component decorator identifies the class immediately below it as a component class, and specifies its metadata. Class is not a component until you mark it as one with the @Component decorator.

<br>

For smaller files,
we can directly specify template as follows
```ts
@Component({
  selector: 'app-component-overview',
  template: `<h1>Hello World!</h1>
             <p>This template definition spans
              multiple lines.</p>`
})
```

using back ticks to have multi-line template.

`NOTE`: \
__An Angular component requires a template defined using template or templateUrl. You cannot have both statements in a component.__

Declaring Styles within the same component file
```ts
@Component({
  selector: 'app-component-overview',
  template: '<h1>Hello World!</h1>',
  styles: ['h1 { font-weight: normal; }']
})
```

#### Providers: 
External service dependencies required for this component. An array of providers for services that the component requires. In the example, this tells Angular how to provide the HeroService instance that the component's constructor uses to get the list of heroes to display.
```ts
@Component({
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers:  [ HeroService ]
})
export class HeroListComponent implements OnInit {
/* . . . */
}
```
