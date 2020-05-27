<template>
    <div class="info">
        <h1>Info</h1>
        <hr>
        <div class="gridbox">
            <div class="covid_info">COVID INFO</div>
            <div class="guidelines">PRECAUTIONS AND GUIDELINES</div>
            <div class="symptoms">SYMPTOMS</div>
            <div class="misconceptions">MISCONCEPTIONS</div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
h1{
  text-align: start;
  margin: 0 0 0 1rem;
  color: #5B5A5A;
}
hr{
  width: 50%;
  margin: 0 0 0 1rem;
  height: 3px;
  border: none;
  background-color: #C7D40F;
}
.gridbox{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  height: 85vh;
  margin: 1rem 1rem 1rem 4rem;
  gap: 2rem;
}
.covid_info{
    grid-area: 1 / 1 / 3 / 3
}
.guidelines{
    grid-area: 1 / 3 / 3 / 5
}
.symptoms{
    grid-area: 3 / 1 / 5 / 3;
}
.misconceptions{
    grid-area: 3 / 3 / 5 / 5;
}
.covid_info, .guidelines, .symptoms, .misconceptions{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #707070a8;
  font-size: 2rem;
  color: #C7D40F;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  border-radius: 21px;
  overflow: hidden;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
@media only screen and (max-width: 900px){
  .gridbox{
    margin: 1rem;
    }
  .covid_info{
    grid-area: 1 / 1 / 2 / 5
    }
    .guidelines{
        grid-area: 2 / 1 / 3 / 5
    }
    .symptoms{
        grid-area: 3 / 1 / 4 / 5;
    }
    .misconceptions{
        grid-area: 4 / 1 / 5 / 5;
    }
}
</style>