import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatMenuModule,
    MatExpansionModule,
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  changeDetection: ChangeDetectionStrategy.Default // Try Default first to avoid OnPush issues
})
export class DashboardComponent {
  showProgressTracker = false;

  // Use simple boolean for testing expand panel open state
  panelOpenState = false;

  onProjectClick(project: string) {
    this.showProgressTracker = project === 'project1';
  }

  setPanelState(open: boolean) {
    this.panelOpenState = open;
  }
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'dashboard-page',
//   standalone: true,
//   template: `<h2>Dashboard</h2><p>Welcome to your dashboard!</p>`,
// })
// export class DashboardComponent {}
