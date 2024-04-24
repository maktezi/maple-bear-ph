<template>
  <v-footer height="35" app color="black" class="v-footer">
    <div class="bottom-footer">
      <div class="footer-date">
        &copy; {{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block"></span>
        —
        <a
          class="footer-link"
          href="https://www.maplebear.sg/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Maple Bear Global Schools Ltd.
        </a>
      </div>
      <div class="footer-dev">
        <p>Designed by Maple Dev</p>
      </div>
    </div>
  </v-footer>
  
  <v-footer height="300" app color="#191919" class="v-footer">
    <div class="top-footer">
      <div class="footer-details">
        <h2 style="color: #c41f25;">MAPLE BEAR GLOBAL SCHOOLS</h2>
        <h3>Mission & Vision Statement</h3>
        <p>The Maple Bear mission is to deliver a student-focused learning system in a safe, secure and stimulating environment that prepares students for success at the post secondary level and that instills a passion for life-long learning.</p>
        <div class="footer-link">
          <nuxt-link class="link" to="#"><v-icon icon="mdi-greater-than"/> Read full statement…<br/></nuxt-link>
        </div>
        <a
          v-for="item in items"
          :key="item.title"
          :href="item.href"
          :title="item.title"
          class="d-inline-block mx-2 social-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <v-icon
            :icon="item.icon"
            :size="item.icon === '$vuetify' ? 24 : 16"
          />
        </a>
      </div>
      <div class="quick-links">
        <h3>QUICK LINKS</h3>
        <li><nuxtLink class="link" to="/">HOME</nuxtLink></li>
        <li><nuxtLink class="link" to="/why-maple-bear">WHY MAPLE BEAR?</nuxtLink></li>
        <li><nuxtLink class="link" to="/about">ABOUT US</nuxtLink></li>
        <li><nuxtLink class="link" to="/find-a-school">FIND A SCHOOL</nuxtLink></li>
        <li><nuxtLink class="link" to="/own-a-school">OWN A SCHOOL</nuxtLink></li>
        <li><nuxtLink class="link" to="/news">EVENTS</nuxtLink></li>
        <li><nuxtLink class="link" to="/blog">BLOG</nuxtLink></li>
        <li><nuxtLink class="link" to="/contact-us">CONTACT US</nuxtLink></li>
      </div>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
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

<style scoped lang="sass">
.footer-link
  color: white
  text-decoration: none
  align-items: center

.social-link :deep(.v-icon)
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
  text-decoration: none
  color: white
  transition: .2s ease-in-out

  &:hover
    color: gray


.v-footer
  display: flex
  justify-content: center

.top-footer
  display: flex

.bottom-footer
  display: flex
  width: 1300px
  font-size: 11px
  justify-content: space-between
  color: gray

.footer-details
  width: 400px
  font-size: 13px

.link
  color: white
  text-decoration: none
  list-style-type: none

.footer-link
  color: white
  margin-top: 5px
  margin-bottom: 20px
</style>
