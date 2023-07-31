const fs = require('fs/promises');
const Notice = require('../../models/notices/notices');


const filterNotices = async (req, res) => {
    const { sex, age } = req.query;
    console.log(sex, age)
    try {
        const { page = 1, limit = 4 } = req.query;
        const skip = (page - 1) * limit;
        let paginationString = {sex}
        age ? paginationString = {age, sex} : paginationString = { sex };
        const noticesList = await Notice.find( paginationString , "-createdAT -updatedAT", {skip, limit});  
        return res.status(200).json(noticesList);   
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Ooops... ListContacts'})
    }
}

module.exports = {
    filterNotices
}