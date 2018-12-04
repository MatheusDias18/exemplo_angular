import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  registerView = 'regView0';


  constructor() { }

  ngOnInit() {
  }

  public login(){
    this.registerView = 'regView1';
  }

  public cvli(){
    this.registerView = 'regView2';
  }

  public home(){
    alert('Deslogou!');
    this.registerView = 'regView0';
  }

  public cadastrar(){
    alert('Cadastrou!');
    this.registerView = 'regView1';
  }
}
