<script lang="ts">
import { defineComponent } from "vue";

import addBtn from "@/assets/img/add-btn.png";
import addRecord from "@/assets/img/add-record.png";
import _ from "@/assets/js/lodash";

const data: { name: string; age: number; address: string } = _.merge(
  { address: "山东" },
  { name: "lihh", age: 20 }
);

import("@/assets/js/one");
import("@/assets/js/two");

export default defineComponent({
  setup() {
    return {
      addBtn,
      addRecord,
      data,
    };
  },
});
</script>

<template>
  <div>
    <h2 class="center">图片区域</h2>
    <hr />
    <div class="flex justify-around">
      <img :src="addBtn" class="img" alt="" />
      <img :src="addRecord" class="img" alt="" />
    </div>
    <h2 class="center">信息</h2>
    <hr />
    <ul>
      <li>姓名：{{ data.name }}</li>
      <li>年龄：{{ data.age }}</li>
      <li>地址：{{ data.address }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.center {
  text-align: center;
}

.flex {
  display: flex;
}

.justify-around {
  justify-content: space-around;
}

.img {
  width: 33px;
  height: 33px;
}
</style>
