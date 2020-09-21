<template>
    <div class="home">
        <Header class="mb-4" />
        <router-view class="children"></router-view>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
export default {
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
}
.children {
    width: calc(100vw - 15%);
    margin: 0 auto;
}
</style>
