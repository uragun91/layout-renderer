import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { IElement } from '../layout.types';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss'],
})
export class ElementsComponent implements OnInit {
  @Input() elements: IElement[];
  @Input() isRoot: boolean;

  @ViewChild('template', { static: true }) template: TemplateRef<unknown>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);
  }
}
