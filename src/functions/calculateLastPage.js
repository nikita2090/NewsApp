const calculateLastPage = (totalResults, pageSize) => {
    if (totalResults > 100) totalResults = 100;
    return Math.ceil(totalResults / pageSize);
};

export default calculateLastPage;