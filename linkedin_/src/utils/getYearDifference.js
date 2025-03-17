export default function getYearDifference(start, end) {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    
    const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 
                        + (endDate.getMonth() - startDate.getMonth());
    
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    if (years > 0 && months > 0) {
        return `${years} yrs, ${months} mos`;
    } else if (years > 0) {
        return `${years} ${years === 1 ? 'yr' : 'yrs'}`;
    } else if(months>0) {
        return `${months} ${months === 1 ? 'mo' : 'mos'}`;
    }
}
