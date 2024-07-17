export const showCurrentDate = () => {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    const dayOfWeek = currentDate.toLocaleString('default', { weekday: 'long' });
    const monthName = currentDate.toLocaleString('default', { month: 'long' });

    const formattedDate = `${dayOfWeek}, ${day} ${monthName} ${year}`;


    return formattedDate;
}

