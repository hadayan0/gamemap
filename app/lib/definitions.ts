export type Icontype = {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export type Marker = {
  id: string;
  icontype: string;
  posx: number;
  posy: number;
  text: string;
  note: string;
  textposition: number;
  position: 'east' | 'west' | 'south' | 'north';
}