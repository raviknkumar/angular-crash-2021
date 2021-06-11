## Directives

Directives are written in [] braces
with name of directive, assigned to a value.

ATTRIBUTE DIRECTIVES (Controls styling)
### ngStyle
***

```html
<button [ngStyle]="{'background-color: color}"> </button> 
<!-- html way -->
<!-- <button style='background-color: green'> </button> -->
```
color is data passed, accessible inside component.

### ngClass
***
used for conditional application of classes
```html
<div [ngClass]= "{className1: condition1, className2: condition2"}>
```
<br>

STRUCTURAL DIRECTIVES (Controls behaviour)

### ngFor
***
for iterating over values
```html
<app-task-item
  *ngFor="let task of tasks"
  [task]="task"
></app-task-item>
```

### ngIf
___
for iterating over values
```html
<!-- render only if task is active -->
<app-task-item
  *ngIf="task.active  === true"
  [task]="task"
></app-task-item>
```