<template>
  <nav
    class="px-6 p-bg-gray grid grid-flow-col gap-4 rounded-2xl shadow-p-dark text-p-gray"
  >
    <RouterLink to="home" class="tooltip my-auto">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="hover:text-p-green hover:scale-125 transition"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
      <div class="tooltip-content p-bg-gray px-2 py-1 rounded-xl shadow-p-dark text-p-gray text-base font-bold">Inicio</div>
    </RouterLink>
    <RouterLink to="Test" class="tooltip my-auto">
      <svg
        height="30px"
        viewBox="0 -960 960 960"
        width="30px"
        class="svg-grey svg-green:hover my-auto hover:text-p-green hover:scale-125 transition"
      >
        <path
          d="m565.13-166.78 106 106H246.78q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-626.44q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85h361.13l211.31 251.31V-160q0 23.39-11.33 43.85-11.32 20.45-31.41 34.85L564.52-292.39q-17 11.56-37.56 17.06-20.57 5.5-46.96 5.5-71.09 0-120.63-49.54-49.54-49.54-49.54-120.63t49.54-120.63q49.54-49.54 120.63-49.54t120.63 49.54q49.54 49.54 49.54 120.63 0 27.52-5.78 47.52-5.78 20-16.22 37l85.05 85.35V-612L562-793.22H246.78v626.44h318.35Zm-85.13-200q30.74 0 51.98-21.24T553.22-440q0-30.74-21.24-51.98T480-513.22q-30.74 0-51.98 21.24T406.78-440q0 30.74 21.24 51.98T480-366.78Zm0-73.22Zm0 0Z"
        />
      </svg>
      <div class="tooltip-content p-bg-gray px-2 py-1 rounded-xl shadow-p-dark text-p-gray text-base font-bold">Buscar</div>
    </RouterLink>
    <RouterLink to="#" class="tooltip my-auto">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-printer my-auto hover:text-p-green hover:scale-125 transition"
      >
        <polyline points="6 9 6 2 18 2 18 9"></polyline>
        <path
          d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
        ></path>
        <rect x="6" y="14" width="12" height="8"></rect>
      </svg>
      <div class="tooltip-content p-bg-gray px-2 py-1 rounded-xl shadow-p-dark text-p-gray text-base font-bold">Lector XMl</div>
    </RouterLink>
    <RouterLink to="#" class="tooltip my-auto">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-database my-auto hover:text-p-green hover:scale-125 transition"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
      <div class="tooltip-content p-bg-gray px-2 py-1 rounded-xl shadow-p-dark text-p-gray text-base font-bold">Inicio</div>
    </RouterLink>
    <RouterLink to="#" class="tooltip my-auto">
      <svg
        height="30px"
        viewBox="0 -960 960 960"
        width="30px"
        class="svg-grey svg-green:hover my-auto hover:text-p-green hover:scale-125 transition"
      >
        <path
          d="M435.48-198.87h89.04v-40H560q18.92 0 31.72-12.64 12.8-12.63 12.8-31.32v-124.52q0-18.92-12.8-31.72-12.8-12.8-31.72-12.8H444.52v-35.48h160v-88.48h-80v-40h-89.04v40H400q-18.92 0-31.72 12.64-12.8 12.64-12.8 31.32v124.52q0 18.92 12.8 31.72 12.8 12.8 31.72 12.8h115.48v35.48h-160v88.48h80v40ZM246.78-60.78q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-626.44q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85h321.13l251.31 251.31v481.13q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H246.78Zm277.74-587.13v-145.31H246.78v626.44h466.44v-481.13h-188.7ZM246.78-793.22v182.61-182.61 626.44-626.44Z"
        />
      </svg>
      <div class="tooltip-content p-bg-gray px-2 py-1 rounded-xl shadow-p-dark text-p-gray text-base font-bold">Totales</div>
    </RouterLink>
  </nav>
</template>