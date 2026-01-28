import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: 'April 15, 1990',
    gender: 'Male',
    accountType: 'Premium',
    memberSince: 'March 2022',
    address: {
      street: '123 Main Street, Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    },
    emergencyContact: {
      name: 'Jane Doe',
      relation: 'Spouse',
      phone: '+1 (555) 987-6543'
    },
    employment: {
      company: 'Tech Solutions Inc.',
      position: 'Senior Software Developer',
      department: 'Engineering',
      startDate: 'January 2021',
      salary: '$95,000/year',
      employeeId: 'EMP-12345',
      manager: 'Sarah Johnson'
    },
    statistics: {
      lastLogin: 'Today at 2:45 PM',
      totalLogins: '1,247',
      profileViews: '3,892',
      messagesSent: '567',
      filesUploaded: '89',
      storageUsed: '2.3 GB of 10 GB'
    },
    financial: {
      accountBalance: '+$4,250.75',
      monthlySpending: '$1,820.40',
      creditScore: '785 (Excellent)',
      paymentMethod: 'Visa •••• 4532',
      nextBilling: 'December 15, 2024',
      subscriptionStatus: 'Active'
    },
    preferences: {
      language: 'English (US)',
      timezone: 'Eastern Standard Time (EST)',
      theme: 'Light Mode',
      notifications: true,
      newsletter: false,
      marketingEmails: true,
      smsNotifications: false
    },
    recentActivity: [
      {
        action: 'Profile updated',
        date: '2 hours ago'
      },
      {
        action: 'Password changed',
        date: '1 day ago'
      },
      {
        action: 'Document uploaded',
        date: '3 days ago'
      },
      {
        action: 'Payment processed',
        date: '1 week ago'
      },
      {
        action: 'Account verification completed',
        date: '2 weeks ago'
      }
    ],
    connectedAccounts: [
      {
        platform: 'Google',
        icon: '🔗',
        connected: true
      },
      {
        platform: 'Facebook',
        icon: '📘',
        connected: true
      },
      {
        platform: 'LinkedIn',
        icon: '💼',
        connected: false
      },
      {
        platform: 'Twitter/X',
        icon: '🐦',
        connected: true
      },
      {
        platform: 'GitHub',
        icon: '⚡',
        connected: false
      }
    ]
  };
}