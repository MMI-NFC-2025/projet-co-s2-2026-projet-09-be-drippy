import { pb } from './pb.mjs';

let currentDisplayedDate = new Date();

export async function loadCalendarData() {
  const user = pb.authStore.model;
  
  const grids = [document.getElementById('calendar-grid'), document.getElementById('calendar-grid-desktop')];
  const monthTexts = [document.getElementById('calendar-month'), document.getElementById('calendar-month-desktop')];
  
  if(!user) return;

  const year = currentDisplayedDate.getFullYear();
  const month = currentDisplayedDate.getMonth();

  const moisNoms = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  const currentMonthName = `${moisNoms[month]} ${year}`;
  
  monthTexts.forEach(el => { if(el) el.textContent = currentMonthName; });

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  try {
    // ⚠️ On demande à PocketBase de nous donner AUSSI les informations sur la tenue (look) et les vêtements (clothes) à l'intérieur
    const records = await pb.collection('outfit_history').getFullList({
      filter: `user = "${user.id}"`,
      expand: 'look.clothes' 
    });

    grids.forEach(grid => { if(grid) grid.innerHTML = ''; });

    for(let i = 1; i <= daysInMonth; i++) {
      
      // On cherche si on a un enregistrement pour ce jour-ci
      const dayRecord = records.find(record => {
        if (!record.date || !record.is_validated) return false;
        const recordDate = new Date(record.date);
        return recordDate.getFullYear() === year && recordDate.getMonth() === month && recordDate.getDate() === i;
      });

      const isValidated = !!dayRecord;
      
      const dayClass = isValidated 
        ? "bg-jaune text-bleu-marine shadow-[0_5px_15px_rgba(255,204,0,0.4)] scale-105 font-black border-2 border-white cursor-pointer hover:scale-110" 
        : "bg-white/40 text-bleu-marine/50 font-bold border border-white/60";
        
      const iconHtml = isValidated 
        ? `` 
        : ``;

      // On ajoute un attribut data-record-id si le jour est validé pour le retrouver quand on clique
      const dayHtml = `
        <div class="calendar-day aspect-square rounded-[1rem] flex flex-col items-center justify-center transition-all ${dayClass}" ${isValidated ? `data-record-id="${dayRecord.id}"` : ''}>
          <span class="text-sm lg:text-base leading-none pointer-events-none">${i}</span>
          ${iconHtml}
        </div>
      `;

      grids.forEach(grid => { if(grid) grid.innerHTML += dayHtml; });
    }

    // On attache un événement "clic" sur tous les jours du calendrier qui ont une tenue !
    document.querySelectorAll('.calendar-day[data-record-id]').forEach(dayEl => {
      dayEl.addEventListener('click', (e) => {
        const recordId = e.currentTarget.dataset.recordId;
        const record = records.find(r => r.id === recordId);
        if(record) openOutfitModal(record);
      });
    });

  } catch(err) {
    console.error("Erreur chargement calendrier:", err);
  }
}

// Fonction qui remplit et affiche la fenêtre modale
function openOutfitModal(record) {
  const modal = document.getElementById('outfit-modal');
  const modalDate = document.getElementById('modal-date');
  const modalLookName = document.getElementById('modal-look-name');
  const modalClothes = document.getElementById('modal-clothes');

  if(!modal || !modalDate || !modalLookName || !modalClothes) return;

  // On formate la date en français (ex: Jeudi 4 Juin)
  const dateObj = new Date(record.date);
  modalDate.textContent = dateObj.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });

  // On récupère le "Look" lié à cet historique
  const look = record.expand?.look;
  modalLookName.textContent = look?.name || 'Tenue du jour';

  modalClothes.innerHTML = '';
  const clothes = look?.expand?.clothes || [];

  if(clothes.length === 0) {
    modalClothes.innerHTML = '<p class="text-bleu-marine/60 font-bold w-full text-center py-4">Aucun vêtement n\'a été rattaché à ce jour.</p>';
  } else {
    clothes.forEach(cloth => {
      const imgUrl = pb.files.getUrl(cloth, cloth.image);
      modalClothes.innerHTML += `
        <div class="w-24 h-24 lg:w-28 lg:h-28 bg-white rounded-2xl overflow-hidden border-2 border-white/50 shadow-md shrink-0">
          <img src="${imgUrl}" alt="vêtement" class="w-full h-full object-cover" />
        </div>
      `;
    });
  }

  // On affiche la fenêtre
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

export function initCalendar() {
  
  // Fermer la modale en cliquant sur le bouton X
  document.getElementById('close-modal')?.addEventListener('click', () => {
    const modal = document.getElementById('outfit-modal');
    modal?.classList.add('hidden');
    modal?.classList.remove('flex');
  });

  // Fermer la modale en cliquant dans le vide (fond flou)
  document.getElementById('outfit-modal')?.addEventListener('click', (e) => {
    if(e.target.id === 'outfit-modal') {
       const modal = document.getElementById('outfit-modal');
       modal?.classList.add('hidden');
       modal?.classList.remove('flex');
    }
  });

  const prevBtns = [document.getElementById('btn-prev-month'), document.getElementById('btn-prev-month-desktop')];
  const nextBtns = [document.getElementById('btn-next-month'), document.getElementById('btn-next-month-desktop')];

  prevBtns.forEach(btn => {
    btn?.addEventListener('click', () => {
      currentDisplayedDate.setMonth(currentDisplayedDate.getMonth() - 1);
      loadCalendarData();
    });
  });

  nextBtns.forEach(btn => {
    btn?.addEventListener('click', () => {
      currentDisplayedDate.setMonth(currentDisplayedDate.getMonth() + 1);
      loadCalendarData();
    });
  });

  loadCalendarData();
}