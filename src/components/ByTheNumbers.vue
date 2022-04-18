<template>
  <div class="mx-auto container py-12">
    <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 ">
      <div v-for="item in stats" :key="item.name" class="flex justify-center w-full py-6">

          <component :is="item.icon" class="h-14 w-14 text-plant-leaf" aria-hidden="true" />



        <div class="text-gray-800 pl-12 w-1/2">
          <h1 class="font-bold text-2xl lg:text-5xl tracking-1px">{{ item.stat }}</h1>
          <h2 class="text-base lg:text-lg mt-4 leading-8 tracking-wide">{{ item.name }}</h2>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { UsersIcon } from '@heroicons/vue/outline'

const stats = [
  { name: 'Happy Clients', stat: '393', icon: UsersIcon },
  { name: 'Years in Business', stat: '43', icon: UsersIcon },
  { name: 'Plants Guaranteed', stat: '1424', icon: UsersIcon },
  { name: 'Age of Oldest Plant', stat: '40', icon: UsersIcon }
]

export default {
  name: "ByTheNumbers",
  setup() {
    return {
      stats,
    }
  },
};
</script>
