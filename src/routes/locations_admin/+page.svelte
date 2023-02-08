<script>
    import location from "./location.svelte";
    import {enhance} from '$app/forms';
    /** @type {import('./$types').ActionData} */

    export let data

    let showForm = false

    function displayForm() {
        showForm = !showForm;
    }
</script>

<button onclick="window.location.href='http://127.0.0.1:5173/logout'">Log out</button>
<br><br><br>
<button on:click={displayForm}>Add film</button>

{#if showForm}
    <div>
        <form use:enhance method="POST" action="?/add" >
            <label>Title : </label>
            <br>
            <input name="title" type="text" placeholder="enter title"/>
            <br>
            <label>Genre :</label>
            <br>
            <input name="genre" type="text" placeholder="enter genre"/>
            <br>
            <label>Director's name :</label>
            <br>
            <input name="director"type="text" placeholder="enter director"/>
            <br>
            <label>Year :</label>
            <br>
            <input name="year" type="text" placeholder="enter year">
            <br>
            <br>
            <button type="submit">add</button>
        </form>
    </div>
{/if}

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
                <svelte:component this={location} myfilm={film}/>
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