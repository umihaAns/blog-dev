<!--Login Register Modal-->
<div class="modal fade login-modal" tabindex="-1" role="dialog" aria-labelledby="loginLabel">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div id="login-taber" class="modal-content aq-taber border-0">
            <div class="modal-header p-0">
                <ul class="aq-tab-list layout-fixed d-flex">
                    <li class="tab active"><i class="sli-login me-2"></i> Login</li>
                    <li class="tab"><i class="sli-user me-2"></i> Register</li>
                </ul>
                <button type="button" class="close btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body login-card">
                <div class="taber-content tab-content">
                    <div class="tab-pane fade show active">
                        <form>
                            <div class="form-group">
                                <div class="form-floating">
                                    <input name="username" id="username" type="text" class="form-control" required
                                           placeholder="Username">
                                    <label for="username"><i class="fa fa-user-o me-1"></i> Username</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-floating">
                                    <input name="password" type="password" class="form-control" id="password" required
                                           placeholder="Password">
                                    <label for="password"><i class="ti-lock me-1"></i> Password</label>
                                </div>
                            </div>
                            <div class="form-group d-flex">
                                <div class="form-check flex-grow-1">
                                    <input class="form-check-input" type="checkbox" value="" id="remember">
                                    <label class="form-check-label" for="remember">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#" data-bs-dismiss="modal" data-bs-toggle="modal"
                                   data-bs-target=".forget-pass-modal">Forgot password?</a>
                            </div>
                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary btn-block">Login</button>
                            </div>
                        </form>
                        <span class="social-text text-center text-uppercase">Or login with</span>
                        <div class="d-grid gap-1">
                            <a href="#" class="btn btn-google-plus"><i class="fa fa-google me-2"></i> Google</a>
                            <a href="#" class="btn btn-facebook"><i class="fa fa-facebook me-2"></i> Facebook</a>
                        </div>

                    </div>
                    <div class="tab-pane fade">
                        <form>
                            <div class="form-group">
                                <div class="form-floating">
                                    <input name="username" type="text" class="form-control" id="username" required
                                           placeholder="Username">
                                    <label for="username"><i class="ti-user me-1"></i> Username</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-floating">
                                    <input name="email" type="email" class="form-control" id="email" required placeholder="Email">
                                    <label for="email"><i class="fa fa-envelope-o me-1"></i> Email</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-floating">
                                    <input name="password" type="password" class="form-control" id="password" required
                                           placeholder="Password">
                                    <label for="password"><i class="ti-lock me-1"></i> Password</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-floating">
                                    <input name="rp-password" type="password" class="form-control" id="rp-password" required
                                           placeholder="Repeat Password">
                                    <label for="rp-password"><i class="ti-lock me-1"></i> Repeat Password</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="d-grid">
                                    <button type="submit" class="btn btn-primary btn-block">Register</button>
                                </div>
                            </div>
                        </form>
                        <span class="social-text text-center text-uppercase">Or Register with</span>
                        <div class="d-grid gap-1">
                            <a href="#" class="btn btn-google-plus"><i class="fa fa-google me-2"></i> Google</a>
                            <a href="#" class="btn btn-facebook"><i class="fa fa-facebook me-2"></i> Facebook</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Forget password Modal -->
<div class="modal fade forget-pass-modal" tabindex="-1" role="dialog" aria-labelledby="forgetLabel">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content border-0">
            <div class="modal-header p-0">
                <ul class="aq-tab-list">
                    <li class="tab active">Reset Password</li>
                </ul>
                <button type="button" class="close btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <p>Please enter your email address or username to get new password.</p>
                <form id="forget-form" method="post" action="#">
                    <div class="form-group">
                        <div class="form-floating">
                            <input name="email" id="forget-email" type="email" class="form-control" required
                                   placeholder="Email">
                            <label for="forget-email"><i class="sli-envelope-letter me-1"></i> Email</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="d-grid">
                            <button type="submit" class="btn btn-primary btn-block">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Inquiry form Modal -->
<div class="modal fade email-modal" tabindex="-1" role="dialog" aria-labelledby="emailLabel">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="emailLabel">Contact Info</h4>
                <button type="button" class="close btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="detail-agent-contact">
                    <div class="agent-info-head mb-5 d-flex">
                        <div class="agent-image p-0 me-4">
                            <a href="#">
                                <img src="https://via.placeholder.com/120x120" class="rounded-2"
                                     alt="image" width="120" height="120">
                            </a>
                        </div>
                        <div class="agent-info align-self-center">
                            <h5 class="media-heading mb-1"> LUIS NAZARIO GARCIA </h5>
                            <p class="position text-primary">MONTERO AGENT</p>
                            <!--<p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam. </p>-->
                            <ul class="other-info list-style-none p-0 fs-xs">
                                <li><span class="fw-500">Phone :</span> 100 8344 8899</li>
                            </ul>
                            <ul class="agent-social list-style-none p-0 m-0">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <!--<h4 class="inquire-title">Inquire about this property</h4>-->
                    <form method="post" class="agent-inquire-form">
                        <div class="row row-20">
                            <div class="col-sm-6 ">
                                <div class="form-group">
                                    <label for="agentName" class="sr-only">Your Name</label>
                                    <input class="form-control" id="agentName" name="name" placeholder="Your Name" type="text">
                                </div>
                            </div>
                            <div class="col-sm-6 ">
                                <div class="form-group">
                                    <label for="agentEmail" class="sr-only">Your Email</label>
                                    <input class="form-control" id="agentEmail" name="email" placeholder="Email" type="email">
                                </div>
                            </div>
                            <div class="col-sm-6 ">
                                <div class="form-group">
                                    <label for="agentPhone" class="sr-only">Your Phone</label>
                                    <input class="form-control" id="agentPhone" name="phone" placeholder="Your Phone" type="text">
                                </div>
                            </div>
                            <div class="col-sm-12 ">
                                <div class="form-group">
                                    <label for="agentMessage" class="sr-only">Your Message</label>
                                    <textarea class="form-control" id="agentMessage" name="message" rows="5"
                                              placeholder="Message"></textarea>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-secondary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
