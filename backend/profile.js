import { pb } from './pb.mjs';

export function initProfile() {
  let user = pb.authStore.model;
  
  const profileView = document.getElementById('profile-view');
  const nameEl = document.getElementById('profile-name');
  const avatarEl = document.getElementById('profile-avatar');
  const avatarPlaceholder = document.getElementById('avatar-placeholder');
  const btnEditProfile = document.getElementById('btn-edit-profile');
  const btnLogout = document.getElementById('btn-logout');
  
  const profileEditForm = document.getElementById('profile-edit-form');
  const editNameInput = document.getElementById('edit-name-input');
  const editAvatarInput = document.getElementById('edit-avatar-input');
  const editAvatarPreview = document.getElementById('edit-avatar-preview');
  const editAvatarPlaceholder = document.getElementById('edit-avatar-placeholder');
  const btnCancelEdit = document.getElementById('btn-cancel-edit');
  const btnSaveProfile = document.getElementById('btn-save-profile');

  function updateView() {
    if (user && nameEl) nameEl.textContent = user.name || 'Utilisateur';
    
    if (user && user.avatar && avatarEl && avatarPlaceholder) {
      const avatarUrl = pb.files.getUrl(user, user.avatar);
      avatarEl.src = avatarUrl;
      avatarEl.classList.remove('hidden');
      avatarPlaceholder.classList.add('hidden');
      
      avatarEl.onerror = () => {
        avatarEl.classList.add('hidden');
        avatarPlaceholder.classList.remove('hidden');
      };
    }
  }
  updateView();

  btnLogout?.addEventListener('click', () => {
    pb.authStore.clear();
    document.cookie = pb.authStore.exportToCookie({ httpOnly: false, path: '/', expires: new Date(0) });
    window.location.href = '/app/login';
  });

  btnEditProfile?.addEventListener('click', () => {
    profileView?.classList.add('hidden');
    profileView?.classList.remove('flex', 'lg:flex');
    profileEditForm?.classList.remove('hidden');
    profileEditForm?.classList.add('flex', 'lg:flex');
    
    if (editNameInput && user) editNameInput.value = user.name || '';
    if (user && user.avatar && editAvatarPreview && editAvatarPlaceholder) {
      editAvatarPreview.src = pb.files.getUrl(user, user.avatar);
      editAvatarPreview.classList.remove('hidden');
      editAvatarPlaceholder.classList.add('hidden');
    }
  });

  btnCancelEdit?.addEventListener('click', () => {
    profileEditForm?.classList.add('hidden');
    profileEditForm?.classList.remove('flex', 'lg:flex');
    profileView?.classList.remove('hidden');
    profileView?.classList.add('flex', 'lg:flex');
    profileEditForm.reset();
  });

  editAvatarInput?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (file && editAvatarPreview && editAvatarPlaceholder) {
      const reader = new FileReader();
      reader.onload = (event) => {
        editAvatarPreview.src = event.target.result;
        editAvatarPreview.classList.remove('hidden');
        editAvatarPlaceholder.classList.add('hidden');
      };
      reader.readAsDataURL(file);
    }
  });

  profileEditForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!user) return;
    btnSaveProfile.disabled = true;
    btnSaveProfile.textContent = "⏳...";

    try {
      const formData = new FormData(profileEditForm);
      if (editAvatarInput.files?.length === 0) {
        formData.delete('avatar');
      }

      await pb.collection('users').update(user.id, formData);
      await pb.collection('users').authRefresh();
      
      user = pb.authStore.model;
      document.cookie = pb.authStore.exportToCookie({ httpOnly: false, path: '/' });

      updateView();
      btnCancelEdit?.click();

    } catch (err) {
      console.error("Erreur de sauvegarde:", err);
      alert("Une erreur est survenue lors de la mise à jour.");
    } finally {
      btnSaveProfile.disabled = false;
      btnSaveProfile.textContent = "Sauvegarder";
    }
  });
}