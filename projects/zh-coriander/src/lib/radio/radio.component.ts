import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'zh-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ZhRadioComponent),
      multi: true
    }
  ]
})
export class ZhRadioComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  @Input()
  zhDisabled = false;
  @Input()
  textFiled: string;
  @Input()
  valueFiled: string;
  @Input()
  canCancel = false;

  @Input()
  set data(value: Array<any>) {
    if (value !== undefined || value.length > 0) {
      const random = (Math.floor(Math.random() * 1000000)).toString();
      const temp = [];
      value.forEach((item, index) => {
        const obj = {
          key: `radio-${random}`
        };
        if (item instanceof Object) {
          obj['name'] = item[this.textFiled];
          obj['value'] = item[this.valueFiled];
          obj['check'] = false;
        } else {
          obj['name'] = item;
          obj['value'] = item;
          obj['check'] = false;
        }
        temp.push(obj);
      });
      this.receiveData = [...temp];
    }
  }
  @Output()
  modelChange: EventEmitter<any> = new EventEmitter<any>();

  receiveData = [];
  onChange = (newVal: any) => { };

  ngOnInit(): void {
  }
  writeValue(obj: string): void {
    if (obj) {
      this.receiveData.forEach(item => {
        if (item.value === obj) {
          item.check = true;
        }
      });
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }
  radioCheck(dataItem: any, index: number, event: Event): void {
    // event.stopPropagation();
    if (this.zhDisabled) {
      return;
    }
    this.receiveData.forEach(item => {
      if (item.value !== dataItem.value) {
        item.check = false;
      }
    });
    if (this.canCancel) {
      dataItem.check = !dataItem.check;
      if (dataItem.check) {
        this.onChange(dataItem.value);
      } else {
        this.onChange(null);
      }
    } else {
      dataItem.check = true;
      this.onChange(dataItem.value);
    }
    // console.log('修改结果', this.receiveData);
    this.modelChange.emit(this.receiveData[index]);
  }
}
