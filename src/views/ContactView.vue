<script lang="ts" setup>
import Copyable from '@/components/Copyable.vue';
import Revealer from '@/components/Revealer.vue';
</script>

<template>
  <ul class="contact-list">
    <li><a href="mailto:jade@spaceaccountant.me">Email</a></li>
    <li><a href="https://github.com/SpaceAccountant">GitHub</a></li>
    <li>
        <div>
            <Revealer contentId="discordTag">Discord</Revealer>
        </div>
        <div>
            <Copyable content="jade_eats_stocking" v-bind:id="'discordTag'">
                jade_eats_stocking<font-awesome-icon icon="fa-solid fa-copy"
                                                     style="margin-left: 5px;" />
            </Copyable>
        </div>
    </li>
    <li><a href="https://en.wikipedia.org/wiki/IP_over_Avian_Carriers">Pigeon</a></li>
  </ul>
</template>

<style lang="scss" scoped>
.contact-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
