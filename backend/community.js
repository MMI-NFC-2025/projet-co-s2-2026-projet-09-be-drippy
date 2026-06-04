import { pb } from './pb.mjs';

export function initCommunity() {
  const user = pb.authStore.model;
  
  const feedContainer = document.getElementById('community-feed');
  const loadingEl = document.getElementById('community-loading');
  
  const tabFeed = document.getElementById('tab-feed');
  const tabFavs = document.getElementById('tab-favs');
  
  const btnOpenShare = document.getElementById('btn-open-share');
  const shareModal = document.getElementById('share-modal');
  const closeShareModal = document.getElementById('close-share-modal');
  const shareForm = document.getElementById('share-form');
  const shareCaption = document.getElementById('share-caption');
  const btnSubmitShare = document.getElementById('btn-submit-share');

  let currentTab = 'feed';

  async function loadPosts() {
    if (!feedContainer || !loadingEl) return;
    
    feedContainer.innerHTML = '';
    feedContainer.classList.add('hidden');
    loadingEl.classList.remove('hidden');
    loadingEl.classList.add('flex');

    try {
      const posts = await pb.collection('social_posts').getFullList({
        sort: '-created',
        expand: 'user,look.clothes,likes',
      });

      loadingEl.classList.add('hidden');
      loadingEl.classList.remove('flex');
      feedContainer.classList.remove('hidden');

      // Filtrage selon l'onglet actif
      let postsToShow = posts;
      if (currentTab === 'favs') {
        postsToShow = posts.filter(p => p.likes && p.likes.includes(user.id));
      }

      if (postsToShow.length === 0) {
        feedContainer.innerHTML = `
          <div class="w-full text-center py-16 bg-bleu-claire rounded-[3rem] border-4 border-white/50 shadow-2xl">
            <span class="text-6xl mb-6 block">👻</span>
            <p class="text-bleu-marine font-black text-xl uppercase tracking-widest">C'est bien vide par ici...</p>
          </div>
        `;
        return;
      }

      postsToShow.forEach(post => {
        const author = post.expand?.user;
        const look = post.expand?.look;
        const clothes = look?.expand?.clothes || [];
        const isLiked = post.likes && post.likes.includes(user.id);
        const authorAvatar = author?.avatar ? pb.files.getUrl(author, author.avatar) : '';
        const clothesHtml = clothes.map(c => {
          const imgUrl = pb.files.getUrl(c, c.image);
          return `
            <div class="w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-2xl overflow-hidden border-2 border-white/50 shadow-md flex shrink-0">
              <img src="${imgUrl}" alt="${c.name || 'Vêtement'}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"/>
            </div>
          `;
        }).join('');

        const postHtml = `
          <div class="w-full bg-bleu-claire rounded-[3rem] p-6 lg:p-10 border-4 border-white/50 shadow-2xl flex flex-col gap-6">
            
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-full bg-white border-2 border-bleu-marine/20 overflow-hidden flex items-center justify-center shadow-inner shrink-0">
                  ${authorAvatar ? `<img src="${authorAvatar}" class="w-full h-full object-cover" />` : `<span class="text-2xl opacity-50">👤</span>`}
                </div>
                <div class="flex flex-col">
                  <h3 class="font-black text-xl lg:text-2xl text-bleu-marine tracking-wide">${author?.name || 'Utilisateur'}</h3>
                  <span class="text-xs text-bleu-marine/60 uppercase tracking-widest font-bold">${new Date(post.created).toLocaleDateString('fr-FR')}</span>
                </div>
              </div>

              <button class="btn-like flex items-center gap-2 px-4 py-2 rounded-full transition-all shadow-md active:scale-90 border-2 border-white ${isLiked ? 'bg-jaune text-bleu-marine' : 'bg-white text-bleu-marine/60 hover:bg-gray-50'}" data-id="${post.id}" data-liked="${isLiked}">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ${isLiked ? 'fill-current' : 'fill-none'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span class="text-base font-black">${post.likes?.length || 0}</span>
              </button>
            </div>

            ${post.image_caption ? `<p class="text-bleu-marine font-bold text-lg px-2">${post.image_caption}</p>` : ''}

            <div class="w-full h-[2px] bg-white/50 rounded-full my-2"></div>

            <div class="flex flex-wrap justify-center lg:justify-start gap-4">
              ${clothesHtml || '<p class="text-bleu-marine/50 font-bold">Aucun vêtement visible</p>'}
            </div>
            
          </div>
        `;
        
        feedContainer.innerHTML += postHtml;
      });

      document.querySelectorAll('.btn-like').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const button = e.currentTarget;
          const postId = button.dataset.id;
          const currentlyLiked = button.dataset.liked === 'true';
          
          button.disabled = true;
          try {
            const postRecord = await pb.collection('social_posts').getOne(postId);
            let newLikes = postRecord.likes || [];
            
            if (currentlyLiked) {
              newLikes = newLikes.filter(id => id !== user.id);
            } else {
              if(!newLikes.includes(user.id)) newLikes.push(user.id);
            }

            await pb.collection('social_posts').update(postId, { likes: newLikes });
            loadPosts(); 
          } catch (err) {
            console.error("Erreur lors de l'ajout aux favoris :", err);
            button.disabled = false;
          }
        });
      });

    } catch (err) {
      console.error("Erreur de chargement du feed", err);
      loadingEl.innerHTML = `<p class="text-rouge font-bold">Erreur de connexion avec la base de données. API Rules débloquées ?</p>`;
    }
  }

  // --- Gestion des Onglets ---
  tabFeed?.addEventListener('click', () => {
    currentTab = 'feed';
    tabFeed.className = 'px-6 py-2.5 rounded-full bg-jaune text-bleu-marine font-bold text-sm lg:text-base transition-all shadow-md active:scale-95';
    tabFavs.className = 'px-6 py-2.5 rounded-full text-white hover:bg-white/20 font-bold text-sm lg:text-base transition-all active:scale-95';
    loadPosts();
  });

  tabFavs?.addEventListener('click', () => {
    currentTab = 'favs';
    tabFavs.className = 'px-6 py-2.5 rounded-full bg-jaune text-bleu-marine font-bold text-sm lg:text-base transition-all shadow-md active:scale-95';
    tabFeed.className = 'px-6 py-2.5 rounded-full text-white hover:bg-white/20 font-bold text-sm lg:text-base transition-all active:scale-95';
    loadPosts();
  });

  btnOpenShare?.addEventListener('click', async () => {
    try {

      const today = new Date();
      today.setUTCHours(0, 0, 0, 0);
      const startOfDayStr = today.toISOString().replace('T', ' ');

      const existingPostsToday = await pb.collection('social_posts').getFullList({
        filter: `user = "${user.id}" && created >= "${startOfDayStr}"`,
      });

      if (existingPostsToday.length > 0) {
        alert("Vous avez déjà publié une tenue aujourd'hui ! Revenez demain pour partager votre prochain style.");
        return;
      }
      const history = await pb.collection('outfit_history').getFullList({
        filter: `user = "${user.id}" && is_validated = true && created >= "${startOfDayStr}"`,
        sort: '-created',
        limit: 1
      });

      if (history.length === 0 || !history[0].look) {
        alert("Vous n'avez pas généré et validé de tenue aujourd'hui ! Allez sur votre profil d'abord.");
        return;
      }

      shareModal?.classList.remove('hidden');
      shareModal?.classList.add('flex');
      shareCaption.focus();
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la vérification de vos tenues.");
    }
  });

  closeShareModal?.addEventListener('click', () => {
    shareModal?.classList.add('hidden');
    shareModal?.classList.remove('flex');
    shareForm.reset();
  });

  shareModal?.addEventListener('click', (e) => {
    if(e.target.id === 'share-modal') {
      shareModal?.classList.add('hidden');
      shareModal?.classList.remove('flex');
      shareForm.reset();
    }
  });


  shareForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    btnSubmitShare.disabled = true;
    btnSubmitShare.innerHTML = '⏳ Publication...';

    try {
      const today = new Date();
      today.setUTCHours(0, 0, 0, 0);
      const startOfDayStr = today.toISOString().replace('T', ' ');

      const history = await pb.collection('outfit_history').getFullList({
        filter: `user = "${user.id}" && is_validated = true && created >= "${startOfDayStr}"`,
        sort: '-created',
        limit: 1
      });
      const latestLookId = history[0].look;
      await pb.collection('social_posts').create({
        user: user.id,
        look: latestLookId,
        image_caption: shareCaption.value,
        likes: []
      });

      shareModal?.classList.add('hidden');
      shareModal?.classList.remove('flex');
      shareForm.reset();
      
      if (tabFeed) tabFeed.click(); 
      else loadPosts();
      
    } catch (err) {
      console.error("Erreur de publication:", err);
      alert("Erreur lors de la publication. Vérifiez la console.");
    }
    
    btnSubmitShare.innerHTML = 'Publier';
    btnSubmitShare.disabled = false;
  });

  loadPosts();
}