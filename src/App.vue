<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router';

import Container from '@/components/Container.vue';
import Revealer from './components/Revealer.vue';

const currentRouteName = computed( () => useRouter().currentRoute.value.name );
</script>

<template>
  <div id="mainSiteContainer">
    <Container is="header">
      <div class="portrait">
        <img src="https://pbs.twimg.com/media/GD68FaxWwAA0wYe?format=jpg&name=large"
             alt="Photo of me." />
        <p><small>Me!</small></p>
      </div>
      <div class="description">
        <div>
          <h2>Welcome!</h2>
          <p>Hihi! I'm Jade, your average trans girl programmer who likes *nix! I'm
             working on a number of projects, some public, some private. Feel free to
             check out my interactive projects and eveything else I put on here! If you
             enjoy my work and want to support me then you can donate via
             <a href="https://cash.app/$jadeonice">Cash App</a></p>
        </div>
        <br>
        <h3>Maya &#60;3</h3>
        <h3>Nyx &#60;3</h3>
        <nav id="siteContentNav">
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
            <li>
              <Revealer contentId="projectsNav">Projects</Revealer>
              <nav id="projectsNav">
                <ul>
                  <li><RouterLink to="/projects/site">This Site</RouterLink></li>
                </ul>
              </nav>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
    <hr>
    <main id="mainSiteContent">
      <h1>{{ currentRouteName }}</h1>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
body {
  background-color: var( --primary-color );
  margin: 0 50px;
}

#mainSiteContainer {
  color: white;
  font-family: var( --font );
  font-size: 20px;

  p {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var( --secondary-color );
    margin: 0;
    padding: 0;
  }

  a {
    color: var( --tertiary-color );
  }

  a:hover, a:active {
    color: var( --link-hover-color );
  }

  header {
    margin-bottom: 30px;

    .portrait {
      border: 2px solid black;
      margin: 0 auto;
      max-width: 256px;

      img {
        display: block;
        width: 100%;
      }

      p {
        padding: 20px 10px;
        text-align: center;
      }
    }

    .description {
      text-align: center;

      #siteContentNav {
        font-size: 24px;
        margin-top: 30px;

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        #projectsNav {
          font-size: 16px;

          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
#mainSiteContainer {
  background-color: rgba( black, 0.3 );
  border: 2px solid var( --secondary-color );
  box-shadow: 0 0 25px 12px var( --secondary-color );
  margin: 50px auto;
  max-width: 1152px;
  padding: 30px;

  #mainSiteContent {
    margin-top: 30px;
    text-align: center;
  }
}
</style>
