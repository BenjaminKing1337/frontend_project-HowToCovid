<template>
    <div>
        <h1>Symptoms</h1>
        <hr>
        <div class="gridbox">
            <div class="serious">
                <h2>Serious Symptoms <div class="mark" v-on:click="change = !change">?</div></h2>
                <div class="description" v-bind:class="{description_on: change}"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis magna eu lectus porttitor, volutpat molestie mauris dignissim. Fusce vehicula mauris quis diam consectetur interdum. Phasellus vehicula orci id massa tincidunt, eu elementum lectus interdum. Donec tempus nulla dui, in consequat ante mattis eu. Aenean aliquet pharetra urna, vitae scelerisque erat.</p></div>
                <div class="item">
                    <div class="picture" style="background-image: url('https://www.pennmedicine.org/-/media/images/miscellaneous/random%20generic%20photos/woman_hand_on_chest_000071668787_1.ashx?mw=620&mh=408');"></div>
                    <div class="text"><h2>Difficulty breathing or shortness of breath</h2></div>
                </div>
                <div class="item">
                    <div class="picture" style="background-image: url('https://www.uabmedicine.org/documents/142028/881971/chest-pains.org.jpg/5bc5cb9e-bf3d-e46d-b110-2487d4f277b9?t=1582058773307');"></div>
                    <div class="text"><h2>Chest pain or pressure</h2></div>
                </div>
                <div class="item">
                    <div class="picture" style="background-image: url('https://chinesehacks.com/wp-content/uploads/2011/02/muteChinese-423x198.jpg');"></div>
                    <div class="text"><h2>Loss of speech or movement</h2></div>
                </div>
            </div>
            <div class="common">
                <h2>Common Symptoms<div class="mark" v-on:click="change2 = !change2">?</div></h2>
                <div class="description" v-bind:class="{description_on: change2}"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis magna eu lectus porttitor, volutpat molestie mauris dignissim. Fusce vehicula mauris quis diam consectetur interdum. Phasellus vehicula orci id massa tincidunt, eu elementum lectus interdum. Donec tempus nulla dui, in consequat ante mattis eu. Aenean aliquet pharetra urna, vitae scelerisque erat.</p></div>
                <div class="item">
                    <div class="picture" style="background-image: url('https://www.popsci.com/resizer/Eb9bzlUxn-mM1pJiqFujF4DIbeI=/760x570/filters:focal(1797x1348:1798x1349)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/FZSIZXI2E7VBKANGIGV2G3MYAY.jpg');"></div>
                    <div class="text"><h2>Fever</h2></div>
                </div>
                <div class="item">
                    <div class="picture" style="background-image: url('https://thenypost.files.wordpress.com/2020/03/wet-dry-cough.jpg?quality=80&strip=all&w=618&h=410&crop=1');"></div>
                    <div class="text"><h2>Dry cough</h2></div>
                </div>
                <div class="item">
                    <div class="picture" style="background-image: url('https://www.nationwidepharmacies.co.uk/media/blog/top-tips-for-preventing-tiredness-and-fatigue-T_0417_fatigue_652116100_A.jpg');"></div>
                    <div class="text"><h2>Tiredness</h2></div>
                </div>
            </div>
            <div class="less">
                <h2>Less Common Symptoms<div class="mark" v-on:click="change3 = !change3">?</div></h2>
                <div class="description" v-bind:class="{description_on: change3}"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis magna eu lectus porttitor, volutpat molestie mauris dignissim. Fusce vehicula mauris quis diam consectetur interdum. Phasellus vehicula orci id massa tincidunt, eu elementum lectus interdum. Donec tempus nulla dui, in consequat ante mattis eu. Aenean aliquet pharetra urna, vitae scelerisque erat.</p></div>
                <div class="item">
                    <div class="picture" style="background-image: url('https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/732x549_THUMBNAIL_Jewell_Clinical_BodyAches.jpg?w=756&h=567');"></div>
                    <div class="text"><h2>Aches and pains</h2></div>
                </div>
                <div class="item">
                    <div class="picture" style="background-image: url('https://familydoctor.org/wp-content/uploads/1996/01/sore-throat.jpg');"></div>
                    <div class="text"><h2>Sore throat</h2></div>
                </div>
                <div class="item">
                    <div class="picture" style="background-image: url('https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/319/319995/a-view-of-a-mans-leg-who-is-having-chronic-diarrhea.jpg?w=1155&h=1297');"></div>
                    <div class="text"><h2>Diarrhea</h2></div>
                </div>
                <div class="item">
                    <div class="picture" style="background-image: url('https://images.ctfassets.net/u4vv676b8z52/5pZt5OCnn17Ike1Ef3CKm0/2717b8713d4cc912ddd26e994c67f01e/Hero_Article_EnUK_Conditions-Conjunctivitis-Types-compressor.jpg?fm=jpg&q=80');"></div>
                    <div class="text"><h2>Conjunctivitis</h2></div>
                </div>
                <div class="item">
                    <div class="picture" style="background-image: url('https://images.theconversation.com/files/175523/original/file-20170626-4492-mqyzj3.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip');"></div>
                    <div class="text"><h2>Headache</h2></div>
                </div>
                <div class="item">
                    <div class="picture" style="background-image: url('https://www.nursinginpractice.com/sites/default/files/styles/articledesktopcontained/public/article/anosmia.jpg?itok=CDDxPFti');"></div>
                    <div class="text"><h2>Loss of taste or smell</h2></div>
                </div>
                <div class="item">
                    <div class="picture" style="background-image: url('https://images.theconversation.com/files/209558/original/file-20180308-30983-e4u830.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop');"></div>
                    <div class="text"><h2>A rash on skin, or discolouration of fingers or toes</h2></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                change: false,
                change2: false,
                change3: false,
            } 
        }
    }
