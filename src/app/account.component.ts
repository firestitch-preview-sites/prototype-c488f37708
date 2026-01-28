import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface UserAccount {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  memberSince: string;
  accountType: string;
  preferences: {
    notifications: boolean;
    newsletter: boolean;
    theme: string;
  };
}

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="account-container">
      <h1>Account Information</h1>
      
      <div class="account-section">
        <h2>Personal Information</h2>
        <div class="info-grid">
          <div class="info-item">
            <label>Name:</label>
            <span>{{account.firstName}} {{account.lastName}}</span>
          </div>
          <div class="info-item">
            <label>Email:</label>
            <span>{{account.email}}</span>
          </div>
          <div class="info-item">
            <label>Phone:</label>
            <span>{{account.phone}}</span>
          </div>
          <div class="info-item">
            <label>Account Type:</label>
            <span class="account-type">{{account.accountType}}</span>
          </div>
          <div class="info-item">
            <label>Member Since:</label>
            <span>{{account.memberSince}}</span>
          </div>
        </div>
      </div>

      <div class="account-section">
        <h2>Address</h2>
        <div class="address">
          <p>{{account.address.street}}</p>
          <p>{{account.address.city}}, {{account.address.state}} {{account.address.zipCode}}</p>
        </div>
      </div>

      <div class="account-section">
        <h2>Preferences</h2>
        <div class="preferences">
          <div class="pref-item">
            <label>Notifications:</label>
            <span class="status" [class.enabled]="account.preferences.notifications">
              {{account.preferences.notifications ? 'Enabled' : 'Disabled'}}
            </span>
          </div>
          <div class="pref-item">
            <label>Newsletter:</label>
            <span class="status" [class.enabled]="account.preferences.newsletter">
              {{account.preferences.newsletter ? 'Subscribed' : 'Unsubscribed'}}
            </span>
          </div>
          <div class="pref-item">
            <label>Theme:</label>
            <span>{{account.preferences.theme}}</span>
          </div>
        </div>
      </div>

      <div class="actions">
        <button class="btn-primary">Edit Profile</button>
        <button class="btn-secondary">Change Password</button>
      </div>
    </div>
  `,
  styles: [`
    .account-container {
      max-width: 800px;
      margin: 20px auto;
      padding: 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    h1 {
      color: #333;
      border-bottom: 2px solid #007bff;
      padding-bottom: 10px;
      margin-bottom: 30px;
    }

    .account-section {
      background: #f8f9fa;
      border: 1px solid #e9ecef;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
    }

    .account-section h2 {
      color: #495057;
      margin-top: 0;
      margin-bottom: 15px;
      font-size: 1.2em;
    }

    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    .info-item {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .info-item label {
      font-weight: 600;
      color: #6c757d;
      font-size: 0.9em;
    }

    .info-item span {
      color: #333;
      font-size: 1em;
    }

    .account-type {
      background: #007bff;
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.8em;
      display: inline-block;
    }

    .address {
      color: #333;
      line-height: 1.5;
    }

    .address p {
      margin: 5px 0;
    }

    .preferences {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .pref-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .pref-item label {
      font-weight: 600;
      color: #6c757d;
    }

    .status {
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.9em;
      background: #dc3545;
      color: white;
    }

    .status.enabled {
      background: #28a745;
    }

    .actions {
      display: flex;
      gap: 10px;
      margin-top: 20px;
    }

    .btn-primary, .btn-secondary {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1em;
      transition: background-color 0.2s;
    }

    .btn-primary {
      background: #007bff;
      color: white;
    }

    .btn-primary:hover {
      background: #0056b3;
    }

    .btn-secondary {
      background: #6c757d;
      color: white;
    }

    .btn-secondary:hover {
      background: #545b62;
    }

    @media (max-width: 768px) {
      .info-grid {
        grid-template-columns: 1fr;
      }

      .actions {
        flex-direction: column;
      }
    }
  `]
})
export class AccountComponent {
  account: UserAccount = {
    id: 'USR-001',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: {
      street: '123 Main Street, Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001'
    },
    memberSince: 'March 15, 2022',
    accountType: 'Premium',
    preferences: {
      notifications: true,
      newsletter: false,
      theme: 'Light'
    }
  };
}