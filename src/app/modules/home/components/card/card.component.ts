import { Component, OnInit, Input } from '@angular/core';
import { Libro } from '../../../../models/libro.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() libro: Libro;

  constructor() {}

  ngOnInit(): void {}
}
