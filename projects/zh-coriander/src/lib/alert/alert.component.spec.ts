import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhAlertComponent } from './alert.component';

describe('ZhAlertComponent', () => {
  let component: ZhAlertComponent;
  let fixture: ComponentFixture<ZhAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZhAlertComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
