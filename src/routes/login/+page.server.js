import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';


/** @type {import('./$types').PageServerLoad} */
export async function load({ parent, cookies}) {
    const { user } = await parent();
    if (user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {

        const data = await request.formData();

        const username = data.get('username')
        const password = data.get('password')

        const body = await api.post('users/login', {username, password});

        if (body.errors) {
            return fail(401, body);
        }

        const value = body.jwt;
        cookies.set('jwt', value, { path: '/' });

        const permission = await api.get('users/me', body.jwt)

        if(permission.role == 'admin')
        {
            throw redirect(307, '/locations_admin');
        }

        throw redirect(307, '/locations');

    }
};