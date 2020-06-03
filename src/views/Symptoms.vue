<template>
  <div>
    <div class="headline">
      <h1>Symptoms</h1>
      <router-link tag="button" to="/info" class="back">
        <img src="@/assets/undo.svg" alt="undo" class="undo" height="100%" width="100%" /><h1 class="return">RETURN</h1>
      </router-link>
    </div>
    <hr />
    <div class="gridbox">
      <div class="serious">
        <h2>
          Serious Symptoms
          <div class="mark" v-on:click="change = !change">?</div>
        </h2>
        <div class="description" v-bind:class="{description_on: change}">
          <p>If you have any of the serious symptoms you should seek immediate medical attention.</p>
          <p>Before you visit your doctor or medical facility you should always call first, this is because of the high risk of spreading the virus further.</p>
          <p>If you experience any of the symptoms below you should stay home and contact your doctor.</p>
        </div>
        <div class="item">
          <div
            class="picture"
            style="background-image: url('https://www.pennmedicine.org/-/media/images/miscellaneous/random%20generic%20photos/woman_hand_on_chest_000071668787_1.ashx?mw=620&mh=408');"
          ></div>
          <div class="text">
            <h2>Difficulty breathing or shortness of breath</h2>
          </div>
        </div>
        <div class="item">
          <div
            class="picture"
            style="background-image: url('https://www.uabmedicine.org/documents/142028/881971/chest-pains.org.jpg/5bc5cb9e-bf3d-e46d-b110-2487d4f277b9?t=1582058773307');"
          ></div>
          <div class="text">
            <h2>Chest pain or pressure</h2>
          </div>
        </div>
        <div class="item">
          <div
            class="picture"
            style="background-image: url('https://chinesehacks.com/wp-content/uploads/2011/02/muteChinese-423x198.jpg');"
          ></div>
          <div class="text">
            <h2>Loss of speech or movement</h2>
          </div>
        </div>
      </div>
      <div class="common">
        <h2>
          Common Symptoms
          <div class="mark" v-on:click="change2 = !change2">?</div>
        </h2>
        <div class="description" v-bind:class="{description_on: change2}">
          <p>If you are experiencing these common symptoms but you are otherwise healthy, you should try and manage these symptoms at home, seek medical attention only when the symptoms don't seem to go away.</p>
          <p>Do not forget to call your doctor first, when trying to get help.</p>
          <p>You might also consider calling The Joint Danish Authorities Hotline to answer your questions further.</p>
        </div>
        <div class="item">
          <div
            class="picture"
            style="background-image: url('https://www.popsci.com/resizer/Eb9bzlUxn-mM1pJiqFujF4DIbeI=/760x570/filters:focal(1797x1348:1798x1349)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/FZSIZXI2E7VBKANGIGV2G3MYAY.jpg');"
          ></div>
          <div class="text">
            <h2>Fever</h2>
          </div>
        </div>
        <div class="item">
          <div
            class="picture"
            style="background-image: url('https://thenypost.files.wordpress.com/2020/03/wet-dry-cough.jpg?quality=80&strip=all&w=618&h=410&crop=1');"
          ></div>
          <div class="text">
            <h2>Dry cough</h2>
          </div>
        </div>
        <div class="item">
          <div
            class="picture"
            style="background-image: url('https://www.nationwidepharmacies.co.uk/media/blog/top-tips-for-preventing-tiredness-and-fatigue-T_0417_fatigue_652116100_A.jpg');"
          ></div>
          <div class="text">
            <h2>Tiredness</h2>
          </div>
        </div>
      </div>
      <div class="less">
        <h2>
          Less Common Symptoms
          <div class="mark" v-on:click="change3 = !change3">?</div>
        </h2>
        <div class="description" v-bind:class="{description_on: change3}">
          <p>Experiencing any of these symptoms does not definitively mean you were infected with the coronavirus.</p>
          <p>Nevertheless, you should still pay them attention in case there is no other reason for you to be experiencing these symptoms.</p>
          <p>Do not panic and contact your doctor from home.</p>
        </div>
        <div class="item">
          <div
            class="picture"
            style="background-image: url('https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/732x549_THUMBNAIL_Jewell_Clinical_BodyAches.jpg?w=756&h=567');"
          ></div>
          <div class="text">
            <h2>Aches and pains</h2>
          </div>
        </div>
        <div class="item">
          <div
            class="picture"
            style="background-image: url('https://familydoctor.org/wp-content/uploads/1996/01/sore-throat.jpg');"
          ></div>
          <div class="text">
            <h2>Sore throat</h2>
          </div>
        </div>
        <div class="item">
          <div
            class="picture"
            style="background-image: url('https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/319/319995/a-view-of-a-mans-leg-who-is-having-chronic-diarrhea.jpg?w=1155&h=1297');"
          ></div>
          <div class="text">
            <h2>Diarrhea</h2>
          </div>
        </div>
        <div class="item">
          <div
            class="picture"
            style="background-image: url('https://images.ctfassets.net/u4vv676b8z52/5pZt5OCnn17Ike1Ef3CKm0/2717b8713d4cc912ddd26e994c67f01e/Hero_Article_EnUK_Conditions-Conjunctivitis-Types-compressor.jpg?fm=jpg&q=80');"
          ></div>
          <div class="text">
            <h2>Conjunctivitis</h2>
          </div>
        </div>
        <div class="item">
          <div
            class="picture"
            style="background-image: url('https://images.theconversation.com/files/175523/original/file-20170626-4492-mqyzj3.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip');"
          ></div>
          <div class="text">
            <h2>Headache</h2>
          </div>
        </div>
        <div class="item">
          <div
            class="picture"
            style="background-image: url('https://www.nursinginpractice.com/sites/default/files/styles/articledesktopcontained/public/article/anosmia.jpg?itok=CDDxPFti');"
          ></div>
          <div class="text">
            <h2>Loss of taste or smell</h2>
          </div>
        </div>
        <div class="item">
          <div
            class="picture"
            style="background-image: url('https://images.theconversation.com/files/209558/original/file-20180308-30983-e4u830.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop');"
          ></div>
          <div class="text">
            <h2>A rash on skin, or discolouration of fingers or toes</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      change: false,
      change2: false,
      change3: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./src/scss/variables.scss";
