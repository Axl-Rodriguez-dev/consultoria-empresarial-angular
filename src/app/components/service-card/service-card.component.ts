import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Service } from '../../models/models';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {
  @Input() service!: Service;
  @Input() variant: 'home' | 'catalog' = 'home';
  @Input() index = 0;

  private readonly ROMAN = ['I', 'II', 'III'];

  constructor(private favoritesService: FavoritesService) {}

  get isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.service.id);
  }

  toggleFavorite(): void {
    this.favoritesService.toggle(this.service.id);
  }

  get romanNumeral(): string {
    return this.ROMAN[this.index] ?? String(this.index + 1);
  }
}
