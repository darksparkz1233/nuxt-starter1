<template>
  <div
    class="
      justify-evenly
      pb-10
      xl:flex
      xl:flex-row
      xl:justify-evenly
      xl:items-stretch
      xl:break-all
      xl:gap-0
      xl:ml-0
      sm:grid sm:grid-rows-1 sm:grid-cols-2 sm:ml-40 sm:gap-10 sm:items-stretch
      xs:flex xs:flex-col xs:items-center xs:gap-10
    "
    v-for="card in cards"
    :key="card"
  >
    <!-- ! flat white -->
    <CardComponent>
      <template v-slot:coffee-image>
        <img class="rounded-t-xl" :src="card.flatWhite.cardImg" />
      </template>

      <template v-slot:coffee-name>
        <h1>
          {{ card.flatWhite.cardTitle }}
        </h1>
      </template>

      <template v-slot:coffee-desc>
        <p class="">
          {{ card.flatWhite.cardDesc }}
        </p>
      </template>
    </CardComponent>
    <!-- ! irish -->
    <CardComponent>
      <template v-slot:coffee-image>
        <img class="rounded-t-xl" :src="card.irish.cardImg" />
      </template>

      <template v-slot:coffee-name>
        <h1>
          {{ card.irish.cardTitle }}
        </h1>
      </template>

      <template v-slot:coffee-desc>
        <p>
          {{ card.irish.cardDesc }}
        </p>
      </template>
    </CardComponent>
    <!-- ! macchiato -->
    <CardComponent>
      <template v-slot:coffee-image>
        <img class="rounded-t-xl" :src="card.macchiato.cardImg" />
      </template>

      <template v-slot:coffee-name>
        <h1>
          {{ card.macchiato.cardTitle }}
        </h1>
      </template>

      <template v-slot:coffee-desc>
        <p>
          {{ card.macchiato.cardDesc }}
        </p>
      </template>
    </CardComponent>
    <!-- ! bicerin -->
    <CardComponent>
      <template v-slot:coffee-image>
        <img class="rounded-t-xl h-52 w-max" :src="card.bicerin.cardImg" />
      </template>

      <template v-slot:coffee-name>
        <h1>
          {{ card.bicerin.cardTitle }}
        </h1>
      </template>

      <template v-slot:coffee-desc>
        <p>
          {{ card.bicerin.cardDesc }}
        </p>
      </template>
    </CardComponent>
  </div>
</template>

<script setup>
let cards = [
  {
    flatWhite: {
      cardImg: `/img/flatwhite.jpg`,
      cardTitle: "Flat White",
      cardDesc:
        "A flat white is a double shot espresso-based coffee with steamed milk finished with a thin layer of textured microfoam on top—sort of a velvety consistency.",
    },

    irish: {
      cardImg: "/img/irish.jpg",
      cardTitle: "Irish",
      cardDesc:
        "Irish coffee is a caffeinated alcoholic drink consisting of Irish whiskey, hot coffee, and sugar, stirred, and topped with cream. ",
    },

    macchiato: {
      cardImg: "/img/macchiato.webp",
      cardTitle: "Macchiato",
      cardDesc:
        " Caffè macchiato, sometimes called espresso macchiato, is an espresso coffee drink with a small amount of milk, usually foamed.  ",
    },

    bicerin: {
      cardImg: "/img/bicerin.jpg",
      cardTitle: "Bicerin",
      cardDesc:
        "Bicerin is a traditional hot drink native to Turin, Italy, made of espresso, drinking chocolate, and milk served layered in a small glass.",
    },
  },
];
</script>