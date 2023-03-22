<template>
  <div style="text-align: center;">
      <h1 id="mainHead">Reset Password Page</h1>
      <ResetPasswordDisplay/>
  </div>
</template>

<script>

import ResetPasswordDisplay from '@/components/ResetPasswordDisplay.vue'
export default {
  name: "ResetPassword",
  components:{
    ResetPasswordDisplay
  }
}
</script>

