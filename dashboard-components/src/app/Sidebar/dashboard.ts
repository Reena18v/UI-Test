import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {}




// import { Component } from '@angular/core';

// @Component({
//   selector: 'dashboard-page',
//   standalone: true,
//   template: `<h2>Dashboard</h2><p>Welcome to your dashboard!</p>`,
// })
// export class DashboardComponent {}
