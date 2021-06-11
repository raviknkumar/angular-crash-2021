import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MynewoneComponent } from './mynewone.component';

describe('MynewoneComponent', () => {
  let component: MynewoneComponent;
  let fixture: ComponentFixture<MynewoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MynewoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MynewoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
