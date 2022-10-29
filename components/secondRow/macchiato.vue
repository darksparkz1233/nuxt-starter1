<template>
    <div class="flex" v-for="coffee in coffees" :key="coffee.id">
      <CardComponent @show-modal="showCardModal = !showCardModal">
        <template v-slot:coffee-image>
          <img class="rounded-t-xl" :src="coffee.macchiato.coffeeImg" />
        </template>
  
        <template v-slot:coffee-name>
          <h1>
            {{ coffee.macchiato.coffeeTitle }}
          </h1>
        </template>
  
        <template v-slot:coffee-desc>
          <p class="">
            {{ coffee.macchiato.coffeeDesc }}
          </p>
        </template>
  
        <template v-slot:card-modal>
          <ClientOnly>
            <Teleport to="#teleported">
              <CardModal :show="showCardModal" @close="showCardModal = false">
                <template v-slot:modal-title>
                  {{ coffee.macchiato.coffeeTitle + " ☕" }}
                </template>
                <!-- ? ingredient list render -->
                <template v-slot:modal-ingredients>
                  <li
                    v-for="ingredient in coffeeIngredients.macchiato"
                    :key="ingredient.id"
                  >
                    {{ ingredient }}
                  </li>
                </template>
                <!-- ? guide list render -->
                <template v-slot:modal-steps-guide>
                  <li
                    class="mb-4"
                    v-for="guide in coffeeIngredients.macchiatoGuide"
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
      macchiato: {
        coffeeImg: "/img/macchiato.webp",
        coffeeTitle: "Macchiato",
        coffeeDesc:
          "Caffè macchiato, sometimes called espresso macchiato, is an espresso coffee drink with a small amount of milk, usually foamed. ",
      },
    },
  ];
  
  let coffeeIngredients = {
    macchiato: [
    "1 cup of milk",
    "1 tablespoon vanilla syrup",
    "1 shot espresso, hot",
    "1 tablespoon caramel sauce",
    ],
  
    macchiatoGuide: [
        " We’re dealing with a tiny beverage, and maintaining heat is important. Preheat your machine, and especially your espresso cup. ",

        " Grind out your usual espresso dose (we use 18g in this Breville Barista Pro), level, tamp, and lock the portafilter in the machine. ",

        " Here, decide if you want two singles or one double. We’re brewing a double in this example. ",

        " While your shot is brewing, get your milk ready. We like to go with about 100ml of whole milk, and add about 25ml of half and half (10% cream) milk for an added creamy sweet boost. ",

        " Here’s a secret to a fantastic traditional macchiato: you don’t have to steam milk up to the usual 65C (150F); in fact, your microfoam will be better tasting and have a more sweeter impact if you only steam to about 40C (105F). And that’s our target – create paint-like microfoam but don’t go hot ",

        " Once the steam pitcher is the slightest bit warm to your hand’s touch, it’s time to end the milk stretching and steaming in general. This is a good rule of thumb for maximizing the milk’s sweetness for your drink. Note I have not submerged the wand at this point. ",

        " Take a healthy spoonful of the milk froth and dollop it right onto the espresso shot, creating a nice white cap. If you’ve brewed a double shot (like we have here), two dollops of foam will do. ",

        " Serve the macchiato with a demitasse spoon in case the drinker wants to stir things up, though we recommend drinking it unstirred, for the layering effect’s different taste sensations. Enjoy! "
    ],
  };
  </script>