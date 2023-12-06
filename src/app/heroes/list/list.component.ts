import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Thor', 'Capitan America', 'Iron man', 'Hulk'];
  public deleteHeroes?: string;

  removeLastHero(): void {
    this.deleteHeroes = this.heroNames.pop();
  }
}
