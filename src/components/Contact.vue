<template>
  <div class="displayflex">
    <div class="form">
      <p>Contact Me</p>
      <input type="text" name="name" placeholder="First / Last Name" />
      <input type="text" name="email" placeholder="Email Address" />
      <textarea
        name="description"
        id=""
        cols="30"
        rows="10"
        placeholder="Description"
      ></textarea>
      <div class="smtbtn">
        <button>Submit</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.displayflex {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
.form {
  display: flex;
  flex-direction: column;

  width: 800px;
}
.form p {
  font-size: 27px;
}
.form input,
textarea,
.smtbtn {
  margin: 20px;
  padding: 12px;
}

.form input[type="submit"]:hover,
.form input[type="button"]:hover {
  background: #4691a4;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}
.form input:focus,
.form textarea:focus,
.form select:focus {
  -moz-box-shadow: 0 0 8px #88d5e9;
  -webkit-box-shadow: 0 0 8px #88d5e9;
  box-shadow: 0 0 8px #88d5e9;
  border: 1px solid #88d5e9;
}
.form button {
  width: 120px;
  height: 35px;
  background-color: #ff621f;
  color: white;
}
.form .smtbtn {
  text-align: right;
}
</style>
