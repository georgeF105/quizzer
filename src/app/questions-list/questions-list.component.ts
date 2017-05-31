import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'app/question.service';
import { Observable } from 'rxjs/Observable';
import { Question } from 'app/models/question';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {

  public questions$: Array<Question>;
  public question: Question;
  public currentQuestionNumber: number;

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.currentQuestionNumber = 1;
    this.questionService.getQuestions()
      .subscribe(data => {
        console.log(data);
        this.questions$ = data;
        this.question = this.questions$[0];
      });
  }

}
