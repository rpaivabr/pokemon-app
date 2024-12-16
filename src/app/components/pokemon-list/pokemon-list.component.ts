import { Component, computed, input } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatChipsModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  pokemons = input.required<Pokemon[] | undefined>();
  isLoading = computed(() => !this.pokemons());
}
