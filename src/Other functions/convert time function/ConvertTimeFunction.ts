function formatTime(milliseconds: number): string {
    const date = new Date(milliseconds);
    return new Intl.DateTimeFormat('ru-RU', {
        timeZone: 'Europe/Moscow',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).format(date);
}

export {formatTime};
