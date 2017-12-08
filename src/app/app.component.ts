import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public static API_ENDPOINT = 'https://opentdb.com/api.php?amount=10&category=';
  public TITLE = 'TRIVIA';

}
