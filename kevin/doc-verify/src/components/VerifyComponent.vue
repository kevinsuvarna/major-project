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
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
      <h1 class="display-4 fw-bold text-body-emphasis">Verify your documents </h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Upload the document to be verified in the field below.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <form>
            <div class="form-group">
              <div>
                <label for="exampleFormControlFile1">Example file input</label>
              </div>
              <div>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" @change="handleFileUpload">
              </div>
            </div>
          </form>
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
</style>

<script>
export default {
  name: 'VerifyComponent',
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);

      fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          console.log('File uploaded successfully');
        } else {
          console.error('Failed to upload file');
        }
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
    }
  }
}
</script>