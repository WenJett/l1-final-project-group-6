<template>
    <div class = "accType">
        <form id = "formAccType">
            <div class = "form">
                <label for="type">Account Type: </label>
                <input type="text" id="Account Type" required="" list = "types"> <br><br>
                <datalist id="types">
                    <option> Doctor</option>
                    <option> Patient</option>
                </datalist>
            </div>
        </form>
    </div>
</template>