const formatDate = (date) => {
    const dateObj = new Date(date);
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    let day = dateObj.getDate();

    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;

    return `${day}.${month}.${year}`;
};

export default formatDate;