<template>
  <div class="banner-search">
    <div class="caption">
      <span class="text">快速预约</span>
    </div>
    <div class="search-form">
      <div class="line">
        <select name="area" v-model="state.hospitalArea">
          <option
            v-for="item in state.areaList"
            :key="item"
            v-text="item"
          ></option>
        </select>
      </div>
      <div class="line">
        <select name="level" v-model="state.hospitalLevel">
          <option v-for="item in leaveList" :key="item" v-text="item"></option>
        </select>
      </div>
      <div class="line">
        <select name="name" v-model="state.hospitalName">
          <option v-for="item in nameList" :key="item" v-text="item"></option>
        </select>
      </div>
      <div class="line">
        <select name="department" v-model="state.hospitalDepartment">
          <option
            v-for="item in departmentList"
            :key="item"
            v-text="item"
          ></option>
        </select>
      </div>
    </div>
    <div class="submit">
      <input type="button" class="button" value="快速查询" />
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted, watch } from "vue";
import getData from "../mock-data/getData";

export default {
  setup() {
    const state = reactive({
      areaList: [],
      hospitalArea: "医院地区",
      hospitalLevel: "医院等级",
      hospitalName: "医院名称",
      hospitalDepartment: "科室名称",
    });

    const leaveList = computed(() => getLevelData(state.hospitalArea));
    const nameList = computed(() =>
      getNameData(state.hospitalArea, state.hospitalLevel)
    );
    const departmentList = computed(() =>
      getDepartmentData(
        state.hospitalArea,
        state.hospitalLevel,
        state.hospitalName
      )
    );

    onMounted(() => getAreaData());

    watch(
      () => leaveList.value,
      (newVal) => {
        state.hospitalLevel = newVal[0];
      }
    );

    watch(
      () => nameList.value,
      (newVal) => {
        state.hospitalName = newVal[0];
      }
    );

    watch(
      () => departmentList.value,
      (newVal) => {
        state.hospitalDepartment = newVal[0];
      }
    );

    function getAreaData() {
      state.areaList = getData.getDistinctArea();
    }

    function getLevelData(area) {
      return getData.getLevelByArea(area);
    }

    function getNameData(area, level) {
      return getData.getNameByAreaAndLevel(area, level);
    }

    function getDepartmentData(area, level, name) {
      return getData.getDepartmentArrByHospitalName(area, level, name);
    }

    return {
      state,
      leaveList,
      nameList,
      departmentList,
    };
  },
};
</script>

<style lang="scss" scoped>
.banner-search {
  float: right;
  width: 250px;
  height: 255px;
  background: #fafafa;

  .caption {
    height: 22px;
    padding: 15px 0 15px 0;
    text-align: center;

    .text {
      display: inline-block;
      height: 22px;
      line-height: 22px;
      padding-left: 28px;
      color: #fec009;
      font-size: 16px;
      background: url("../img/icon-help.png") no-repeat left top;
    }
  }

  .search-form {
    height: 150px;

    .line {
      padding-bottom: 9px;
      text-align: center;

      select {
        width: 170px;
        font-size: 12px;
        z-index: 0;
        border: 1px solid #dcdddd;
        height: 26px;
        padding: 2px 0;
        color: #666;
      }
    }
  }

  .submit {
    height: 32px;
    text-align: center;

    .button {
      width: 108px;
      height: 33px;
      background: #fecd09;
      font-size: 14px;
      color: #fff;
      border-radius: 3px;
      cursor: pointer;
    }
  }
}
</style>
