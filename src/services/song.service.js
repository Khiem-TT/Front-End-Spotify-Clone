import axios from "axios";

class SongService {
    static async getPublicSongs() {
        return await axios.get('https://back-end-spotify-clone.up.railway.app/song/list/songs');
    }

    static async getRandomSong(songIDs) {
        return await axios.post('https://back-end-spotify-clone.up.railway.app/song/random', songIDs)
    }

    static async searchSongPublic(songname) {
        return await axios.get(`https://back-end-spotify-clone.up.railway.app/song/search-public?songName=${songname}`);
    }

    static async getSingers() {
        return await axios.get('https://back-end-spotify-clone.up.railway.app/song/singers')
    }

    static async getComposers() {
        return await axios.get('https://back-end-spotify-clone.up.railway.app/song/composers')
    }

    static async getTags() {
        return await axios.get('https://back-end-spotify-clone.up.railway.app/song/tags')
    }

    static async getPublicPlaylist(playlistId) {
        return await axios.get(`https://back-end-spotify-clone.up.railway.app/song/playlist-public/${playlistId}`)
    }
}

export default SongService;