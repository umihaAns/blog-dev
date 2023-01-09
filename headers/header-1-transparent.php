<header class="header-wrap header-type-1">
    <div class="header-body">
        <div class="container">
            <div class="header-inner d-flex">
                <div class="header-logo">
                    <?php include ('inc/header/logo.php')?>
                </div>
                <div class="header-nav text-end">
                    <?php include ('inc/header/main-nav.php')?>
                </div>
                <div class="header-right">
                    <?php include ('inc/header/login-register.php')?>
                </div>
            </div>
        </div>
    </div>
</header>
<div class="hz-search search-v1">
    <div class="container">
        <form>
            <div class="hz-search-inner d-flex">
                <div class="hz-search-bar  v-top w-100">
                    <div class="hz-search-dropdown  v-top">
                        <select class="selectpicker" data-live-search="false" data-live-search-style="begins" title="Location">
                            <option>Location 1</option>
                            <option>Location 2</option>
                            <option>Location 3</option>
                            <option>Location 4</option>
                            <option>Location 5</option>
                        </select>
                    </div>
                    <div class="  v-top w-100">
                        <input class="form-control" type="text" placeholder="Search by neighborhood, city or address">
                    </div>
                </div>
                <div class="hz-search-filter  v-top">
                    <span class="btn filter-btn">More Filters <i class="fa fa-angle-down ms-2"></i></span>
                    <div class="filter-body">
                        <div class="form-group">
                            <label>Price Range</label>
                            <div class="clearfix range-text">
                                <input class="pull-left range-input text-left" id="range-min-price" readonly="" type="text">
                                <input class="pull-right range-input text-end" id="range-max-price" readonly="" type="text">
                            </div>
                            <div id="slider-range"></div>
                        </div>
                        <div class="form-group">
                            <label>Property Type</label>
                            <div class="check-list">
                                <div class="checkbox-inline">
                                    <label>
                                        <input type="checkbox"> Apartment
                                    </label>
                                </div>
                                <div class="checkbox-inline">
                                    <label>
                                        <input type="checkbox"> House
                                    </label>
                                </div>
                                <div class="checkbox-inline">
                                    <label>
                                        <input type="checkbox"> Condo
                                    </label>
                                </div>
                                <div class="checkbox-inline">
                                    <label>
                                        <input type="checkbox"> Villa
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Square Footage</label>
                            <div class="row">
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" placeholder="Min Area (sqft)">
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" placeholder="Max Area (sqft)">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Location</label>
                            <div class="row">
                                <div class="col-sm-6">
                                    <select class="selectpicker" data-live-search="false" data-live-search-style="begins" title="City">
                                        <option>City 1</option>
                                        <option>City 2</option>
                                        <option>City 3</option>
                                        <option>City 4</option>
                                        <option>City 5</option>
                                    </select>
                                </div>
                                <div class="col-sm-6">
                                    <select class="selectpicker" data-live-search="false" data-live-search-style="begins" title="Area">
                                        <option>Area 1</option>
                                        <option>Area 2</option>
                                        <option>Area 3</option>
                                        <option>Area 4</option>
                                        <option>Area 5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-sm-6">
                                    <label class="display-block">Beds</label>
                                    <select class="selectpicker" data-live-search="false" data-live-search-style="begins" title="Any Beds">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div class="col-sm-6">
                                    <label class="display-block">Baths</label>
                                    <select class="selectpicker" data-live-search="false" data-live-search-style="begins" title="Any Baths">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Features</label>
                            <div class="check-list">
                                <div class="checkbox-inline">
                                    <label>
                                        <input type="checkbox"> Pool
                                    </label>
                                </div>
                                <div class="checkbox-inline">
                                    <label>
                                        <input type="checkbox"> Garage
                                    </label>
                                </div>
                                <div class="checkbox-inline">
                                    <label>
                                        <input type="checkbox"> Central AC
                                    </label>
                                </div>
                                <div class="checkbox-inline">
                                    <label>
                                        <input type="checkbox"> Water Front
                                    </label>
                                </div>
                                <div class="checkbox-inline">
                                    <label>
                                        <input type="checkbox"> Water Views
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hz-search-btn  v-top">
                    <button type="submit" class="btn btn-secondary">Search</button>
                </div>
            </div>
        </form>
    </div>
</div>
