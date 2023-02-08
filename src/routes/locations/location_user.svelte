<script>
    import {enhance} from '$app/forms';

    /** @type {import('./$types').ActionData} */
    export let myfilm

    let showDetails = false;

    function displayForm() {
        showDetails = !showDetails;
    }
</script>


<td>{myfilm.filmName}</td>
<td>{myfilm.filmType}</td>
<td>{myfilm.filmDirectorName}</td>
<td>
    <button on:click={displayForm} value={myfilm._id}>detail</button>
</td>
<td>
    {#if showDetails}
        <div id="list">
            <ul >
                <li>Title : {myfilm.filmName}</li>
                <li>Genre : {myfilm.filmType}</li>
                <li>Director's name : {myfilm.filmDirectorName}</li>
                <li>Year : {myfilm.year}</li>
            </ul>
        </div>
    {/if}
</td>


<style>
    #list {
        position: relative;
        right: 0%
    }
</style>