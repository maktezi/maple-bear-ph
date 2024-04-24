// hooks/redirectNotFound.ts

import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig(({ app }) => {
  app.hook('app:route', ({ route, redirect }) => {
    // Check if the route is not found (404)
    if (route.name === 'NotFound') {
      // Redirect to the home page
      redirect('/')
    }
  })
})
