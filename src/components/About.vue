<template>
  <div>
    <p>Meet Victor Santiago</p>
    <p1> Founder and Peronsal Trainer </p1>
    <p2>
      Victor Santiago has helped hundreds of people achieve their fitness goals
      and he can help you too. You might have started to get into exercise
      because you were eager to find the confidence in your appearance and get
      in shape.</p2
    >
    <p2> The 4 Keys to Success </p2>
    <p3> 1.Training 2.Nutrition 3.Mindset 4.Accountability </p3>
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
  font-size: 40px;
  padding: 10px;
}

p1 {
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
}
</style>
