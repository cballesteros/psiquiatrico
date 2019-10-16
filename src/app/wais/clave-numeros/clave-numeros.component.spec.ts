import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaveNumerosComponent } from './clave-numeros.component';

describe('ClaveNumerosComponent', () => {
  let component: ClaveNumerosComponent;
  let fixture: ComponentFixture<ClaveNumerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaveNumerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaveNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
