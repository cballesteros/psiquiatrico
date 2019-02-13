import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZungComponent } from './zung.component';

describe('ZungComponent', () => {
  let component: ZungComponent;
  let fixture: ComponentFixture<ZungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
