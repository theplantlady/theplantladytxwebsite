<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="mx-auto max-w-7xl container h-full">
    <nav class=" mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-2 flex items-center justify-center lg:justify-between border-none">
        <div class="flex items-center">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img class="h-auto w-full max-w-lg md:max-w-xl xl:max-w-2xl" src="../../assets/1.png" alt="" />
          </a>
<!--          <div class="hidden ml-10 space-x-8 block">
            <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-gray-800 hover:text-indigo-500">
              {{ link.name }}
            </a>
          </div>-->
        </div>
<!--        <div class="ml-10 space-x-4">
          <a href="#" class="inline-block bg-plant-pink py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75 hidden">Sign in</a>
&lt;!&ndash;          <a href="#" class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-gray-600 hover:bg-indigo-50">Sign up</a>&ndash;&gt;
        </div>-->
      </div>
<!--      <div class="py-4 flex flex-wrap justify-center space-x-6 hidden">
        <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-plant-blood hover:text-plant-blood">
          {{ link.name }}
        </a>
      </div>-->
    </nav>
  </header>
</template>

<script>
/*
const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Gallery', href: '#' },
]
*/

export default {
  name: "NavBar",
  setup() {
    return {
    }
  },
}
</script>