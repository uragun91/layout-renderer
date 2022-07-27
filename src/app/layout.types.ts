export type ElementStyle = Record<string, string | number>;

export interface IElement {
  id: string;
  type: string;
  value?: string | number;
  style?: ElementStyle;
  children?: IElement[];
  when?: string;
  params?: any;
  styleWhen?: {
    when: string;
    style: ElementStyle;
  }[];
  forLoop?: string;
}

export interface ILayout {
  params: any;
  children?: IElement[];
}
