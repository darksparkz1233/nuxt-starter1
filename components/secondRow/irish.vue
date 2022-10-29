<template>
    <div class="flex" v-for="coffee in coffees" :key="coffee.id">
      <CardComponent @show-modal="showCardModal = !showCardModal">
        <template v-slot:coffee-image>
          <img class="rounded-t-xl" :src="coffee.irish.coffeeImg" />
        </template>
  
        <template v-slot:coffee-name>
          <h1>
            {{ coffee.irish.coffeeTitle }}
          </h1>
        </template>
  
        <template v-slot:coffee-desc>
          <p class="">
            {{ coffee.irish.coffeeDesc }}
          </p>
        </template>
  
        <template v-slot:card-modal>
          <ClientOnly>
            <Teleport to="#teleported">
              <CardModal :show="showCardModal" @close="showCardModal = false">
                <template v-slot:modal-title>
                  {{ coffee.irish.coffeeTitle + " ☕" }}
                </template>
                <!-- ? ingredient list render -->
                <template v-slot:modal-ingredients>
                  <li
                    v-for="ingredient in coffeeIngredients.irish"
                    :key="ingredient.id"
                  >
                    {{ ingredient }}
                  </li>
                </template>
                <!-- ? guide list render -->
                <template v-slot:modal-steps-guide>
                  <li
                    class="mb-4"
                    v-for="guide in coffeeIngredients.irishGuide"
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
      irish: {
        coffeeImg: "/img/irish.jpg",
        coffeeTitle: "Irish",
        coffeeDesc:
          "Irish coffee is a caffeinated alcoholic drink consisting of Irish whiskey, hot coffee, and sugar, stirred, and topped with cream.",
      },
    },
  ];
  
  let coffeeIngredients = {
    irish: [
      "2 Shots espresso",

      "2 teaspoons packed brown sugar, to taste ",

      "4 ounces strong, hot coffee ",

      "11/2 ounces Irish whiskey",

      "1 ounce heavy cream, lightly whipped",
    ],
  
    irishGuide: [
      "Gather the ingredients",
      " Place the brown sugar into a warm Irish coffee glass, mug, or other heatproof glass. ",
      " Add the coffee and Irish whiskey. ",
      " Stir until the sugar is dissolved. ",
      " Float the lightly whipped heavy cream on top by slowly pouring it over the back of a spoon. ",
      " Do not stir. Instead, drink the Irish coffee through the cream. Enjoy. ",
    ],
  };
  </script>