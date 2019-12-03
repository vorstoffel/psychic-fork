import { Component, OnInit } from '@angular/core';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss']
})
export class Level2Component implements OnInit {

  constructor(private levelService: LevelService,
  ) { }

  ngOnInit() {
    this.levelService.setLevel(2)
  }

}
