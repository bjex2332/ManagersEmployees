class manager {
    constructor(name, id, email, office) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }

        getName() {
            return this.name;
        }
        getID() {
            return this.id;
        }
        getEmail() {
            return this.email;
        }
        getOffice() {
            return this.office;
        }
        getRole() {
            return 'Manager';
        }
}
module.exports = manager;