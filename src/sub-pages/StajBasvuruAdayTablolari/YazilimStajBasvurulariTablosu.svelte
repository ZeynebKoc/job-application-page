<script>
    import TitlePage from "../../components/TitlePage.svelte";
    import InputTextarea from "../../components/InputTextarea.svelte";
    import {
        DataTable,
        Toolbar,
        ToolbarContent,
        ToolbarSearch,
        Button,
        Pagination,
    } from "carbon-components-svelte";
    import { onMount } from "svelte";

    onMount(() => fetchPerson());

    let person;
    let rows;

    const fetchPerson = async () => {
        person = await fetch("../../src/yazilim-staji-basvurulari.json").then(
            (response) => response.json()
        );
        console.log("+++", person);
        rows = person;
    };

    const headers = [
        { key: "name", value: "Ad-Soyad" },
        { key: "email", value: "E-mail" },
        { key: "tel", value: "Telefon" },
        { key: "stajTuru", value: "Staj Türü" },
        { key: "universiteBolumu", value: "Üniversite Bölümü" },
        { key: "universiteYili", value: "Üniversite Yılı" },
        { key: "ozGecmis", value: "Öz Geçmiş" },
        { key: "ekAciklamalar", value: "Ek Açıklamalar" },
    ];
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://unpkg.com/carbon-components-svelte/css/white.css"
    />
</svelte:head>;

<main>
    <TitlePage name="Yazılım Stajı Başvuruları Tablosu" />
    <DataTable sortable expandable zebra title="" {rows} {headers}>
        <Toolbar>
            <ToolbarContent>
                <ToolbarSearch
                    persistent
                    value=""
                    shouldFilterRows={(row, value) => {
                        return (
                            /(6|8)$/.test(row.name) &&
                            row.rule.toLowerCase().includes(value)
                        );
                    }}
                />
            </ToolbarContent>
        </Toolbar>

        <svelte:fragment slot="expanded-row">
            <InputTextarea
                label="Aday hakkında yorumlar:"
                name="story"
                rows="7"
                cols
                value=""
                minlength
                maxlength="1000"
                idArea="text-area-value"
                idRemainingCharacter="text-area-counter"
            />
            <div class="button">
                <Button>Kaydet</Button>
            </div>
        </svelte:fragment>
    </DataTable>
    <Pagination totalItems={100} pageSizes={[10, 20, 30]} />
</main>

<style>
    main {
        margin-top: 103px;
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        color: #001460;
        font-size: 0.88rem;
    }
    .button {
        position: relative;
        bottom: 1em;
        left: 81em;
    }
</style>
