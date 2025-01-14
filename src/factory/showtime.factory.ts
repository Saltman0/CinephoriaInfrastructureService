export function createShowtime(id: number, startTime: Date, endTime: Date, price: number, movieId: number, hallId: number) {
    return {
        id: id,
        startTime: startTime,
        endTime: endTime,
        price: price,
        movieId: movieId,
        hallId: hallId
    };
}