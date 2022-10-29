<template>
  <div class="flex" v-for="coffee in coffees" :key="coffee.id">
    <CardComponent @show-modal="showCardModal = !showCardModal">
      <template v-slot:coffee-image>
        <img class="rounded-t-xl" :src="coffee.mocha.coffeeImg" />
      </template>

      <template v-slot:coffee-name>
        <h1>
          {{ coffee.mocha.coffeeTitle }}
        </h1>
      </template>

      <template v-slot:coffee-desc>
        <p class="">
          {{ coffee.mocha.coffeeDesc }}
        </p>
      </template>

      <template v-slot:card-modal>
        <ClientOnly>
          <Teleport to="#teleported">
            <CardModal :show="showCardModal" @close="showCardModal = false">
              <template v-slot:modal-title>
                {{ coffee.mocha.coffeeTitle + " ☕" }}
              </template>
              <!-- ? ingredient list render -->
              <template v-slot:modal-ingredients>
                <li
                  v-for="ingredient in coffeeIngredients.mocha"
                  :key="ingredient.id"
                >
                  {{ ingredient }}
                </li>
              </template>
              <!-- ? guide list render -->
              <template v-slot:modal-steps-guide>
                <li
                  class="mb-4"
                  v-for="guide in coffeeIngredients.mochaGuide"
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
    mocha: {
      coffeeImg: "/img/mocha.jpg",
      coffeeTitle: "Mokko",
      coffeeDesc:
        " Chocolate-flavoured warm beverage that is a variant of a café latte commonly served in a glass rather than a mug. ",
    },
  },
];

let coffeeIngredients = {
  mocha: [
    "18g ground espresso, or 1 espresso pod.",
    "250 ml of milk.",
    "1 tsp drinking chocolate.",
    "Large cup, 300 - 500ml capacity.",
    "Whipped Cream. ",
  ],

  mochaGuide: [
    "Start by brewing your espresso coffee.",
    "While the espresso is brewing, steam the milk.",
    "You can steam the milk with a steaming wand or heat it on the stove. ",
    "In a tall glass, add a tablespoon of the chocolate sauce. ",
    "Pour the hot espresso on top.",
    "Give the espresso and chocolate sauce a quick stir. ",
    "Pour the steamed milk into the glass.",
    "Top this off with a serving of whipped cream.",
    "Finish the drink with a drizzle of chocolate sauce. ",
  ],
};
</script>