import * as showtimeRepository from "../repository/showtime.repository";

export async function createShowtimeEvent(showtime: { id: number, startTime: string, endTime: string, price: number,
    movieId: number, hallId: number }): Promise<void> {
    await showtimeRepository.insertShowtime(
        showtime.id, new Date(showtime.startTime), new Date(showtime.endTime),
        showtime.price, showtime.movieId, showtime.hallId
    );
}

export async function updateShowtimeEvent(showtime: { id: number, startTime: string|null, endTime: string|null,
    price: number|null, movieId: number|null, hallId: number|null }): Promise<void> {
    await showtimeRepository.updateShowtime(
        showtime.id, showtime.startTime ? new Date(showtime.startTime): null,
        showtime.endTime ? new Date(showtime.endTime) : null,
        showtime.price, showtime.movieId, showtime.hallId
    );
}

export async function deleteShowtimeEvent(showtime: { id: number }): Promise<void> {
    await showtimeRepository.deleteShowtime(showtime.id);
}