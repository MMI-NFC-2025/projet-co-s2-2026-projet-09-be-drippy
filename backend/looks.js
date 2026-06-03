// backend/looks.js
import { pb } from './pb.mjs';

/**
 * Crée une nouvelle tenue (Look) dans PocketBase
 * @param {string} userId - L'ID de l'utilisateur
 * @param {Array} clothesIds - Un tableau contenant les IDs des vêtements choisis
 */
export async function createLook(userId, clothesIds) {
  try {
    const record = await pb.collection('looks').create({
      user: userId,
      clothes: clothesIds, // ⚠️ Assure-toi que ta colonne s'appelle bien "clothes" dans PocketBase (type Relation vers "clothes", et coche "Max select: Multiple")
    });
    return record;
  } catch (error) {
    console.error("Erreur lors de la création du look :", error);
    throw error;
  }
}