import { Component } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '컴포넌트 분리 연습';
  kim: User = {
    id: 1,
    name: 'soongon',
    age: 40,
    hobby: ['fishing', 'gamble', 'golf', undefined, 'billiard'],
    address: '수원'
  };
}
