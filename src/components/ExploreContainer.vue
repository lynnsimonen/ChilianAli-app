<template>
  <div id="top"></div>
  <div id="container">
    <div class="image" alt="Ali cooking empanadas with friend.">
      <div class="story">
        <h1>
          <strong>{{name}}</strong>
        </h1>
        <p2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magnam
          odio, quo obcaecati consequatur molestiae facilis ipsum pariatur
          quaerat! 
        </p2>
      </div>
    </div>

    <ul>
      <li><strong>Hours</strong></li>
      <li><b>Monday:</b> closed</li>
      <li><b>Tuesday:</b> 9AM <c>- 5PM</c></li>
      <li><b>Wednesday:</b> 9AM <c>- 5PM</c></li>
      <li><b>Thursday:</b> 9AM <c>- 5PM</c></li>
      <li><b>Friday:</b> 9AM <c>- 3PM</c></li>
      <li><b>Saturday:</b> 9AM <c>- 5PM</c></li>
      <li><b>Sunday:</b> 11AM <c>- 3PM</c></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExploreContainer",
  props: {
    name: String,
  },
});
</script>

<style scoped>
#top{
  height: 125px;
  background-color:rgba(255, 166, 0, 0.5);
}
#container {
  
  min-height:100%;
  width: 100%;
  position: absolute;
  font-family: "Segoe Script";
  background-color: rgba(255, 166, 0, 0.5);
}
.image {
  vertical-align:;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 50vh;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(
      180deg,
      transparent,
      rgba(22, 22, 2, 0.5) ),
    url(@/assets/AlisKitchen.jpg);
}
.story {
  top: 30%;
  position: absolute;
  font-style: italic;
}

h1 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  padding-bottom: 5px;
  padding-right: 25px;
  color: white;
  line-height: 22px;
  letter-spacing: 5px;
  font-size: 2rem;
}
p2 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  font-size: 16px;
  line-height: 22px;
  color: white;
}
ul {
  list-style: none;
  padding-left: 25%;
  display: table;
  font-size: small;
}
li {
  display: table-row;
}
b {
  display: table-cell;
  padding-right: 1em;
}
c {
  display: table-cell;
  padding-right: 1em;
}
</style>
