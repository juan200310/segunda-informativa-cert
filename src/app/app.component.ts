import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pagina-informativa-mega';
  isMenuOpen = false;
  active:string='inicio'
  constructor(private route: ActivatedRoute,private router: Router){
   
  }

  toggleMenu(tab:string) {
    this.isMenuOpen = !this.isMenuOpen;
    this.active=tab
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
