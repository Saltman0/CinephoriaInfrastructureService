export function createIncident(type: string, description: string, hallId: number) {
    return {
        type: type,
        description: description,
        hallId: hallId
    };
}