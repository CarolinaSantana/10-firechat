import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor( public _cs: ChatService ) { }

  ngOnInit(): void {
  }

  logIn( provider: string ) {
    this._cs.login( provider );
  }

}
