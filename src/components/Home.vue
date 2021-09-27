<template>
  <div>
    <div class="hero">
      <h2>
        <span>Set</span> <span>Goals</span> <span>Rise</span> <span>Above</span>
      </h2>
      <img src="../assets/fitpic4.jpg" />
    </div>
    <div class="hero2-top">
      <p class="border"></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  background-color: #000000;
  color: white;
  position: relative;
}
.hero h2 {
  position: absolute;
  top: 50%;
  text-transform: uppercase;
  background-color: rgb(255, 98, 31, 0.6);
  width: 100%;
  transition: 0.5s ease;
  opacity: 1;
  color: white;
  font-size: 35px;
  padding: 20px;
  text-align: center;
}
.hero img {
  min-width: 100%;
  height: 100vh;
}
.hero2-top .border {
  width: 100%;
  max-width: 160px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom-color: #858585;
  border-bottom-width: 5px;
  border-bottom-style: solid;
}
.hero2 h2 {
  font-family: "Assistant";
  font-weight: 300;
  font-size: 54px;
  margin-bottom: 20px;
  line-height: 1.4;
}
.hero2-top {
  display: flex;
  justify-content: center;
  padding-top: 100px;
}
.hero span {
  padding: 20px;
  letter-spacing: 10px;
}
</style>
