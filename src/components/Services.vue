<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-2xl text-plant-leaf font-semibold tracking-wide uppercase">Plantscaping</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Interior and Exterior Plant Services
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          The Plant Lady offers many flexible options for you to incorporate plants into your indoor and outdoor environment.
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-16 w-16 pl-0.5 pr-1 rounded-md bg-plant-leaf-light text-white">
                <img alt="" class="h-16 w-16 text-white" :src="`assets/SVG/${feature.icon}`" />
<!--                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />-->
              </div>
              <p class="ml-20 text-2xl leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-20 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>

const features = [
 {
    name: 'Consultation & Design',
    description:
        "For more than 40 years, The Plant Lady's core is built upon good design, installation and maintenance of plants in containers whether indoors or outdoors for commercial and residential properties.",
    icon: 'INDOOR PLANTS.svg',
  },
  {
    name: 'Installation',
    description:
        'The Plant Lady prepares, stages, delivers, and professionally installs your final selection of plants, containers, and accessories according to your final approved design plan..',
    icon: 'POTS.svg',
  },
  {
    name: 'Maintenance',
    description:
        'To ensure that your plants look as beautiful as the day we deliver them, The Plant Ladies’s expert, friendly, reliable horticultural technicians provide ongoing maintenance.',
    icon: 'WATERING CAN.svg',
  },
  {
    name: 'Replica Plants and Silk Plants',
    description:
        'In some cases, living plants aren’t a feasible choice for your interior environment or even your external environment. It can be due to poor growing conditions, or potential risks which could affect your plants.',
    icon: 'FIDDLE FIG.svg',
  },
]

export default {
  setup() {
    return {
      features,
    }
  },
}
</script>