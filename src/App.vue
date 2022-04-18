<template>
  <div>
<!--    <header class="bg-white shadow" v-if="$route.meta.title">-->
<!--      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">-->
<!--        <h1 class="text-3xl font-bold leading-tight text-gray-900">{{ $route.meta.title }}</h1>-->
<!--      </div>-->
<!--    </header>-->
 <NavBar class=" w-full z-40"></NavBar>
<HeroSection></HeroSection>

    <Body></Body>
<!--    <main class="pt-32 lg:pt-24">
    <router-view/>
  </main>-->
    <Footer></Footer>
  </div>
</template>
<script setup>
import Body from "@/sections/Body.vue";
import Footer from "@/sections/Footer.vue";
import Header from "@/sections/Header.vue";
import NavBar from "@/components/NavBar.vue";
import HeroSection from "@/components/HeroSection.vue";


</script>