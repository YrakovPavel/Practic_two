import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "My-app";
  A: number = 0;
  B: number = 0;
  H: number = 0;
  answer: number = 0;

  public Calculate(){
    if (this.A < 0 || this.B < 0 || this.H < 0){
      alert("Значения длин не могут быть меньше 0 !")
    }
    else{
      this.answer = 0.5 * (this.A + this.B) * this.H;
    }
  }
}
