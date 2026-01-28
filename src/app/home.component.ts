import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home-container">
      <h1>Welcome to My App</h1>
      <p>This is the home page of our application.</p>
      <nav class="navigation">
        <a routerLink="/account" class="nav-link">View Account</a>
      </nav>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 800px;
      margin: 20px auto;
      padding: 20px;
      text-align: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    h1 {
      color: #333;
      margin-bottom: 20px;
    }

    p {
      color: #666;
      font-size: 1.1em;
      margin-bottom: 30px;
    }

    .navigation {
      display: flex;
      justify-content: center;
      gap: 20px;
    }

    .nav-link {
      display: inline-block;
      padding: 12px 24px;
      background: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.2s;
    }

    .nav-link:hover {
      background: #0056b3;
    }
  `]
})
export class HomeComponent {
}