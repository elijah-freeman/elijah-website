<?php require_once('config.php'); ?>

<!DOCTYPE html>
<html lang="en">





    <style>
        body {font-family: Arial, Helvetica, sans-serif;}
        * {box-sizing: border-box;}

        /* Full-width input fields */
        input[type=text], input[type=password] {
            width: 100%;
            padding: 5px;
            margin: 2px 0 2px 0;
            display: inline-block;
            border: none;
            background: #f1f1f1;
        }

        /* Add a background color when the inputs get focus */
        input[type=text]:focus, input[type=password]:focus {
            background-color: #ddd;
            outline: none;
        }

        /* Set a style for all buttons */
        button {
            background-color: #4CAF50;
            color: white;
            padding: 5px 5px;
            margin: 5px 0;
            border: none;
            cursor: pointer;
            width: 100%;
            opacity: 0.9;
        }

        button:hover {
            opacity:1;
        }


        /* Float cancel and signup buttons and add an equal width */
        /*.cancelbtn, .signupbtn {*/
        /*    float: middle;*/
        /*    width: 10%;*/
        /*}*/

        /* Add padding to container elements */
        .container {
            padding: 10px;
        }

        /* The Modal (background) */
        .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: #474e5d;
            padding-top: 20px;
        }

        /* Modal Content/Box */
        .modal-content {
            background-color: #fefefe;
            margin: 1% auto 5% auto; /* 5% from the top, 15% from the bottom and centered */
            border: 1px solid #888;
            width: 100%; /* Could be more or less, depending on screen size */
        }

        /* Style the horizontal ruler */
        hr {
            border: 1px solid #f1f1f1;
            margin-bottom: 5px;
        }

        /* The Close Button (x) */
        .close {
            position: absolute;
            right: 2px;
            top: 2px;
            font-size: 5px;
            font-weight: bold;
            color: #f1f1f1;
        }

        .close:hover,
        .close:focus {
            color: #f44336;
            cursor: pointer;
        }

        /* Clear floats */
        .clearfix::after {
            content: "";
            clear: both;
            display: table;
        }

        /* Change styles for cancel button and signup button on extra small screens */
        @media screen and (max-width: 200px) {
            .cancelbtn, .signupbtn {
                width: 100%;
            }
        }
    </style>




    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sign up</title>
        <!-- add a reference to the external stylesheet -->
        <!-- Uses the solar stylesheet from bootswatch -->
        <link rel="stylesheet" href="https://bootswatch.com/4/solar/bootstrap.min.css">
    </head>


    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Husky Data Health</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
                    aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <!-- May need to modify the following line -->
                        <a class="nav-link" href="index.php">Home
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="infection.php">Infection</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="covid_test_center.php">Covid Test Centers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="high_risk.php">High Risk Areas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="hospital.php">Find a Hospital</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="patient.php">Patients</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="new_symptoms.php">New Symptom</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="user_info.php">Users</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sick_patients.php">Sick Patients</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="signup.php">Sign Up</a>
                    </li>

                </ul>
            </div>
        </nav>



















        <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Sign Up</button>

        <div id="id01" class="modal">
            <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
            <form class="modal-content" method="POST" action="signup.php">
                <div class="container">
                    <h1>Sign Up</h1>
                    <hr>
                    <label for="Frist_name"><b>First Name</b></label>
                    <input type="text" placeholder="Enter First Name" name="First_name" required>

                    <label for="Last_name"><b>Last Name</b></label>
                    <input type="text" placeholder="Enter Last Name" name="Last_name" required>

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required>

                    <label for="user_id"><b>User ID</b></label>
                    <input type="text" placeholder="Enter User ID" name="user_id" required>

                    <label for="County"><b>County</b></label>
                    <input type="text" placeholder="County" name="County" required>

                    <label for="Sex"><b>Sex</b></label>
                    <input type="text" placeholder="Enter Sex (F or M)" name="Sex" required>

                    <label for="Age"><b>Age</b></label>
                    <input type="text" placeholder="Enter Age" name="Age" required>

                    <label for="case_start_date"><b>Case start Date</b></label>
                    <input type="text" placeholder="case start date(MM-DD-YYY)" name="case_start_date" required>

                    <div class="clearfix">
                        <button type="submit" class="btn btn-primary" onclick='this.form.submit()'>Sign Up</button>
                    </div>



                    <?php
                    $connection = mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME);



                    // HERE IS WHERE WE SEND INFORMATION TO OUR DATABASE
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        if (isset($_POST['First_name'], $_POST['Last_name'],$_POST['email'],$_POST['user_id'],
                            $_POST['County'],$_POST['Sex'],$_POST['Age'],$_POST['case_start_date'])) {
                            ?>
                            <?php
                            if (mysqli_connect_errno()) {
                                die(mysqli_connect_error());
                            }


                            $sql = "INSERT INTO USER_INFO(user_id, email, first_name, last_name, county, sex, age, 
                                                                                                        Case_start_data)
                                        VALUES ({$_POST['user_id']}, '{$_POST['email']}', '{$_POST['First_name']}', 
                                                '{$_POST['Last_name']}', '{$_POST['County']}', 
                                                '{$_POST['Sex']}', {$_POST['Age']}, '{$_POST['case_start_date']}')";

                            if (!mysqli_query($connection, $sql)) {
                                echo "Error: Could not execute $sql";
                            }
                        }
                    }
                    ?>
                </div>
            </form>
        </div>
        <script>
            // Get the modal
            var modal = document.getElementById('id01');
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        </script>
    </body>

</html>


