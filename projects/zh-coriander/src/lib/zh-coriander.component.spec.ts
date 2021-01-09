import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhCorianderComponent } from './zh-coriander.component';

describe('ZhCorianderComponent', () => {
  let component: ZhCorianderComponent;
  let fixture: ComponentFixture<ZhCorianderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZhCorianderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhCorianderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
