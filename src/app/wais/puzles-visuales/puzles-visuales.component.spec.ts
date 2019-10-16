import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzlesVisualesComponent } from './puzles-visuales.component';

describe('PuzlesVisualesComponent', () => {
  let component: PuzlesVisualesComponent;
  let fixture: ComponentFixture<PuzlesVisualesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzlesVisualesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzlesVisualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
