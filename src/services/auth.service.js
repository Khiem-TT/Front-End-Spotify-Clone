import axios from "axios";

export class AuthService {
    static async jwtLogin(values) {
        return await axios.post("https://back-end-spotify-clone.up.railway.app/auth/login", values);
    }

    static async googleLogin(values) {
        return await axios.post("https://back-end-spotify-clone.up.railway.app/auth/google-login", {
            token: values
        });
    }
}
