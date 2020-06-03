<template>
  <div class="info">
    <h1>Info</h1>
    <hr />
    <div class="gridbox">
      <router-link to="/covid_info" class="covid_info">
        <div class="darken">
          <h2>COVID INFO</h2>
        </div>
      </router-link>
      <router-link to="/guidelines" class="guidelines">
        <div class="darken">
          <h2>PRECAUTIONS & GUIDELINES</h2>
        </div>
      </router-link>
      <router-link to="/symptoms" class="symptoms">
        <div class="darken">
          <h2>SYMPTOMS</h2>
        </div>
      </router-link>
      <router-link to="/misconceptions" class="misconceptions">
        <div class="darken">
          <h2>MISCONCEPTIONS</h2>
        </div>
      </router-link>
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
  font-size: 2rem;
  text-shadow: 1px 1px 3px black;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  height: 85vh;
  margin: 1rem 4rem 1rem 4rem;
  gap: 2rem;
}
.darken {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.404);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.covid_info {
  grid-area: 1 / 1 / 3 / 3;
  animation: appear 0.3s ease-out;
  background: url("https://www.conwaymedicalcenter.com/wp-content/uploads/2020/02/Coronavirus-AdobeStock_319024828-scaled.jpeg");
  background-size: 100% 100%;
}
.guidelines {
  grid-area: 1 / 3 / 3 / 5;
  animation: appear 0.5s ease-out;
  background: url("https://www.psychiatrictimes.com/sites/default/files/Washing%20hands%20soap%20and%20water%20cpt%20Maridav%20adobe.JPG");
  background-size: 100% 100%;
}
.symptoms {
  grid-area: 3 / 1 / 5 / 3;
  animation: appear 0.7s ease-out;
  background: url("https://static01.nyt.com/images/2018/05/15/well/ask-fever/ask-fever-superJumbo.jpg");
  background-size: 100% 100%;
}
.misconceptions {
  grid-area: 3 / 3 / 5 / 5;
  animation: appear 0.9s ease-out;
  background: url("../assets/what.png");
  background-size: 100% 100%;
}
.covid_info,
.guidelines,
.symptoms,
.misconceptions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #c7d40f;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
    rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  border-radius: 21px;
  overflow: hidden;
  text-decoration: none;
  transition: all 500ms;
}
.covid_info:hover,
.guidelines:hover,
.symptoms:hover,
.misconceptions:hover {
  box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em,
    rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
  transform: translateY(-3px) scale(1);
}
@media only screen and (max-width: 900px) {
  .gridbox {
    margin: 1rem 1rem 5.5rem 1rem;
  }
  .covid_info {
    grid-area: 1 / 1 / 2 / 5;
  }
  .guidelines {
    grid-area: 2 / 1 / 3 / 5;
  }
  .symptoms {
    grid-area: 3 / 1 / 4 / 5;
  }
  .misconceptions {
    grid-area: 4 / 1 / 5 / 5;
  }
}
</style>