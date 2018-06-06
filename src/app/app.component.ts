import { Component, Input } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { TweetComponent } from './tweet/tweet.component';

@Component({
  selector: 'app-root',
  //consume the twitter component in the next direction
  template:`
  	<div *ngIf="keys.public">
  		<div *ngIf="keys.private">
  			<tweet [keyPublic]="keys.public" [keyPrivate]="keys.private"></tweet>
  		</div>
  	</div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	keys= {
		public:'sjfiehr8asdjasd',
		private:'dqwkljlksdas'
	}


}

