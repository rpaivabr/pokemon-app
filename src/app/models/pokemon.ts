export type PokemonResults = {
  count: number;
  next: boolean;
  previous: boolean;
  results: Pokemon[];
}

export type Pokemon = {
  id: number;
  name: string;
  types: string[];
  species: string;
  description: string;
  image: {
    sprite: string;
    thumbnail: string;
    hires: string;
  };
  evolutions: number[];
}

