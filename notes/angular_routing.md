## Angular routing

use RouterModule, Routes from Angular router.\

Registering in `app.module.ts`

```ts
// Router Module for handling routing
// Routes (DataType) for defining Routes
import { RouterModule, Routes } from '@angular/router';

// defining routes, can be done in seperate file, and exported
const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
];

// and add it in imports
// enable tracing for debugging the routes.

imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ]
```

<br>

rendering routes with components (in html)
```html
<router-outlet></router-outlet>
```
<br>

redirecting to links, using `a` tags
```html
<a routerLink="/about">About </a>
```


Accessing the current components url through router
inject router in component
```ts
import { Router } from '@angular/router';

  // injecting
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  hasRoute(route: string) {
    // accessing url
   return this.router.url === route;
  }
```