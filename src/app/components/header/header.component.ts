import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  darkMode = true;

  constructor() {}

  ngOnInit(): void {}

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
  }
}
