import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/domain/Player';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.css'],
})
export class TurnComponent implements OnInit {
  @Input() player: Player = 'X';

  constructor() {}

  ngOnInit(): void {}
}
