<template>
    <div class="container">
        <form id="accForm">
            <h2> Select Account Type </h2>

            <div class = "accType">

                <label for="acc">Account Type: </label>
                <input type="text" id="acc type" required="" list = "accType"> <br><br>
                <datalist id="accType">
                    <option> Doctor</option>
                    <option> Patient</option>
                </datalist>

                <!-- <div class = "save">
                    <button id = "saveButton" type = "button" v-on:click = "savetofs"> Save </button><br><br>
                </div>  -->
            </div>
        </form>
    </div>
</template>