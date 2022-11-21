class engineer {
    constructor(name, id, email, GitHub) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.GitHub = GitHub;
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
        getGitHub() {
            return this.GitHub;
        }
        getRole() {
            return 'Engineer';
        }
}
module.exports = engineer;