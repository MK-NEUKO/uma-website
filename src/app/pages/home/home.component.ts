import { Component } from '@angular/core';
import { AdventuresComponent } from "./components/adventures/adventures.component";
import { StoryComponent } from "./components/story/story.component";

@Component({
  selector: 'app-home',
  imports: [AdventuresComponent, StoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
