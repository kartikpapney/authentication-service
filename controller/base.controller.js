const STATUS = require('../constant/status');
const HEADER = require('../constant/header');

/**
 * Base Controller Class. This class will be used for keeping general logic.
 */
class Controller {
    constructor() {

    }

    ok(res, result, status=STATUS.OK) {
        res.status(status)
            .header(HEADER.CONTENT_TYPE, HEADER.JSON)
            .send(JSON.stringify(result));
    }

    error(res,err, status=STATUS.INTERAL_SERVER) {
        res.status(status).send(err);
    }
}

module.exports = {Controller};