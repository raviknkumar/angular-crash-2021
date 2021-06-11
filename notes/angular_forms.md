## Forms
***

We use Angular forms module for handling forms with angular.
Registering module in `app.module.ts`

```ts
import { FormsModule } from '@angular/forms';

  imports: [
    FormsModule
  ],
```

[] => for directives
() => for event
binding with ngModel \
```html
<input
      type="text"
      name="day"
      [(ngModel)]="day"
      id="day"
      placeholder="Add Day & Time"
    />
```    