import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { baseLayoutExample } from './layout-example';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit {
  title = 'layout-renderer';

  @ViewChild('stylesHolder', { static: true })
  stylesHolder: ElementRef<HTMLDivElement>;

  constructor(private renderer: Renderer2) {}

  layout = baseLayoutExample;

  ngAfterViewInit(): void {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(this.getCss()));

    this.renderer.appendChild(this.stylesHolder.nativeElement, style);
  }

  private getCss(): string {
    const stylesMap = this.getCssMap(this.layout.children);

    return Object.keys(stylesMap).reduce((acc, key) => {
      const elementStyles = stylesMap[key];

      return this.interpolateText(`${acc}
      .${key} {
        ${Object.keys(elementStyles)
          .map((styleKey) => `${styleKey}: ${elementStyles[styleKey]};`)
          .join('\n')}
      }`);
    }, '');
  }

  private getCssMap(elements: any[]): {
    [key: string]: Record<string, string>;
  } {
    return elements.reduce((acc, element) => {
      let result = {
        ...acc,
      };

      if (element.style) {
        result = { ...result, ...{ [element.id]: element.style } };
      }

      if (element.children) {
        result = { ...result, ...this.getCssMap(element.children) };
      }

      return result;
    }, {});
  }

  private interpolateText(text: string): string {
    return text;
  }
}
