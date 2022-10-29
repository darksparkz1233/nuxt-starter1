<template>
  <!-- ? card container: -->
  <div
    @click="$emit('showModal')"
    class="
      cursor-pointer
      hover:-translate-y-2
      transition
      ease-in
      w-72
      h-100
      rounded-xl
      bg-white
      shadow-lg
      dark:bg-[#1E1E1E] dark:text-gray-400
    "
  >
    <div>
      <!-- ? card image: -->
      <slot class="w-full" name="coffee-image"> </slot>
    </div>

    <!-- ? card text content container: -->
    <div class="p-4">
      <div class="pb-4">
        <h1 class="dark:text-white text-xl">
          <!-- ? card header: -->
          <slot name="coffee-name"> </slot>
        </h1>
      </div>

      <div>
        <p class="text-md ">
          <!-- ? card description: -->
          <slot name="coffee-desc"> </slot>
        </p>
      </div>

      <div>
        <slot name="card-modal">
           
        </slot>
      </div>

    </div>
  </div>
</template>

<script setup>
const props = defineProps({});
</script>
