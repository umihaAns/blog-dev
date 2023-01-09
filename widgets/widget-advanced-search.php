<!--Widget Posts List-->
<div class="aside-widget widget-advanced_search">
    <div class="widget-top">
        <h3 class="widget-title">Advanced Search</h3>
    </div>
    <div class="widget-body">
        <div class="advanced-search-wrap">
            <div class="search-inner">
                <form method="post">
                    <div class="row row-20">
                        <div class="col-md-12 col-sm-12  range-first">
                            <div class="form-group">
                                <div class="range-slider-wrap">
                                    <label class="fs-sm fw-500 mb-3">Price Range</label>
                                    <div class="range-chart-wrap">
                                        <div class="price-range-chart"
                                             data-series="[[0,1,5,7,8,5,3,2,3,6,5,4,7,5,4,1,0]]"></div>
                                    </div>
                                    <div class="price-range-slider" data-type="double"
                                         data-min="0"
                                         data-max="10000"
                                         data-hide-min-max="true"
                                         data-hide-from-to="true"
                                         data-grid="false"
                                         data-range-unit="$"></div>
                                    <div class="range-text col-8 mx-auto d-flex">
                                        <div class="form-floating text-left">
                                            <input id="asideRangeMin" class="input-min range-input form-control w-100" placeholder="" type="number">
                                            <label for="asideRangeMin" class="m-0">Min Price ($)</label>
                                        </div>
                                        <span class="align-self-center m-2">-</span>
                                        <div class="form-floating text-end">
                                            <input id="asideRangeMax" class="input-max range-input form-control w-100" placeholder="" type="text">
                                            <label for="asideRangeMax" class="m-0">Max Price ($)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 ">
                            <div class="form-group">
                                <div class="range-slider-wrap">
                                    <label for="asideRangeMin">Area Range</label>
                                    <label for="asideRangeMax" class="sr-only">Area Range</label>
                                    <div class="slider-wrap">
                                        <div class="area-range-slider" data-range-min="0" data-range-max="10000" data-range-unit="sq ft"></div>
                                    </div>
                                    <div class="clearfix range-text">
                                        <input id="asideRangeMin" class="input-min range-input pull-left text-left" placeholder="" disabled readonly="" type="text">
                                        <input id="asideRangeMax" class="input-max range-input pull-right text-end" placeholder="" disabled readonly="" type="text">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 ">
                            <div class="form-group">
                                <label for="asideSearch" class="sr-only"></label>
                                <input class="form-control" id="asideSearch" name="search" type="text" placeholder="Search by neighborhood, city or address">
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12 ">
                            <div class="form-group">
                                <select class="selectpicker" data-live-search="false" data-live-search-style="begins" title="Any Status">
                                    <option>For Sale</option>
                                    <option>For Rent</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 ">
                            <div class="form-group">
                                <select class="selectpicker" data-live-search="false" data-live-search-style="begins" title="Any Type">
                                    <option>Apartment</option>
                                    <option>House</option>
                                    <option>Condo</option>
                                    <option>Villa</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 ">
                            <div class="form-group">
                                <select class="selectpicker" data-live-search="false" data-live-search-style="begins" title="Any Beds">
                                    <option>Any Bed</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 ">
                            <div class="form-group">
                                <select class="selectpicker" data-live-search="false" data-live-search-style="begins" title="Any Baths">
                                    <option>Any Bath</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 ">
                            <span class="btn btn-outline-dark filter-trigger mb-3"><i class="sli-equalizer me-1"></i> Filters</span>
                            <div class="more-filter-block">
                                <div class="filter-block-inner">

                                    <div class="check-list">
                                        <div class="aq-radio-check check mb-3">
                                            <input class="radio-check-input service-check" id="pool"
                                                   type="checkbox" name="pool" style="display: none">
                                            <label class="radio-check-label" for="pool">
                                                        <span>
                                                            <svg width="12px" height="9px" viewBox="0 0 12 9">
                                                                <polyline points="1 5 4 8 11 1"></polyline>
                                                            </svg>
                                                         </span>
                                                <span>Pool</span>
                                            </label>
                                        </div>
                                        <div class="aq-radio-check check mb-3">
                                            <input class="radio-check-input service-check" id="garage"
                                                   type="checkbox" name="garage" style="display: none">
                                            <label class="radio-check-label" for="garage">
                                                        <span>
                                                            <svg width="12px" height="9px" viewBox="0 0 12 9">
                                                                <polyline points="1 5 4 8 11 1"></polyline>
                                                            </svg>
                                                         </span>
                                                <span>Garage</span>
                                            </label>
                                        </div>
                                        <div class="aq-radio-check check mb-3">
                                            <input class="radio-check-input service-check" id="CentralAc"
                                                   type="checkbox" name="central_ac" style="display: none">
                                            <label class="radio-check-label" for="CentralAc">
                                                        <span>
                                                            <svg width="12px" height="9px" viewBox="0 0 12 9">
                                                                <polyline points="1 5 4 8 11 1"></polyline>
                                                            </svg>
                                                         </span>
                                                <span>Central AC</span>
                                            </label>
                                        </div>
                                        <div class="aq-radio-check check mb-3">
                                            <input class="radio-check-input service-check" id="waterFront"
                                                   type="checkbox" name="water_front" style="display: none">
                                            <label class="radio-check-label" for="waterFront">
                                                        <span>
                                                            <svg width="12px" height="9px" viewBox="0 0 12 9">
                                                                <polyline points="1 5 4 8 11 1"></polyline>
                                                            </svg>
                                                         </span>
                                                <span>Water Front</span>
                                            </label>
                                        </div>
                                        <div class="aq-radio-check check mb-3">
                                            <input class="radio-check-input service-check" id="waterViews"
                                                   type="checkbox" name="water_views" style="display: none">
                                            <label class="radio-check-label" for="waterViews">
                                                        <span>
                                                            <svg width="12px" height="9px" viewBox="0 0 12 9">
                                                                <polyline points="1 5 4 8 11 1"></polyline>
                                                            </svg>
                                                         </span>
                                                <span>Water Views</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <div class="d-grid">
                                <button type="submit" class="btn btn-secondary btn-block">Search</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
