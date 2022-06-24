<script>
    import TitlePage from "../../components/TitlePage.svelte";
    import InputCommon from "../../components/InputCommon.svelte";
    import InputCheckbox from "../../components/InputCheckbox.svelte";
    import InputButton from "../../components/InputButton.svelte";
    import InputTextarea from "../../components/InputTextarea.svelte";

    let confirmationcd = false;
    let mezunum;
    let year3;
    let year4;

    // checkbox
    const handleChangeClass = (e) => {
        if (e.target.id === "mezunum") {
            mezunum = true;
            year3 = false;
            year4 = false;
        } else if (e.target.id === "year3") {
            mezunum = false;
            year3 = true;
            year4 = false;
        } else if (e.target.id === "year4") {
            mezunum = false;
            year3 = false;
            year4 = true;
        }
    };
</script>

<main>
    <TitlePage name="Satış Temsilciliği ve Pazarlama Stajı Başvurusu" />
    <div class="container">
        <p class="update-time">Son güncelleme: 01.11.2021</p>
        <p>Merhabalar Arkadaşlar,</p>
        <p>
            <a href="https://ananokta.com/" target="_blank"
                >Ananokta Online Randevu Sistemimizin</a
            >

            Telesatış ve Pazarlama Çalışmaları için Ankara ofisimize stajyer
            aramaktayız.
        </p>
        <p>
            Aşağıdakilerin sizi de tanımladığını düşünüyorsanız lütfen alttaki
            form ile staj başvurunuzu iletin. İsterseniz bu sayfayı
            ilgileneceğini düşündüğünüz arkadaşlarınızla da paylaşabilirsiniz.
        </p>
        <ul>
            <li>
                Hedef kitlemizi ziyaret ederek, telefon ile veya online görüşme
                sağlayıp yazılım satışı yapabilecek,
            </li>
            <li>
                Sosyal medya hesaplarımızı takip ederek etkileşimde bulunacak ve
                gönderiler hazırlayacak,
            </li>
            <li>
                Müşteriden e-posta ve telefon ile gelebilecek taleplere çözüm
                sunabilecek veya ilgili birime yönlendirecek,
            </li>
            <li>İşini iyi yapmayı önemseyen,</li>
            <li>Takım oyuncusu olmaya istekli ekip arkadaşı arıyoruz.</li>
        </ul>
        <h4>
            <strong> Genel Nitelikler: </strong>
        </h4>
        <ul>
            <li>Ankara ODTÜ Teknokent’e ulaşım sorunu olmayan,</li>
            <li>
                İnsanlarla iletişim becerisine ve satış konusunda kendine
                güvenen,
            </li>
            <li>Tercihen telefonda satış ve pazarlama konusunda deneyimli,</li>
            <li>Üniversite 3./4. sınıf öğrencisi veya mezunu</li>
        </ul>
        <p>
            Ne yazık ki tüm staj başvurularına yanıt dönemiyoruz. Anlayışınız
            için şimdiden teşekkürler…
        </p>
        <p>Sağlıklı güzel günler dileriz.</p>
        <div class="line-separator" />
    </div>
    <!-- form -->
    <form class="form" on:submit|preventDefault>
        <InputCheckbox
            name="confirmation"
            label1=""
            label2="Staj başvurusu ile ilgili yukarıdaki açıklamaları okudum."
            required
            checked={confirmationcd}
            id="confirmation"
        />
        <h3>Satış/Pazarlama Stajı Başvuru Formu</h3>
        <InputCommon
            label=""
            type="text"
            name="name"
            placeholder="Adınız Soyadınız*"
            required
            pattern
            value=""
        />
        <InputCommon
            label=""
            type="email"
            name="email"
            placeholder="E-posta Adresiniz*"
            required
            pattern
            value=""
        />
        <InputCommon
            label=""
            type="tel"
            name="phone"
            placeholder="Cep Telefonunuz*"
            required
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            value=""
        />
        <InputCommon
            label=""
            type="text"
            name="name"
            placeholder="Üniversiteniz ve bölümünüz*"
            required
            pattern
            value=""
        />
        <div>
            * Öğrenciyseniz kaçıncı sınıftasınız?
            <InputCheckbox
                on:change={handleChangeClass}
                label1="Mezunum"
                name="year1"
                required
                label2=""
                checked={mezunum}
                id="mezunum"
            />
            <InputCheckbox
                on:change={handleChangeClass}
                label1="3"
                name="year3"
                required
                label2=""
                checked={year3}
                id="year3"
            />
            <InputCheckbox
                on:change={handleChangeClass}
                label1="4"
                name="year4"
                required
                label2=""
                checked={year4}
                id="year4"
            />
        </div>
        <InputButton value="Dosya Seç" label="Dosya seçilmedi" />
        <InputTextarea
            label="Varsa diğer iletmek istedikleriniz:"
            name="story"
            rows="7"
            cols
            value=""
            minlength
            maxlength="1000"
            idArea="text-area-value"
            idRemainingCharacter="text-area-counter"
        />
        <InputCommon
            label="Ben robot değilim... Ankara'nın plaka kodu kaçtır?"
            type="number"
            name="robot"
            placeholder=""
            required
            pattern
            value=""
        />
        <InputButton value="Gönder" label="" buttonStyles="yellowButton" />
    </form>
    <!-- </form> -->
</main>

<style>
    main {
        margin-top: 116px;
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        color: #001460;
        display: flex;
        flex-direction: column;
        font-size: 0.88rem;
    }
    .container {
        display: flex;
        flex-direction: column;
        margin: 2em 5.28em;
    }
    @media (max-width: 1200px) {
        .container,
        .form {
            margin-left: 2%;
            margin-right: 2%;
        }
    }
    .update-time {
        font-style: italic;
    }
    p {
        margin-bottom: 1.15em;
    }
    ul {
        margin-left: 1.35em;
        margin-top: 0.9em;
    }
    h4 {
        margin-top: 2.5em;
    }
    a {
        color: #dd3333;
        text-decoration: none;
    }
    .line-separator {
        background-color: #ff6900;
        height: 2px;
        position: relative;
        top: 0.9em;
    }
    /* form */
    form {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin: 0 5.2em;
    }
    h3 {
        font-size: 1.5625rem;
        margin: 0 0 1.78rem;
    }
</style>
