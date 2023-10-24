<script setup lang="ts">
import { ref } from "vue";
import { message } from "ant-design-vue";
import axios from "axios";
interface FormState {
  username: string;
  password: string;
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
    });
};
</script>
<template>
  <div class="login">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" @click="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<style scoped></style>
