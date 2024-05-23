<template>
  <main class="w-full grid gap-4 p-2">
    <section class="flex h-20 w-full px-4">
      <IconPSC class="mr-auto" />
      <Nav />
      <IconExit class="my-auto ml-auto" />
    </section>
    <section class="p-bg-gray rounded-2xl shadow-p-dark text-p-gray w-full h-max p-2 my-auto">
      <router-view />
    </section>
    <footer class="text-p-gray w-full h-max p-2 mt-auto flex">
      <p class="mr-auto">
        Usuario <samp class="text-p-green">Oscar Matu</samp> .
      </p>
    </footer>
  </main>
</template>

<script setup lang="ts">
import IconExit from "@components/IconExit.vue";
import IconPSC from "@components/IconPSC.vue";
import Nav from "@components/Nav.vue";
</script>
