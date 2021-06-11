## __Events__

used in () parameters like

#### `click` - Handle Click
***
```html
<button (click) = "onClick()"> {{ text }} </button>
```
click is a standard event,
onClick, is a function declared in component to handle this event.

<br>


#### `dblclick` - Double click handling
***
```html
<button (dblclick) = "onDbClick()"> {{ text }} </button>
```
dblclick is a standard event, to handle double click.
onDbClick, is a function declared in component to handle this event.

<br>

#### `ngSubmit` - Handling form submit
***
```html
<form *ngIf="showAddTask" class="add-form" (ngSubmit)="onSubmit()">
```

<br>

#### `Custom Events`
***
listening to custom event fired through event emitter
```html
<app-button (btnClick) = "handleBtnClick()"></app-button>
```
