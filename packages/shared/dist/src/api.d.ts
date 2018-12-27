interface IArtist {
    name: string;
    image_url: string;
}
export declare const fetchArtist: (artist: string, id?: string) => Promise<IArtist>;
export {};
