import { PokemonFilterTextPipe } from './pokemon-filter-text.pipe';

describe('PokemonFilterTextPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonFilterTextPipe();
    expect(pipe).toBeTruthy();
  });
});
