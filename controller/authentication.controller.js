const {Controller} = require('./base.controller')
const {AuthenticationService} = require('../service/authentication.service.js');

class AuthenticationController extends Controller {
    constructor() {
        super();
        this.AuthenticationService = AuthenticationService();
    }
    async register(req, res) {
        try {
            const result = await this.AuthenticationService.register(req);
            this.ok(res,  result.data, result.status);
        } catch (err) {
            this.error(res, err);
        }
    }
    async verify(req, res) {
        try {
            const result = await this.AuthenticationService.verify(req);
            this.ok(res,  result.data, result.status);
        } catch (err) {
            this.error(res, err);
        }
    }
    async login(req, res) {
        try {
            const result = await this.AuthenticationService.login(req);
            this.ok(res,  result.data, result.status);
        } catch (err) {
            this.error(res, err);
        }
    }
    async updateDetails(req, res) {
        try {
            const result = await this.AuthenticationService.updateDetails(req);
            this.ok(res,  result.data, result.status);
        } catch (err) {
            this.error(res, err);
        }
    }
    async getDetails(req, res) {
        try {
            const result = await this.AuthenticationService.getDetails(req);
            this.ok(res,  result.data, result.status);
        } catch (err) {
            this.error(res, err);
        }
    }
    async resetPassword(req, res) {
        try {
            const result = await this.AuthenticationService.resetPassword(req);
            this.ok(res,  result.data, result.status);
        } catch (err) {
            this.error(res, err);
        }
    }
}

module.exports = {
    AuthenticationController
}