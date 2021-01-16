import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library-use';

  checkboxData = [
    { name: '足球', value: '1' },
    { name: '篮球', value: '2' },
    { name: '排球', value: '3' }
  ];
  radioData = [
    { name: '唱歌', value: '1' },
    { name: '跳舞', value: '2' },
    { name: 'rapper', value: '3' }
  ];
  checkboxDefault = ['2'];
  radioDefault = '2';
  modelChange(value): void {
    console.log('点击', value);
  }
  radioModelChange(value): void {
    console.log('radio点击', value);
  }
}
