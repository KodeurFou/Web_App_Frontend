import * as api from '$lib/api.js';
import {redirect} from "@sveltejs/kit";



export async function load({ cookies }) {
    const token = cookies.get('jwt')
    if(!token){
        throw redirect(307, '/login');
    }

    let DB = await api.get('locations', token)
    return {APIcall: DB}
}


/** @type {import('./$types').Actions} */
export const actions = {
    edit: async ({request, cookies}) => {
        const data = await request.formData();

        //console.log("données du form", data)
        //console.log(cookies.get('jwt'))
        const editedFilm = {
            "filmName": data.get('title'),
            "filmType": data.get('genre'),
            "filmDirectorName": data.get('director'),
            "year": data.get('year')
        }
        console.log(editedFilm)
        const res = await api.patch(`locations/${data.get('id')}`, editedFilm, cookies.get('jwt'))
        console.log(res)
        //console.log(data.get('id'))
    },

    delete: async ({request, cookies}) => {
        const data = await request.formData();

        await api.del(`locations/${data.get('id')}`, cookies.get('jwt'))
    },

    add: async ({request, cookies}) => {
        const data = await request.formData();
        const newFilm = {
            "filmName": data.get('title'),
            "filmType": data.get('genre'),
            "filmDirectorName": data.get('director'),
            "year": data.get('year')
        }
        await api.post(`locations/`, newFilm, cookies.get('jwt'))
    }
};
