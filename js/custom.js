/*
 Template Name: HABRO
 Description: HABRO
 Author: mazaajthemes
 Developed by: mazaj themes
 Version: 1.0
 */

(function ($) {
    "use strict";

    /*//  GLOBAL VARIABLES & FUNCTIONS -----*/
    const $win = $(window);
    const body_trigger = $("body,html");

    //  parseInt Radix 10
    function parseInt10(val) {
        return parseInt(val, 10)
    }

    //  add comma to value
    let commaToStr = function (nStr) {
        nStr += '';
        let x = nStr.split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        const rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2')
        }
        return x1 + x2
    };

    //  body scrool top
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 500) {
            $(".btn-scrollup").fadeIn(300)
        } else {
            $(".btn-scrollup").fadeOut(300)
        }
    });

    $('.btn-scrollup').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false
    });

    function getWindowWidth() {
        return Math.max($(window).width(), window.innerWidth)
    }

    function getWindowHeight() {
        return Math.max($(window).height(), window.innerHeight)
    }

    /* // BOOTSTRAP FUNCTIONS -----*/

    //  bootstrap popover
    let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl,
            // options object as a second param
            {
                html: true
            })
    })


    //  bootstrap tooltip
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })


    // profile avatar
    $('.avatar-upload').on("click", function () {
        $('.account-photo').trigger('click')
    });

    /*//  MAKE PLACE ITEM FAVORITE -----*/
    function item_fave() {
        $(".action-fave").on("click", function () {
            let this_ele = $(this);
            this_ele.toggleClass("active");
            this_ele.find("i").toggleClass("fa-heart-o").toggleClass("fa-heart")
        })
    }

    item_fave();

    /*//  PRICE BAR CHART -----*/
    function aq_price_range_chart() {

        const ele_class = '.price-range-chart';
        const selector = $(ele_class);

        selector.each(function (i) {

            let $this = $(this);
            let ele_id = 'priceChart' + i;
            $this.attr('id', ele_id);

            let series = $this.data('series');
            let options = {
                width: '100%',
                height: '30px',
                high: '8',
                low: 0,
                showArea: true,
                showLine: false,
                showPoint: false,
                fullWidth: true,
                //seriesBarDistance: 0,
                axisX: {
                    offset: 0,
                    scaleMinSpace: 0,
                    showGrid: false,
                    showLabel: false
                },
                axisY: {
                    offset: 0,
                    scaleMinSpace: 0,
                    showGrid: false,
                    showLabel: false
                },
                chartPadding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            };

            series = series ? series : false;

            let priceRangeChart = new Chartist.Line('#' + ele_id, {
                //labels: [1, 2, 3, 4, 5, 6, 7, 8],
                series: series,
            }, options);

            const filter_modal = document.getElementById('filter-modal');

            if (filter_modal) {
                filter_modal.addEventListener('shown.bs.modal', function (event) {
                    priceRangeChart.update()
                });
            }


            priceRangeChart.update();

        })
    }

    aq_price_range_chart()

    /*//  RANGE SLIDER -----*/
    function aq_range_slider() {

        const slider_wrap = $(".range-slider-wrap");
        const input_min = $(".input-min");
        const input_max = $(".input-max");
        let min = 0;
        let max = 0;
        let instance;
        let from = 0;
        let to = 0;

        // range slider for price
        const price_slider = $(".price-range-slider");
        price_slider.each(function (i) {

            let this_slider = $(this);

            min = this_slider.data('min');
            max = this_slider.data('max');

            // add id to range slider
            let slider_id = 'priceRangeSlider' + i;
            this_slider.attr('id', slider_id);
            let slider_selector = $('#' + slider_id);


            // add id to range slider inputs
            let input_form_id = 'rangeInputFrom' + i;
            let input_to_id = 'rangeInputTo' + i;

            this_slider.closest(slider_wrap).find(input_min).attr('id', input_form_id);
            this_slider.closest(slider_wrap).find(input_max).attr('id', input_to_id);

            let input_form_selector = $('#' + input_form_id);
            let input_to_selector = $('#' + input_to_id);

            slider_selector.ionRangeSlider({
                skin: "round",
                prettify_separator: ',',
                //force_edges: false,
                //hide_min_max: true,
                //hide_from_to: true,
                min: min,
                max: max,
                //from: 500,
                //to: 10000,
                onStart: updateInputs,
                onChange: updateInputs,
                onFinish: updateInputs
            });


            // price_slider.on("change", function (data) {
            //     let $this = $(this);
            //     let from = $this.data("from"); // reading input data-from attribute
            //     let to = $this.data("to"); // reading input value
            //     $this.parent(slider_wrap).find(input_min).val(commaToStr(from));
            //     $this.parent(slider_wrap).find(input_max).val(commaToStr(to));
            //     //input_min.prop("value", data.from);
            //     //console.log(from, to); // FROM value
            // });

            instance = slider_selector.data("ionRangeSlider");
            function updateInputs (data) {
                from = data.from;
                to = data.to;

                input_form_selector.prop("value", from);
                input_to_selector.prop("value", to);
            }

            input_form_selector.on("change", function () {
                let val = $(this).prop("value");

                // validate
                if (val < min) {
                    val = min;
                } else if (val > to) {
                    val = to;
                }

                instance.update({
                    from: val
                });

                $(this).prop("value", val);

            });

            input_to_selector.on("change", function () {
                let val = $(this).prop("value");

                // validate
                if (val < from) {
                    val = from;
                } else if (val > max) {
                    val = max;
                }

                instance.update({
                    to: val
                });

                $(this).prop("value", val);
            })
        })
        // price_slider.each(function () {
        //
        //     let range_min = $(this).data("range-min");
        //     let range_max = $(this).data("range-max");
        //     const input_min = $(".input-min");
        //     const input_max = $(".input-max");
        //     let range_unit = $(this).data("range-unit");
        //
        //     $(this).slider({
        //         range: true,
        //         min: range_min,
        //         max: range_max,
        //         values: [range_min, range_max],
        //         slide: function (event, ui) {
        //             $(this).closest(slider_wrap).find(input_min).val(commaToStr(ui.values[0]));
        //             $(this).closest(slider_wrap).find(input_max).val(commaToStr(ui.values[1]));
        //         }
        //     });
        //     $(this).closest(slider_wrap).find(input_min).val(commaToStr($(this).slider("values", 0)));
        //     $(this).closest(slider_wrap).find(input_max).val(commaToStr($(this).slider("values", 1)));
        // });

        // range slider for price
        const area_slider = $(".area-range-slider");
        area_slider.each(function () {

            let range_min = $(this).data("range-min");
            let range_max = $(this).data("range-max");
            const input_min = $(".input-min");
            const input_max = $(".input-max");
            let range_unit = $(this).data("range-unit");

            $(this).slider({
                range: true,
                min: range_min,
                max: range_max,
                values: [range_min, range_max],
                slide: function (event, ui) {
                    $(this).closest(slider_wrap).find(input_min).val(ui.values[0] + " " + range_unit);
                    $(this).closest(slider_wrap).find(input_max).val(ui.values[1] + " " + range_unit);
                }
            });
            $(this).closest(slider_wrap).find(input_min).val($(this).slider("values", 0) + " " + range_unit);
            $(this).closest(slider_wrap).find(input_max).val($(this).slider("values", 1) + " " + range_unit)
        })
    }

    aq_range_slider();

    //  search filter dropdown
    function aq_filter_search() {

        // range input selectors
        const search_range_dropdown = $(".search-range-dropdown");
        const trigger_input = search_range_dropdown.find(".search-range-outer input");
        const trigger_input_min = search_range_dropdown.find(".input-range-min");
        const trigger_input_max = search_range_dropdown.find(".input-range-max");

        // range min max btn selectors
        const range_btn = $(".btn-price-range");
        let btn_text_min = range_btn.find(".min-price");
        let btn_text_max = range_btn.find(".max-price");


        // range options elements selectors
        const range_options = $(".search-range-options");
        let range_option_selector = range_options.find("li a");

        // Horizontal Search filter dropdown
        const filter_btn = $('.hz-search .filter-btn');
        //let filter_btn = filter_wrap.find('.filter-btn');
        const filter = $(".hz-search-filter");
        filter_btn.on('click', function () {
            $(this).toggleClass('active').add().parents('.hz-search').find(filter).toggleClass('active')
        });

        // Stop hiding dropdowns if click itself
        $('.search-area-dropdown, .search-range-dropdown').on("click", function (e) {
            e.stopPropagation()
        });

        // Cities selection
        // const search_city_dropdown = $(".search-city-dropdown");
        // let search_city_trigger = search_city_dropdown.find("a");
        // const btn_city = $(".btn-city .btn-value");
        //
        // search_city_trigger.on("click", function (e) {
        //     let this_city = $(this);
        //     let city_data = this_city.data('city');
        //     search_city_dropdown.find('li').removeClass("active");
        //     this_city.parent("li").addClass("active");
        //     $(".search-city-input").val(city_data).add(btn_city).text(city_data);
        //     e.preventDefault();
        // });

        // range dropdown options selectors
        const range_options_min = $(".range-option-min");
        const range_options_max = $(".range-option-max");

        // hide show min max options
        trigger_input.on("focus", function () {
            let this_input = $(this);
            if (this_input.hasClass("input-range-min")) {
                range_options_min.removeClass('d-none');
                range_options_max.addClass('d-none');
            } else if (this_input.hasClass("input-range-max")) {
                range_options_min.addClass('d-none');
                range_options_max.removeClass('d-none');
            }
        });

        trigger_input.on("change", function () {
            let this_input = $(this);
            let range_val = this_input.val();
            if (this_input.hasClass("input-range-min")) {
                if ($.isNumeric(range_val)) {
                    btn_text_min.text(commaToStr(range_val)).add(this_input.val(commaToStr(range_val)));
                } else {
                    btn_text_min.text("Min").add(this_input.val(""));
                }
            } else if (this_input.hasClass("input-range-max")) {
                if ($.isNumeric(range_val)) {
                    btn_text_max.text(commaToStr(range_val)).add(this_input.val(commaToStr(range_val)));
                } else {
                    btn_text_max.text("Max").add(this_input.val(""));
                }
            }

        });

        range_option_selector.on("click", function (e) {
            let this_ele = $(this);

            if (this_ele.attr("data-min-price")) {
                let ele_data_min = this_ele.data('min-price');
                if (ele_data_min === " ") {
                    btn_text_min.text("Min").add(trigger_input_min).val("");
                } else {
                    btn_text_min.text(ele_data_min).add(trigger_input_min).val(ele_data_min);
                }
            } else if (this_ele.attr("data-max-price")) {
                let ele_data_max = this_ele.data('max-price');
                if (ele_data_max === " ") {
                    btn_text_max.text("Min").add(trigger_input_max).val("");
                } else {
                    btn_text_max.text(ele_data_max).add(trigger_input_max).val(ele_data_max);
                }
            }
            if (this_ele.hasClass()) {

            }
            e.preventDefault()
        });

        // advance search filter
        const adv_filter_trigger = $('.filter-trigger');
        adv_filter_trigger.on('click', function () {
            $(this).toggleClass('active');
            $(this).closest(".advanced-search-wrap").find('.more-filter-block').animate({
                height: 'toggle',
                opacity: 'toggle'
            }, 500)
        });

        // advance search mobile
        const mobile_btn_filter = $('.search-mobile .advance-btn');
        mobile_btn_filter.on('click', function () {
            $(this).toggleClass('active');
            $(this).closest(".advanced-search-wrap").find('.search-body').animate({
                height: 'toggle',
                opacity: 'toggle'
            }, 700)
        });

        // expanded advanced search
        const expanded_search = $('.search-expanded');
        let expanded_trigger = expanded_search.find('.btn-search');
        const media_map = $(".aq-page-media");

        expanded_trigger.on("click", function () {
            expanded_search.toggleClass("active");
            if (expanded_search.hasClass("active")) {
                setTimeout(function () {
                    media_map.css("overflow", "visible");
                }, 500);
            } else {
                media_map.css("overflow", "hidden");
            }
        });
        if (expanded_search.hasClass("active")) {
            media_map.css("overflow", "visible")
        }
    }

    aq_filter_search();

    /*// ADD BACKGROUNDS AND COLORS -----*/
    function inline_bg_image() {
        let bgImage;
        const dataBgImage = $('[data-bg-image]');
        dataBgImage.each(function () {
            bgImage = $(this).data('bg-image');
            //$(this).css('background-image', 'url(' + bgImage + ')');
            $(this).css({backgroundImage: 'url(' +bgImage + ')'})
        })
    }

    function inline_bg_color() {
        let bgColor;
        const dataBgColor = $('[data-bg-color]');
        dataBgColor.each(function () {
            bgColor = $(this).data('bg-color');
            $(this).css({backgroundColor: bgColor})
        })
    }

    inline_bg_image();
    inline_bg_color();


    /*//  MAGNIFIC POPUP COLORS -----*/
    $('.lightbox-video-link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 300,
        preloader: false,
        fixedContentPos: true
    });

    $('.lightbox-image').magnificPopup({
        type: 'image',
        disableOn: 700,
        mainClass: 'mfp-fade',
        removalDelay: 300,
        preloader: false,
        fixedContentPos: true
    });
    $('.lightbox-gallery').magnificPopup({
        type: 'image',
        disableOn: 700,
        mainClass: 'mfp-fade',
        removalDelay: 300,
        preloader: false,
        fixedContentPos: true,
        gallery: {
            enabled: true
        }
    });

    //  post cards masonry
    const msnry_wrap = $(".masonry-grid-wrap");
    $(window).on('load', function () {
        if (msnry_wrap.length > 0) {
            msnry_wrap.isotope({
                // options
                itemSelector: '.tile-block'
                //layoutMode: 'fitRows'
            })
        }
    });

    //  share tooltip
    // const actions_trigger = $('.property-actions .item-share');
    // const share_tooltip = $('.aq-share-tooltip');
    // actions_trigger.on('click', function () {
    //     if ($(this).hasClass("item-share")) {
    //         share_tooltip.toggleClass('open');
    //     }
    //     actions_trigger.removeClass("active");
    //     $(this).addClass('active');
    // });
    //
    // $(document).mouseup(function (e) {
    //     var tip = $(".item-share");
    //     if (!tip.is(e.target) // if the target of the click isn't the container...
    //         && tip.has(e.target).length === 0) // ... nor a descendant of the container
    //     {
    //         share_tooltip.removeClass('open');
    //         actions_trigger.removeClass("active");
    //     }
    // });

    //  agent show number
    $('.agent-call-btn').on("click", function () {
        $(this).toggleClass("active")
    });

    //  BOOTSTRAP SELECT PICKER
    // const select_picker = $('.selectpicker');
    // if (select_picker.length > 0) {
    //     select_picker.selectpicker({
    //         dropupAuto: false
    //     });
    // }

    // CHOSEN PLUGIN -----
    const chosen_selector = $(".selectpicker");
    chosen_selector.chosen({
        no_results_text: "Oops, nothing found!",
        disable_search_threshold: 10,
        allow_single_deselect: true
    });

    //  habro datepicker
    const date_picker = $(".aq_datepicker");
    if (date_picker.length > 0) {
        date_picker.datepicker()
    }

    //  check user agents
    let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    let isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);


    //  habro navigation
    function aq_navigation() {
        const nav_list = $('.navi ul li');

        nav_list.each(function () {
            $(this).has('ul').not('.has-mega-dropdown li').addClass('has-sub-child')
        });

        $(".navi ul .has-sub-child").on({
            mouseenter: function () {
                $(this).addClass('active');
            },
            mouseleave: function () {
                $(this).removeClass('active');
            }
        });

        const board_panel_list = $('.board-panel-menu li');
        board_panel_list.each(function () {
            $(this).has('ul').addClass('has-child')
        });

        board_panel_list.on('click', function () {
            if ($(this).hasClass('has-child')) {
                $(this).toggleClass('active');
            }
        })
    }

    aq_navigation();

    // function aq_megamenu() {
    //     if ($(window).width() > 991) {
    //
    //         if ($('.navi ul li').hasClass('has-mega-dropdown')) {
    //             $('.navi ul .has-mega-dropdown').each(function () {
    //
    //                 const header = $('.header-type-1,.header-type-2,.header-type-3');
    //                 const container = header.find(".container");
    //                 let containOffset = container.offset();
    //                 let windowWidth = $win.width();
    //                 let thisOffset = $(this).offset();
    //
    //                 if (header.hasClass("header-fullwidth")) {
    //                     //if(container.length > 0){
    //                     $("> .mega-dropdown", this).css({width: windowWidth, left: -thisOffset.left});
    //                 } else {
    //                     $("> .mega-dropdown", this).css({
    //                         width: container.innerWidth(),
    //                         left: -(thisOffset.left - containOffset.left)
    //                     });
    //                 }
    //             });
    //         }
    //     }
    // }

    // aq_megamenu();
    // $win.on('resize', function () {
    //     aq_megamenu();
    // });


    //  habro sticky header
    const aq_header = $('.header-wrap');
    const aq_header_sticky = $('.header-wrap.this-sticky');

    if (aq_header.hasClass("this-sticky")) {
        aq_this_sticky(aq_header_sticky)
    }

    function aq_this_sticky(ele) {

        let header_position = ele.outerHeight();
        let sticky_nav = ele.clone().removeClass('this-sticky').addClass('header-sticky');

        $('.header-section').append(sticky_nav);

        aq_navigation();

        //aq_megamenu();

        function fix_header() {
            sticky_nav.css('top', '0')
        }

        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= header_position + 100) {
                sticky_nav.addClass("start-sticky");
            } else {
                sticky_nav.removeClass("start-sticky");
            }
        });

        fix_header();
        $(window).resize(function () {
            fix_header()
        })
    }

    function search_sticky() {
        const header_search = $('.hz-search');
        let search_offset = header_search.offset();
        let searchH = header_search.outerHeight();
        if (header_search.hasClass("this-sticky")) {
            header_search.closest(".hz-search-outer").height(searchH);
            $(window).on('scroll', function () {
                if ($(window).scrollTop() >= search_offset.top) {
                    header_search.addClass("start-sticky");
                } else {
                    header_search.removeClass("start-sticky");
                }
            })
        }
    }

    search_sticky();

    //	habro extended mega menu
    const extended_menu_btn = $('.extended-menu-btn');
    const extended_menu = $('.header-extended-menu');
    extended_menu_btn.on('click', function () {
        let $this = $(this);
        $this.toggleClass("active");
        $this.parents('.header-wrap').find(extended_menu).slideToggle().toggleClass('menu-open');
    });

    //  account dropdown
    function account_dropdown() {
        // for mobile
        $('.mobile-header-user .user-icon').on('click', function () {
            $(this).toggleClass('open')
        });

        // for desktop
        $(".header-actions .user-block").on({
            mouseenter: function () {
                $(this).parents(".header-actions").addClass('active');
            },
            mouseleave: function () {
                $(this).parents(".header-actions").removeClass('active');
            }
        })
    }

    account_dropdown();

    function element_hide(ele_trigger, ele, ele_class) {
        $(document).mouseup(function (e) {
            let this_trigger = $(ele_trigger);
            let this_ele = $(ele);

            if (!this_trigger.is(e.target) // if the target of the click isn't the container...
                && this_trigger.has(e.target).length === 0 // ... nor a descendant of the container
                && !this_ele.is(e.target)
                && this_ele.has(e.target).length === 0
            ) {
                this_trigger.removeClass(ele_class);
                if (this_ele.hasClass(ele_class)) {
                    this_ele.removeClass(ele_class);
                }
            }
        })
    }

    element_hide('.mobile-nav-btn', '.mobile-nav-dropdown', 'open');
    element_hide('.mobile-header-user .user-icon', '.account-dropdown', 'open');
    element_hide('.hz-search .filter-btn', '.hz-search-filter', 'active');

    //  habro mobile nav menu
    function aq_mobile_menu(html, place) {
        let siteMenu = $(html).html();
        const page_body = $('body');
        const mob_dropdown_class = '.mobile-nav-dropdown';
        const mob_dropdown = $(mob_dropdown_class);

        mob_dropdown.html(siteMenu);

        $(mob_dropdown_class + ' ul li').each(function () {
            $(this).has('ul').addClass('has-sub-child')
        });

        $(mob_dropdown_class + ' ul .has-sub-child').append('<span class="menu-expand"></span>');

        $(mob_dropdown_class + ' .menu-expand').on('click', function () {
            let parent = $(this).parent('li');
            parent.toggleClass('active');
            if (parent.hasClass('active') !== true) {
                parent.children('ul').slideUp();
            } else {
                parent.children('ul').slideDown();
            }
        });
        page_body.css({transition: 'margin-left 0.5s ease 0s'});
        $('.mobile-nav-btn').on('click', function () {
            page_body.toggleClass('menu-open');
            if (page_body.hasClass('menu-open')) {
                $(mob_dropdown).addClass('open');
                page_body.css({marginLeft: 250});
                document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
            } else {
                $(mob_dropdown).removeClass('open');
                page_body.css({marginLeft: 0})
            }
        })
    }

    aq_mobile_menu('.navi', '.mobile-nav-dropdown');

    //  habro banner parallax
    function aq_parallax() {
        const banner_parallax = $('.banner-parallax');
        const ele_offset = $('.aq-page-media');
        const ele_parallax = $('.parallax-inner');

        if (banner_parallax.length) {
            let top_distance = ele_offset.offset().top;
            //var start_scroll = banner_distance;
            let scrolled = $(window).scrollTop() - top_distance;
            if ($(window).scrollTop() >= top_distance) {
                ele_parallax.css("transform", "translate3d(0," + -scrolled * -0.6 + "px,0)");
            } else if ($(window).scrollTop() < top_distance) {
                ele_parallax.css("transform", "translate3d(0,0px,0)");
            }
        }
    }

    aq_parallax();
    $(window).scroll(function () {
        aq_parallax()
    });

    //  CHANGE GRID LIST
    $('.filter-view-btn').on("click", function () {
        $('.filter-view-btn').removeClass('active');
        const list_wrap = $('.item-list-wrap');
        $(this).addClass('active');
        if ($(this).hasClass('btn-list')) {
            list_wrap.removeClass('item-grid-view item-grid-three item-grid-two').addClass('item-list-view')
        } else if ($(this).hasClass('btn-grid')) {
            list_wrap.removeClass('item-list-view item-grid-three').addClass('item-grid-view item-grid-two')
        } else if ($(this).hasClass('btn-grid-three')) {
            list_wrap.removeClass('item-list-view item-grid-view item-grid-two').addClass('item-grid-view item-grid-three')
        }
    });


    //  section height
    function aq_section_height() {

        const header_section = $('.header-section');
        const footer_section = $('.footer-section');
        let header_height = header_section.innerHeight();
        let footer_height = footer_section.outerHeight();

        let page_sec = '';
        page_sec = $('[data-sec-height]');

        page_sec.each(function () {
            let $this = $(this)
            let sec_height = $this.data('sec-height');
            if (header_height) {
                $this.css('height', (sec_height === "fullscreen") ? 'calc(100vh - ' + header_height + 'px)' : sec_height + 'px');
            } else {
                $this.css('height', (sec_height === "fullscreen") ? '100vh' : sec_height + 'px');
            }

        });
        //
        //
        // // if (header_section.hasClass("header-transparent")) {
        // //     win_height = win_height + header_height;
        // // }else{
        // //     win_height = win_height - footer_height;
        // // }
        //
        // $('.aq-fullscreen').css('height', 'calc(100vh - '+header_height+')');
        //
        // const page_media = $(".aq-page-media");
        // let page_media_height = page_media.data("page-height");
        //
        // //if (page_media_height === "fullscreen") {
        //     page_media.css('height', (page_media_height === "fullscreen")? 'calc(100vh - '+header_height+')' : page_media_height);
        // // } else {
        // //     page_media.css('height', page_media_height);
        // // }
        //
        // const slider_media = $(".aq-property-slider");
        // const slider_media_item = $(".aq-property-slider .item");
        // let slider_media_height = slider_media.data("page-height");
        //
        // //if (slider_media_height === "fullscreen") {
        //     slider_media_item.css('height', (slider_media_height === "fullscreen")? 'calc(100vh - '+header_height+')' : slider_media_height);
        // // } else {
        // //     slider_media_item.css('height', slider_media_height);
        // // }
    }

    aq_section_height();

    $win.on('resize', function () {
        aq_section_height()
    });

    //  start create listing form steps and validation
    function create_place_form() {
        $("[data-hide]").on("click", function () {
            $(this).closest("." + $(this).attr("data-hide")).hide()
        });

        var current = 1;

        const form = $("#add-property-form");
        const formStep = $(".form-step");
        const formStepGal = $(".form-step-gal");
        const btnnext = $(".btn-step-next");
        const btnback = $(".btn-step-back");
        const btnsubmitBlock = $(".btn-step-submit");
        let btnsubmit = btnsubmitBlock.find("button[type='submit']");
        const total_steps = $('.total-steps');
        const steps_counter = $('.step-counter');


        const errorBlock = $(".validate-errors");
        const errorBlockGal = $(".validate-errors-gal");
        const galThumbs = $(".upload-gallery-thumb");

        total_steps.html(formStep.length);
        steps_counter.html(current);

        // init buttons and ui
        formStep.not(':eq(0)').hide();
        hideButtons(current);

        // Next button click action
        btnnext.on("click", function () {
            if (current < formStep.length) {
                // Check validation
                if ($(formStepGal).is(':visible')) {
                    if (!$(galThumbs).length > 0) {
                        errorBlockGal.show();
                        body_trigger.animate({scrollTop: 0}, "slow");
                        return
                    } else {
                        errorBlockGal.hide();
                    }
                }
                if (form.valid()) {
                    formStep.show();
                    formStep.not(':eq(' + (current++) + ')').hide();
                    errorBlock.hide();
                } else {
                    errorBlock.show();
                    body_trigger.animate({scrollTop: 0}, "slow");
                }
            }
            hideButtons(current);
            steps_counter.html(current)
        });

        // Back button click action
        btnback.on("click", function () {
            body_trigger.animate({scrollTop: 0}, "slow");
            if (current > 1) {
                current = current - 2;
                if (current < formStep.length) {
                    formStep.show();
                    formStep.not(':eq(' + (current++) + ')').hide();
                }
            }
            hideButtons(current);
            steps_counter.html(current)
        });

        // Submit button click
        btnsubmit.on("click", function (event) {
            event.preventDefault();
            // Check validation
            if ($(formStepGal).is(':visible')) {
                if (!$(galThumbs).length > 0) {
                    errorBlockGal.show();
                    return
                } else {
                    errorBlockGal.hide();
                }
            }
            if (form.valid()) {
                errorBlock.hide();
                btnsubmit.attr('disabled', true);
            } else {
                errorBlock.show();
                body_trigger.animate({scrollTop: 0}, "slow");
            }
        });

        if (form.length > 0) {
            form.validate({ // initialize plugin
                //ignore:":not(:visible)",
                ignore: ":hidden:not(.selectpicker)",
                errorPlacement: function (error, element) {
                    return false;
                },
                rules: {
                    //title : "required",
                    //bedroom_name : "required"
                    night_price: {
                        required: true,
                        number: true,
                        rangelength: [4, 10]
                    }

                }
            })
        }

        // Hide buttons according to the current step
        function hideButtons(current) {
            let limit = parseInt10(formStep.length);
            $(".action").hide();
            if (current < limit) btnnext.show();
            if (current > 1) btnback.show();
            if (current === limit) {
                btnnext.hide();
                btnsubmitBlock.show();
            }
        }
    }

    create_place_form();


    //  map view taber
    $('[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        let this_e = e;
        this_e.target // newly activated tab
        this_e.relatedTarget // previous active tab
    });

    //	habro taber
    const aq_taber = $(".aq-taber");

    aq_taber.each(function () {
        let this_taber = $(this);
        let taber_id = this_taber.attr("id");
        let tab = $("#" + taber_id + " .tab");
        let tab_content = $("#" + taber_id + " .tab-pane");

        tab.on('click', function () {
            let this_tab = $(this);
            if (this_tab.hasClass('active') === false) {
                tab.removeClass('active');
                this_tab.addClass('active');
                tab_content.removeClass('active show');
                tab_content.eq(this_tab.index()).addClass('active').delay(5).queue(function (next) {
                    tab_content.eq(this_tab.index()).addClass('show');
                    next();
                });
            }
        })
    });

    // HABRO UPLOAD REVIEW GALLERY -----
    const reviewImagesBtn = $('.review-images-btn');
    const reviewFileInput = $('.review-images-input');

    reviewImagesBtn.on("click", function () {
        reviewFileInput.trigger('click')
    });


    //  HABRO SLIDERS LOAD -----
    const aq_all_slider = $('#aq-property-slider, .slider-load-animated, .item-carousel');
    aq_all_slider.on('initialized.owl.carousel', function () {
        //item_fave();
        setTimeout(function () {
            aq_all_slider.animate({opacity: 1}, 1000);
            $('.slider-load-animated, #aq-property-slider, .item-carousel').prev('.aq-loader-wrap').animate({opacity: 0}, function () {
                $(this).remove();
            })
        }, 1000)
    });


    /*// START ALL SLIDERS AND CAROUSELS ----*/

    //  BANNER SLIDER
    const aq_property_slider = $("#aq-property-slider");
    if (aq_property_slider.length > 0) {
        aq_property_slider.owlCarousel({
            //rtl: aq_rtl,
            loop: true,
            dots: false,
            slideBy: 1,
            items: 1,
            autoplay: false,
            smartSpeed: 1000,
            autoplayTimeout: 4000,
            autoplayHoverPause: false,
            nav: true,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            addClassActive: true,
            callbacks: true,
            responsive: {
                0: {
                    nav: false
                },
                767: {
                    nav: true
                }
            }

        })
    }


    //  habro places grid carousel
    const gird_carousel = $(".grid-carousel");
    if (gird_carousel.length > 0) {
        gird_carousel.owlCarousel({
            margin: 20,
            loop: true,
            dots: true,
            items: 3,
            slideBy: 1,
            autoplay: false,
            smartSpeed: 1000,
            autoplayTimeout: 4000,
            autoplayHoverPause: false,
            nav: true,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                }
            }
        })
    }

    // places carousel
    const item_carousel = $(".item-carousel");
    if (item_carousel.length > 0) {
        item_carousel.owlCarousel({
            loop: true,
            dots: false,
            items: 1,
            slideBy: 1,
            smartSpeed: 600,
            nav: true,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
        })
    }

    // agent carousel
    const agent_carousel = $(".agent-carousel-module");
    if (agent_carousel.length > 0) {
        agent_carousel.owlCarousel({
            loop: true,
            dots: true,
            items: 4,
            slideBy: 1,
            nav: false,
            smartSpeed: 600,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                }
            }
        })
    }

    // partners carousel
    const partners_carousel = $(".partners-carousel");
    if (partners_carousel.length > 0) {
        partners_carousel.owlCarousel({
            margin: 10,
            loop: true,
            dots: true,
            items: 5,
            slideBy: 1,
            nav: false,
            autoplay: true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 5
                }
            }
        })
    }

    // news item carousel
    const news_item_carousel = $(".news-item-carousel");
    if (news_item_carousel.length > 0) {
        news_item_carousel.owlCarousel({
            loop: true,
            dots: true,
            items: 3,
            slideBy: 1,
            nav: false,
            smartSpeed: 600,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                }
            }
        })
    }

    // news item layer carousel
    const news_item_layer_carousel = $(".news-item-layer-carousel");
    if (news_item_layer_carousel.length > 0) {
        news_item_layer_carousel.owlCarousel({
            loop: true,
            dots: true,
            items: 3,
            slideBy: 1,
            nav: false,
            smartSpeed: 600,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                }
            }
        })
    }

    //  HABRO TESTIMONIAL SLIDER -----
    const testi_thumb_slider = $(".testimonial-thumbs-slider");
    const testi_content_slider = $(".testimonial-content-slider");
    const testi_content_slider_v2 = $(".testimonial-content-slider-v2");

    if (testi_content_slider.length) {
        testi_content_slider.on('changed.owl.carousel', function (event) {
            if (event.namespace && event.property.name === 'position') {
                var target = event.relatedTarget.relative(event.property.value, true);
                testi_thumb_slider.owlCarousel('to', target, 300, true);
            }
        });

        testi_content_slider.owlCarousel({
            startPosition: 0,
            center: !0,
            items: 1,
            nav: !0,
            loop: !0,
            dots: !1,
            autoplay: 1,
            //rtl: v,
            smartSpeed: 1e3,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            responsive: {
                0: {
                    nav: !1,
                },
                768: {
                    nav: !0,
                }
            }
        });
        testi_thumb_slider.owlCarousel({
            startPosition: 0,
            center: !0,
            items: 3,
            loop: !0,
            nav: !1,
            dots: !1,
            autoplay: !1,
            margin: 10,
            mouseDrag: !1,
            touchDrag: !1,
            pullDrag: !1,
            freeDrag: !1,
            //rtl: v,
            smartSpeed: 1e3,
            responsive: {

                0: {
                    items: 1
                },
                370: {
                    items: 3
                }
            }
        })
    }

    if (testi_content_slider_v2.length) {
        testi_content_slider_v2.owlCarousel({
            startPosition: 0,
            items: 1,
            nav: true,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            speed: 1000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            responsive: {
                0: {
                    nav: !1,
                },
                768: {
                    nav: !0,
                }
            }
        })
    }

    //  habro lightbox slider
    const lightbox_slider = $('#lightbox-slider');
    const lightbox_slider_thumbs = $('#lightbox-slider-thumbs');
    const slidesPerPage = 4; // global define number of elements per page
    let syncedSecondary = true;
    const slider_speed = 1200;
    const slider_thumbs_speed = 1000;

    function aq_lightbox_slider_options() {
        return {
            //rtl: aq_rtl,
            animateOut: 'fadeOut',
            stopOnHover: true,
            items: 1,
            margin: 0,
            nav: true,
            dots: false,
            loop: false,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            autoplay: false,
            smartSpeed: slider_speed,
            autoplaySpeed: slider_speed,
            responsiveRefreshRate: 200
        }
    }

    function aq_lightbox_thumbs_options() {
        return {
            //rtl: aq_rtl,
            margin: 5,
            items: 16,
            center: false,
            nav: true,
            dots: false,
            loop: false,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            autoplay: false,
            smartSpeed: slider_thumbs_speed,
            autoplaySpeed: slider_thumbs_speed,
            responsiveRefreshRate: 100,
            //autoHeight : true,
            responsive: {

                0: {
                    items: 4
                },
                480: {
                    items: 6
                },
                620: {
                    items: 7
                },
                767: {
                    items: 7
                },
                992: {
                    items: 9
                },
                1199: {
                    items: 12
                },
                1441: {
                    items: 16
                }
            }
        }
    }

    function aq_lightbox_slider() {

        let ttl_slides = lightbox_slider.find(".item").length;
        $(".ttl-slides").html(ttl_slides);

        lightbox_slider.on('initialized.owl.carousel', function (el) {
            let src = $(el.target).find(".owl-item").eq(0).find("img").attr('src');
            $(".view-original-image").attr("href", src);

        }).owlCarousel(aq_lightbox_slider_options()).on('changed.owl.carousel', syncPosition);

        lightbox_slider_thumbs.on('initialized.owl.carousel', function () {
            lightbox_slider_thumbs.find(".owl-item").eq(0).addClass("current")
        }).owlCarousel(aq_lightbox_thumbs_options()).on("click", ".owl-item", function (e) {
            e.preventDefault();
            let number = $(this).index();
            lightbox_slider.data('owl.carousel').to(number, slider_speed, true)
        });

        //.on('changed.owl.carousel', syncPosition2)*/

        function syncPosition(el) {

            //if you set loop to false, you have to restore this next line
            let current = el.item.index;

            lightbox_slider_thumbs.find(".owl-item").removeClass("current").eq(current).addClass("current");
            let onscreen = lightbox_slider_thumbs.find('.owl-item.active').length - 1;
            let start = lightbox_slider_thumbs.find('.owl-item.active').first().index();
            let end = lightbox_slider_thumbs.find('.owl-item.active').last().index();

            if (current > end) {
                lightbox_slider_thumbs.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                lightbox_slider_thumbs.data('owl.carousel').to(current - onscreen, 100, true);
            }

            let src = $(el.target).find(".owl-item").eq(current).find("img").attr('src');
            $(".view-original-image").attr("href", src);
            $(".slide-counter").html(current + 1)
        }
    }

    aq_lightbox_slider();

    // RANGE DATE PICKER -----
    const widgetDateRange = $('.aq-datepicker');

    widgetDateRange.aqDatePicker({

        // auto close after selection
        autoClose: true,
        // animation speed in milliseconds
        durationArrowTop: 200,
        // the number of calendars
        numCalendar: 2,
        // localization
        titleCheckIn: 'Check In',
        titleCheckOut: 'Check Out',
        titleToday: 'Today',
        titleDateRange: 'night',
        titleDateRanges: 'nights',
        titleDays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        titleMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', "December"],

        // the max length of the title
        titleMonthsLimitShow: 3,
        // replace moth names
        replaceTitleMonths: null,
        // e.g. 'dd-mm-yy'
        showDateTheme: 'dd-mm-yy',
        // icon options
        iconArrowTop: true,
        iconDate: '<i class="sli-calendar"></i>',
        arrowPrev: '<i class="sli-arrow-left"></i>',
        arrowNext: '<i class="sli-arrow-right"></i>',
        // https://fontawesome.com/v4.7.0/icons/
        // iconDate: '<i class="li-calendar-empty"></i><i class="li-arrow-right"></i>',
        // arrowPrev: '<i class="fa fa-chevron-left"></i>',
        // arrowNext: '<i class="fa fa-chevron-right"></i>',

        // shows today title
        toDayShowTitle: true,
        // shows range title
        dateRangesShowTitle: true,
        // highlights today
        toDayHighlighted: false,
        // highlights next day
        nextDayHighlighted: false,
        // an array of days
        daysOfWeekHighlighted: [0, 6],
        // custom date format
        formatDate: 'yyyy-mm-dd',

        // dateCheckIn: '25/06/2018',  // DD/MM/YY
        // dateCheckOut: '26/06/2018', // DD/MM/YY
        dateCheckIn: null,
        dateCheckOut: null,
        startDate: null,
        endDate: null,

        // limits the number of months
        limitPrevMonth: 0,
        limitNextMonth: 11,
        // limits the number of days
        limitDateRanges: 31,
        // true -> full days || false - 1 day
        showFullDateRanges: false,
        // DATA HOLIDAYS
        // Data holidays
        fnDataEvent: null

    });

    /*// START WIDGETS -----*/

    // BOOKING WIDGET -----
    const booking_extras_wrap = $('.booking-extras');
    const dropdown_head = $('.dropdown-head');
    const close_btn = $('.close-dropdown');

    dropdown_head.on('click', function () {
        $(this).toggleClass('active');
        dropdown_head.not($(this)).removeClass('active')
    });

    close_btn.on('click', function () {
        //alert('ok');
        $(this).parents('.form-group').find('.dropdown-head').click()
    });

    function head_toggle_class() {
        $(this).toggleClass('active')
    }

    // BOOKING SERVICES COUNTER -----
    const serviceInput = $('input.service-check');

    serviceInput.on('click', function () {

        let $this = $(this);

        const counter = $this.data('counter');

        if (typeof counter !== 'undefined' && $this.is(':checked')) {
            $(counter).addClass('active')
        } else {
            $(counter).removeClass('active')
        }

        const service_area = $("#servicesArea");

        const checked_length = service_area.find('input.service-check:checked').length;
        const parents = serviceInput.parents('.services-group-counter');
        parents.find('.dropdown-head .badge span').text(checked_length);
        parents.find('input.total-services').val(checked_length)
    });

    // BOOKING QUANTITY COUNTER AREA -----
    const qty_spinner_block = $('.qty-counter');
    qty_spinner_block.each(function () {
        const $this = $(this);
        const total_numbers = $this.find('input').val();
        const btn_minus = $this.find('.qty-btn-minus');
        if (total_numbers === 0 || total_numbers === '') {
            btn_add_disable(btn_minus)
        }
    });

    // quantity trigger
    const qty_btn = $('.qty-btn');
    qty_btn.on('click', function (e) {
        e.preventDefault();
        const $this = $(this);
        // get total numbers
        qty_inner_total($this);
        if ($this.parents().has('.group-counter')) {
            qty_grand_total($this)
        }
    });

    // COUNTER function to get total numbers  -----
    function qty_inner_total($this) {
        const parents = $this.parents('.qty-counter');

        // find elements
        const btn_plus = parents.find('.qty-btn-plus');
        const btn_minus = parents.find('.qty-btn-minus');

        const qty_input = parents.find('input');
        const qty_text = parents.find('.qty');

        // total numbers
        let total_numbers = qty_input.val();

        if ($this.hasClass('qty-btn-plus')) {
            total_numbers++;
            btn_remove_disable(btn_minus)
        } else {
            total_numbers--
        }

        if (total_numbers === 0) {
            btn_add_disable(btn_minus)
        }

        // add numbers to there relevant places
        qty_input.val(total_numbers);
        qty_text.text(total_numbers)
    }

    // get grant total
    function qty_grand_total($this = null) {
        let head_wrap;

        if ($this) {
            head_wrap = $($this).parents('.group-counter');
            const qty_elements = head_wrap.find('.qty');
            let total = 0;
            qty_elements.each(function () {
                total += Number($(this).text())
            });
            return head_wrap.find('.dropdown-head .badge span').text(total)
        }

        head_wrap = $('.group-counter');

        head_wrap.each(function () {
            let total = 0;
            const qty_elements = $(this).find('.qty');
            qty_elements.each(function () {
                total += Number($(this).text())
            });
            $(this).find('.dropdown-head .badge span').text(total)
        })

    }

    // get grand total on page load
    qty_grand_total();

    function btn_add_disable($this) {
        $this.attr('disabled', true)
    }

    function btn_remove_disable($this) {
        $this.attr('disabled', false)
    }

    // WIDGET SLIDER -----
    const widget_slider = $(".aq-widget-slider");
    if (widget_slider.length > 0) {
        widget_slider.owlCarousel({
            dots: true,
            items: 1,
            smartSpeed: 700,
            slideBy: 1,
            nav: false,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
        })
    }


    //  grid layer function
    const grid_element = $(".card-layer");
    grid_element.on({
        mouseenter: function () {
            let this_ele = $(this);
            let bottom_padding = this_ele.find(".layer-bottom").innerHeight();
            this_ele.find(".layer-top").css("padding-bottom", bottom_padding)
        },
        mouseleave: function () {
            let this_ele = $(this);
            this_ele.find(".layer-top").css("padding-bottom", "")
        }
    });


    //  mortgage calculator show results
    $('.show-summary').on('click', function () {
        let $this = $(this);
        $this.parents('.summary').toggleClass('active')
    });

    // form validation and ajax submission
    const contact_form = $('#contact-form');
    contact_form.validate({
        errorPlacement: function (error, element) {
        }
    });

    const submit_btn = $(".btn-submit");
    let btn_html = submit_btn.html();
    let btn_text = submit_btn.text();

    contact_form.submit(function (event) {
        if (contact_form.valid()) {
            submit_form()
        }
        event.preventDefault()
    });

    function submit_form() {
        const form_alert = $(".form-alert");
        form_alert.hide();
        submit_btn.html(btn_text + '<i class="fa fa-spin fa-spinner ms-2"></i>');
        $.ajax({
            type: "POST",
            url: "process.php",
            data: contact_form.serialize(),
            dataType: 'json',
            success: function (response) {
                if (response.success) {
                    form_alert.html(response.success);
                    form_alert.slideDown(200);
                    submit_btn.html(btn_html).addClass("disabled").attr("disabled", "disabled");
                } else {
                    form_alert.html(response.error);
                    form_alert.slideDown(200);
                    submit_btn.html(btn_html);
                }
            }
        })
    }

})(jQuery);
