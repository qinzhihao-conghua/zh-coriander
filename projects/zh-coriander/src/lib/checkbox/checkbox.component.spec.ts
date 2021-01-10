import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhCheckboxComponent } from './checkbox.component';

describe('ZhCheckboxComponent', () => {
  let component: ZhCheckboxComponent;
  let fixture: ComponentFixture<ZhCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZhCheckboxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
