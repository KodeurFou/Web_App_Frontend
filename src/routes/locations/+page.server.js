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