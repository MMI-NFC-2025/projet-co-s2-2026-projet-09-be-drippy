
import PocketBase from 'pocketbase';
const PB_URL = 'http://127.0.0.1:8090';

export const pb = new PocketBase(PB_URL);


export async function getPbAuth(request) {
    pb.authStore.loadFromCookie(request.headers.get('cookie') || '');
    try {
        if (pb.authStore.isValid) {
            await pb.collection('users').authRefresh();
        }
    } catch (_) {
        pb.authStore.clear();
    }
    return pb;
}