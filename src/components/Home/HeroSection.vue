
<template>

  <div class="relative isolate overflow-hidden bg-plant-leaf-dark -mt-0 pt-0 z-0 pb-64">

    <svg class="absolute inset-0 z-20 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-800/20">
        <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
    </svg>
    <div class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
      <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-plant-leaf to-plant-leaf-light opacity-20" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
    </div>
    <div class="mx-auto max-w-7xl px-6 pb-10 pt-40 sm:pb-10 lg:flex lg:px-8 lg:pt-28">
      <div class="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8 -mt-64 lg:-mt-36">
        <img class="h-32 w-auto lg:w-[500px] lg:h-[400px]  invisible lg:visible" :src="darkLogo" alt="Your Company" />
        <img class="h-auto w-max lg:h-0 lg:w-0 visible lg:invisible" :src="wideDarkLogo" alt="" />
        <h1 class="mt-10 text-pretty text-3xl font-semibold tracking-tight text-white sm:text-5xl">We’re changing the way people connect with Nature</h1>
        <p class="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">Bringing plants into the places that people spend most of their time.</p>
        <div class="mt-10 flex items-center gap-x-6">
          <a href="#" class="rounded-md bg-plant-leaf-light px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-plant-leaf focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plant-leaf-dark">Get started</a>
          <a href="#" class="text-sm/6 font-semibold text-white">Learn more <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div class="mx-auto -mb-10 mt-12 flex max-w-2xl sm:mt-24 lg:ml-o lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-0 lg:-mb-10">
        <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <img src="https://firebasestorage.googleapis.com/v0/b/theplantladytx.appspot.com/o/Website%2F13.png?alt=media&token=c8db3ec7-1e19-46b0-9d23-4d1928b7552e" alt="App screenshot" width="2432" height="1442" class=" h-auto w-full lg:h-auto lg:w-[76rem] rounded-md" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useMainStore} from "@/stores/main";
const store = useMainStore();

const darkLogo = store.logo.square.dark;
const wideDarkLogo = store.logo.wide.dark;
</script>
