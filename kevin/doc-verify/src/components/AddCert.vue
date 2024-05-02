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
            <h1 class="display-4 fw-bold text-body-emphasis">Add Certificate</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">Add your certificates to the blockchain! Enter details below.
                </p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <form @submit.prevent="submitForm">
                        <div class="row">
                            <div class="col">
                                <label for="subjectName1">Subject Name</label>
                                <input type="subject_name" class="form-control" id="subjectName1"
                                    v-model="formData.subjectData1" aria-describedby="emailHelp"
                                    placeholder="Enter subject name">
                            </div>
                            <div class="col">
                                <label for="marks1">Marks</label>
                                <input type="marks" class="form-control" id="marks1" v-model="formData.marksData1"
                                    placeholder="Enter marks">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label for="subjectName1">Subject Name</label>
                                <input type="subject1" class="form-control" id="subjectName1"
                                    v-model="formData.subjectData2" aria-describedby="emailHelp"
                                    placeholder="Enter subject name">
                            </div>
                            <div class="col">
                                <label for="marks1">Marks</label>
                                <input type="marks" class="form-control" id="marks1" v-model="formData.marksData2"
                                    placeholder="Enter marks">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <button class="btn btn-primary" @click="generatePDF">Generate PDF</button>
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

.row {
    margin: 20px;

}
</style>

<script>
export default {
    name: 'AddCert',
    data() {
        return {
            formData: {
                subjectData1: '',
                marksData1: '',
                subjectData2: '',
                marksData2: ''
            }
        };
    },
    methods: {
        submitForm() {
            fetch('http://localhost:3000/submit-form', { // Specify the full URL including the port number
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.formData)
            })
                .then(response => {
                    if (response.ok) {
                        console.log('Form submitted successfully');
                        this.formData.subjectData1 = '';
                        this.formData.marksData1 = '';
                        this.formData.subjectData2 = '';
                        this.formData.marksData2 = '';
                    } else {
                        console.error('Failed to submit form');
                    }
                })
                .catch(error => {
                    console.error('Error submitting form:', error);
                });
        },
        generatePDF() {
            fetch('http://localhost:3000/generate-pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: 'John Doe',
                    email: 'john@example.com',
                    // Add more data here as needed
                })
            })
                .then(response => {
                    if (response.ok) {
                        return response.blob();
                    } else {
                        throw new Error('Failed to generate PDF');
                    }
                })
                .then(blob => {
                    const url = window.URL.createObjectURL(new Blob([blob]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'sample.pdf');
                    document.body.appendChild(link);
                    link.click();
                    link.parentNode.removeChild(link);
                })
                .catch(error => {
                    console.error('Error generating PDF:', error);
                });
        }
    }
};
</script>