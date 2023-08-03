const filterNoticesByAge = (noticesList, date) => {
    let newList
    switch (date) {
        case '1':
            newList = noticesList.filter(item => (-(new Date(item.date).getFullYear() - new Date().getFullYear()) < 1));
            break
        case '2':
            newList = noticesList.filter(item => (-(new Date(item.date).getFullYear() - new Date().getFullYear()) > 1));
            break
        case '3':
            newList = noticesList.filter(item => (-(new Date(item.date).getFullYear() - new Date().getFullYear()) > 1 * 2));
            break
        case '4':
            newList = noticesList.filter(item => (-(new Date(item.date).getFullYear() - new Date().getFullYear()) < 1 || -(new Date(item.date).getFullYear() - new Date().getFullYear()) > 2));
            break
        default: newList = noticesList;
    }
        return newList
}
module.exports = filterNoticesByAge;