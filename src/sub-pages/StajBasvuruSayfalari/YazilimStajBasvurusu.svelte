<script>
    import TitlePage from "../../components/TitlePage.svelte";
    import InputCommon from "../../components/InputCommon.svelte";
    import InputCheckbox from "../../components/InputCheckbox.svelte";
    import InputButton from "../../components/InputButton.svelte";
    import InputSelect from "../../components/InputSelect.svelte";
    import InputTextarea from "../../components/InputTextarea.svelte";

    let confirmationcd = false;
    let year1;
    let year2;
    let yazKisaSureli;
    let uzunDonem;
    let diger;
    let selected;

    // checkbox
    const handleChangeYear = (e) => {
        if (e.target.id === "year1") {
            year1 = true;
            year2 = false;
        } else if (e.target.id === "year2") {
            year1 = false;
            year2 = true;
        }
    };

    const handleChangeRole = (e) => {
        if (e.target.id === "yazKisaSureli") {
            yazKisaSureli = true;
            uzunDonem = false;
            diger = false;
        } else if (e.target.id === "uzunDonem") {
            yazKisaSureli = false;
            uzunDonem = true;
            diger = false;
        } else if (e.target.id === "diger") {
            yazKisaSureli = false;
            uzunDonem = false;
            diger = true;
        }
    };
</script>

<main>
    <TitlePage name="Yazılım Staj Başvurusu" />
    <div class="container">
        <p class="update-time">Son güncelleme: 05.05.2022</p>
        <p>Merhabalar Arkadaşlar,</p>
        <p>
            Web tabanlı SaaS uygulamaları ve iş otomasyon yazılım projelerimiz
            için staj başvurularınızı değerlendirebiliriz. Ancak ne yazık ki tüm
            staj başvurularına yanıt dönemiyoruz. Anlayışınız için şimdiden
            teşekkürler…
        </p>
        <p>
            Aşağıdakilerin sizi de tanımladığını düşünüyorsanız lütfen alttaki
            form ile staj başvurunuzu iletin. Ne yazık ki tüm staj başvurularına
            yanıt dönemiyoruz. Anlayışınız için şimdiden teşekkürler…İsterseniz
            bu sayfayı ilgileneceğini düşündüğünüz arkadaşlarınızla da
            paylaşabilirsiniz.
        </p>
        <ul>
            <li>Javascript, VueJS, PHP, SQL, vb. bilgisi olan,</li>
            <li>Öğrenmeye ve bir iş ortaya çıkarmaya istekli,</li>
            <li>İşini iyi yapmayı önemseyen,</li>
            <li>Sorumluluk duygusu yüksek,</li>
            <li>Takım oyuncusu olmaya istekli</li>
        </ul>
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
        <h3>Staj Başvuru Formu</h3>
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
        <div>
            * Hangi staj türü için başvuruyorsunuz?
            <InputCheckbox
                on:change={handleChangeRole}
                label1="Yaz/Kısa Süreli"
                name="role1"
                required
                label2=""
                checked={yazKisaSureli}
                id="yazKisaSureli"
            />

            <InputCheckbox
                on:change={handleChangeRole}
                label1="Uzun Dönem"
                name="role1"
                required
                label2=""
                checked={uzunDonem}
                id="uzunDonem"
            />

            <InputCheckbox
                on:change={handleChangeRole}
                label1="Diğer"
                name="role1"
                required
                label2=""
                checked={diger}
                id="diger"
            />
        </div>
        <InputSelect
            {selected}
            name
            options={[
                { text: "Lütfen üniversite bölümünüzü seçin *" },
                { text: "Bilgisayar Müh" },
                { text: "Bilişim Teknolojileri" },
                { text: "Elektrik-Elektronik Müh." },
                { text: "Elektronik ve Haberleşme Müh." },
                { text: "Enformatik" },
                { text: "Yazılım Müh." },
                { text: "Bilgisayar Programcılığı" },
                { text: "Matematik" },
            ]}
        />
        <div>
            * Kaçıncı sınıf stajı için başvuruyorsunuz?
            <InputCheckbox
                on:change={handleChangeYear}
                label1="3"
                name="year1"
                required
                label2=""
                checked={year1}
                id="year1"
            />
            <InputCheckbox
                on:change={handleChangeYear}
                label1="4"
                name="year2"
                required
                label2=""
                checked={year2}
                id="year2"
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
