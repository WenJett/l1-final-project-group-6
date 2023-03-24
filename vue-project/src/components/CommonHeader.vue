<template>
    <div class="box">
        <button class="button login" onclick="window.location.href = 'login';">Register / Login</button>
    </div>
</template>

<style >
.box {
    background-color: rgb(226, 225, 225);
    height: 65px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100vw;
}

.button {
  background-color: rgb(44, 181, 167);
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 50%;
  float: right;
}
</style>