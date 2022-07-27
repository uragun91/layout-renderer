import { Component, Input, OnInit } from '@angular/core';
import { IElement } from '../layout.types';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss'],
})
export class ElementComponent implements OnInit {
  @Input() children: IElement[];

  ngOnInit(): void {}
}
