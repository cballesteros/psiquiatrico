import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaisComponent } from './wais.component';

describe('WaisComponent', () => {
  let component: WaisComponent;
  let fixture: ComponentFixture<WaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
