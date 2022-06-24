<script>
    //page up
    export let buttonVisibleOnPX = 200;
    let hidden = true;

    const goStart = () => {
        document.body.scrollIntoView();
        window.scrollTo(0, 0);
    };

    const scrollElement = () => {
        return document.documentElement || document.body;
    };

    const handleOnScroll = () => {
        if (scrollElement().scrollTop > buttonVisibleOnPX) {
            hidden = false;
        } else {
            hidden = true;
        }
    };
</script>

<main>
    <div class="footer-top">
        <button class="back_to_start" on:click={goStart} class:hidden
            ><i class="fa fa-angle-up" /></button
        >
        <div class="content-footer-top">
            <p>© Altima Sistem ve Yazılım Teknolojileri</p>
        </div>
    </div>

    <div class="footer-bottom">
        <p class="content-footer-bottom">
            © 2022 Tüm hakları saklıdır
            <a href="https://altima.com.tr/" target="_blank"
                >Altima Sistem ve Yazılım Teknolojileri</a
            >
            All rights reserved. Theme:
            <a href="https://themegrill.com/themes/flash/" target="_blank"
                >Flash</a
            >
            by ThemeGrill. Powered by
            <a href="https://wordpress.org/" target="_blank">WordPress</a>
        </p>
    </div>
</main>
<svelte:window on:scroll={handleOnScroll} />

<style>
    main {
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        font-size: 0.935em;
        display: flex;
        flex-direction: column;
        color: #fff;
        background-color: #313b48;
    }
    @media (max-width: 1200px) {
        .content-footer-bottom,
        .content-footer-top {
            padding-left: 2%;
            padding-right: 2%;
        }
    }
    .content-footer-top {
        display: flex;
        padding: 3.72em 5em;
    }
    button {
        position: fixed;
        bottom: 1.3em;
        right: 1.3em;
        background-color: #dd3333;
        color: #fff;
        border-radius: 3px;
        padding: 0.7em 1.2em;
        z-index: 5;
        opacity: 0.5;
    }
    .fa {
        color: #fff;
        font-size: larger;
    }
    /* page up button visibility */
    .back_to_start {
        opacity: 1;
        transition: opacity 0.5s, visibility 0.5s;
    }
    .back_to_start.hidden {
        opacity: 0;
        visibility: hidden;
    }
    .footer-bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.74em 0.1em;
        background-color: #28313d;
    }
    .footer-bottom > p {
        color: #fff;
        font-size: 0.8em;
        text-align: center;
    }
    .footer-bottom > p > a {
        color: #bcbaba;
        text-decoration: none;
    }
    .footer-bottom > p > a:hover {
        color: #dd3333;
    }
</style>
