/* backend/settings.js */
import { pb } from './pb.mjs';

export async function deleteAccount(userId) {

  return await pb.collection('users').delete(userId);
}

export async function togglePremium(userId, status) {
  return await pb.collection('users').update(userId, {
    is_premium: status
  });
}