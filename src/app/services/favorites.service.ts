import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private readonly KEY = 'ce_favoritos';
  private ids = signal<string[]>(this.load());

  private load(): string[] {
    try {
      return JSON.parse(localStorage.getItem(this.KEY) ?? '[]');
    } catch {
      return [];
    }
  }

  isFavorite(id: string): boolean {
    return this.ids().includes(id);
  }

  toggle(id: string): void {
    const current = this.ids();
    const updated = current.includes(id)
      ? current.filter(f => f !== id)
      : [...current, id];
    this.ids.set(updated);
    localStorage.setItem(this.KEY, JSON.stringify(updated));
  }
}
