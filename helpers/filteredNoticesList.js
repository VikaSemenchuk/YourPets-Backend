const filterNoticesByAge = (noticesList, date) => {
    if (date == 1) {
        const newList = noticesList.filter(item => new Date(item.date) - new Date() < 31536000000)
        // console.log(new Date()-new Date(noticesList[3]))
        return newList
    } else {
        const newList = noticesList.filter(item => item.date > 1)
        return newList
    }
}
module.exports = filterNoticesByAge;