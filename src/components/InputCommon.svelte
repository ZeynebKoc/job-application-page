<script>
    export let label;
    export let type;
    export let name;
    export let placeholder;
    export let required;
    export let pattern;
    export let value;
</script>

<div class="inputCommon">
    {label}
    <input {type} {name} {placeholder} {required} {pattern} {value} />
</div>

<style>
    .inputCommon {
        margin: 0 0 1.875rem;
    }

    input[type="text"],
    input[type="email"],
    input[type="number"],
    input[type="tel"] {
        width: 100%;
        border: 1px solid #ccc;
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        margin: 0;
        color: #666;
        height: 2.25rem;
        padding: 1.1em 0.5em;
    }

    input[type="tel"] {
        border: 1px solid rgb(106, 106, 106);
        border-radius: 3px;
        width: 27%;
        height: 0.5em;
        padding: 0.96em 0.5em;
    }
</style>
