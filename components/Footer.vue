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

<template>
  <footer>
    <v-footer app color="black" class="v-footer">
      <div class="bottom-footer">
        <div class="footer-date">
          &copy; {{ (new Date()).getFullYear() }}
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
          <p style="cursor: default;">designed by mapleph</p>
        </div>
      </div>
    </v-footer>
  
    <div class="v-footer-top">
      <div class="top-footer">
        <div class="footer-details">
          <h2 class="title" style="color: #c41f25;">MAPLE BEAR GLOBAL SCHOOLS</h2>
          <h3>Mission & Vision Statement</h3>
          <p style="width: 405px; text-align: justify;">The Maple Bear mission is to deliver a student-focused learning system in a safe, secure and stimulating environment that prepares students for success at the post secondary level and that instills a passion for life-long learning.</p>
          <div class="footer-link">
            <nuxt-link class="link" to="#"><v-icon icon="mdi-greater-than"/> Read full statement…<br/></nuxt-link>
          </div>
          <a
            v-for="item in items"
            :key="item.title"
            :href="item.href"
            :title="item.title"
            class="d-inline-block mx-1 mb-2 social-link"
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
          <p class="title">QUICK LINKS</p>
          <div class="title-line"></div>
          <div style="display: flex; justify-content: space-between;">
            <div class="link-wrapper">
              <nuxtLink class="link" to="/why-maple-bear">WHY MAPLE BEAR?</nuxtLink>
              <nuxtLink class="link" to="/about">ABOUT US</nuxtLink>
              <nuxtLink class="link" to="/find-a-school">FIND A SCHOOL</nuxtLink>
              <nuxtLink class="link" to="/careers">CAREERS</nuxtLink>
              <nuxtLink class="link" to="/careers">OWN A SCHOOL</nuxtLink>
            </div>
            <div class="link-wrapper">
              <nuxtLink class="link" to="/">HOME</nuxtLink>
              <nuxtLink class="link" to="/news">EVENTS</nuxtLink>
              <nuxtLink class="link" to="/blog">BLOG</nuxtLink>
              <nuxtLink class="link" to="/contact-us">CONTACT US</nuxtLink>
              <nuxtLink class="link" to="/privacy-statement">PRIVACY STATEMENT</nuxtLink>
            </div>
          </div>
        </div>
        <div class="contact-us">
          <p class="title">CONTACT US</p>
          <div class="title-line"></div>
          <div class="list">
            <p>
              <nuxt-link class="list-link" to="#">Find a School</nuxt-link> near you and enrol your child through our regional website links.
            </p>
            <p>
              Interested in <nuxtLink class="list-link" to="#">owning a school</nuxtLink>? Or find out more at the Maple Bear Global school ownership site.
            </p>
            <p>
              For all other enquiries, please <nuxt-link class="list-link" to="#">fill out this form</nuxt-link>.
            </p>
          </div>
          <nuxt-link style="margin-left: 405px;" class="link" to="#top"><v-icon icon="mdi-arrow-up-drop-circle-outline"/></nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  justify-content: center;
}

.footer-link {
  color: white;
  text-decoration: none;
  align-items: center;
}

.social-link .v-icon {
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity));
  text-decoration: none;
  color: white;
  transition: .2s ease-in-out;
}

.social-link .v-icon:hover {
  color: gray;
}

.v-footer,
.v-footer-top {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-footer {
  height: 35px;
}

.v-footer-top {
  height: 280px;
  background-color: #191919;
  color: white;
  width: 1920px;
}

@media (max-width: 1350px) {
  .v-footer-top {
    height: 430px;
    width: 100%;
  }
}

@media (max-width: 920px) {
  .v-footer-top {
    height: 630px;
    width: 100%;
  }
}

.top-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.bottom-footer {
  display: flex;
  width: 1300px;
  font-size: 11px;
  justify-content: space-between;
  color: gray;
}

.title {
  font-size: 20px;
  cursor: default;
}

.title-line {
  border-top: 2px solid #c41f25;
  margin-bottom: 5px;
  width: 50px;
}

.footer-details {
  font-size: 13px;
}

.footer-details, .quick-links,
.contact-us {
  width: 425px;
  /* border: 1px solid gray; */
  margin-right: 10px;
  padding: 10px
}

.link {
  color: white;
  text-decoration: none;
  list-style-type: none;
  font-size: 13px;
  margin-top: 5px;
  margin-bottom: 5px;
  transition: 0.5s;
}

.list {
  font-size: 13px;
}

.list p {
  margin-top: 10px;
  margin-bottom: 5px;
}

.list-link {
  color: white;
  transition: 0.5s;
}

.list-link:hover {
  color: gray;
}

.link:hover {
  color: gray;
}

.link-wrapper {
  display: flex;
  flex-direction: column;
  /* margin-right: 40px; */
}

.footer-link {
  color: white;
  margin-top: 5px;
  margin-bottom: 10px;
}
</style>
