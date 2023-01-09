<!--Start Widget-->
<div class="aside-widget widget-booking card bg-white">
    <header class="widget-top">
        <h4 class="widget-title"><i class="sli-calendar me-1"></i> Booking</h4>
        <h4 class="widget-price">$124/night</h4>
    </header>
    <div class="widget-body">
        <form>
            <div class="form-group">
                <label for="checkIn" class="sr-only">Check In</label>
                <div class="aq-datepicker">
                    <div class="aq-check-in"></div>
                    <div class="aq-check-out"></div>
                </div>
                <div class="clearfix"></div>
            </div>

            <div class="booking-extras" id="bookingExtras">
                <div class="form-group services-group-counter">
                    <div class="dropdown-head accordion-button collapsed" id="servicesHead" data-bs-toggle="collapse"
                         data-bs-target="#servicesArea"
                         aria-controls="servicesArea"> Extra Services <span class="badge badge-sm color-dark"><span>0</span> Services</span>
                    </div>
                    <div class="accordion-collapse collapse booking-dropdown" id="servicesArea"
                         data-bs-parent="#bookingExtras">
                        <div class="dropdown-list">
                            <div class="aq-radio-check check">
                                <input class="radio-check-input service-check d-none" id="pickup"
                                       type="checkbox" name="pickup">
                                <label class="radio-check-label" for="pickup">
                                    <span>
                                        <svg width="12px" height="9px" viewBox="0 0 12 9">
                                            <polyline points="1 5 4 8 11 1"></polyline>
                                        </svg>
                                     </span>
                                    <span>Airport Pick up</span>
                                    <span class="control-badge">$2</span>
                                </label>
                            </div>
                        </div>
                        <div class="dropdown-list">
                            <div class="aq-radio-check check">
                                <input class="radio-check-input service-check d-none"
                                       id="bicycle"
                                       data-counter="#bicycleCounter"
                                       type="checkbox" name="bicycle">
                                <label class="radio-check-label" for="bicycle">
                                    <span>
                                        <svg width="12px" height="9px" viewBox="0 0 12 9">
                                            <polyline points="1 5 4 8 11 1"></polyline>
                                        </svg>
                                     </span>
                                    <span>Bicycle</span>
                                    <span class="control-badge">$ 2</span>
                                </label>
                            </div>
                        </div>
                        <div id="bicycleCounter" class="dropdown-list qty-counter">
                            <div class="flex-grow-1">
                                <p class="mb-0 fw-500">Bicycles</p>
                                <span class="flex-grow-1 small">Numbers <span class="qty ms-1">0</span></span>
                            </div>
                            <input type="hidden" name="total_bicycle">
                            <div class="btn-group btn-group-sm" role="group">
                                <button type="button" class="btn qty-btn qty-btn-minus"><i
                                        class="sli-minus"></i></button>
                                <button type="button" class="btn qty-btn qty-btn-plus"><i
                                        class="sli-plus"></i></button>
                            </div>
                        </div>
                        <div class="dropdown-list">
                            <div class="aq-radio-check check">
                                <input class="radio-check-input service-check d-none"
                                       id="laundry"
                                       data-counter="#laundryCounter"
                                       type="checkbox" name="laundry">
                                <label class="radio-check-label" for="laundry">
                                    <span>
                                        <svg width="12px" height="9px" viewBox="0 0 12 9">
                                            <polyline points="1 5 4 8 11 1"></polyline>
                                        </svg>
                                     </span>
                                    <span>Laundry</span>
                                    <span class="control-badge">$2</span>
                                </label>
                            </div>
                        </div>
                        <div id="laundryCounter" class="dropdown-list qty-counter">
                            <div class="flex-grow-1">
                                <p class="mb-0 fw-500">Laundry</p>
                                <span class="flex-grow-1 small">Items <span class="qty ms-1">0</span></span>
                            </div>
                            <input type="hidden" name="total_laundry">
                            <div class="btn-group btn-group-sm" role="group">
                                <button type="button" class="btn qty-btn qty-btn-minus"><i
                                        class="sli-minus"></i></button>
                                <button type="button" class="btn qty-btn qty-btn-plus"><i
                                        class="sli-plus"></i></button>
                            </div>
                        </div>
                        <div class="dropdown-list pb-1 text-end">
                            <button type="button" class="btn btn-sm btn-link close-dropdown">Close</button>
                        </div>
                    </div>
                    <input type="hidden" class="total-services" name="total-services" value="0">
                </div>
                <div class="form-group group-counter">
                    <div class="dropdown-head accordion-button collapsed" data-bs-toggle="collapse"
                         data-bs-target="#gustsArea"
                         aria-controls="gustsArea">
                        Guests <span class="badge badge-sm color-dark"><span>0</span> Guests</span>
                    </div>
                    <div class="accordion-collapse collapse booking-dropdown" id="gustsArea" data-bs-parent="#bookingExtras">
                        <div class="dropdown-list qty-counter">
                            <input type="hidden" name="adults" value="1">
                            <div class="flex-grow-1">
                                <p class="mb-0 fw-500">Adults</p>
                                <span class="flex-grow-1 small">Total Adults: <span class="qty fw-500 ms-1">1</span></span>
                            </div>
                            <div class="btn-group btn-group-sm" role="group">
                                <div class="btn-group btn-group-sm" role="group">
                                    <button type="button" class="btn qty-btn qty-btn-minus"><i
                                            class="sli-minus"></i></button>
                                    <button type="button" class="btn qty-btn qty-btn-plus"><i
                                            class="sli-plus"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown-list qty-counter">
                            <div class="flex-grow-1">
                                <p class="mb-0 fw-500">Children</p>
                                <span class="flex-grow-1 small">Total Children: <span class="qty fw-500 ms-1">0</span></span>
                            </div>
                            <input type="hidden" name="children" value="0">
                            <div class="btn-group btn-group-sm" role="group">
                                <button type="button" class="btn qty-btn qty-btn-minus"><i
                                        class="sli-minus"></i></button>
                                <button type="button" class="btn qty-btn qty-btn-plus"><i
                                        class="sli-plus"></i></button>
                            </div>
                        </div>
                        <div class="dropdown-list qty-counter">
                            <input type="hidden" name="infants" value="0">
                            <div class="flex-grow-1">
                                <p class="mb-0 fw-500">Infants</p>
                                <span class="flex-grow-1 small">Total Infants: <span class="qty fw-500 ms-1">0</span></span>
                            </div>

                            <div class="btn-group btn-group-sm" role="group">
                                <button type="button" class="btn qty-btn qty-btn-minus"><i
                                        class="sli-minus"></i></button>
                                <button type="button" class="btn qty-btn qty-btn-plus"><i
                                        class="sli-plus"></i></button>
                            </div>
                        </div>
                        <div class="dropdown-list pb-1 text-end">
                            <button type="button" class="btn btn-sm btn-link close-dropdown">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-grid">
                <button type="submit" class="btn btn-primary btn-block">Book Your Request</button>
            </div>
        </form>
        <div class="booking-summary summary">
            <div class="summary-head d-flex">
                <h3 class="head-title flex-grow-1">Total: $400</h3>
                <button class="btn btn-sm btn-link show-summary"
                        data-bs-toggle="collapse"
                        data-bs-target="#summaryArea"
                        aria-expanded="false"
                        aria-controls="summaryArea"
                        data-more-title="View detail"
                        data-less-title="Hide detail"></button>
            </div>
            <div class="collapse summary-body" id="summaryArea">
                <div class="list-item">
                    <span class="title">2 Nights</span>
                    <span class="value">$300</span>
                </div>
                <div class="list-item">
                    <span class="title">Services Charges</span>
                    <span class="value">$100</span>
                </div>
            </div>
        </div>
    </div>
    <div class="widget-footer pt-3 text-center">
        <a href="#" class="text-dark"><i class="sli-flag"></i> Flag as inappropriate</a>
    </div>
</div>
