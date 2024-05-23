<template>
  <a href="#modal">
    <button class="alert bg-red-500 rounded-xl border-2 p-1 hover:scale-110 transition mr-2">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
      </svg>
    </button>
  </a>
  <div id="modal" class="modal">
    <div class="p-bg-gray px-5 py-3 rounded-xl shadow-p-dark text-p-gray text-base font-bold grid gap-4">
      <p class="mx-auto text-p-gray">Seguro que quieres eliminar ?</p>
      <div class="grid grid-flow-col gap-3">
        <a href="#" class="text-center">
          <button class="bg-transparent rounded-xl p-1 px-2 hover:text-blue-500 transition">
            Cancelar
          </button>
        </a>
        <button to="#"
          class="bg-red-500 text-center rounded-xl border-2 py-1 px-2 text-gray-200 active:bg-red-800 transition hover:scale-110">
          Eliminar
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal {
  @apply fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50;
  display: none;
}

.modal:target {
  display: flex;
}
</style>
