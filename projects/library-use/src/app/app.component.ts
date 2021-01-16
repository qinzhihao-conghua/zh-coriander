import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library-use';

  checkboxData = [
    { name: '足球', value: '1', check: true },
    { name: '篮球', value: '2', check: true },
    { name: '排球', value: '3', check: false }
  ];
  default = ['2'];
  modelChange(value): void {
    console.log('点击', value);
  }
}
