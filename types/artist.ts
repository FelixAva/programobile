export interface Artist {
  id: string;
  name: string;
  image: string;
}

export interface ArtistResource {
  id: number;
  name: string;
  mbid: string;
  image: [
    ImageUrl
  ]
}

export interface ImageUrl {
  '#text': string;
}
