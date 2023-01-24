<template>
  <div>
    <a class="menuitem lang" v-for="l in availableLocales()" :key="l.code" :href="switchLocalePath(l.code)">
      {{ l.code.toUpperCase() }}
    </a>
  </div>
</template>

<script setup>

const { locale, locales } = useI18n()

const switchLocalePath = useSwitchLocalePath()

const availableLocales = () => {
  return (locales.value).filter(i => i.code !== locale.value)
}

</script>