import { Client, Account, ID } from "appwrite";
import conf from "../config/conf.js";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            console.log("User account created successfully", userAccount)
            if (userAccount) {
                //call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        }
        catch (error) {
            console.log("Appwrite service :: createAccount Error", error);
            console.log("Error Details: ", error.response);
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite service :: login Error", error);
        }
    }

    async getCurrentUser() {
        try {
            await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser Error", error);
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions("current");
        } catch (error) {
            console.log("Appwrite service :: logout Error", error);
            alert("Logout Failed. Please try again")
        }
    }
}

const authService = new AuthService(); //created an object using this we can access the methods or functions from the above class universily 

export default authService;


