<!DOCTYPE html>
<html lang="en">
<head>
    <?php include ('inc/head.php')?>
</head>
<body>

    <?php include ('inc/header-section.php')?>
    <!--start section page body-->
    <main id="page-main">
        <div class="page-title-wrap bg-white">
            <div class="container">
                <div class="page-title">
                    <h2>Typography</h2>
                </div>
                <div class="page-breadcrumb">
                    <ol class="breadcrumb"><li><a href="index.php"><span>Home</span></a></li><li class="active">Typography</li></ol>
                </div>
            </div>
        </div>
        <div class="page-inner">
            <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <?php include ('widgets/widget-posts-list.php')?>
                </div>
                <div class="col-sm-4">
                    <?php include ('widgets/widget-slider.php')?>
                </div>
                <div class="col-sm-4">
                    <?php include ('widgets/widget-categories.php')?>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-sm-4">
                    <?php include ('widgets/widget-archives.php')?>
                </div>
                <div class="col-sm-4">
                    <?php include ('widgets/widget-text.php')?>
                </div>
                <div class="col-sm-4">
                    <?php include ('widgets/widget-meta.php')?>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-sm-4">
                    <?php include ('widgets/widget-pages.php')?>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-sm-4">
                    <?php include ('widgets/widget-recent-posts.php')?>
                </div>
                <div class="col-sm-4">
                    <?php include ('widgets/widget-search.php')?>
                </div>
                <div class="col-sm-4">
                    <?php include ('widgets/widget-tags.php')?>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-sm-4">
                    <?php include ('widgets/widget-contact.php')?>
                </div>
                <div class="col-sm-4">
                    <?php include ('widgets/widget-calculate.php')?>
                </div>
                <div class="col-sm-4">
                    <?php include ('widgets/widget-advanced-search.php')?>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-sm-4">
                    <?php include ('widgets/widget-featured-posts.php')?>
                </div>

                <div class="col-sm-4">
                    <?php include ('widgets/widget-calendar.php')?>
                </div>
            </div>
            </div>
        </div>
    </main>


    <?php include('footer/footer.php'); ?>
    <?php include ('inc/footer-include.php')?>
    <?php include('inc/scripts.php'); ?>
</body>
</html>
