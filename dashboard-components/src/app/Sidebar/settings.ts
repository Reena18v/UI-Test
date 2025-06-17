import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './settings.html',
  styleUrls: ['./settings.css'],
})
export class SettingsComponent {
  darkMode = false;

  options: string[] = ['Small View', 'Medium View', 'Large View'];

  selectedView: string | undefined;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    console.log('Dark mode toggled:', this.darkMode);
    // Add your dark mode style toggle logic here
  }
}
