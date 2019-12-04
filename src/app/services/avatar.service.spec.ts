import { TestBed } from '@angular/core/testing';
import { AvatarService } from './avatar.service';
import { InMemoryStorage, StorageService } from './storage.service';

describe('AvatarService', () => {
  let avatarService: AvatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: StorageService, useClass: InMemoryStorage }
      ]
    });
    avatarService = TestBed.get(AvatarService);
  });

  it('should be created', () => {
    expect(avatarService).toBeTruthy();
  });

  it('should set and return the name "test"', () => {
    // arrange
    const expectedName = 'test';

    // assert
    avatarService.setName('test');
    const actualName = avatarService.getName();

    // act
    expect(actualName).toBe(expectedName);
  });
});
