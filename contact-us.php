<!DOCTYPE html>
<html lang="en">
<head>
    <?php include ('inc/head.php')?>
</head>
<body>
<?php include('inc/modals.php'); ?>
    <?php include ('inc/header-section.php')?>
    <!--start section page body-->
    <main id="page-main">
        <div class="page-title-wrap bg-white">
            <div class="container">
                <div class="page-title">
                    <h2>Contact Us</h2>
                </div>
                <div class="page-breadcrumb">
                    <ol class="breadcrumb"><li><a href="index.php"><span>Home</span></a></li><li class="active">Contact Us</li></ol>
                </div>
            </div>
        </div>
        <div class="page-inner">
            <div class="container">
                <div class="row">
                    <!--start content area-->
                    <div class="col-lg-12 col-md-12 col-sm-12 ">
                        <article class="article-block">
                            <div class="contact-us-block">
                                <div class="row">
                                    <div class="col-lg-8 col-md-8 col-sm-8 ">
                                        <h4>Send a message</h4>
                                        <div class="form-alert"></div>
                                        <form id="contact-form" method="post" action="#" autocomplete="on">
                                            <div class="row row-20">
                                                <div class="col-lg-6 col-md-6 col-sm-6 ">
                                                    <div class="form-group">
                                                        <input name="name" class="form-control required" placeholder="Your Name">
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6 ">
                                                    <div class="form-group">
                                                        <input name="email" class="form-control email required" placeholder="Your Email">
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 ">
                                                    <div class="form-group">
                                                        <input name="subject" class="form-control required" placeholder="Subject">
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 ">
                                                    <div class="form-group">
                                                        <textarea name="message" class="form-control required" rows="5" placeholder="Message"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 ">
                                                    <button type="submit" class="btn btn-primary btn-submit">Send <i class="fa fa-send ms-2"></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 ">
                                        <div class="contact-info">
                                            <h4>Find Us</h4>
                                            <ul>
                                                <li>
                                                    <i class="fa fa-map-marker"></i>
                                                    <strong>Our Office:</strong>
                                                    <address class="m-0">Reno Pl, San Francisco, CA 94133</address>
                                                </li>
                                                <li>
                                                    <i class="fa fa-envelope-o"></i>
                                                    <strong>Email:</strong>
                                                    <a href="#">info@habro.com</a>
                                                    <a href="#">help@habro.com</a>
                                                </li>
                                                <li>
                                                    <i class="fa fa-phone fa-rotate-270"></i>
                                                    <strong>Phone:</strong>
                                                    <a href="#">222-222-4545</a>
                                                    <a href="#">222-222-4545</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <!--end section page body-->

    <?php include('footer/footer.php') ?>
    <?php include ('inc/footer-include.php')?>
    <?php include ('inc/scripts.php')?>

</body>
</html>
