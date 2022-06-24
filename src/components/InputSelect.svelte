<script>
    export let options = [];
    export let name;
    export let selected;
</script>

<div class="inputSelect">
    <select {name} bind:value={selected}>
        {#each options as option, selected}
            <option value={selected}>
                {option.text}
            </option>
        {/each}
    </select>
</div>

<style>
    .inputSelect {
        margin: 0 0 1.875rem;
    }
    select {
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        width: 30%;
        padding: 0.11em 0.18em;
        font-size: 1em;
        color: #001460;
    }
    option {
        color: #001460;
    }
</style>
