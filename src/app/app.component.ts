import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pagina-informativa-mega';
  isMenuOpen = false;
  active:string='inicio'

  constructor(private route: ActivatedRoute,private router: Router){

  }
  ngOnInit(): void {

  }
  toggleMenu(activeLink?: string) {
    if (activeLink) {
      this.active = activeLink;
      this.isMenuOpen = false;
    } else {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
  toggleMenuActive(tab:string){
    if(this.isMenuOpen){
      this.toggleMenu(tab)
    }
  }

  navigateToFragment(fragment: string): void {
    this.router.navigate(['inicio'], { fragment });
  }
}
