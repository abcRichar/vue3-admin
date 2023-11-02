<template>
  <div class="login">
    <a-row justify="space-between">
      <a-col :span="14">
        <div class="login-left">
          <img src="../../assets/images/login-left.png" >
        </div>
      </a-col>
      <a-col :span="10">
        <div class="login-right">
          <div class="login-center">
            <div class="tit">
              欢迎使用管理系统
            </div>
            <div class="sub-tit">
              welcome！
            </div>
            <a-form :model="formState" name="basic"  :wrapper-col="{ span:24 }" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
              <a-form-item  name="username"  :rules="[{ required: true, message: '请输入账号!' },{max:12,message:'请输入18位以内的账号'}]">
                <a-input v-model:value="formState.username" placeholder="请输入账号" style="border-radius: 7px;" >
                  <template #prefix>
                    <user-outlined type="user" />
                  </template>
                </a-input> 
              </a-form-item>
              <a-form-item name="password" :rules="[{ required: true, message: '请输入密码!' },{min:6,max:12,message:'请输入6-12位的密码'}]">
                <a-input-password v-model:value="formState.password" placeholder="请输入密码"  style="border-radius: 7px;"  >
                  <template #prefix>
                    <lock-outlined type="user"/>
                  </template>
                </a-input-password>
              </a-form-item>
              <a-checkbox v-model:checked="checked">记住账号</a-checkbox>
              <a-form-item>
                <a-button type="primary" html-type="submit" block style="margin-top: 30px;border-radius: 8px;font-size: 12px;">立即登录</a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import { UserOutlined ,LockOutlined } from '@ant-design/icons-vue';
  import { ref } from "vue";
  import { message } from "ant-design-vue";
  import axios from "axios";
  interface FormState { 
    username: string
    password: string
  }

  const checked = ref(false)
const formState = ref<FormState>({
  username: "",
  password: "",
});

  const onFinish = (values: any) => {
      console.log('Success:', values);
    axios
    .post("http://127.0.0.1:4000/api/login", {
      username: values.username,
      password: values.password,
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

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
  // axios
  //   .post("http://127.0.0.1:4000/api/login", {
  //     username: formState.value.username,
  //     password: formState.value.password,
  //   })
  //   .then(function (res: any) {
  //     console.log(res);
  //     message.success(res.data.message);
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //     message.error(err.response.data.message);
  //   })
// }; 
</script>
<style scoped lang="scss">
.login{
  .login-left{
    width: 100%;
    height: 100vh;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .login-right{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #b7c9ef;
    width: 100%;
    height: 100vh;
  }
  .login-center{
    width: 20;
    padding:40px 30px;
    background-color: #fff;
    border-radius: 20px;
    .tit{
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      color: #1f1f1f;
    }
    .sub-tit{
      color: #555;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 30px;
    }
  }
}
</style>