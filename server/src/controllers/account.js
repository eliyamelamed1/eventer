const asyncWrapper = require('../middleware/asyncWrapper');

const trying = asyncWrapper((req, res) => {
    res.status(200).json({ massage: '1234' });
});

module.exports = {
    trying,
};
