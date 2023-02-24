class AuthenticationService {
    constructor() {
        this.getDetails = new getDetails();
        this.register = new register();
        this.verify = new verify();
        this.login = new login();
        this.updateDetails = new updateDetails();
        this.resetPassword = new resetPassword();
    }

    async resetPassword(req) {
        
    }
    
    async login(req) {
        
    }
    
    async register(req) {
        
    }
    
    async updateDetails(req) {
        
    }
    
    async getDetails(req) {
        
    }
    
    async verify(req) {
    
    }
}

module.exports = {AuthenticationService}