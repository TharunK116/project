function sortByStartDate(info) {
   
    return info.sort((a, b) => new Date(b.START_DATE) - new Date(a.START_DATE));
}

export default sortByStartDate;
