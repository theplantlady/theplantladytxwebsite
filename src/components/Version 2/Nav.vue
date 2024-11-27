<template>
  <header
      class="sticky top-0 z-10 h-18 shrink-0 border-b border-plant-leaf bg-plant-leaf-dark drop-shadow-xl opacity-95"
  >
    <svg
        class="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
    >
      <defs>
        <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg
          x="50%"
          y="-1"
          class="overflow-visible fill-gray-800/20"
      >
        <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            stroke-width="0"
        />
      </svg>
      <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
      />
    </svg>
    <nav
        class="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8 lg:py=8 h-20"
        aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <!-- I want this to appear on scroll Start -->
        <a
            href="#"
            class="-m-1.5 p-1.5 transition-opacity duration-300"
            :class="{ 'opacity-0': !scrolled, 'opacity-100': scrolled }"
        >
          <span class="sr-only">Your Company</span>
          <img
              class="h-16 w-auto"
              :src="darkLogo"
              alt=""
          />
        </a>
        <!-- I want this to appear on scroll End -->
      </div>
      <div class="flex md:hidden">
        <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon
              class="size-8"
              aria-hidden="true"
          />
        </button>
      </div>
      <PopoverGroup
          class="hidden md:flex md:gap-x-12"
      >
        <Popover class="relative">
          <PopoverButton
              class="flex items-center gap-x-1 text-lg/6 font-semibold text-gray-200"
          >
            Services
            <ChevronDownIcon
                class="size-6 flex-none text-gray-400"
                aria-hidden="true"
            />
          </PopoverButton>
          <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
                class="absolute -left-8 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-plant-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div class="">
                <div
                    v-for="item in products"
                    :key="item.name"
                    class="group relative flex gap-x-6  p-4 hover:bg-plant-leaf"
                >
                  <div
                      class="mt-1 flex size-11 flex-none items-center justify-center  bg-plant-white group-hover:bg-plant-leaf"
                  >
                    <component
                        :is="item.icon"
                        class="size-8 text-gray-600 group-hover:text-plant-white"
                        aria-hidden="true"
                    />
                  </div>
                  <div class="flex-auto">
                    <a
                        :href="item.href"
                        class="block font-semibold text-md/6 text-gray-900 group-hover:text-plant-white"
                    >
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </a>
                    <p
                        class="mt-1 text-sm/6 text-gray-600 group-hover:text-plant-white"
                    >
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
              <div
                  class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"
              >
                <a
                    v-for="item in callsToAction"
                    :key="item.name"
                    :href="item.href"
                    class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <component
                      :is="item.icon"
                      class="size-5 flex-none text-gray-400"
                      aria-hidden="true"
                  />
                  {{ item.name }}
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
        <a
            href="#"
            class="text-lg/6 font-semibold text-gray-200"
        >
          Gallery
        </a>
        <a
            href="#"
            class="text-lg/6 font-semibold text-gray-200"
        >
          Store
        </a>
        <Popover class="relative">
          <PopoverButton
              class="flex items-center gap-x-1 text-lg/6 font-semibold text-gray-200"
          >
            Company
            <ChevronDownIcon
                class="size-6 flex-none text-gray-400"
                aria-hidden="true"
            />
          </PopoverButton>
          <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
                class="absolute -left-8 top-full z-20 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5"
            >
              <div
                  v-for="item in company"
                  :key="item.name"
                  class="relative rounded-lg p-4 hover:bg-gray-50"
              >
                <a
                    :href="item.href"
                    class="block text-sm/6 font-semibold text-gray-900"
                >
                  {{ item.name }}
                  <span class="absolute inset-0" />
                </a>
                <p
                    class="mt-1 text-sm/6 text-gray-600"
                >
                  {{ item.description }}
                </p>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </PopoverGroup>
    </nav>
    <Dialog class="md:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-20" />
      <DialogPanel class="fixed inset-y-0 right-0 z-40 flex w-full flex-col justify-between overflow-y-auto bg-plant-white sm:max-w-sm sm:ring-1 sm:ring-plant-offwhite/10">
        <div class="p-6">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-16 w-auto lg:h-12 lg:w-0 visible lg:invisible" src="" alt="" />
              <img class="h-auto w-3/4 lg:h-0 lg:w-0 visible lg:invisible" src="https://firebasestorage.googleapis.com/v0/b/theplantladytx.appspot.com/o/Website%2Flogo%2FThe%20Plant%20Lady%20Inc..png?alt=media&token=f09a7415-9403-4937-b5e3-9e703f4e9153" alt="" />

            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in products" :key="item.name" :href="item.href" class="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-gray-900 hover:bg-plant-pi">
                  <div class="flex size-11 flex-none p- items-center justify-center rounded-lg bg-plant-white group-hover:bg-plant-pink">
                    <component :is="item.icon" class="size-6 text-gray-600 group-hover:text-plant-pink" aria-hidden="true" />
                  </div>
                  {{ item.name }}
                </a>
              </div>
              <div class="space-y-2 py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Features</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">About Us</a>

                <a v-for="item in company" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </div>
        <div class="sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center">
          <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-100">{{ item.name }}</a>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
import {useMainStore} from "@/stores/main";
const store = useMainStore();

const darkLogo = store.logo.wide.dark;



// Product List
const products = [
  { name: 'Design', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Installation', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Residential Service', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Commercial Service', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  { name: 'Consultation', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
]


// Call to Actions
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

// Company Information
const company = [
  { name: 'About us', href: '#', description: 'Learn more about our company values and mission to empower others' },
  { name: 'Careers', href: '#', description: 'Looking for you next career opportunity? See all of our open positions' },
  {
    name: 'Support',
    href: '#',
    description: 'Get in touch with our dedicated support team or reach out on our community forums',
  },
  { name: 'Blog', href: '#', description: 'Read our latest announcements and get perspectives from our team' },
]

// Mobile menu
const mobileMenuOpen = ref(false)

// Scroll visibility state
const scrolled = ref(false)

// Scroll event handler
const handleScroll = () => {
  scrolled.value = window.scrollY > 100 // Adjust threshold as needed
}

// Add and remove scroll listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
