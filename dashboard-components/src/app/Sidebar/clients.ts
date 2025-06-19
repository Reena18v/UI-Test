import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
  ],
  template: `
    <table mat-table [dataSource]="dataSource" class="minimal-table">

      <!-- Clients Column -->
      <ng-container matColumnDef="clients">
        <th mat-header-cell *matHeaderCellDef>Clients</th>
        <td mat-cell *matCellDef="let element">{{ element.client }}</td>
      </ng-container>

      <!-- Contact Column -->
      <ng-container matColumnDef="contact">
        <th mat-header-cell *matHeaderCellDef>Contact</th>
        <td mat-cell *matCellDef="let element">{{ element.contact }}</td>
      </ng-container>

      <!-- Email Column -->
      <ng-container matColumnDef="email">
        <th mat-header-cell *matHeaderCellDef>Email</th>
        <td mat-cell *matCellDef="let element">{{ element.email }}</td>
      </ng-container>

      <!-- Status Column -->
      <ng-container matColumnDef="status">
        <th mat-header-cell *matHeaderCellDef>Status</th>
        <td mat-cell *matCellDef="let element">{{ element.status }}</td>
      </ng-container>

      <!-- Location Column -->
      <ng-container matColumnDef="location">
        <th mat-header-cell *matHeaderCellDef>Location</th>
        <td mat-cell *matCellDef="let element">{{ element.location }}</td>
      </ng-container>

      <!-- Actions Column -->
      <ng-container matColumnDef="actions">
        <th mat-header-cell *matHeaderCellDef>Actions</th>
        <td mat-cell *matCellDef="let element">
          <button mat-button
                  (click)="$event.stopPropagation()"
                  [matMenuTriggerFor]="actionMenu"
                  aria-label="Client actions">
            Details
          </button>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns" class="header-row"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;" class="data-row"></tr>
    </table>

    <mat-menu #actionMenu="matMenu">
      <button mat-menu-item>View Profile</button>
      <mat-divider></mat-divider>
      <button mat-menu-item>Edit Client</button>
    </mat-menu>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap');

    :host {
      font-family: 'Nunito Sans', sans-serif;
      color: #222;
      display: block;
      padding: 16px;
      background-color: #fff;
    }

    table.minimal-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0 12px; /* vertical spacing between rows */
      font-size: 14px;
      table-layout: fixed;
    }

    th.mat-header-cell {
      text-align: left;
      font-weight: 600;
      padding: 12px 16px;
      color: #444;
      user-select: none;
      background-color: transparent; /* remove any bg color */
      border-bottom: 1px solid #e0e0e0; /* subtle bottom border for header */
    }

    td.mat-cell {
      background: #fafafa;
      padding: 14px 16px;
      color: #555;
      border-bottom: none !important;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    tr.data-row td:first-child {
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    }
    tr.data-row td:last-child {
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    }

    /* subtle horizontal line between rows */
    tr.data-row:not(:last-child) td {
      border-bottom: 1px solid #e0e0e0;
    }

    button[mat-button] {
      font-weight: 600;
      color: #1976d2;
      text-transform: none;
      min-width: 64px;
      padding: 6px 12px;
      border-radius: 16px;
    }
    button[mat-button]:hover {
      background-color: #e3f2fd;
    }

    tr.header-row th {
      padding-bottom: 18px;
    }
  `]
})
export class ClientsComponent {
  displayedColumns = ['clients', 'contact', 'email', 'status', 'location', 'actions'];
  dataSource = [
    { client: 'Client A', contact: 'John Smith', email: 'jsmithexample.com', status: 'Active', location: 'New York' },
    { client: 'Client B', contact: 'Jane Doe', email: 'jdoeexample.com', status: 'Inactive', location: 'Los Angeles' },
    { client: 'Client C', contact: 'Bob Johnson', email: 'bjohnsonexample.com', status: 'Active', location: 'Chicago' },
    { client: 'Client D', contact: 'Alice Brown', email: 'abrownexample.com', status: 'Pending', location: 'Houston' },
  ];

}

