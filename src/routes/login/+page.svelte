<script>
    import { enhance } from '$app/forms';
    /** @type {import('./$types').ActionData} */
</script>

<div>
    <form use:enhance method="POST">

        <div class="container">
            <p>Login</p>
            <br>
            <label><b>Username</b></label>
            <input
                    type="text"
                    placeholder="Enter Username"
                    name="username" required
            >

            <label><b>Password</b></label>
            <input
                    type="password"
                    placeholder="Enter Password"
                    name="password" required
            >

            <button type="submit">Login</button>
        </div>

        <div class="container" style="background-color:#f1f1f1">
            <span class="psw"><a href="/register">Sign up?</a></span>
        </div>
    </form>
</div>





<style>
    /* Bordered form */
    form {
        border: 3px solid #f1f1f1;
    }

    /* Full-width inputs */
    input[type=text], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    /* Set a style for all buttons */
    button {
        background-color: #04AA6D;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }

    /* Add a hover effect for buttons */
    button:hover {
        opacity: 0.8;
    }

    /* Extra style for the cancel button (red) */


    /* Add padding to containers */
    .container {
        padding: 16px;
    }

    /* The "Forgot password" text */
    span.psw {
        float: right;
        padding-top: 16px;
    }

    /* Change styles for span and cancel button on extra small screens */
    @media screen and (max-width: 300px) {
        span.psw {
            display: block;
            float: none;
        }
    }
</style>
