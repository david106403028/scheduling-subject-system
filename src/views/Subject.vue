<template>
    <div class="subject d-flex flex-row">
        <div class="left d-flex flex-column w-40 flex-grow-1 mr-4">
            <v-text-field
                v-model="subject"
                class="mb-4"
                background-color="white"
                hide-details
                label="查詢課程"
                @blur="handleSubjectBlur($event)"
            />
            <div class="subject-result">
                <div
                    class="subject-item"
                    v-for="item in availableSubject"
                    :key="item.subjectId"
                    @click="handleClickSubject(item)"
                >
                    <div>{{ item.title }}</div>
                </div>
            </div>
        </div>
        <div class="right w-60 flex-grow-1">
            <div class="subject-header">課程資訊</div>
            <template v-if="targetSubject">
                <div class="my-3 px-3 subject-info">課名：{{ targetSubject.title }}</div>
                <div class="my-3 px-3 subject-info">課號：{{ targetSubject.subjectId }}</div>
                <div class="my-3 px-3 subject-info">時間：{{ targetSubject.classTime }}</div>
                <div class="my-3 px-3 subject-info">學分：{{ targetSubject.score }}</div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        subject: '',
        availableSubject: [
            { title: '資尿褲', subjectId: 's0103034', classTime: '2020/09/21', score: 3 },
            { title: '資當節', subjectId: 's0102035', classTime: '2020/09/21', score: 3 },
            { title: '馬的法克', subjectId: 's0202036', classTime: '2020/09/21', score: 2 },
            { title: '操你媽', subjectId: 's0109037', classTime: '2020/09/21', score: 1 },
            { title: '我央', subjectId: 's0107038', classTime: '2020/09/21', score: 5 },
            { title: '大頭包小頭', subjectId: 's0102039', classTime: '2020/09/21', score: 2 }
        ],
        targetSubject: null
    }),
    methods: {
        handleSubjectBlur(event) {
            console.log(this.subject)
            console.log(event)
        },
        handleClickSubject({ title = '', subjectId = '', classTime = '', score = null }) {
            this.targetSubject = {
                title,
                subjectId,
                classTime,
                score
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.subject {
    height: 100%;
    &-header {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        border-bottom: 1px solid #e0e1e2;
    }
    &-result {
        height: 100%;
    }
    &-info {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    &-item {
        height: 40px;
        padding: 5px 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: 1px solid #e0e1e2;
        border-bottom: 0;
        &:last-child {
            border-bottom: 1px solid #e0e1e2;
        }
    }
}
.right {
    border: 1px solid #e0e1e2;
    border-radius: 4px;
}
.w-40 {
    width: 40%;
}
.w-60 {
    width: 60%;
}
</style>
