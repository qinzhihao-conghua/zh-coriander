import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhRadioComponent } from './radio.component';

describe('ZhRadioComponent', () => {
  let component: ZhRadioComponent;
  let fixture: ComponentFixture<ZhRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZhRadioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
