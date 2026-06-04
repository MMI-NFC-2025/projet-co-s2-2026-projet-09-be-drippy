import PocketBase from 'pocketbase';
export const pb = new PocketBase('https://bedrippy.perruchot.optimiseus.fr');


pb.autoCancellation(false);