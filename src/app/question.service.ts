import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Question } from 'app/models/question';

const API_ENDPOINT = 'http://qriusity.com/v1/questions';
const QUIZ_START_YEAR = 2017;
@Injectable()
export class QuestionService {

  constructor(private http: Http) { }

  getQuestions(): Observable<Array<Question>> {
    const request = `${API_ENDPOINT}?page=${this.getPage()}&limit=10`;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(request, headers)
      .map(res => res.json().items);
  }

  getPage() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getMilliseconds() - start.getMilliseconds();
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    const year = now.getFullYear() - QUIZ_START_YEAR;
    return day + (year * 365);
  }
}
