<template>
    <div class="flex" v-for="coffee in coffees" :key="coffee.id">
      <CardComponent @show-modal="showCardModal = !showCardModal">
        <template v-slot:coffee-image>
          <img class="rounded-t-xl" :src="coffee.flatWhite.coffeeImg" />
        </template>
  
        <template v-slot:coffee-name>
          <h1>
            {{ coffee.flatWhite.coffeeTitle }}
          </h1>
        </template>
  
        <template v-slot:coffee-desc>
          <p class="">
            {{ coffee.flatWhite.coffeeDesc }}
          </p>
        </template>
  
        <template v-slot:card-modal>
          <ClientOnly>
            <Teleport to="#teleported">
              <CardModal :show="showCardModal" @close="showCardModal = false">
                <template v-slot:modal-title>
                  {{ coffee.flatWhite.coffeeTitle + " ☕" }}
                </template>
                <!-- ? ingredient list render -->
                <template v-slot:modal-ingredients>
                  <li
                    v-for="ingredient in coffeeIngredients.flatWhite"
                    :key="ingredient.id"
                  >
                    {{ ingredient }}
                  </li>
                </template>
                <!-- ? guide list render -->
                <template v-slot:modal-steps-guide>
                  <li
                    class="mb-4"
                    v-for="guide in coffeeIngredients.flatWhiteGuide"
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
      flatWhite: {
        coffeeImg: "/img/flatwhite.jpg",
        coffeeTitle: "Flat White",
        coffeeDesc:
          "A flat white is a double shot espresso-based coffee with steamed milk finished with a thin layer of textured microfoam on top—sort of a velvety consistency.",
      },
    },
  ];
  
  let coffeeIngredients = {
    flatWhite: [
      "Espresso",
      "Milk",
      "Espresso machine",
      "Grinder",
      "Scale",
      "Milk pitcher",
      "Cloth for portafilter & steamwand ",
      "Cup (drink volume: 150-240ml)"
    ],
  
    flatWhiteGuide: [
      "Pull a double espresso into a cup or glass. Use double ristretto or double espresso. Often the drink has strong coffee taste. ",

      "Steam the milk to 55–62 °C. Learn how the right temperature feels in your hand when holding the pitcher or use a thermometer to take the temperature of the milk. To make the milk velvety and smooth and disperse any bubbles, give the pitcher a thump on the counter and swirl the milk lightly around the pitcher. ",

      "Make a latte art pattern on the surface of the flat white. Foam layer should be from 0.5-1.5 cm.",
    ],
  };
  </script>