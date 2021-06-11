## Http Client

import from angular.
which is directly installed with angular.

it is same as fetch api / axios.

```ts
import {HttpClient, HttpHeaders} from '@angular/common/http';
```

using it in service
```ts
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  // access HttpClient using this.http as local variable
}
```

#### registring module
add it to `app.module.ts`

```ts
import { HttpClientModule } from '@angular/common/http';

// and add it to `imports`
  imports: [
      HttpClientModule
  ]
```

