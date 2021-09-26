/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    let newObj = {};

    for (let value in obj) {
        if (fields.indexOf(value) === -1) {
            newObj[value] = obj[value];
        }
    }

    return newObj;
};
