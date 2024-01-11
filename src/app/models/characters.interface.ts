import { Character } from './character.interface';

export interface Characters {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: Character[];
}
