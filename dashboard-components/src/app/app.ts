import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';  
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,      
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  // providers: [provideRouter(routes)],  // <--- uncomment this to enable routing
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  opened = true;

  toggleSidenav() {
    this.opened = !this.opened;
  }
}

// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { provideRouter } from '@angular/router';
// import { routes } from './app.routes';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     RouterOutlet,
//     MatToolbarModule,
//     MatSidenavModule,
//     MatIconModule,
//     MatListModule,
//     MatButtonModule,
//     MatCardModule
//   ],
//   // providers: [provideRouter(routes)],
  
//   // templateUrls: './app.html',
//   styleUrls: ['./app.css']
// })
// export class App {
//   // protected title = 'dashboard-components';
// }

// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected title = 'dashboard-components';
// }
