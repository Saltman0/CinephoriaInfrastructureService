export function createHall(number: number, projectionQuality: string|null, cinemaId: number) {
    return {
        number: number,
        projectionQuality: projectionQuality,
        cinemaId: cinemaId
    };
}