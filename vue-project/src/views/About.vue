<template>
    <div style="text-align: center;">
        <h1 id="mainHead">this is the about page</h1>
    </div>
</template>

<script>
import firebaseApp from "@/firebase.js";
import {getAuth} from "firebase/auth";

export default {
    name: "About"
}
</script>