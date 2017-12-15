import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service'; 

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  message$ ;
  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
    console.log('this is quote components');
    console.log(this.firebase);
    this.message$ = this.firebase;
  }

}
