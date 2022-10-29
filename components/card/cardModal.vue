<template>
  <!-- ? modal container: -->
  <div 
       v-if="show"
       class="fixed w-full h-full top-0 p-6
            dark:bg-[#141414]
            dark:text-white
            bg-gray-100
            overflow-x-scroll
            z-40
            "
  >
    <!-- ? modal content: -->
    <div>
      <!-- ? modal header: -->
      <div class="flex align-center mb-7 gap-5">
        <button @click="$emit('close')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>

        <h1 class="text-3xl uppercase">
            <slot name="modal-title">
                
            </slot>
        </h1>
      </div>
      <!-- ? ingredients: -->
      <div class="border-black dark:border-gray-100 pb-6 mb-6 border-b-2">
        <div class="flex flex-col gap-4">
          <slot name="ingredients-title">
            <h1 class="text-[#A3845E] text-3xl">Ingredients</h1>
          </slot>
          
          <ul class="ml-6 list-disc">
            <slot name="modal-ingredients">
              
            </slot>
          </ul>

        </div>
        </div>
        <!-- ? guide -->
        <div class="border-black dark:border-gray-100 border-b-2 pb-6">
          <div class="flex flex-col gap-4">
            <slot name="guide-title">
              <h1 class="text-[#A3845E] text-3xl">Step-by-step guide:</h1>
            </slot>
            
            <ol class="ml-6 list-decimal">
              <slot name="modal-steps-guide">
                
              </slot>
            </ol>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  show: Boolean,
});
</script>