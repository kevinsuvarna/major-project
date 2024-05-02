<template>

    <head>
        <link rel="stylesheet" type="text/css" href="./assets/home-style.css" media=”screen” />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">

    </head>

    <body>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt="doc verify brand icon" height="30">
                    Document Verification</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="px-4 pt-5 my-5 text-center border-bottom">
            <h1 class="display-4 fw-bold text-body-emphasis">Enter or Verify your documents </h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">Welcome to our website, where we are on a mission to provide exceptional
                    verification
                    services.
                </p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <a href="/add-doc"><button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Add
                            Certificate</button></a>
                    <a href="/verify"><button type="button" class="btn btn-outline-secondary btn-lg px-4">Verify
                            Certificate</button></a>
                </div>
            </div>
        </div>
    </body>
</template>

<style>
.feature-icon {
    width: 4rem;
    height: 4rem;
    border-radius: 0.75rem;
}

.navbar {
    position: fixed;
    /* Position the navbar */
    top: 0;
    /* Stick it to the top of the screen */
    width: 100%;
    /* Full width */
    background-color: #333;
    /* Example background color */
    padding: 10px;
    /* Example padding */
    color: #fff;
    /* Example text color */
    z-index: 1000;
    /* Ensure it's above other content */
}

.navbar {
    margin-top: 0; /* Remove default margin */
}
</style>

<script>
export default {
    name: 'AppHeader',
}
</script>