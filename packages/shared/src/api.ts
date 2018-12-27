import { ajax } from "rxjs/ajax";

interface IArtist {
  name: string;
  image_url: string;
}

export const fetchArtist = (artist: string, id = "000"): Promise<IArtist> =>
  ajax
    .get(`https://rest.bandsintown.com/artists/${artist}?app_id=${id}`)
    .toPromise()
    .then(({ response }: any) => response);
