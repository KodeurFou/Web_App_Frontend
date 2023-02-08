<script>
    import {enhance} from '$app/forms';

    /** @type {import('./$types').ActionData} */
    export let myfilm

    let showForm = false;

    const title = myfilm.filmName
    const director = myfilm.filmDirectorName
    const genre = myfilm.filmType
    const year = myfilm.year

    function displayForm() {
        showForm = !showForm;
    }
</script>


<td>{myfilm.filmName}</td>
<td>{myfilm.filmType}</td>
<td>{myfilm.filmDirectorName}</td>
<td>
    <button on:click={displayForm} value={myfilm._id}>detail</button>
    <!--<button on:click="t" value={myfilm._id}>X</button>-->


    {#if showForm}
        <div>
            <form use:enhance method="POST" action="?/edit" >
                <label>Title : </label>
                <br>
                <input name="title" type="text" value={myfilm.filmName}/>
                <br>
                <label>Genre :</label>
                <br>
                <input name="genre" type="text" value={myfilm.filmType}/>
                <br>
                <label>Director's name :</label>
                <br>
                <input name="director"type="text" value={myfilm.filmDirectorName}/>
                <br>
                <label>Year :</label>
                <br>
                <input name="year" type="text" value={myfilm.year}>
                <input name="id" type="hidden" value={myfilm._id}>
                <br>
                <br>
                <button type="submit">edit</button>
                <button formaction="?/delete">X</button>
            </form>
        </div>
    {/if}
</td>


<style>
    .form-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 1;
    }

    form {
        position: relative;
        top: 50%;
        left: 75%;
        background: white;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px #000;
    }
</style>