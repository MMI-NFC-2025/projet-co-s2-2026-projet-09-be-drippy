/* backend/clothes.js */
import { pb } from './pb.mjs'; // <-- Modification de l'import ici

// Récupérer tous les vêtements de l'utilisateur avec un filtre optionnel
export async function getClothes(userId, category = 'Tous') {
  let filterQuery = `user = "${userId}"`;
  
  if (category !== 'Tous') {
    filterQuery += ` && category = "${category}"`;
  }

  return await pb.collection('clothes').getFullList({
    filter: filterQuery,
    sort: '-created', // Du plus récent au plus ancien
  });
}

// Récupérer un seul vêtement par son ID
export async function getClothById(id) {
  return await pb.collection('clothes').getOne(id);
}

// Supprimer un vêtement
export async function deleteCloth(id) {
  return await pb.collection('clothes').delete(id);
}

// Fonction utilitaire pour récupérer l'URL de l'image facilement
export function getClothImageUrl(record) {
  if (!record || !record.image) return '';
  return pb.files.getUrl(record, record.image);
}

// ... tes autres fonctions existantes (getClothes, getClothById, etc.)

// Ajouter un nouveau vêtement
export async function addCloth(formData) {
  return await pb.collection('clothes').create(formData);
}