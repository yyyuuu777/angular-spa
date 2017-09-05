// name need end with .service.ts if have many word split these with -

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock-heros';
// ensure not lose '()' otherWises , there will be a mistake that difficult to detect
@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROS);
  }
}
