import { ISinger } from "./singer";

export interface ISong {
  id: string;
  name: string;
  duration: number;
  singers: ISinger[];
}
