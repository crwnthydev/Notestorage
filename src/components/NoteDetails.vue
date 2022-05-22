<template>
    <div class="note-details">
        <div class="note-details__content">
            <div class="note-details__row">
                <h1 class="note-details__title">{{$route.params.title}}</h1>
                <span class="note-details__identificator">ID: {{$route.params.id}}</span>
            </div>
            <p class="note-details__body">{{$route.params.body}}</p>
        </div>
    </div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
@import "@/style/components/note-details.scss"
</style>
