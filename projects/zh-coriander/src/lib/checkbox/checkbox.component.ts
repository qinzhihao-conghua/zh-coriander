import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'zh-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class ZhCheckboxComponent implements OnInit {

  constructor() { }
  @Input()
  zhDisabled = false;
  @Input()
  textFiled: string;
  @Input()
  valueFiled: string;

  @Output()
  getSelectValues = new EventEmitter<any>();
  @Input()
  set data(value: Array<any>) {
    if (value === undefined || value.length === 0) {
      this.receiveData = [
        { name: '足球', value: '1', check: true },
        { name: '篮球', value: '2', check: true },
        { name: '排球', value: '3', check: false }
      ];
    } else {
      value.forEach((item, index) => {
        const obj = {};
        if (item instanceof Object) {
          obj['name'] = item[this.textFiled];
          obj['value'] = item[this.valueFiled];
          obj['check'] = item.check || false;
        } else {
          obj['name'] = item;
          obj['value'] = item;
          obj['check'] = false;
        }
        this.receiveData.push(obj);
      });
    }
  }

  receiveData = [];

  ngOnInit(): void {
    if (this.receiveData.length <= 0) {
      this.receiveData = [
        { name: '足球', value: '1', check: true },
        { name: '篮球', value: '2', check: true },
        { name: '排球', value: '3', check: false }
      ];
    }
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
    this.getSelectValues.emit(obj);
  }

}
