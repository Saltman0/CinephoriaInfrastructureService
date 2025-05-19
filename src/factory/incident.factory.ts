export function createIncident(type: string, description: string, date: Date, solved: boolean, hallId: number) {
    return {
        type: type,
        description: description,
        date: date,
        solved: solved,
        hallId: hallId
    };
}