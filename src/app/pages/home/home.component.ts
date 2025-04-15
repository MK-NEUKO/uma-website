import { Component } from '@angular/core';
import { AdventuresComponent } from "./components/adventures/adventures.component";

@Component({
  selector: 'app-home',
  imports: [AdventuresComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
