import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'zh-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class ZhAlertComponent implements OnInit {

  constructor(
  ) { }

  @Input()
  title: string;
  @Input()
  content: string;
  @Output()
  operation: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input()
  onlySureBtn = false;

  ngOnInit(): void {
  }
  operationClick(value: boolean): void {
    this.operation.emit(value);
  }

}
