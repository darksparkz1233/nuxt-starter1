<template>
    <div class="flex" v-for="coffee in coffees" :key="coffee.id">
      <CardComponent @show-modal="showCardModal = !showCardModal">
        <template v-slot:coffee-image>
          <img class="rounded-t-xl" :src="coffee.doppio.coffeeImg" />
        </template>
  
        <template v-slot:coffee-name>
          <h1>
            {{ coffee.doppio.coffeeTitle }}
          </h1>
        </template>
  
        <template v-slot:coffee-desc>
          <p>
            {{ coffee.doppio.coffeeDesc }}
          </p>
        </template>
  
        <template v-slot:card-modal>
          <ClientOnly>
            <Teleport to="#teleported">
              <CardModal :show="showCardModal" @close="showCardModal = false">
                <template v-slot:modal-title>
                  {{ coffee.doppio.coffeeTitle + " ☕" }}
                </template>
                <!-- ? ingredient list render -->
                <template v-slot:modal-ingredients>
                  <li
                    v-for="ingredient in coffeeIngredients.doppio"
                    :key="ingredient.id"
                  >
                    {{ ingredient }}
                  </li>
                </template>
                <!-- ? guide list render -->
                <template v-slot:modal-steps-guide>
                  <li
                    class="mb-4"
                    v-for="guide in coffeeIngredients.doppioGuide"
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
      doppio: {
        coffeeImg: "/img/doppio.jpg",
        coffeeTitle: "Doppio",
        coffeeDesc:
          "Doppio espresso is a double shot which is extracted using double the amount of ground coffee in a larger-sized portafilter basket. ",
      },
    },
  ];
  
  let coffeeIngredients = {
    doppio: [
      "2 Shots espresso",
    ],
  
    doppioGuide: [
      " You first need to grind your espresso to a consistency that is going to filter through your machine. This should be a fine grind that gives you a powdery result rather than a medium-course grind that is used for Aeropress, Chemex, or other types of coffee pots that require an over-the-top pout method. The use of water pressure is essential to create the best-tasting result by being forced out of your machine. ",

      " Make two separate amounts that will fit into your portafilter and tamp the contents so they are lightly packed. The rest of the work comes from waiting for your espresso to be extracted. After this is complete you add a new batch of espresso into the portafilter and repeat the same extraction. ",

      " If you have a hand pump espresso maker, you’ll need to use several repeated pumps to build up pressure. This not only allows the pressure to build while the espresso is filtering, but it adds a richer crema that gives espresso more character. This technique is what Érik Favre did who traveled through Italy to learn the secrets of what makes espresso taste superior. His hard work and attention to detail (with a little motivation from his Italian wife), led to the invention of the Nespresso machine. ",

      " When you’re done you simply add sugar or milk to your doppio and then drink right away. ",
    ],
  };
  </script>