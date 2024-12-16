import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { minimumDelay } from './utils/minimun-delay';
import type { PokemonResults } from './models/pokemon';
import { HeaderComponent } from './components/header/header.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonFavoritesComponent } from './components/pokemon-favorites/pokemon-favorites.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, PokemonListComponent, PokemonFavoritesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private http = inject(HttpClient);
  page = signal('pokemon-list');
  
  private getPokemons$ = minimumDelay(this.http.get<PokemonResults>('http://localhost:3000/pokemons?limit=151'))
    .pipe(map(res => res.results));
  pokemons = toSignal(this.getPokemons$);

  private getFavoritePokemons$ = this.http.get<any>('http://localhost:3000/pokemons/favorites');
  favoritePokemons = toSignal(this.getFavoritePokemons$, { initialValue: [] as any[] });
  countFavorite = computed(() => this.favoritePokemons().length);

  changePage(page: string) {
    this.page.set(page);
  }
}