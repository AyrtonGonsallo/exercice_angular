export class Utilisateur {
    public name: string = "";
    public sirname: string = "";
    public email: string = "";
    public username: string = "";
    public password: string = "";

    constructor() {

    }

    /**
     * toString
     */
    public toString() {
        return `{
            name:       ${this.name},
            sirname:      ${this.sirname},
            email:      ${this.email},
            password:   ${this.password},
            username:   ${this.username},
        }`
    }
}
