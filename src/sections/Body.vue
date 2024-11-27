<template>

  <div class="bg-white pt-14 pb-14">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <blockquote class="relative">
        <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">

          <div class="relative text-lg text-gray-700 font-medium mt-8">
            <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p class="relative">Biophilic design can reduce stress, enhance creativity and clarity of thought, improve our well-being and expedite healing; as the world population continues to urbanize, these qualities are ever more important.</p>
          </div>
        </div>
        <cite class="relative flex items-center sm:items-start not-italic py-5 pr-6 pl-0 sm:py-5 sm:pl-0 sm:pr-10 sm:mt-0">
          <span class="relative ml-4 text-gray-900 font-semibold leading-6 sm:ml-24 sm:pl-1">
                <span class="text-black font-semibold sm:inline">Terrapin Bright Green</span>
                {{ ' ' }}
                <span class="sm:inline">14 PATTERNS OF BIOPHILIC DESIGN</span>
              </span>
        </cite>
      </blockquote>
      <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 hidden">
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img class="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img class="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
        </div>
        <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
          <img class="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" />
        </div>
        <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
          <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
        </div>
      </div>
    </div>
  </div>
<!--  <WhoWeAre>
  </WhoWeAre>-->
<!--  <RightAlignedThreePlaceholdersWithSlider>
  </RightAlignedThreePlaceholdersWithSlider>-->
<!--  <ThreePlaceholdersWithDescription>
  </ThreePlaceholdersWithDescription>-->
<!--  <SimpleThreeColWithEmail>
  </SimpleThreeColWithEmail>
  <SimpleTextWithinSquare>
  </SimpleTextWithinSquare>
  <ElegantWithDarkGrayCard>
  </ElegantWithDarkGrayCard>-->
</template>

<script setup>
import ThreeCardsWithElegantTypography from "@/components/ThreeCardsWithElegantTypography.vue";
import RightAlignedThreePlaceholdersWithSlider from "@/components/RightAlignedThreePlaceholdersWithSlider.vue";
import ThreePlaceholdersWithDescription from "@/components/ThreePlaceholdersWithDescription.vue";
import SimpleThreeColWithEmail from "@/components/SimpleThreeColWithEmail.vue";
import SimpleTextWithinSquare from "@/components/SimpleTextWithinSquare.vue";
import ElegantWithDarkGrayCard from "@/components/ElegantWithDarkGrayCard.vue";
import HeroSection from "@/components/Home/HeroSection.vue";
import ThreeCardsServices from "@/components/ThreeCardsServices.vue";
import ThreeByThreeCards from "@/components/ThreeByThreeCards.vue";
import WhoWeAre from "@/components/WhoWeAre.vue";

</script>

<style scoped>

</style>
