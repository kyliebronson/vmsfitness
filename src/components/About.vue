<template>
  <div>
    <p>Meet Victor Santiago</p>
    <div class="img"><img src="../assets/fitpic.jpg" alt="" /></div>

    <div><p1> Founder and Peronsal Trainer </p1></div>
    <div>
      <p2>
        I have helped helped hundreds of people achieve their fitness goals and
        I can help you too. I have been a certified personal trainer for over
        two years. I trained multiple clients of ages ranging from 18 to 70.
        Training has always been one of my biggest passions, I love helping
        others and watching them gain confidence is an unbeatable feeling.
      </p2>
    </div>
    <div><p3> The 4 Keys to Success </p3></div>
    <div><p4> 1.Training 2.Nutrition 3.Mindset 4.Accountability </p4></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
p {
  font-weight: bold;
  font-size: 50px;
  padding: 12px;
}
p1 {
  font-weight: bold;
  font-size: 30px;
  padding: 10px;
  text-decoration: underline;
}
p2 {
  line-height: 20px;
  font-size: 18px;
}
p3 {
  font-size: 35px;
}
p4 {
  font-size: 26px;
}
img {
  max-width: 250px;
}
</style>
