import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.css']
})
export class CredentialComponent {
  constructor(private router: Router){}
 onClick(p1: any, p2: any)
 {
  this.router.navigate(["/game/:p1 :p2",{p1,p2}])
 }
}
