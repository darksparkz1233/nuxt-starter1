<template>
  <div
    v-for="card in cards"
    :key="card"
    class="
      flex
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
  >
    <!-- ! americano -->
    <CardComponent>
      <template v-slot:coffee-image>
        <img class="rounded-t-xl" :src="card.americano.cardImg" alt="" />
      </template>

      <template v-slot:coffee-name>
        <h1>
          {{ card.americano.cardTitle }}
        </h1>
      </template>

      <template v-slot:coffee-desc>
        <p>
          {{ card.americano.cardDesc }}
        </p>
      </template>
    </CardComponent>
    <!-- ! mocha -->
    <CardComponent>
      <template v-slot:coffee-image>
        <img class="rounded-t-xl" :src="card.mocha.cardImg" alt="" />
      </template>

      <template v-slot:coffee-name>
        <h1>
          {{ card.mocha.cardTitle }}
        </h1>
      </template>

      <template v-slot:coffee-desc>
        <p>
          {{ card.mocha.cardDesc }}
        </p>
      </template>
    </CardComponent>
    <!-- ! cappuccino -->
    <CardComponent>
      <template v-slot:coffee-image>
        <img class="rounded-t-xl" :src="card.cappuccino.cardImg" />
      </template>

      <template v-slot:coffee-name>
        <h1>
          {{ card.cappuccino.cardTitle }}
        </h1>
      </template>

      <template v-slot:coffee-desc>
        <p>
          {{ card.cappuccino.cardDesc }}
        </p>
      </template>
    </CardComponent>
    <!-- ! doppio -->
    <CardComponent>
      <template v-slot:coffee-image>
        <img class="rounded-t-xl" :src="card.doppio.cardImg" />
      </template>

      <template v-slot:coffee-name>
        <h1>
          {{ card.doppio.cardTitle }}
        </h1>
      </template>

      <template v-slot:coffee-desc>
        <p>
          {{ card.doppio.cardDesc }}
        </p>
      </template>
    </CardComponent>
  </div>
</template>


<script setup>
let cards = [
  {
    americano: {
      cardImg: `/img/americano.jpg`,
      cardTitle: "Americano",
      cardDesc:
        "  An Americano is an espresso-based drink designed to resemble coffee brewed in a drip filter, considered popular in the United States of America.  ",
    },

    mocha: {
      cardImg: "/img/mocha.jpg",
      cardTitle: "Mocha",
      cardDesc:
        " Chocolate-flavoured warm beverage that is a variant of a café latte commonly served in a glass rather than a mug. ",
    },

    cappuccino: {
      cardImg: "/img/cappuccino.webp",
      cardTitle: "Cappuccino",
      cardDesc:
        " An espresso-based coffee drink that originated in Austria with later development taking place in Italy, and is prepared with steamed milk foam. ",
    },

    doppio: {
      cardImg: "/img/doppio.jpg",
      cardTitle: "Doppio",
      cardDesc:
        "Doppio espresso is a double shot which is extracted using double the amount of ground coffee in a larger-sized portafilter basket. ",
    },
  },
];
</script>