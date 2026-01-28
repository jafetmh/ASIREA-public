<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path :fill="color" fill-opacity="1"
            d="M0,64L60,69.3C120,75,240,85,360,101.3C480,117,600,139,720,165.3C840,192,960,224,1080,202.7C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
        </path>
    </svg>
</template>

<script setup>
defineProps({
  color: { type: String, default: '#ffffff' }
})
</script>