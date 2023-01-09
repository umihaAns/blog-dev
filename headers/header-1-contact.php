<header class="header-wrap header-type-1 header-contact bg-white this-sticky">
    <div class="header-top">
        <div class="container">
            <div class="header-inner d-flex">
                <div class="header-logo">
                    <?php include ('inc/header/logo-2.php')?>
                </div>
                <div class="header-info flex-grow-1 text-center px-5">
                    <ul class="d-flex list-unstyled p-0 m-0 justify-content-center">
                        <li>
                            <div class="info">
                                <span class="title fs-xs fw-500"><i class="sli-map me-1"></i> Our Office</span>
                                <span class="contact-info fs-xs">10, Commercial Market, </span>
                            </div>
                        </li>
                        <li>
                            <div class="info">
                                <span class="title fs-xs fw-500"><i class="sli-envelope me-1"></i> Email Address</span>
                                <span class="contact-info fs-xs">info@habro.com</span>
                            </div>
                        </li>
                        <li>
                            <div class="info">
                                <span class="title fs-xs fw-500"><i class="sli-phone me-1"></i> Phone</span>
                                <span class="contact-info fs-xs">(+24) 333 3333</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="header-right">
                    <?php include ('inc/header/social.php')?>
                </div>
            </div>
        </div>
    </div>
    <div class="header-body">
        <div class="container">
            <div class="header-inner d-flex">
                <div class="header-nav">
                    <?php include ('inc/header/main-nav.php')?>
                </div>
                <div class="header-right ps-4">
                    <div class="header-actions">
                        <a href="#" data-bs-toggle="modal" data-bs-target=".login-modal" class="btn-login-register text-white me-4">Log In <span>or</span> Sign Up</a>
                        <a href="/dashboard-create-listing.php" class="btn btn-blur-white text-white rounded-pill"><i class="sli-layers me-2 fs-sm va-text-top"></i> Create Listing </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<?php include ('header-mobile.php');?>
