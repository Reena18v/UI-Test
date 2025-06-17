import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [MatListModule, MatDividerModule],
  template: `
    <mat-list>
      <mat-list-item>Client A</mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>Client B</mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>Client C</mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./clients.css'] 
})
export class ClientsComponent {}
