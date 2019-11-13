import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiscComponent } from './wisc.component';

describe('WiscComponent', () => {
  let component: WiscComponent;
  let fixture: ComponentFixture<WiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
