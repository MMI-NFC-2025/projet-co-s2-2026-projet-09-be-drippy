// backend/looks.js
import { pb } from './pb.mjs';

/**
 * Crée une nouvelle tenue (Look) dans PocketBase
 * @param {string} 
 * @param {Array} 
 */
export async function createLook(userId, clothesIds) {
  try {
    const record = await pb.collection('looks').create({
      user: userId,
      clothes: clothesIds,
    });
    return record;
  } catch (error) {
    console.error("Erreur lors de la création du look :", error);
    throw error;
  }
}