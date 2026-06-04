
import { pb } from './pb.mjs';

export async function getClothes(userId, category = 'Tous') {
  let filterQuery = `user = "${userId}"`;
  
  if (category !== 'Tous') {
    filterQuery += ` && category = "${category}"`;
  }

  return await pb.collection('clothes').getFullList({
    filter: filterQuery,
    sort: '-created',
  });
}


export async function getClothById(id) {
  return await pb.collection('clothes').getOne(id);
}

export async function deleteCloth(id) {
  return await pb.collection('clothes').delete(id);
}


export function getClothImageUrl(record) {
  if (!record || !record.image) return '';
  return pb.files.getUrl(record, record.image);
}

export async function addCloth(formData) {
  return await pb.collection('clothes').create(formData);
}