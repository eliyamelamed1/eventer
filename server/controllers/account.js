const asyncWrapper = require('../middleware/asyncWrapper');

const trying = asyncWrapper((req, res) => {
    res.status(200).json();
});

module.exports = {
    trying,
};
