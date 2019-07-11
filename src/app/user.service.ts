import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  addTwoNumber(a: number = 0, b: number = 0): number {
   return a + b;
  }

  // 사용자 전체보기
  getAllUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(function (res) {
        console.log(res);
      });
  }

  // 사용자 상세보기
  getUserByUserid(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/3');
  }
  // 사용자 등록
  // 사용자 수정
  // 사용자 삭제

}
