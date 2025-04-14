import { Component } from '@angular/core';
import { HeaderComponent } from "./layout/components/header/header.component";
import { ContentComponent } from "./layout/components/content/content.component";
import { FooterComponent } from "./layout/components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uma-website';
}
