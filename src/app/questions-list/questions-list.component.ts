import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Observable } from 'rxjs/Observable';
import { Question } from '../models/question';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {

  public questions$: Observable<Question[]>;

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.questions$ = this.questionService.getQuestions();
  }

}
