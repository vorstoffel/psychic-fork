import { TestBed } from '@angular/core/testing';
import { InventoryService } from './inventory.service';
import { StorageService, InMemoryStorage } from './storage.service';
import { weaponsMock } from '../mocks/weapons-mock';
import { inventoryMock } from '../mocks/inventory-mock';
import { Inventory } from '../models/inventory.model';
import { take } from 'rxjs/operators';

describe('InventoryService', () => {
  let inventoryService: InventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: StorageService, useClass: InMemoryStorage }
      ]
    });
    inventoryService = TestBed.get(InventoryService);
  });

  it('should be created', () => {
    expect(inventoryService).toBeTruthy();
  });

  it('should test if inventory is set', () => {
    //   isInventorySet(): boolean {

  });

  it('should set and get inventory "test"', async () => {
    // arrange
    const expectedInventory: Inventory = { ...inventoryMock };

    // act
    inventoryService.setInventory(weaponsMock);
    const actualInventory = await inventoryService.getInventory().pipe(
      take(1)
    ).toPromise();

    // assert
    expect(actualInventory).toEqual(expectedInventory);
  });
});
