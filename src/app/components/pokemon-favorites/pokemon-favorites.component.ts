import { Component, computed, input } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-pokemon-favorites',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatChipsModule],
  templateUrl: './pokemon-favorites.component.html',
  styleUrl: './pokemon-favorites.component.scss'
})
export class PokemonFavoritesComponent {
  favoritePokemons = input.required<Pokemon[] | undefined>();
  isLoading = computed(() => !this.favoritePokemons());
}
