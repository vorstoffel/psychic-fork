import { TestBed } from '@angular/core/testing';

import { InventoryService } from './inventory.service';

describe('InventoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventoryService = TestBed.get(InventoryService);
    expect(service).toBeTruthy();
  });

  it('should test if inventory is set', () => {
    // arrange/given (what setup is needed)

    // act/when (the subjets behavior that's under test)

    // assert/then (the verification that the subjects 
    // behaviour had the desired effect)

  });
});
