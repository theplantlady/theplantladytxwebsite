<template>
  <div class="relative isolate overflow-hidden bg-plant-white -mt-0 pt--0 z-0">
    <div class="isolate overflow-hidden bg-plant-leaf-dark">
      <div class="mx-auto max-w-7xl px-6 pb-48 pt-24 text-center sm:pt-32 lg:px-8">
        <div class="mx-auto max-w-4xl">


          <p class="mt-2 text-balance text-3xl font-semibold tracking-tight text-white sm:text-6xl">Explore Our Services</p>
        </div>
        <div class="relative mt-6">
          <p class="mx-auto max-w-2xl text-pretty text-lg font-medium text-plant-tan sm:text-xl/8">Discover how we can transform your space.</p>
          <svg viewBox="0 0 1208 1024"
               class="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0">
            <ellipse cx="604" cy="512" fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx="604" ry="512"/>
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stop-color="#7775D6"/>
                <stop offset="1" stop-color="#E935C1"/>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>

    <div
        class="absolute left-[calc(50%-4rem)] top-0 z-0 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true">

      <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-plant-leaf to-plant-leaf-light opacity-20"
           style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"/>
    </div>
    <div class="flow-root bg-white pb-24 sm:pb-32">
      <div class="-mt-52">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">

          <div
              class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl lg:grid-cols-3 xl:mx-0 xl:max-w-none xl:grid-cols-5 z-50">

            <a v-for="tier in tiers" :key="tier.id" :href="tier.href" :aria-describedby="tier.id"
               class="group text-plant-leaf-dark ring-1 ring-inset ring-plant-leaf-dark hover:ring-plant-pink flex items-center justify-center bg-plant-white h-72 rounded-t-3xl shadow-2xl hover:shadow-3xl transform hover:scale-110 duration-500   rounded-3xl px-3 py-2 text-left text-md/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plant-leaf-light">

              <div class="absolute flex flex-col inset-0 justify-between">


                <div class="px-4 pt-4 pb-4">
                  <h3 class="text-2xl/7 font-bold text-plant-leaf-dark opacity-85">{{ tier.name }}</h3>
                  <p class="mt-3 text-md/7 text-plant-blood opacity-75">{{ tier.description }}</p>
                </div>
                <figure class="max-h-64 aspect-square overflow-hidden rounded-b-3xl">
                <img
                    :src="tier.photo"
                    alt="Image" class=" max-h-36 w-full object-center transition group-hover:scale-105 duration-500 rounded-b-3xl">
                </figure>

              </div>
            </a>
            <div
                class="flex flex-col items-start gap-x-8 gap-y-8 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-1 xl:flex-row lg:items-center xl:col-span-2 bg-plant-white shadow-lg ">
              <div class="lg:min-w-0 lg:flex-1">
                <h3 class="text-xl/7 font-semibold text-plant-leaf-dark">Consultation</h3>
                <p class="mt-1 text-base/7 text-gray-600">Expert advice to help your plants and spaces flourish.</p>
              </div>
              <a href="#"
                 class="rounded-md px-3.5 py-2 text-sm/6 font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                Help <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>
import {ref} from 'vue'
import {RadioGroup, RadioGroupOption} from '@headlessui/vue'
import {CheckIcon} from '@heroicons/vue/20/solid'

const frequencies = [
  {value: 'monthly', label: 'Monthly', priceSuffix: '/month'},
  {value: 'annually', label: 'Annually', priceSuffix: '/year'},
]
const tiers = [
  {
    name: 'Design',
    id: 'tier-design',
    href: '#',
    description: 'Crafting custom plant environments that inspire.',
    mostPopular: false,
  },
  {
    name: 'Installation',
    id: 'tier-install',
    href: '#',
    description: 'The essentials to provide your best work for clients.',
    mostPopular: false,
  },
  {
    name: 'Residential',
    id: 'tier-home',
    href: '#',
    photo: 'https://firebasestorage.googleapis.com/v0/b/theplantladytx.appspot.com/o/Website%2FCBF13D07-66EB-4013-A9DC-60E93DB0FE74_1_102_o.jpeg?alt=media&token=77113d51-7b1e-4644-9e39-66f7f3a1bbde',
    description: 'Turning houses into vibrant, plant-filled homes',
    mostPopular: false,
  },
  {
    name: 'Commercial',
    id: 'tier-office',
    href: '#',
    photo: 'https://firebasestorage.googleapis.com/v0/b/theplantladytx.appspot.com/o/Website%2F29F02175-EACF-4B2C-8D02-F25C89DE9E5A_1_201_a.jpg?alt=media&token=35e64707-2f13-4c81-a248-7bc753b48270',
    description: 'Elevating businesses with green spaces.',
    mostPopular: false,
  },
  {
    name: 'Living Walls',
    id: 'tier-walls',
    href: '#',
    photo: 'https://firebasestorage.googleapis.com/v0/b/theplantladytx.appspot.com/o/Website%2F59F7BF71-1D0D-410F-875C-6DCE6BC47630_1_105_c-Enhanced-SR-2.jpg?alt=media&token=f0501b4c-4ee5-40d5-a7d7-3af491ccd1a0',
    description: 'Elevating businesses with unforgettable green spaces.',
    mostPopular: false,
  },
]

const frequency = ref(frequencies[0])
</script>
<!--
<template>
  <div class="isolate overflow-hidden bg-gray-900">
    <div class="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <h2 class="text-base/7 font-semibold text-indigo-400">Pricing</h2>
        <p class="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">Choose the right plan for you</p>
      </div>
      <div class="relative mt-6">
        <p class="mx-auto max-w-2xl text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
        <svg viewBox="0 0 1208 1024" class="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0">
          <ellipse cx="604" cy="512" fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx="604" ry="512" />
          <defs>
            <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
    <div class="flow-root bg-white pb-24 sm:pb-32">
      <div class="-mt-80">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
            <div v-for="tier in tiers" :key="tier.id" class="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
              <div>
                <h3 :id="tier.id" class="text-base/7 font-semibold text-indigo-600">{{ tier.name }}</h3>
                <div class="mt-4 flex items-baseline gap-x-2">
                  <span class="text-5xl font-semibold tracking-tight text-gray-900">{{ tier.priceMonthly }}</span>
                  <span class="text-base/7 font-semibold text-gray-600">/month</span>
                </div>
                <p class="mt-6 text-base/7 text-gray-600">{{ tier.description }}</p>
                <ul role="list" class="mt-10 space-y-4 text-sm/6 text-gray-600">
                  <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                    <CheckIcon class="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {{ feature }}
                  </li>
                </ul>
              </div>
              <a :href="tier.href" :aria-describedby="tier.id" class="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started today</a>
            </div>
            <div class="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
              <div class="lg:min-w-0 lg:flex-1">
                <h3 class="text-base/7 font-semibold text-indigo-600">Discounted</h3>
                <p class="mt-1 text-base/7 text-gray-600">Dolor dolores repudiandae doloribus. Rerum sunt aut eum. Odit omnis non voluptatem sunt eos nostrum.</p>
              </div>
              <a href="#" class="rounded-md px-3.5 py-2 text-sm/6 font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy discounted license <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>-->

<!--
<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'

const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$29',
    description: 'Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
  },
  {
    name: 'Team',
    id: 'tier-team',
    href: '#',
    priceMonthly: '$99',
    description: 'Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
    ],
  },
]
</script>-->
