export const userQuery =  (userId) => {
    const query =  `*[type == "user" && _id == '${userId}']`
    return query
};

