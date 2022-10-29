<template>
    <div class="flex" v-for="coffee in coffees" :key="coffee.id">
      <CardComponent @show-modal="showCardModal = !showCardModal">
        <template v-slot:coffee-image>
          <img class="rounded-t-xl" :src="coffee.cappuccino.coffeeImg" />
        </template>
  
        <template v-slot:coffee-name>
          <h1>
            {{ coffee.cappuccino.coffeeTitle }}
          </h1>
        </template>
  
        <template v-slot:coffee-desc>
          <p class="">
            {{ coffee.cappuccino.coffeeDesc }}
          </p>
        </template>
  
        <template v-slot:card-modal>
          <ClientOnly>
            <Teleport to="#teleported">
              <CardModal :show="showCardModal" @close="showCardModal = false">
                <template v-slot:modal-title>
                  {{ coffee.cappuccino.coffeeTitle + " ☕" }}
                </template>
                <!-- ? ingredient list render -->
                <template v-slot:modal-ingredients>
                  <li
                    v-for="ingredient in coffeeIngredients.cappuccino"
                    :key="ingredient.id"
                  >
                    {{ ingredient }}
                  </li>
                </template>
                <!-- ? guide list render -->
                <template v-slot:modal-steps-guide>
                  <li
                    class="mb-4"
                    v-for="guide in coffeeIngredients.cappuccinoGuide"
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
      cappuccino: {
        coffeeImg: "/img/cappuccino.webp",
        coffeeTitle: "Cappuccino",
        coffeeDesc:
          " An espresso-based coffee drink that originated in Austria with later development taking place in Italy, and is prepared with steamed milk foam. ",
      },
    },
  ];
  
  let coffeeIngredients = {
    cappuccino: [
      "2 tablespoons finely ground dark roast coffee",
      "4 ounces water ",
      "4 ounces of milk",
    ],
  
    cappuccinoGuide: [
      "Pull a double shot of Espresso",
      "Put the water into the boiler of your espresso machine",
      "Tamp (press) the coffee down using a tamper. Do this 2 to 3 times to make sure the grounds are packed tightly.",
      "Place the portafilter into your espresso machine's group head and lock it in place by turning it to the right.",

      "Place a demitasse cup or the glass carafe that came with your espresso machine under the group head and pull the shot for 23 to 30 seconds, or until 2 ounces of espresso is yielded. Typically, there is a lever, switch, or button to start this process.",

      "Once the shot is pulled, foam the milk.",

      "Pour the steamed milk into the glass.",
      "Top this off with a serving of whipped cream.",
      "Finish the drink with a drizzle of chocolate sauce. ",
    ],
  };
  </script>