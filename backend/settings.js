/* backend/settings.js */
import { pb } from './pb.mjs';

// Supprimer le compte et toutes ses données
export async function deleteAccount(userId) {
  // On supprime l'utilisateur (PocketBase supprimera automatiquement les relations si configuré)
  return await pb.collection('users').delete(userId);
}

// Basculer le statut premium (Simulateur de paiement)
export async function togglePremium(userId, status) {
  return await pb.collection('users').update(userId, {
    is_premium: status
  });
}