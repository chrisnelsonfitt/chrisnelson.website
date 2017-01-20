<!DOCTYPE html>
<html  lang="en">
 <head>
     <title> Chris Nelson</title>
         <link href="img/favicon.ico" rel="icon" type="image/x-icon"/>
            <meta charset="UTF-8">
            <meta name='viewport' content="width=device-width, initial_scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:600i" rel="stylesheet">
     <link href="css/style.css" rel="stylesheet">
    </head>
    <body>

        <!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                                     Video Background

        ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->

        <video autoplay loop muted poster="video/light.png" class="background-image">
            <source src="video/light.webm" type="video/webm">
            <source src="video/light.mp4" type="video/mp4">
            <source src="video/light.ogg" type="video/ogg">
        </video>

        <div class="background-filter"></div>


      <!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                                           About Page

        ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
        <main>

             <div class="download_resume"><h3><a href=".//resume/Chris_Nelson.pdf" target="_blank">Download
                 Resume</a></h3>
             </div>

        <div class="about-container hide-show">
                  <div class="main_page_container">
            <img id="selfie" src="img/me.jpg" alt="Picture of Chris Nelson">
            <h1>Chris Nelson</h1>
            <h3>Front-End Developer</h3>
              <p>I am an entry level web developer looking to prove myself. I am able to create websites to the highest of standards, I have a high awareness of industry issues and trends; particularly in regard to accessibility, usability, and emerging technologies.  </p>
        </div>
            </div>
                     <div id="github-link">
                         <div>
        <a href="https://github.com/chrisnelsonfitt">
        <h2>Github</h2>
        </a>
                             <a href="http://www.upwork.com/o/profiles/users/_~013d5d0132e6b7e4ad/"><img src="img/upwork.png" alt="upwork"></a>
                         </div>
    </div>
        <!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                                 Gallery Section

        ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->

      <div id="toLocation"> </div>
     <h1 class="hide-show" id="gallery_tag">Gallery</h1>

    <div class="portfolio-full hide"></div>
      <div class="gallery-container hide-show">

                <div class="gallery-item" id="forms">
                        <img src="img/site-examples/Form.png" alt="Form Project Example">
                    </a>
                </div>

                <div class="gallery-item hide-show" id="lightbox">

                        <img src="img/site-examples/Lightbox.png" alt=" Lightbox Project Example">
                    </a>
                </div>

                <div class="gallery-item" id="responsive">

                        <img src="img/site-examples/Responsive%20Layout.png" alt=" Responsive Site Project Example">
                    </a>
                </div>
                <div class="gallery-item" id="video-player">

                        <img src="img/site-examples/Video%20Player.png" alt=" Video Player Project Example">
                    </a>
                </div>
                <div class="gallery-item" id="web-app">

                        <img src="img/site-examples/Web%20App.png" alt=" Web App Project Example">
                    </a>
                </div>
                  <div class="gallery-item" id="svg">

                        <img src="img/site-examples/svg.png" alt=" SVG site update">
                    </a>
                    </div>

                  <div class="gallery-item" id="accessible">

                        <img src="img/site-examples/Accessible.png" alt=" Web App Project Example">
                    </a>
                    </div>

                  <div class="gallery-item" id="photography">

                        <img src="img/site-examples/photography.png" alt=" Photography Project Example">
                    </a>
                </div>

                <div class="gallery-item" id="design">

                        <img src="img/site-examples/design.png" alt=" site design">
                    </a>
          </div>

            </div>
         <!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                                          Contact Form

        ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
      <div class="hide-show" id="contact-container">
            <div id="contact-form">
                         <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "There was a problem with your submission.";
            exit;
        }

        // Set the recipient email address.

        $recipient = "contactchrisnelson@gmail.com";

        // Set the email subject.
        $subject = "New contact from $name";

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Phone:$phone\n\n\n";
        $email_content .= "Message:\n$message\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "<p style= background:#06BFBF; color:#DEF5FC; display:block; margin:auto; width:200px; >Your message has been sent</p>";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "<p stype= background:#F2275D; color#DEF5FC; display:block; margin:auto; width:200px; >Something went wrong message not sent</p>";
        }

    }

?>
                <iframe name="frame"></iframe>
                 <h3>Contact Me</h3>

                <div id="form-messages"></div>

                <form target="frame" id="ajax-contact" action="" method="POST">
                <fieldset>
                    <input type="text" name="name" id="form-name" placeholder="Enter Name" required><br><br>
                    <input type="text" name="email" id="form-email" placeholder="Enter Email" required><br>

                    <label for="form-message">Message</label><br>
                    <textarea name="message" id="form-message"></textarea>
                        <input type="submit" class="form-button" id="form-submit" value="Send">

                </fieldset>
                </form>
            </div>
        </div>
    </div>


    </main>
    <footer class="hide-show">
        <p>Colorado Springs, CO | <a href="#">acknowledgements</a></p>
    </footer>

        <!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                                     Script

        ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
        <script src="js/app.js"></script>
</body>
</html>