</script>

<style lang="scss" scoped>
h1{
  text-align: start;
  margin: 0 0 0 1rem;
  color: #5B5A5A;
}
h2{
    color: #5B5A5A;
    margin: 1rem 0.4rem;
    display: flex;
}
p{
    padding: 0 0.5rem;
}
.mark{
    background: #5B5A5A;
    color: white;
    width: 1.8rem;
    height: 100%;
    margin-left: auto;
    margin-right: 0.4rem;
    text-align: center;
    border-radius: 50px;
    cursor: pointer;
    transition: 300ms all;
    &:hover{
        background: rgb(138, 135, 135);
    }
}
.description{
    margin: 0 1rem;
    font-size: 0.9rem;
    visibility: hidden;
    transition: 300ms all;
    opacity: 0;
    display: none;
    position: absolute;
    background: #5B5A5A;
    color: white;
    height: auto;
    width: 35%;
    border-radius: 21px;
}
.description_on{
    display: block;
    visibility: visible;
    opacity: 1;
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 900px;
  margin: 1rem 4rem 1rem 4rem;
  gap: 2rem;
}
.serious,.common,.less{
    background: #70707069;
    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
    border-radius: 21px;
    overflow: hidden;
    text-align: start;
}
.serious{
    grid-area: 1 / 1 / 2 / 2;
}
.common{
    grid-area: 2 / 1 / 3 / 2;
}
.less{
    grid-area: 1 / 2 / 3 / 3;
}
.item{
    display: flex;
    height: 110px;
    width: 100%;
    margin: 10px;
    .picture{
        height: 100%;
        width: 20%;
        background-size: 100% 100%;
        border-radius: 50px;
    }
    .text{
        display: flex;
        height: 100%;
        width: 77%;
        margin-left: auto;
        align-items: center;
        h2{
            font-size: 1rem;
        }
    }
}
@media only screen and (max-width: 900px){
    .description{
        width: 80%;
    }
    .gridbox{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 2.2fr;
        margin: 1rem 1rem 5.5rem 1rem;
        height: 1850px;
    }
    .serious{
    grid-area: 1 / 1 / 2 / 2;
    }
    .common{
        grid-area: 2 / 1 / 3 / 2;
    }
    .less{
        grid-area: 3 / 1 / 4 / 2;
    }
}
</style>