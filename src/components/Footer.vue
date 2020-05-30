<template>
    <footer>
        <ul>
            <li>
                <h1>Ministry of Foreign Affairs of Denmark's Citizen Service</h1>
                <p>Call +45 3392 1112</p>
            </li>
            <li>
                <h1>Joint Danish Authorities Hotline</h1>
                <p>Call +45 7020 0233</p>
            </li>
            <li>
                <h1>Arrivals Hotline</h1>
                <p>Call +45 7020 6044</p>
            </li>
        </ul>
        <img src="@/assets/virus_footer.png" alt="virus_footer" height="100%" width="10%">
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    h1{
        font-size: 1vw;
        color: white;
        margin: 2rem 0 0 0;
    }
    p{
        color: white;
        font-size: 1vw;
        margin: 0;
    }
    @media only screen and (min-width: 600px){
        footer{
        margin-top: auto;
        display: flex;
        height: 6rem;
        background-color: #5B5A5A;
        justify-content: space-between;
        ul{
            width: 80%;
            list-style: none;
            padding: 0;
            margin: 0 0 0 14rem;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            li{
                text-align: start;
                padding: 0 0.5rem;
            }
        }
    }
    }
    @media only screen and (max-width: 900px){
        h1,p{
            font-size: 1.2vw;
        }
        ul{
            list-style: none;
        }
    }
    @media only screen and (max-width: 600px){
        footer{
            display: none;
        }
    }
    
</style>