import {axiosInstance} from "../refreshToken/axios-interceptor";

class AdminService {
    static async getUserList() {
        return await axiosInstance.get('https://back-end-spotify-clone.up.railway.app/admin/userlist')
    }

    static async getSingers() {
        return await axiosInstance.get('https://back-end-spotify-clone.up.railway.app/admin/singers')
    }

    static async getComposers() {
        return await axiosInstance.get('https://back-end-spotify-clone.up.railway.app/admin/composers')
    }

    static async getTags() {
        return await axiosInstance.get('https://back-end-spotify-clone.up.railway.app/admin/tags')
    }

    static async addSinger(data) {
        return await axiosInstance.post('https://back-end-spotify-clone.up.railway.app/admin/addsinger', data)
    }

    static async deleteSinger(id) {
        return await axiosInstance.delete('https://back-end-spotify-clone.up.railway.app/admin/deletesinger/' + id)
    }

    static async addComposer(data) {
        return await axiosInstance.post('https://back-end-spotify-clone.up.railway.app/admin/addcomposer', data)
    }

    static async deleteComposer(id) {
        return await axiosInstance.delete('https://back-end-spotify-clone.up.railway.app/admin/deletecomposer/' + id)
    }

    static async addTag(data) {
        return await axiosInstance.post('https://back-end-spotify-clone.up.railway.app/admin/addtag', data)
    }

    static async deleteTag(id) {
        return await axiosInstance.delete('https://back-end-spotify-clone.up.railway.app/admin/deletetag/' + id)
    }

}

export default AdminService