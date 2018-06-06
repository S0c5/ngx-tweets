import { Component, OnInit, Input } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
  inputs: ['keyPublic', 'keyPrivate']
})
export class TweetComponent implements OnInit {
  title = 'Listado de Tweets!';  
  searchquery = '';
  tweetsdata;
 

  keyPublic:string;
  keyPrivate:string;

  constructor(private http: Http){}
  pedirAutorizacion() {
    var headers = new Headers();
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
    });
  }
  searchcall(){
    var headers = new Headers();
    var searchterm = 'query=' + this.searchquery;
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
    this.http.post('http://localhost:3000/search', searchterm, {headers: headers}).subscribe((res) => {
      this.tweetsdata = res.json().data.statuses;
    });
  }
 
  ngOnInit() {
    this.pedirAutorizacion()
  }

}
