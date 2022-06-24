<script>
    let srcLogo = "../src/assets/altima-logo.png";

    let navOpen = false;
    let subNavOpenArrow = true;
    let subNavOpenBlue = true;

    const handleNav = () => {
        navOpen = !navOpen;
        subNavOpenBlue = true;
    };
    const handleSubNavOpenArrow = () => {
        subNavOpenArrow = !subNavOpenArrow;
        navOpen = false;
        subNavOpenBlue = true;
    };
    const handleSubNavOpenBlue = () => {
        subNavOpenBlue = !subNavOpenBlue;
    };
</script>

<main>
    <div class="header-top">
        <img
            src={srcLogo}
            id="srcLogo"
            class="srcLogo"
            alt="Altima Logo"
            title="Altima Logo"
        />
        <button class="open-nav-btn" on:click={handleNav}>
            <i class="fa fa-bars" />
        </button>
    </div>

    <navbar class:open={navOpen}>
        <ul>
            <li>
                <a href="#/hakkimizda">Hakkımızda</a>
            </li>
            <li>
                <a class="faaliyetlerimiz" href="#/">Faaliyetlerimiz</a>
            </li>
            <li>
                <a href="#/urunler">Ürünler</a>
            </li>
            <li>
                <a href="#/referenslar">Referanslar</a>
            </li>
            <li>
                <a class="uzmanliklarimiz" href="#/uzmanliklarimiz"
                    >Uzmanlıklarımız</a
                >
            </li>
            <li>
                <a class="kariyer" href="#/kariyer"
                    >Kariyer
                    <button on:click={() => handleSubNavOpenArrow()}>
                        {#if subNavOpenArrow}
                            <i id="arrow-angle-down" class="fa fa-angle-down" />
                        {:else}
                            <i id="arrow-angle-up" class="fa fa-angle-up" />
                        {/if}
                    </button>

                    <button
                        class="dropbtn"
                        on:click={() => {
                            handleSubNavOpenBlue();
                        }}
                    >
                        {#if subNavOpenBlue}
                            <i id="blue-angle-down" class="fa fa-angle-down" />
                        {:else}
                            <i id="blue-angle-up" class="fa fa-angle-up" />
                        {/if}
                    </button>
                </a>

                <ul class:dropdown={subNavOpenBlue}>
                    <li>
                        <a href="#/kariyer"
                            >Front-end ve Full-stack Developer İş Başvuruları</a
                        >
                    </li>
                    <li>
                        <a href="#/kariyer"
                            >Satış/Pazarlama Temsilcisi ve Destek İş Başvuruları</a
                        >
                    </li>
                    <li>
                        <a href="#/stajBasvurulari" on:click={() => handleNav()}
                            >Staj Başvuruları
                        </a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#/iletisim">İletişim</a>
            </li>
        </ul>
    </navbar>
</main>

<style>
    * {
        list-style-type: none;
        text-decoration: none;
        color: #4c5867;
    }
    main {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        font-size: 0.875rem;
        font-weight: bold;
        background: #fff;
        padding: 0 5.2em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 1px 1px rgb(217, 217, 217);
        height: 116px !important;
        z-index: 20;
    }
    navbar > ul > li {
        display: inline-block;
        padding: 1.5em 0 1.5em 2em;
    }
    navbar > ul > li > a {
        cursor: pointer;
        color: #4c5867;
    }
    a:hover {
        color: #cc0000;
    }

    /* dropdown list */

    .open-nav-btn {
        display: none;
    }
    .dropbtn {
        display: none;
    }
    #arrow-angle-down,
    #arrow-angle-up {
        color: #4c5867;
    }
    #arrow-angle-down:hover,
    #arrow-angle-up:hover {
        color: #cc0000;
    }
    #blue-angle-down,
    #blue-angle-up {
        display: none;
    }
    button {
        background-color: transparent;
    }
    navbar ul .dropdown {
        position: absolute;
        background-color: #fff;
        z-index: 2;
        top: 6em;
        width: 14em;
        height: 17em;
        text-align: left;
        margin-left: -5em;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        display: none;
    }
    navbar ul ul li a {
        display: block;
        padding: 1em;
    }
    navbar > ul > li:hover > a + .dropdown {
        display: block;
    }

    /* openable-navbar for responsible*/
    @media (max-width: 1200px) {
        main {
            padding-left: 2%;
            padding-right: 2%;
            display: block;
            height: fit-content !important;
        }
        .header-top {
            display: flex !important;
            justify-content: space-between !important;
            align-content: center !important;
            margin: 1.4em;
        }
        .open-nav-btn {
            background-color: transparent;
            display: block;
        }
        .dropbtn {
            background-color: transparent;
            display: block;
        }
        .fa-bars {
            transform: scale(1.5);
        }

        /* navbar */
        navbar {
            display: flex;
            flex-direction: column;
            padding: 1.5em 0;
            display: none;
        }
        navbar > ul > li {
            display: flex !important;
            flex-direction: column !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            padding: 0 1.1em !important;
        }
        .open {
            display: block;
        }
        a {
            line-height: 2.625rem;
        }
        .kariyer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        #arrow-angle-down,
        #arrow-angle-up {
            display: none;
        }
        #blue-angle-down,
        #blue-angle-up {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #30afb8;
            color: white !important;
            height: 1.4em;
            width: 1.4em;
        }

        /* openable-navbar dropdown list */
        navbar ul .dropdown {
            height: fit-content;
        }
        navbar ul ul li {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        navbar ul ul li:last-child {
            border-bottom: none;
        }
        navbar ul ul li a {
            padding: 0 1.1em !important;
        }
        navbar > ul > li:hover > a + .dropdown {
            display: none;
        }
    }
</style>
