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
        height: 6rem;
        background-color: #5B5A5A;
        ul{
            list-style: none;
            padding: 0;
            margin: 0 0 0 12rem;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            li{
                text-align: justify;
            }
        }
    }
    }
    @media only screen and (max-width: 900px){
        h1,p{
            font-size: 1.2vw;
        }
    }
    
</style>