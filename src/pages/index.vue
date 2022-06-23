<script lang="ts">
import Vue from "vue"

/* Interfaces */
import type { LanyardData, Activity } from "@eggsydev/vue-lanyard/@types/lanyard"

interface Project {
  title: string
  description: string
  href?: string
  to?: string
  image?: string
}

interface Experience {
  title: string
  url: string
  position: string
  date: string
}

interface ExperienceObject {
  jobs: Experience[]
  education: Experience[]
}

export default Vue.extend({
  data() {
    return {
      showModal: false,
      experiences: {
        education: [
          {
            title: "Gölbaşı MTAL",
            url: "https://golbasimtal.meb.k12.tr",
            position: "Network systems & cyber security",
            date: "2016 - 2022",
          },
        ],
      } as ExperienceObject,
      cards: [
        {
          title: "Contact",
          description: "Want to get in touch? Send me a message!",
          href: "/me/contact",
        },
      ],
      skills: [
        "PHP",
        "JavaScript",
        "HTML5",
        "Nuxt.js",
        "Vue.js",
        "Tailwind CSS",
        "Node.js",
        "TypeScript",
        "Sass",
        "React.js",
      ],
    }
  },
  head: {
    title: "Home",
  },
})
</script>

<template>
  <div class="space-y-14 mb-10">
    <header
      class="rounded-md flex flex-col-reverse bg-gray-200/30 my-16 py-10 px-8 justify-between md:flex-row md:items-center dark:bg-neutral-800/40"
    >
      <div class="md:w-8/12">
        <div class="space-y-2">
          <div
            class="font-semibold text-xl text-gray-900 md:text-3xl dark:text-neutral-200"
          >
            <h1>Self taught</h1>
            <h1><span class="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500">Web Application developer</span></h1>
          </div>

          <p class="text-neutral-500">
            Hi there, my name is Uygar, I am from Turkey and I am a self
            taught web developer. I build modern, minimalist and flat web apps using
            <SmartLink href="https://vuejs.org/" class="description-link" blank
              >Vue.js</SmartLink
            >,
            <SmartLink href="https://nextjs.org" class="description-link" blank
              >Next.js</SmartLink
            >,
            <SmartLink href="https://nuxtjs.org/" class="description-link" blank
              >Nuxt.js</SmartLink
            >
            {{ "" }} and
            <SmartLink
              href="https://tailwindcss.com"
              class="description-link"
              blank
              >Tailwind CSS</SmartLink
            >.
          </p>
        </div>

        <Status class="mt-4" />
      </div>

      <div class="rounded-full h-40 mb-4 w-40 md:mb-0">
        <SmartImage
          src="/assets/images/memoji.png"
          class="rounded-full h-40 w-40"
        />
      </div>
    </header>

    <section id="cards" class="my-16 grid gap-4 md:grid-cols-3">
      <Card
        v-for="(card, index) in cards"
        :key="`card-${index}`"
        :title="card.title"
        :href="card.href"
      >
        {{ card.description }}
      </Card>
    </section>

    <section
      id="experiences"
      class="mt-4 grid gap-6 sm:mt-6 md:(md:mt-10 gap-8 grid-cols-2) "
    >

      <div>
        <h3
          class="font-bold text-xl text-gray-400 uppercase dark:text-neutral-700"
        >
          Education
        </h3>

        <div class="mt-4 grid gap-2">
          <CardExperience
            v-for="(experience, index) in experiences.education"
            :key="`experience-education-${index}`"
            :title="experience.title"
            :url="experience.url"
            :date="experience.date"
            :position="experience.position"
          />
        </div>
      </div>
    </section>

    <section id="technologies" class="mt-6">
      <h3
        class="font-bold text-xl text-gray-400 uppercase dark:text-neutral-700"
      >
        Technologies I use
      </h3>

      <div class="mt-4 grid gap-2 sm:grid-cols-3 md:grid-cols-4">
        <CardSkill
          v-for="(skill, index) in skills"
          :key="`skill-${index}`"
          :title="skill"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.description-link {
  @apply border-neutral-500 border-b-2 border-opacity-50 hover:border-opacity-75;
}
</style>
