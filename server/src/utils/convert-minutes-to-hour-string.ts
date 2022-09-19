export function converMinutesToHourString(minutesAmout: number){
    const hour = Math.floor(minutesAmout / 60);
    const minutes = minutesAmout % 60;

    return `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}