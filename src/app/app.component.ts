import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="app-container">
      <header class="app-header">
        <nav class="main-nav">
          <a routerLink="/" class="nav-brand">My App</a>
          <div class="nav-links">
            <a routerLink="/" class="nav-link">Home</a>
            <a routerLink="/account" class="nav-link">Account</a>
          </div>
        </nav>
      </header>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .app-header {
      background: #343a40;
      color: white;
      padding: 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .main-nav {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
    }

    .nav-brand {
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-link {
      color: #adb5bd;
      text-decoration: none;
      transition: color 0.2s;
    }

    .nav-link:hover {
      color: white;
    }

    .main-content {
      min-height: calc(100vh - 80px);
    }

    @media (max-width: 768px) {
      .main-nav {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
      }

      .nav-links {
        gap: 1rem;
      }
    }
  `],
})
export class AppComponent {
}