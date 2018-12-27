import { ajax } from "rxjs/ajax";

export const fetchArtist = (artist, id = "321") =>
  ajax
    .get(`https://rest.bandsintown.com/artists/${artist}?app_id=${id}`)
    .toPromise()
    .then(({ response }) => response);
