<script lang="ts" setup>
import { defineProps } from 'vue';

interface Props {
  content: string
}

const props = defineProps<Props>();

function copy() {
  navigator.clipboard.writeText(props.content);
}
</script>

<template>
  <span class="copyable" v-on:click="copy()"><slot></slot></span>
</template>

<style lang="scss" scoped>
@import '@/assets/style/default.scss';

.copyable {
  color: $secondary_color;
  text-decoration: underline;
}

.copyable:hover, .copyable:active {
  color: $link_hover_color;
  cursor: pointer;
}
</style>
