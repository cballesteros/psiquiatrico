import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrasNumerosComponent } from './letras-numeros.component';

describe('LetrasNumerosComponent', () => {
  let component: LetrasNumerosComponent;
  let fixture: ComponentFixture<LetrasNumerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetrasNumerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetrasNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
