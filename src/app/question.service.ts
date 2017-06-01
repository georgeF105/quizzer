import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Question } from 'app/models/question';

const API_ENDPOINT = 'https://opentdb.com/api.php';
const QUIZ_START_YEAR = 2017;

@Injectable()
export class QuestionService {

  constructor(private http: Http) { }

  getQuestions(): Observable<Array<Question>> {
    const request = `${API_ENDPOINT}?amount=10`;
    return this.http.get(request)
      .map(res => res.json().results)
      .map((questions: Question[]) => questions.map(question => this.populateAllAnswers(question)));
  }

  populateAllAnswers(question: Question): Question {
    const allAnswers = question.incorrect_answers;
    allAnswers.push(question.correct_answer);
    question.all_answers = this.shuffle(allAnswers);
    return question;
  }

  shuffle(array: string[]): string[] {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
