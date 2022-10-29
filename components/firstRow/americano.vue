<template>
    <div
      v-for="coffee in coffees"
      :key="coffee.id"
    >
        <CardComponent @show-modal="showCardModal = !showCardModal">
            <template v-slot:coffee-image>
              <img class="rounded-t-xl" :src="coffee.americano.coffeeImg" />
            </template>
    
            <template v-slot:coffee-name>
              <h1>
                {{ coffee.americano.coffeeTitle }}
              </h1>
            </template>
    
            <template v-slot:coffee-desc>
              <p>
                {{ coffee.americano.coffeeDesc }}
              </p>
            </template>
    
            <template v-slot:card-modal>
              <ClientOnly>
    
                <Teleport to="#teleported">
                  <CardModal :show="showCardModal" @close="showCardModal = false">
                    <template v-slot:modal-title> {{ coffee.americano.coffeeTitle + ' ☕' }} </template>
                    <!-- ? ingredient list render -->
                    <template v-slot:modal-ingredients>
                        <li
                          v-for="ingredient in coffeeIngredients.americano" 
                          :key="ingredient.id" 
                        >
                          {{ ingredient  }}
                        </li>
                    </template>
                    <!-- ? guide list render -->
                    <template v-slot:modal-steps-guide> 
                        <li
                          class="mb-4"
                          v-for="guide in coffeeIngredients.americanoGuide"
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
let showCardModal = ref(false)

let coffees = [
{
    americano: {
      coffeeImg: `/img/americano.jpg`,
      coffeeTitle: "Americano",
      coffeeDesc:
        "  An Americano is an espresso-based drink designed to resemble coffee brewed in a drip filter, considered popular in the United States of America.  ",
    },
}
]

let coffeeIngredients = { 
    americano: [
        " An espresso machine, or a few shots of pre-made espresso from your Nespresso machine or local coffee shop. ",
        " Hot water. ",
        " A coffee cup. ",
        " Your favorite coffee mug. ",
        " Fresh whole coffee beans or freshly ground coffee. ",
        " A coffee grinder, if you plan on using whole coffee beans. ",
        " A kitchen scale for measuring out your coffee beans. ",
        " A tamper to pack your coffee grounds. ",
    ],
    
    americanoGuide: [
      " Turn on your espresso machine: Make sure you turn on your espresso machine before beginning the americano-making process or else you could be waiting for a while for your espresso machine to heat, especially if it started out completely cold. ",

      " Measure out your coffee beans: Use your kitchen scale to measure out the exact amount of coffee beans needed to make a single, double or triple shot of espresso, depending on your taste preferences and the size of your espresso machine's portafilter. ",

      " Finely grind your coffee beans: Place your precisely-measured coffee beans into the grinder and grind them on the lowest setting possible. Be patient and take the time to grind the beans very finely, until they reach an almost powdery consistency. Double-check the coffee's weight on the scale after grinding, then set it aside. ",

      " Prepare your containers: Rinse the wand attachment on your espresso machine. Then use the wand to heat up both the empty coffee cup you will use for brewing your espresso and the mug that will hold your hot water. ",

      " Tamp your coffee grounds: Once your espresso machine is warmed up, take out the portafilter, which should be completely clean and dry before you use it. Pour the freshly ground coffee into the portafilter and use your tamper to pack it tightly. Be gentle when tamping the coffee grounds — apply even pressure and don't push too hard on one side or the other, which would result in an imperfect espresso shot. ",

      " Make your espresso: Whether you decided to brew a single, double or triple espresso shot, it will be pulled in the same amount of time with the double and triple shots ending up stronger. Pull your espresso shot according to your machine's settings, using your warm coffee cup to catch the espresso. ",

      " Heat up your water: Decide how much water you want to add to your espresso depending on how you like your americano, the strength of your espresso shot, and the size of your mug. Traditionally, the amount of water used in an americano is double the amount of espresso used, so heat up 2 ounces of water for every ounce of espresso you plan to use. ",

      " Combine your espresso and water: Make sure to add your espresso to the hot water, never the other way around. Adding the water to the espresso runs the risk of scalding the espresso if your water is too hot. But adding the espresso to the water both saves the crema — a creamy foam on top of espresso — and allows the water to evenly temper the espresso, creating a smoother mixture overall. ",

      " Add your mix-ins: A standard americano is strictly espresso and water with no flavorings or toppings. But if you want to jazz up the traditional beverage a bit, feel free to sprinkle in some cinnamon, squeeze some honey into it, pour in some milk and sugar, add a squirt of vanilla, or even spoon in a dollop of whipped cream — the options are limited only by your imagination. Play around with customizing your homemade americano to create a new signature drink. ",

      " Enjoy: You just successfully made your first americano at home! Celebrate with a sip of caffeinated goodness and get ready for a great morning. "
    ]   
}
</script>