import { TestBed } from '@angular/core/testing';

import { GamedealService } from './gamedeal.service';

describe('GamedealService', () => {
  let service: GamedealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamedealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
