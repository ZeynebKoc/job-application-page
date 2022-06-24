<script>
    export let label;
    export let value;
    export let buttonStyles = "default";
</script>

<div class="inputButton">
    <input type="submit" {value} on:click class={buttonStyles} />
    {label}
</div>

<style>
    .inputButton {
        margin: 0 0 1.875rem;
    }
    .default {
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        font-size: 1em;
        border: 1px solid rgb(86, 86, 86);
        border-radius: 3px;
        margin: 0;
        color: rgb(0, 0, 0);
        padding: 0 0.35em;
    }
    .yellowButton {
        background-color: #ffa500;
        color: #fff;
        font-weight: bold;
        font-size: 1em;
        line-height: 1em;
        cursor: pointer;
        text-shadow: none;
        padding: 10px 15px;
        border: none;
    }
</style>
