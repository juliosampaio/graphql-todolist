
module.exports = {
    Query: {
        findUser: (root, data, context) => {
            console.log(data.id);
            return { id: data.id };
        }
    }
};
