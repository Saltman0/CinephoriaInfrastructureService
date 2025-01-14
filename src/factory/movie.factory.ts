export function createMovie(id: number, title: string, description: string, minimumAge: number|null, favorite: boolean, imageURL: string) {
    return {
        id: id,
        title: title,
        description: description,
        minimumAge: minimumAge,
        favorite: favorite,
        imageURL: imageURL
    };
}