const credit = https://github.com/Samp4ul/FrontEnd_WebApp/blob/main/FrontEnd_WebApp/src/routes/login/%2Bpage.svelte


<div class="container" style="text-align: center;">
    <p1>Welcome to the greatest site ever !</p1>
    <br>
    <span><a href="/register">sign up</a>    <a href="/login">sign in</a></span>
</div>



<style>
    /* Bordered form */
    form {
        border: 3px solid #f1f1f1;
    }

    /* Full-width inputs */
    p1,p2 {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    /* Extra style for the cancel button (red) */
    .cancelbtn {
        width: auto;
        padding: 10px 18px;
        background-color: #f44336;
    }

    /* Center the avatar image inside this container */
    .imgcontainer {
        text-align: center;
        margin: 24px 0 12px 0;
    }


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
        .cancelbtn {
            width: 100%;
        }
    }
</style>
