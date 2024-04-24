<template>
  <nav id="navbar" :elevation="1">
    <div class="top-nav">
      <h3 class="nav-title">MAPLE BEAR PH</h3>
      <div class="nav-logo">
        <a
          v-for="item in items"
          :key="item.title"
          :href="item.href"
          :title="item.title"
          id="nav-links"
          class="d-inline-block mx-1 social-link"
          rel="noopener noreferrer"
          target="_blank"
        >
        <v-icon
          :icon="item.icon"
          :size="item.icon === '$vuetify' ? 24 : 20"
        />
      </a>
      </div>
    </div>
  </nav>

  <nav class="bottom-nav">
    <div class="bottom-nav-container">
      <div class="bot-logo">
        <nuxt-link to="/"><img class="nav-bot-logo" :src='maple1' /></nuxt-link>
        <nuxt-link to="/"><img class="nav-bot-logo" :src='maple2' /></nuxt-link>
        <nuxt-link to="/"><img class="nav-bot-logo" :src='maple3' /></nuxt-link>
        <div class="nav-text-desktop">
          <p>The best of Canadian education for a global future.</p>
        </div>
        <div>
          <ul class="bot-navlinks">
            <li><nuxtLink class="nuxtLink" to="/">HOME</nuxtLink></li>
            <li><nuxtLink class="nuxtLink" to="/why-maple-bear">WHY MAPLE BEAR?</nuxtLink></li>
            <li><nuxtLink class="nuxtLink" to="/about">ABOUT US</nuxtLink></li>
            <li><nuxtLink class="nuxtLink" to="/find-a-school">FIND A SCHOOL</nuxtLink></li>
            <li><nuxtLink class="nuxtLink" to="/join-us">JOIN US</nuxtLink></li>
            <li><nuxtLink class="nuxtLink" to="/news">NEWS</nuxtLink></li>
            <li><nuxtLink class="nuxtLink" to="/blog">BLOG</nuxtLink></li>
            <li><nuxtLink class="nuxtLink" to="/contact-us">CONTACT US</nuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="nav-text-mobile">
        <p>The best of Canadian education for a global future.</p>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import maple1 from '../assets/maplebearlogo1.png'
import maple2 from '../assets/maplebearlogo2.png'
import maple3 from '../assets/maplebearlogo3.png'

const items = [
  {
    title: 'Facebook',
    icon: `mdi-facebook`,
    href: 'https://www.facebook.com/maplebearsg',
  },
  {
    title: 'LinkedIn',
    icon: `mdi-linkedin`,
    href: 'https://www.linkedin.com/company/maple-bear-global-schools-ltd-/',
  },
  {
    title: 'Youtube',
    icon: `mdi-youtube`,
    href: 'https://www.youtube.com/channel/UCSOTDLlCB4HKhm22H2WkS6w',
  },
  {
      title: 'Vimeo',
    icon: `mdi-vimeo`,
    href: 'https://vimeo.com/maplebearglobal',
  },
  {
    title: 'Instagram',
    icon: `mdi-instagram`,
    href: 'https://www.instagram.com/maplebearsingapore/',
  },
]

</script>

<style scoped>

/* Nav */
#navbar{
width: 1000px;
}

.top-nav {
  position: fixed;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15%;
  padding-right: 15%;
  background-color: #cf1f25;
}

.nav-title {
  align-items: center;
  font-weight: 500;
  cursor: default;
  color: white;
  font-size: 1.1rem;
}

#nav-links {
  color: white;
  transition: 0.5s;
}

#nav-links:hover {
  color: gray;
}

.bottom-nav-container {
  background-color: white;
  width: 100%;
  height: 6.9rem;
  display: flex;
  position: fixed;
  margin-top: 45px;
}

.bot-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding-left: 30px;
}

.nav-bot-logo {
  padding-top: 5px;
  width: 5rem;
}

.nav-text-desktop {
  color: rgb(29, 29, 29);
  font-weight: 300;
  font-size: 1rem;
  display: flex;
  margin: auto;
  padding-left: 15px;
  width: 185px;
  border-left: 2px solid #cf1f25;
  margin-left: 12px;
  margin-right: 100px;
  justify-content: space-between;
}

.nav-text-desktop p {
  font-family: Lato, Arial, Helvetica, san-serif;
}

ul, li, .nuxtLink {
  list-style: none;
  padding: 5px;
  text-decoration: none;
  color: black;
  transition: 0.5s;
}

.nuxtLink:hover {
  color: gray;
  font-family: Raleway, Arial, Helvetica, san-serif;
}

.bot-navlinks {
  display: flex;
  font-size: 0.8rem;
}

.nav-text-mobile {
  display: none;
}

@media screen and (max-width: 1000px) {
  .bot-navlinks {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .top-nav {
    height: 60px;
  }

  .top-nav, .bottom-nav-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .bottom-nav-container {
    margin-top: 60px;
    height: 100px;
  }

  .bot-logo {
    border-right: none;
    padding-left: 0;
  }

  .nav-bot-logo {
    margin-top: 5px;
    width: 4rem;
  }

  .bot-navlinks {
    display: none;
  }

  .nav-text-desktop {
    display: none;
  }

  .nav-text-mobile {
    display: block;
    color: black;
    font-weight: 300;
    font-size: 0.9rem;
    padding-bottom: 5px;
    width: auto;
    border: none;
  }
}
/* End Nav */
</style>