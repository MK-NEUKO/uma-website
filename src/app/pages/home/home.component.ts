import { Component } from '@angular/core';
import { AdventuresComponent } from "./components/adventures/adventures.component";
import { StoryComponent } from "./components/story/story.component";
import { PartsComponent } from "./components/parts/parts.component";

@Component({
  selector: 'app-home',
  imports: [AdventuresComponent, StoryComponent, PartsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
