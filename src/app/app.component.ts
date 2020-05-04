import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola soy pedro';
  card = '../assets/noche.jpg';
  choice=false;

  hazcosas() {
    var mielemento=document.getElementById('ocultar');
window.scrollTo(0,document.body.scrollHeight);
  if(mielemento.classList.contains('d-none')){
    mielemento.classList.replace('d-none',  'd-lg');
  }else {
    mielemento.classList.replace( 'd-lg', 'd-none');
  }
  }
}
