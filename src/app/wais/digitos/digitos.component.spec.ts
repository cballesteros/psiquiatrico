import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitosComponent } from './digitos.component';

describe('DigitosComponent', () => {
  let component: DigitosComponent;
  let fixture: ComponentFixture<DigitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
