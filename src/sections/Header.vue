<template>
  <div class="mx-auto container h-full -mb-48 ">
    <div class="relative w-full h-screen lg:flex items-center justify-between ">
      <div>
        <div class="lg:absolute lg:pt-12 right-0 top-0 lg:w-7/12">
          <div class="hidden lg:block h-8 w-8 h-24 w-24 border-2 bg-img-border-color inset-0 absolute -ml-10 z-0 "></div>
          <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=940&h=806&q=80" alt="" class="w-full relative z-10 " />
          <button  @click="scrollPageTo('element')" class="hidden absolute z-20 right-0 bottom-0 bg-plant-leaf -mb-10 mr-12 h-24 w-24 lg:flex items-center justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
              <path d="M24 10.9639V38.9639" stroke="white" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M36 26.9639L24 38.9639" stroke="white" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 26.9639L24 38.9639" stroke="white" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex  lg:w-1/2 absolute">
        <div class="py-12 lg:py-16 px-8 lg:px-16 bg-plant-leaf text-white lg:w-full z-30 shadow-xl">
          <h1 class="text-5xl lg:text-6xl leading-normal font-bold tracking-wide f-f-d-s">We Love your Plants</h1>
          <p class="text-2xl lg:text-3xl font-normal tracking-tight leading-7 py-8 f-f-l">To help people create a better work and living environment through plants.
          </p>
          <!--          <p class="text-base lg:text-2xl font-normal tracking-tight leading-7 py-8 f-f-l">"Never go to a doctor whose office plants have died" -Erma Bombeck</p>-->
          <button class="px-4 lg:px-10 py-4 bg-plant-pink rounded shadow lg:text-2xl uppercase f-f-l">Get in touch</button>
        </div>
      </div>
    </div>
  </div>
  <div id="element" class="mx-auto container xl:py-2 md:py-2 py-8 lg:px-0 px-4">
    <div class="flex flex-col justify-center items-center w-full">
      <div>
        <span class="sr-only">Workflow</span>
        <img class="h-auto w-full max-w-xl" src="../../assets/The Plant Lady Logo Square.png" alt="" />
      </div>
      <h1 class="text-2xl lg:text-4xl uppercase leading-normal font-bold tracking-wide text-color-heading text-center">Trusted since 1978</h1>
      <p class="lg:text-2xl text-lg font-normal tracking-tight leading-9 py-3 lg:w-3/4 text-color-para text-center">
        The Plant Lady Inc. is an interiorscape company specializing in the design, sale, installation, and maintenance of live foliage plants. <br><br>Family owned and operated plant service that has been serving the Dallas, Texas area since 1978.

      </p>
    </div>
    <ByTheNumbers></ByTheNumbers>
    <div class="flex lg:flex-row flex-col items-center flex-wrap lg:justify-between items-center lg:mt-20">
      <div class="md:p-8 p-4 lg:w-4/12 w-full hover:shadow-2xl lg:my-0 my-8 bg-white cursor-pointer">
        <h3 class="md:text-5xl text-3xl leading-3rem">Sleak</h3>
        <p class="md:text-2xl text-base leading-9 text-color-para pt-8">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat.</p>
      </div>
      <div class="md:p-8 p-4 lg:w-4/12 w-full hover:shadow-2xl lg:my-0 my-8 bg-white cursor-pointer">
        <h3 class="md:text-5xl text-3xl leading-3rem">Modern</h3>
        <p class="md:text-2xl text-base leading-9 text-color-para pt-8">The plant lady is a family owned and operated plant service that has been serving the Dallas, Texas area since 1978.
        </p>
      </div>
      <div class="md:p-8 p-4 lg:w-4/12 w-full hover:shadow-2xl lg:my-0 my-8 bg-white cursor-pointer">
        <h3 class="md:text-3xl text-2xl leading-3rem">Commercial Plantscapes
        </h3>
        <p class="md:text-xl text-lg leading-9 text-color-para pt-8">Create a lush indoor environment that gives employees and customers a break from the normal office environment.
        </p>
      </div>
    </div>
  </div>

</template>

<script >
import ByTheNumbers from "@/components/ByTheNumbers.vue";
export default {
  components: {ByTheNumbers},
  setup() {
    const scrollPageTo = (navEl) => {
      console.log(`#${navEl}`);
      let element = document.querySelector(`#${navEl}`);
      console.log(element);
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }


    return {
      scrollPageTo
    }
  }
}
</script>

<style scoped>

</style>