<template>
  <div
    class="
      flex
      justify-center
      p-2
      text-xl text-center
      font-bold
      dark:text-white dark:bg-[#141516]
      bg-gray-200
      text-black
    "
  >
    <p>Coffee Time</p>

    <div class="flex ml-10">
      <!-- ? dark theme button -->
      <button @click="$emit('switchTheme')">
        <slot name="dark-mode"> </slot>
      </button>
      <!-- ? light theme button -->
      <button @click="$emit('switchTheme')">
        <slot name="light-mode"> </slot>
      </button>
    </div>
  </div>
</template>

<script setup>
  
</script>
