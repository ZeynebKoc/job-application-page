<script>
    // @ts-nocheck
    export let label;
    export let name;
    export let rows;
    export let cols;
    export let value;
    export let maxlength;
    export let minlength;
    export let idArea;
    export let idRemainingCharacter;

    const TextAreaRemainingCharacters = () => {
        var remainingCharacter =
            maxlength - document.getElementById("text-area-value").value.length;
        if (remainingCharacter >= 0) {
            document.getElementById("text-area-counter").innerHTML =
                remainingCharacter;
        } else {
            document.getElementById("text-area-value").value = document
                .getElementById("text-area-value")
                .value.substring(0, maxlength);
            document.getElementById("text-area-counter").innerHTML = 0;
        }
    };
</script>

<main>
    {label}
    <div class="inputTextarea">
        <textarea
            {name}
            {rows}
            {cols}
            {value}
            {maxlength}
            {minlength}
            id={idArea}
            on:keyup={TextAreaRemainingCharacters}
        />
        <span id={idRemainingCharacter}>{maxlength}</span>
    </div>
</main>

<style>
    .inputTextarea {
        margin: 0 0 1.875rem;
        box-sizing: border-box;
    }
    textarea {
        width: 100%;
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        font-size: 1em;
        color: #001460;
        border: 1px solid #ccc;
        margin: 0;
    }
</style>
