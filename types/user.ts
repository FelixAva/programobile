export interface UserSession {
  key: string;
  name: string;
  subscriber: number;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface User {
  name:         string;
  age:          string;
  subscriber:   string;
  realname:     string;
  bootstrap:    string;
  playcount:    string;
  artist_count: string;
  playlists:    string;
  track_count:  string;
  album_count:  string;
  image:        Image[];
  registered:   Registered;
  country:      string;
  gender:       string;
  url:          string;
  type:         string;
}

export interface Image {
  size:    string;
  "#text": string;
}

export interface Registered {
  unixtime: string;
  "#text":  number;
}
