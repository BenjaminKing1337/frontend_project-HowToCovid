<template>
  <div>
    <h1>Infographics</h1>
    <hr />
    <div class="gridbox">
      <div class="item">
        <img src="@/assets/poster1.jpg" alt="poster" height="100%" width="100%" />
      </div>
      <div class="item">
        <img src="@/assets/poster2.jpg" alt="poster" height="100%" width="100%" />
      </div>
      <div class="item">
        <img src="@/assets/poster3.jpg" alt="poster" height="100%" width="100%" />
      </div>
      <div class="item">
        <img src="@/assets/poster4.jpg" alt="poster" height="100%" width="100%" />
      </div>
      <div class="item">
        <img src="@/assets/poster5.jpg" alt="poster" height="100%" width="100%" />
      </div>
      <div class="item">
        <img src="@/assets/poster6.jpg" alt="poster" height="100%" width="100%" />
      </div>
      <div class="item">
        <img src="@/assets/poster7.jpg" alt="poster" height="100%" width="100%" />
      </div>
      <div class="item">
        <img src="@/assets/poster8.jpg" alt="poster" height="100%" width="100%" />
      </div>
      <div class="item">
        <img src="@/assets/poster9.jpg" alt="poster" height="100%" width="100%" />
      </div>
      <div class="item">
        <img src="@/assets/postcard1.jpg" alt="postcard" height="100%" width="100%" />
      </div>
      <div class="item">
        <img src="@/assets/postcard2.jpg" alt="postcard" height="100%" width="100%" />
      </div>
      <div class="item">
        <img src="@/assets/postcard3.jpg" alt="postcard" height="100%" width="100%" />
      </div>
      <div class="item">
        <img src="@/assets/postcard4.jpg" alt="postcard" height="100%" width="100%" />
      </div>
      <div class="item">
        <img src="@/assets/postcard5.jpg" alt="postcard" height="100%" width="100%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./src/scss/variables.scss";
h1 {
  text-align: start;
  margin: 0 0 0 1rem;
  color: #5b5a5a;
}
h2 {
  color: #5b5a5a;
}
p {
  margin-left: 1rem;
}
hr {
  width: 50%;
  margin: 0 0 0 1rem;
  height: 3px;
  border: none;
  background-color: #c7d40f;
}
.gridbox {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  height: auto;
  margin: 1rem 4rem 1rem 4rem;
  gap: 1rem;
}
.item {
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
    rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
}
.item:nth-child(1) {
  grid-area: 1 / 1 / 3 / 2;
  animation: appear 0.3s ease-out;
}
.item:nth-child(2) {
  grid-area: 1 / 2/ 3 / 3;
  animation: appear 0.5s ease-out;
}
.item:nth-child(3) {
  grid-area: 1 / 3 / 3 / 4;
  animation: appear 0.7s ease-out;
}
.item:nth-child(4) {
  grid-area: 1 / 4 / 3 / 5;
  animation: appear 0.9s ease-out;
}
.item:nth-child(5) {
  grid-area: 1 / 5 / 3 / 6;
  animation: appear 1.1s ease-out;
}
.item:nth-child(6) {
  grid-area: 3 / 1 / 5 / 2;
  animation: appear 1.3s ease-out;
}
.item:nth-child(7) {
  grid-area: 3 / 2 / 5 / 3;
  animation: appear 1.5s ease-out;
}
.item:nth-child(8) {
  grid-area: 3 / 3 / 5 / 4;
  animation: appear 1.7s ease-out;
}
.item:nth-child(9) {
  grid-area: 3 / 4 / 5 / 5;
  animation: appear 1.9s ease-out;
}
.item:nth-child(10) {
  grid-area: 5 / 1 / 6 / 2;
  animation: appear 2.1s ease-out;
}
.item:nth-child(11) {
  grid-area: 5 / 2 / 6 / 3;
  animation: appear 2.3s ease-out;
}
.item:nth-child(12) {
  grid-area: 5 / 3 / 6 / 4;
  animation: appear 2.5s ease-out;
}
.item:nth-child(13) {
  grid-area: 5 / 4 / 6 / 5;
  animation: appear 2.7s ease-out;
}
.item:nth-child(14) {
  grid-area: 5 / 5 / 6 / 6;
  animation: appear 2.9s ease-out;
}
@media only screen and (max-width: 900px) {
  .gridbox {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 2fr 2fr 2fr 1fr 1fr;
    height: auto;
    margin: 1rem 4rem 5rem 4rem;
  }
  .item:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }
  .item:nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
  }
  .item:nth-child(3) {
    grid-area: 1 / 3 / 2 / 4;
  }
  .item:nth-child(4) {
    grid-area: 2/ 1 / 3 / 2;
  }
  .item:nth-child(5) {
    grid-area: 2 / 2 / 3 / 3;
  }
  .item:nth-child(6) {
    grid-area: 2 / 3 / 3 / 4;
  }
  .item:nth-child(7) {
    grid-area: 3 / 1 / 4 / 2;
  }
  .item:nth-child(8) {
    grid-area: 3 / 2 / 4 / 3;
  }
  .item:nth-child(9) {
    grid-area: 3 / 3 / 4 / 4;
  }
  .item:nth-child(10) {
    grid-area: 4 / 1 / 5 / 2;
  }
  .item:nth-child(11) {
    grid-area: 4 / 2 / 5 / 3;
  }
  .item:nth-child(12) {
    grid-area: 4 / 3 / 5 / 4;
  }
  .item:nth-child(13) {
    grid-area: 5 / 1 / 6 / 2;
  }
  .item:nth-child(14) {
    grid-area: 5 / 2 / 6 / 3;
  }
}
@media only screen and (max-width: 600px) {
  .gridbox {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr 1fr 1fr 1fr 1fr;
    height: auto;
    margin: 1rem 15% 5rem 15%;
  }
  .item:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }
  .item:nth-child(2) {
    grid-area: 2 / 1 / 3 / 2;
  }
  .item:nth-child(3) {
    grid-area: 3 / 1 / 4 / 2;
  }
  .item:nth-child(4) {
    grid-area: 4/ 1 / 5 / 2;
  }
  .item:nth-child(5) {
    grid-area: 5 / 1 / 6 / 2;
  }
  .item:nth-child(6) {
    grid-area: 6 / 1 / 7 / 2;
  }
  .item:nth-child(7) {
    grid-area: 7 / 1 / 8 / 2;
  }
  .item:nth-child(8) {
    grid-area: 8 / 1 / 9 / 2;
  }
  .item:nth-child(9) {
    grid-area: 9 / 1 / 10 / 2;
  }
  .item:nth-child(10) {
    grid-area: 10 / 1 / 11 / 2;
  }
  .item:nth-child(11) {
    grid-area: 11 / 1 / 12 / 2;
  }
  .item:nth-child(12) {
    grid-area: 12 / 1 / 13 / 2;
  }
  .item:nth-child(13) {
    grid-area: 13 / 1 / 14 / 2;
  }
  .item:nth-child(14) {
    grid-area: 14 / 1 / 15 / 2;
  }
}
</style>