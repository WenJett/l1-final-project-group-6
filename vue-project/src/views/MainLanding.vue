<template>
    <div style="text-align: center;">
        <CommonHeader />
        <br>
        <img src="@/assets/round_logo.png" alt="logo" width="250">
    </div>

    <div id="branch-location"> 
        <br>
        <h2> Our Outlets: </h2>
        <div id="amk">
            <h3> Ang Mo Kio 9am - 1pm & 2pm - 6pm </h3>
            <img src="@/assets/amk_branch.png" alt="amk branch" height="250">
        </div>

        <div id="sengkang">
            <h3> Seng Kang 9am - 1pm & 2pm - 6pm </h3>
            <img src="@/assets/sengkang_branch.png" alt="sengkang branch" height="250">
        </div>
    </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue';

export default {
    name: "MainLanding",

    components:{
    CommonHeader
  },
}
</script>

<style>
#branch-location {
    height: 450px;

}
#amk {
    width: 48vw;
    float: left;
}

#sengkang {
    width: 48vw;
    float: left;
}

</style>