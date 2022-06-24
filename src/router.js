// @ts-nocheck

import StajBasvurulari from "./sub-pages/StajBasvuruSayfalari/StajBasvurulari.svelte";
import YazilimStajBasvurusu from "./sub-pages/StajBasvuruSayfalari/YazilimStajBasvurusu.svelte";
import StVePStajBasvurusu from "./sub-pages/StajBasvuruSayfalari/StVePStajBasvurusu.svelte";
import YazilimStajBasvurulariTablosu from "./sub-pages/StajBasvuruAdayTablolari/YazilimStajBasvurulariTablosu.svelte";
import StVePStajBasvurulariTablosu from "./sub-pages/StajBasvuruAdayTablolari/StVePStajBasvurulariTablosu.svelte";

export const routes = {
    "/kariyer": StajBasvurulari,
    "/": StajBasvurulari,
    "/yazilimStajBasvurusu": YazilimStajBasvurusu,
    "/stVePStajBasvurusu": StVePStajBasvurusu,
    "/yazilimstajBasvurulariTablosu": YazilimStajBasvurulariTablosu,
    "/stvepstajbasvurularitablosu": StVePStajBasvurulariTablosu,

    "*": StajBasvurulari,
};
