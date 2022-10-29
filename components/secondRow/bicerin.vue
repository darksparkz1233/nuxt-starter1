<template>
    <div class="flex" v-for="coffee in coffees" :key="coffee.id">
      <CardComponent @show-modal="showCardModal = !showCardModal">
        <template v-slot:coffee-image>
          <img class="h-full rounded-t-xl " :src="coffee.bicerin.coffeeImg" />
        </template>
  
        <template v-slot:coffee-name>
          <h1>
            {{ coffee.bicerin.coffeeTitle }}
          </h1>
        </template>
  
        <template v-slot:coffee-desc>
          <p class="">
            {{ coffee.bicerin.coffeeDesc }}
          </p>
        </template>
  
        <template v-slot:card-modal>
          <ClientOnly>
            <Teleport to="#teleported">
              <CardModal :show="showCardModal" @close="showCardModal = false">
                <template v-slot:modal-title>
                  {{ coffee.bicerin.coffeeTitle + " ☕" }}
                </template>
                <!-- ? ingredient list render -->
                <template v-slot:modal-ingredients>
                  <li
                    v-for="ingredient in coffeeIngredients.bicerin"
                    :key="ingredient.id"
                  >
                    {{ ingredient }}
                  </li>
                </template>
                <!-- ? guide list render -->
                <template v-slot:modal-steps-guide>
                  <li
                    class="mb-4"
                    v-for="guide in coffeeIngredients.bicerinGuide"
                    :key="guide.id"
                  >
                    {{ guide }}
                  </li>
                </template>
              </CardModal>
            </Teleport>
          </ClientOnly>
        </template>
      </CardComponent>
    </div>
  </template>
  
  <script setup>
  let showCardModal = ref(false);
  
  let coffees = [
    {
      bicerin: {
        coffeeImg: "/img/bicerin.jpg",
        coffeeTitle: "Bicerin",
        coffeeDesc:
          "Bicerin is a traditional hot drink native to Turin, Italy, made of espresso, drinking chocolate, and milk served layered in a small glass. ",
      },
    },
  ];
  
  let coffeeIngredients = {
    bicerin: [
    "1/2 cup of strongly brewed, Royal Cup Coffee.",
    "1/2 cup of prepared hot chocolate.",
    " 1/4 cup of heavy cream (or whipped cream for a shortcut). ",
    "Chocolate shavings.",
    ],
  
    bicerinGuide: [
        " If you're using heavy cream place an empty mason jar into your freezer, if using whipped cream skip this step  ",

        "Prepare a pot, or cup of Royal Cup Coffee ",

        "  While your coffee is brewing make a cup of hot chocolate (any homemade or premade hot chocolate will work) ",

        " Pour prepared hot chocolate into bottom 1/3 of coffee mug ",

        " Slowly pour coffee into your mug. Filling up the next 1/3 of the coffee mug ",

        " Place your heavy cream into chilled mason jar and seal ",

        "Shake until the cream lightly thickens",

        " Pour cream slowly into coffee mug and fill the rest of the coffee mug ",
        "Sprinkle with chocolate shavings",
        "Share and enjoy!"
    ],
  };
  </script>