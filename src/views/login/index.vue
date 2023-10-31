<script setup lang="ts">
import { ref } from "vue";
import { message } from "ant-design-vue";
import axios from "axios";
interface FormState {
  username: string
  password: string
}
const formState = ref<FormState>({
  username: "",
  password: "",
});
const submit = () => {
  console.log(formState.value.username);
  axios
    .post("http://127.0.0.1:4000/api/login", {
      username: formState.value.username,
      password: formState.value.password,
    })
    .then(function (res: any) {
      console.log(res);
      message.success(res.data.message);
    })
    .catch(function (err) {
      console.log(err);
      message.error(err.response.data.message);
    })
}; 
</script> 
<template>
  <div class="login">
    <a-form :model="formState" name="basic" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" autocomplete="off">
      <a-form-item label="账号" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input v-model:value="formState.username" size="small" />
      </a-form-item>

      <a-form-item label="密码" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" size="small" />
      </a-form-item>
      <a-button type="primary" @click="submit" block>登录</a-button>
    </a-form>
  </div>
</template>
<style scoped></style>
