import { pb } from './pb.mjs';
import { getClothes, getClothImageUrl } from './clothes.js';
import { createLook } from './looks.js';

export function initGenerator(onOutfitValidated) {
  const user = pb.authStore.model;
  
  const loadingEl = document.getElementById('outfit-loading');
  const emptyEl = document.getElementById('outfit-empty');
  const slidersContainer = document.getElementById('outfit-sliders');
  
  const btnModeStandard = document.getElementById('btn-mode-standard');
  const btnModeRobe = document.getElementById('btn-mode-robe');
  const btnToggleVeste = document.getElementById('btn-toggle-veste');
  const vesteCheck = document.getElementById('veste-check');
  
  const btnRandom = document.getElementById('btn-random');
  const btnValidate = document.getElementById('btn-validate');

  let clothes = { haut: [], bas: [], robe: [], veste: [], chaussure: [] };
  let currentIndices = { haut: 0, bas: 0, robe: 0, veste: 0, chaussure: 0 };
  let config = { mode: 'standard', withVeste: false };

  async function loadOutfitData() {
    try {
      const allClothes = await getClothes(user?.id, 'Tous');
      
      allClothes.forEach((item) => {
        const cat = item.category?.toLowerCase() || '';
        if (cat.includes('haut')) clothes.haut.push(item);
        else if (cat.includes('bas')) clothes.bas.push(item);
        else if (cat.includes('robe')) clothes.robe.push(item);
        else if (cat.includes('veste')) clothes.veste.push(item);
        else if (cat.includes('chaussure')) clothes.chaussure.push(item);
      });

      if (clothes.chaussure.length === 0 || ((clothes.haut.length === 0 || clothes.bas.length === 0) && clothes.robe.length === 0)) {
        if(loadingEl) loadingEl.classList.add('hidden');
        if(emptyEl) {
          emptyEl.classList.remove('hidden');
          emptyEl.classList.add('flex');
        }
        return;
      }

      if(loadingEl) loadingEl.classList.add('hidden');
      if(slidersContainer) slidersContainer.classList.remove('hidden');
      renderSliders();

    } catch (err) {
      console.error(err);
      if(loadingEl) loadingEl.innerHTML = '<p class="text-red-400 font-bold">Erreur de chargement</p>';
    }
  }

  function renderSliders() {
    if (!slidersContainer) return;
    slidersContainer.innerHTML = '';
    const categoriesToShow = [];
    
    if (config.mode === 'standard') {
      if (clothes.haut.length > 0) categoriesToShow.push({ key: 'haut', label: 'Haut' });
      if (clothes.bas.length > 0) categoriesToShow.push({ key: 'bas', label: 'Bas' });
    } else {
      if (clothes.robe.length > 0) categoriesToShow.push({ key: 'robe', label: 'Robe / Combinaison' });
    }

    if (config.withVeste && clothes.veste.length > 0) categoriesToShow.push({ key: 'veste', label: 'Veste' });
    if (clothes.chaussure.length > 0) categoriesToShow.push({ key: 'chaussure', label: 'Chaussures' });

    categoriesToShow.forEach(cat => {
      const items = clothes[cat.key];
      const currentIndex = currentIndices[cat.key];
      const currentItem = items[currentIndex];
      const imgUrl = currentItem ? getClothImageUrl(currentItem) : '';

      const sliderHtml = `
        <div class="flex flex-col gap-2">
          <span class="text-xs uppercase font-black tracking-widest text-bleu-marine ml-2">${cat.label}</span>
          <div class="flex items-center justify-between w-full bg-white/50 rounded-[2rem] p-4 border border-white shadow-inner">
            <button type="button" data-cat="${cat.key}" data-dir="-1" class="slider-btn w-12 h-12 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-transform active:scale-90 text-bleu-marine font-bold shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
            </button>
            <div class="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden bg-white flex items-center justify-center shadow-md relative group border border-white/50">
              ${imgUrl ? `<img src="${imgUrl}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />` : '<span class="text-xs text-bleu-marine/40">Vide</span>'}
            </div>
            <button type="button" data-cat="${cat.key}" data-dir="1" class="slider-btn w-12 h-12 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-transform active:scale-90 text-bleu-marine font-bold shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            </button>
          </div>
        </div>
      `;
      slidersContainer.innerHTML += sliderHtml;
    });

    document.querySelectorAll('.slider-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault(); 
        const cat = e.currentTarget.closest('.slider-btn').dataset.cat;
        const dir = parseInt(e.currentTarget.closest('.slider-btn').dataset.dir);
        let newIndex = currentIndices[cat] + dir;
        const maxIndex = clothes[cat].length - 1;
        
        if (newIndex < 0) newIndex = maxIndex;
        if (newIndex > maxIndex) newIndex = 0;
        currentIndices[cat] = newIndex;
        renderSliders(); 
      });
    });
  }

  btnModeStandard?.addEventListener('click', () => {
    config.mode = 'standard';
    btnModeStandard.className = 'mode-btn flex-1 bg-jaune text-bleu-marine font-bold text-xs lg:text-sm py-3 px-4 rounded-full transition-all shadow-md';
    if(btnModeRobe) btnModeRobe.className = 'mode-btn flex-1 bg-transparent text-bleu-marine hover:bg-white/50 font-bold text-xs lg:text-sm py-3 px-4 rounded-full transition-all';
    renderSliders();
  });

  btnModeRobe?.addEventListener('click', () => {
    config.mode = 'robe';
    btnModeRobe.className = 'mode-btn flex-1 bg-jaune text-bleu-marine font-bold text-xs lg:text-sm py-3 px-4 rounded-full transition-all shadow-md';
    if(btnModeStandard) btnModeStandard.className = 'mode-btn flex-1 bg-transparent text-bleu-marine hover:bg-white/50 font-bold text-xs lg:text-sm py-3 px-4 rounded-full transition-all';
    renderSliders();
  });

  btnToggleVeste?.addEventListener('click', () => {
    config.withVeste = !config.withVeste;
    if(vesteCheck) {
      vesteCheck.setAttribute('fill', config.withVeste ? 'currentColor' : 'none');
      vesteCheck.classList.toggle('opacity-100', config.withVeste);
      vesteCheck.classList.toggle('opacity-50', !config.withVeste);
    }
    renderSliders();
  });

  btnRandom?.addEventListener('click', () => {
    if(btnRandom) btnRandom.classList.add('rotate-180');
    setTimeout(() => { if(btnRandom) btnRandom.classList.remove('rotate-180') }, 300);
    
    Object.keys(clothes).forEach(cat => {
      if (clothes[cat].length > 0) {
        currentIndices[cat] = Math.floor(Math.random() * clothes[cat].length);
      }
    });
    renderSliders();
  });

  btnValidate?.addEventListener('click', async () => {
    const validateSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>`;
    btnValidate.innerHTML = `${validateSvg} Tenue Validée !`;
    btnValidate.classList.replace('bg-jaune', 'bg-green-500');
    btnValidate.classList.replace('text-bleu-marine', 'text-white');
    btnValidate.disabled = true;
    
    try {
      if(user) {
        const selectedClothesIds = [];

        if (config.mode === 'standard') {
          if (clothes.haut.length > 0) selectedClothesIds.push(clothes.haut[currentIndices.haut].id);
          if (clothes.bas.length > 0) selectedClothesIds.push(clothes.bas[currentIndices.bas].id);
        } else {
          if (clothes.robe.length > 0) selectedClothesIds.push(clothes.robe[currentIndices.robe].id);
        }

        if (config.withVeste && clothes.veste.length > 0) {
          selectedClothesIds.push(clothes.veste[currentIndices.veste].id);
        }

        if (clothes.chaussure.length > 0) {
          selectedClothesIds.push(clothes.chaussure[currentIndices.chaussure].id);
        }

        const newLook = await createLook(user.id, selectedClothesIds);

        await pb.collection('outfit_history').create({
          user: user.id,
          look: newLook.id,
          date: new Date().toISOString(),
          is_validated: true
        });
        
        if (onOutfitValidated) onOutfitValidated();
      }
    } catch(err) {
      console.error("Erreur lors de l'enregistrement de la tenue:", err);
      alert("Un problème est survenu lors de l'enregistrement. Vérifiez vos paramètres PocketBase.");
    }

    setTimeout(() => {
      btnValidate.innerHTML = 'Valider la tenue';
      btnValidate.classList.replace('bg-green-500', 'bg-jaune');
      btnValidate.classList.replace('text-white', 'text-bleu-marine');
      btnValidate.disabled = false;
    }, 2000);
  });

  loadOutfitData();
}