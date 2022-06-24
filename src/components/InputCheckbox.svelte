<script>
    export let label1;
    export let label2;
    export let name;
    export let required;
    export let id;
    export let checked;
</script>

<div class="inputCheckbox">
    {label1}
    <input type="checkbox" {name} {required} {id} {checked} on:change />
    {label2}
</div>

<style>
    .inputCheckbox {
        margin: 0 0 1.875rem;
        display: inline-block;
        padding-left: 0.25rem;
    }
</style>
