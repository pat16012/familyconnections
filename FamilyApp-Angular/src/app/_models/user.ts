import { Photo } from "./photo";

export interface User {
  id: number;
  username: string;
  knownAs: string;
  created: Date;
  lastActive: any;
  photoUrl: string;
  city: string;
  country: string;
  photos?: Photo[];
}
