export function changeDate(date) {
    const newDate = new Date(date).toLocaleString();
    return (newDate !== 'Invalid Date' ? newDate : date); 
}
