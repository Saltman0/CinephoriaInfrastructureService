import * as movieRepository from "../repository/movie.repository";

export async function createMovieEvent(movie: { id: number, title: string, description: string, minimumAge: number|null,
    favorite: boolean, imageURL: string }): Promise<void> {
    await movieRepository.insertMovie(
        movie.id, movie.title, movie.description, movie.minimumAge, movie.favorite, movie.imageURL
    );
}

export async function updateMovieEvent(movie: { id: number, title: string|null, description: string|null,
    minimumAge: number|null, favorite: boolean|null, imageURL: string|null }): Promise<void> {
    await movieRepository.updateMovie(
        movie.id, movie.title, movie.description, movie.minimumAge, movie.favorite, movie.imageURL
    );
}

export async function deleteMovieEvent(movie: { id: number }): Promise<void> {
    await movieRepository.deleteMovie(movie.id);
}