.headline {
  display: flex;
  justify-content: space-between;
  width: 95%;
  align-items: flex-end;
}
h1 {
  text-align: start;
  margin: 0 0 0 1rem;
  color: #5b5a5a;
}
.undo {
  margin-left: 20px;
}
.back {
  color: #5b5a5a;
  display: flex;
  flex-direction: row;
  font-weight: bold;
  align-items: center;
  direction: rtl;
  height: 50px;
  width: 50px;
  border: none;
  cursor: pointer;
  transition: 300ms ease-in-out;
  background: #c9c0c0;
  border-radius: 50px;
  box-shadow: -2px 2px 2px black;
  &:hover {
    background: #a7a3a3;
    color: #c7d40f;
  }
  .return{
    transition: 300ms ease-in-out;
  &:hover{
    color: #8d8b8b;
  }
}
}
h2 {
  color: #5b5a5a;
  margin: 1rem 0.4rem;
  display: flex;
  transition: 200ms ease-in-out;
  &:hover {
    color: #8d8989;
  }
}
p {
  padding: 0 0.5rem;
  font-size: 1rem;
  &:hover {
    color: #c7d40f;
  }
}
.mark {
  background: #5b5a5a;
  color: white;
  width: 1.8rem;
  height: 100%;
  margin-left: auto;
  margin-right: 0.4rem;
  text-align: center;
  border-radius: 50px;
  cursor: pointer;
  transition: 300ms all;
  &:hover {
    background: rgb(138, 135, 135);
  }
}
.description {
  margin: 0 2rem;
  font-size: 0.9rem;
  visibility: hidden;
  transition: 300ms all;
  opacity: 0;
  display: none;
  position: absolute;
  background: #5b5a5a;
  color: white;
  height: auto;
  width: 35%;
  border-radius: 21px;
}
.description_on {
  display: block;
  visibility: visible;
  opacity: 1;
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 900px;
  margin: 1rem 4rem 1rem 4rem;
  gap: 2rem;
}
.serious,
.common,
.less {
  background: #70707015;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
    rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  border-radius: 21px;
  overflow: hidden;
  text-align: start;
}
.serious {
  grid-area: 1 / 1 / 2 / 2;
  animation: appear 0.3s ease-out;
}
.common {
  grid-area: 2 / 1 / 3 / 2;
  animation: appear 0.5s ease-out;
}
.less {
  grid-area: 1 / 2 / 3 / 3;
  animation: appear 0.7s ease-out;
}
.item {
  display: flex;
  height: 110px;
  width: 100%;
  margin: 10px;
  .picture {
    height: 100%;
    width: 20%;
    background-size: 100% 100%;
    background-position: center;
    border-radius: 50px;
    transition: 300ms ease-in-out;
    &:hover{
      background-size: 104% 104%;
    }
  }
  .text {
    display: flex;
    height: 100%;
    width: 77%;
    margin-left: auto;
    align-items: center;
    h2 {
      font-size: 1rem;
    }
  }
}
@media only screen and (max-width: 900px) {
  .back {
    width: 40px;
    height: 40px;
    &:hover {
      background: #a7a3a3;
    }
    .return{
      display: none;
    }
  }
  .description {
    width: 80%;
  }
  .gridbox {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 2.2fr;
    margin: 1rem 1rem 5.5rem 1rem;
    height: 1850px;
  }
  .serious {
    grid-area: 1 / 1 / 2 / 2;
  }
  .common {
    grid-area: 2 / 1 / 3 / 2;
  }
  .less {
    grid-area: 3 / 1 / 4 / 2;
  }
}
</style>