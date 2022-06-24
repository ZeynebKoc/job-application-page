<script>
    import TitlePage from "../../components/TitlePage.svelte";
</script>

<main>
    <TitlePage name="Staj Başvuruları" />
    <div class="container">
        <p class="update-time">Son güncelleme: 05.05.2022</p>
        <p>Merhabalar Arkadaşlar,</p>
        <p>
            Yazılım projelerimiz ve satış/pazarlama çalışmalarımız için staj
            başvurularınızı değerlendirebiliriz. Ancak ne yazık ki tüm staj
            başvurularına yanıt dönemiyoruz. Anlayışınız için şimdiden
            teşekkürler…
        </p>
        <p>İlgilendiğiniz başlığa tıklayarak detayları inceleyebilirsiniz.</p>
        <p>Sağlıklı güzel günler dileriz.</p>

        <h2>
            <a href="#/yazilimStajBasvurusu"
                >Web Tabanlı Uygulamalar için Yazılım Staj Başvurusu</a
            >
            <a class="interns-link" href="#/yazilimstajBasvurulariTablosu">
                -- Yazılım Stajı Başvuruları</a
            >
        </h2>
        <h2>
            <a href="#/stVePStajBasvurusu"
                >Satış Temsilciliği ve Pazarlama Stajyeri Başvurusu</a
            >
            <a class="interns-link" href="#/stvepstajbasvurularitablosu">
                -- Satış Temsilciliği ve Pazarlama Stajı Başvuruları</a
            >
        </h2>

        <div class="line-separator" />
    </div>
</main>

<style>
    main {
        margin-top: 116px;
        font-family: Montserrat, sans-serif !important;
        font-weight: 400;
        line-height: 1.5;
        color: #001460;
        display: flex;
        flex-direction: column;
        font-size: 0.88rem;
    }

    .container {
        margin: 2em 5.28em;
        display: flex;
        flex-direction: column;
    }
    @media (max-width: 1200px) {
        main {
            margin-top: 116px;
        }
        .container {
            margin-left: 2%;
            margin-right: 2%;
        }
    }
    .update-time {
        font-style: italic;
    }
    .interns-link {
        font-size: 0.6em;
    }
    h2 {
        font-size: 2.07em;
        margin-top: 0.4em;
    }
    a {
        color: #dd3333;
        list-style-type: none;
        text-decoration: none;
    }
    p {
        margin-bottom: 1.15em;
    }
    .line-separator {
        background-color: #ff6900;
        height: 2px;
        position: relative;
        top: 0.5em;
    }
</style>
