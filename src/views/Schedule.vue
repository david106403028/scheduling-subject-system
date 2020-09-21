<template>
    <div class="schedule d-flex flex-row">
        <div class="left d-flex flex-column w-50 flex-grow-1 mr-4">
            <table class="subject" @drop="drop($event)" @dragover="event => event.preventDefault()">
                <thead>
                    <tr>
                        <th></th>
                        <th>一</th>
                        <th>二</th>
                        <th>三</th>
                        <th>四</th>
                        <th>五</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(date, index) in scheduleCalanders" :key="index">
                        <template v-if="index === 4">
                            <td class="h-30"></td>
                            <td class="spacer h-30" colspan="5">午休</td>
                        </template>
                        <template v-else>
                            <td class="sub" v-for="item in date" :key="item.subId" :id="item.subId">
                                <label>{{ item.subLable }}</label>
                            </td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="right w-50 flex-grow-1">
            <div
                class="subject-item draggable"
                draggable="true"
                v-for="item in availableSubject"
                :key="item.subjectId"
                @dragstart="drag(item)"
            >
                <div>{{ item.title }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        availableSubject: [
            { title: '資尿褲', subjectId: 's0103034', classTime: '2020/09/21', score: 3 },
            { title: '資當節', subjectId: 's0102035', classTime: '2020/09/21', score: 3 },
            { title: '馬的法克', subjectId: 's0202036', classTime: '2020/09/21', score: 2 },
            { title: '操你媽', subjectId: 's0109037', classTime: '2020/09/21', score: 1 },
            { title: '我央', subjectId: 's0107038', classTime: '2020/09/21', score: 5 },
            { title: '大頭包小頭', subjectId: 's0102039', classTime: '2020/09/21', score: 2 }
        ],
        dragTarget: null
    }),
    computed: {
        scheduleCalanders() {
            let result = [1, 2, 3, 4, 9, 5, 6, 7, 8].map(value => {
                let arr = new Array(6).fill({ value }).map((cur, index) => ({
                    subId: `${cur.value}${!index ? '' : `-${index}`}`,
                    subLable: !index ? cur.value : null
                }))
                return arr
            })
            return result
        }
    },
    methods: {
        drop(event) {
            console.log(event)
        },
        drag(item) {
            console.log(item)
            this.dragTarget = item
        }
    }
}
</script>

<style lang="scss" scoped>
.schedule {
    height: 100%;
}
.subject {
    width: 100%;
    height: 100%;
    border: 1px solid #c0c0c0;
    border-collapse: collapse;
    padding: 9px;
    th {
        border: 1px solid #c0c0c0;
        padding: 20px;
        background: #f0f0f0;
    }
    td {
        text-align: center;
        border: 1px solid #c0c0c0;
        padding: 10px;
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
.draggable {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
.w-50 {
    width: 50%;
}
</style>
