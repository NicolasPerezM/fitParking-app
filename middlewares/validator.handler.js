import boom from '@hapi/boom';

function validatorHandler(schema, property) {
    return (req, res, next) => {
        const data = req[property];
        const { error } = schema.validate(data)
        if (error) {
            next(boom.badRequest(error));
        } else {
            next();
        }
    }
};

export default validatorHandler;