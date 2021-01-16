import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'zh-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ZhCheckboxComponent),
      multi: true
    }
  ]
})
export class ZhCheckboxComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  @Input()
  zhDisabled = false;
  @Input()
  textFiled: string;
  @Input()
  valueFiled: string;

  @Output()
  modelChange = new EventEmitter<any>();
  @Input()
  set data(value: Array<any>) {
    if (value !== undefined || value.length > 0) {
      const temp = [];
      value.forEach((item, index) => {
        const obj = {};
        if (item instanceof Object) {
          obj['name'] = item[this.textFiled];
          obj['value'] = item[this.valueFiled];
          // obj['check'] = item.check || false;
        } else {
          obj['name'] = item;
          obj['value'] = item;
          // obj['check'] = false;
        }
        temp.push(obj);
      });
      this.receiveData = [...temp];
      console.log('接收的数据', this.receiveData);
    }
  }

  receiveData = [];
  defaultValue: Array<string>;
  onChange = (newVal: any) => { };

  ngOnInit(): void {
  }
  writeValue(obj: Array<any>): void {
    if (obj) {
      this.defaultValue = [...obj];
      this.receiveData.forEach(item => {
        if (this.defaultValue.includes(item.value)) {
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
  checkboxSelected(dataItem: any, index: number): void {
    if (this.zhDisabled) {
      return;
    }
    const items = [];
    const values = [];
    this.receiveData[index].check = !dataItem.check;
    this.receiveData.forEach(item => {
      if (item.check) {
        items.push(item);
        values.push(item.value);
      }
    });
    const obj = {
      selectedItems: items,
      selectedValues: values
    };
    // console.log('选择情况', obj);
    this.onChange(values);
    this.modelChange.emit(obj);
  }

}
