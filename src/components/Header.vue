<template>
    <div class="header">
        <div class="logo">這裡放中央大學的logo</div>
        <div class="d-flex flex-row">
            <div class="operators mr-3" v-for="item in operationButton" :key="item.text" @click="item.onClick">
                {{ item.text }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        operationButton() {
            return [
                {
                    text: '課程',
                    onClick: () => {
                        console.log('課程')
                        this.$router.push('/home/subject')
                    }
                },
                {
                    text: '排課',
                    onClick: () => {
                        console.log('排課')
                        this.$router.push('/home/schedule')
                    }
                },
                {
                    text: '畢審',
                    onClick: () => {
                        console.log('畢審')
                        this.$router.push('/home/audit')
                    }
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
}
.logo {
    width: 600px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: teal;
}
.operators {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid lightblue;
    border-radius: 50%;
    cursor: pointer;
    &:active {
        background-color: #e0e1e2;
    }
}
</style>
