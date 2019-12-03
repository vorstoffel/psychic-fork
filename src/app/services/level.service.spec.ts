import { TestBed } from '@angular/core/testing';
import { LevelService } from './level.service';


fdescribe('LevelService', () => {
  let levelService: LevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    levelService = TestBed.get(LevelService);
    levelService.clear();
  });

  it('should be created', () => {
    expect(levelService).toBeTruthy();
  });

  it('should set current level to 1', () => {
    // arrange 
    const expectedLevel = 1;

    // act 
    levelService.setLevel(expectedLevel);
    const actualLevel = levelService.getLevel();

    // assert
    expect(actualLevel).toBe(expectedLevel);
  });

  it('should set current level to 2', () => {
    // arrange 
    const expectedLevel = 2;

    // act 
    levelService.setLevel(expectedLevel);
    const actualLevel = levelService.getLevel();

    // assert
    expect(actualLevel).toBe(expectedLevel);
  });

  it('should return 1 if no level is set', () => {
    // arrange
    const expectedLevel = 1;

    // act 
    const actualLevel = levelService.getLevel();

    // assert
    expect(actualLevel).toBe(expectedLevel);
  });
});
