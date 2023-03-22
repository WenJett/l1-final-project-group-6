<template>
    <img src="@/assets/round_logo.png" alt="logo" width="250">


    <div class="main"> 
        <div id="div1"> 
            <h1> MISSION</h1>
        </div>

        <div id="div2">
            <h2> Making your health your top priority</h2>
        </div>
        
        <div id="div3">
            <h1> VALUES</h1>
        </div>

        <div id="div4">
            <h2> Commitment to excellence <br>Commitment to integrity and ethical practice </h2>
        </div>

    </div>
    <img id="doc" src="@/assets/doctor.png" alt="doctors">

    <br><br>
    <div id="clinic-location"> 
        Clinic Locations (Operating Hours) <br><br>
        Ang Mo Kio 9am - 1pm & 2pm - 6pm   Hotline: +65 9876 5432 <br>
        Seng Kang 9am - 1pm & 2pm - 6pm   Hotline: +65 9123 4567
        
    </div>
</template>

<script>
export default {
    name: "About"
}

</script>

<style> 

#clinic-location {
    text-align: center;
}

#div1,#div3{
    height: 40px;
    width: 50vmax;
    float: left;
}

#div2,#div4{
    height: auto;
    width: 50vmax;
    float: left
}

#doc{
    width: 35vmax;
}
</style>