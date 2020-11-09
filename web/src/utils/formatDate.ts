const formatDate = (date: string): string => {
    const formattedDate = new Date(date);
    const [dateFormatted, ] = formattedDate.toLocaleString('pt-br', ).split(' ')
    return dateFormatted ; 
    
}

export default formatDate;