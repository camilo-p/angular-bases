import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'iron man';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();

  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spider man'
  }

  changeAge(): void {
    this.age = 18
  }

  resetForm(): void {
    this.name = 'iron man'
    this.age = 45
  }

}
