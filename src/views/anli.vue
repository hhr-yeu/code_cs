<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';

const searchEmp = ref({
  name: '',
  gender: '',
  job: ''
})


const search = async () => {
  const url = `https://web-server.itheima.net/emps/list?name=${searchEmp.value.name}&gender=${searchEmp.value.gender}&job=${searchEmp.value.job}`
  const result = await axios.get(url)
  tableData.value = result.data.data
}

const clear=()=>{
    searchEmp.value={name: '',gender: '',job: ''}
    search();
}

const tableData = ref([])


onMounted(()=>{
    search();
})
</script>

<template>
  <div class="a1">
    <el-form :inline="true" :model="searchEmp" class="demo-form-inline">
    <el-form-item label="姓名">
      <el-input v-model="searchEmp.name" placeholder="输入姓名" clearable />
    </el-form-item>

    <el-form-item label="性别">
      <el-select
        v-model="searchEmp.gender"
        placeholder="选择性别"
        clearable
      >
        <el-option label="男" value="1" />
        <el-option label="女" value="2" />
      </el-select>
    </el-form-item>

    <el-form-item label="职位">
        <el-select v-model="searchEmp.job" placeholder="请选择" clearable>
          <el-option label="大大" value="1" />
          <el-option label="讲师" value="2" />
          <el-option label="咨询师" value="3" />
        </el-select>
      </el-form-item>
    
    
    <el-form-item>
      <el-button type="primary" @click="search">查询</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="danger" @click=" clear">清空</el-button>
    </el-form-item>
  </el-form>

  <el-table :data="tableData" border style="width: 100%">
    <el-table-column type="index" label="ID" width="50" align="center"/>
    <el-table-column prop="name" label="姓名" width="120" align="center"/>
    <el-table-column label="头像" width="120"align="center">
      <template #default="scope">
            <img :src="scope.row.image" width="50">
      </template>
    </el-table-column>
    <el-table-column prop="gender" label="性别" width="120" align="center">
        <template #default="scope">
            {{ scope.row.gender==1?"男":"女" }}
      </template>
    </el-table-column>
    <el-table-column label="职位" width="180" align="center">
        <template #default="scope">
          <span v-if="scope.row.job == 1">班主任</span>
          <span v-else-if="scope.row.job == 2">讲师</span>
          <span v-else-if="scope.row.job == 3">咨询师</span>
          <span v-else>其他</span>
        </template>
      </el-table-column>
    <el-table-column prop="entrydate" label="入职日期" width="120" align="center"/>
    <el-table-column prop="updatetime" label="更新时间" align="center"/>
  </el-table>
  </div>
</template>

<style scoped>
  .a1 {
  width: 80%;
  margin: auto;
  margin-top: 100px;
}
</style>