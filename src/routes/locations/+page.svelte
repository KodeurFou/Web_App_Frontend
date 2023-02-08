<script>
    import location_user from "./location_user.svelte";
    import {enhance} from '$app/forms';
    /** @type {import('./$types').ActionData} */

    export let data

    let showForm = false

    function displayForm() {
        showForm = !showForm;
    }
</script>

<button onclick="window.location.href='http://127.0.0.1:5173/logout'">Log out</button>
<br>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Genre</th>
        <th>Director</th>
    </tr>
    </thead>
    <tbody>
    {#each data.APIcall as film}
        <tr>
            <svelte:component this={location_user} myfilm={film}/>
        </tr>
    {/each}

    </tbody>
</table>


<style>
    table {
        border-collapse: collapse;
        width: 50%;
        position: relative;
        left: 20%;
        right: 20%;
        top: 20%
    }
    th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #f2f2f2;
    }

    form {
        position: absolute;
        top: 10%;
        left: 5%;
        background: white;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px #000;
    }
</style>