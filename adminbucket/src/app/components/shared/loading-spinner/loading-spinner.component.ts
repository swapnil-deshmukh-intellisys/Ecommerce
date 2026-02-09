import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: `
    <div class="loading-spinner" [style.display]="isLoading ? 'block' : 'none'">
      <div class="spinner-container">
        <div class="spinner"></div>
        <p *ngIf="message" class="loading-message">{{ message }}</p>
      </div>
    </div>
  `,
  styles: [`
    .loading-spinner {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    .spinner-container {
      text-align: center;
    }

    .spinner {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #3498db;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
      margin: 0 auto 10px;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .loading-message {
      margin: 10px 0 0 0;
      font-size: 16px;
      color: #333;
    }
  `]
})
export class LoadingSpinnerComponent {
  @Input() isLoading = false;
  @Input() message = 'Loading...';
}
