import PocketBase from 'pocketbase';
export const pb = new PocketBase('https://bedrippy.perruchot.optimiseus.fr');

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