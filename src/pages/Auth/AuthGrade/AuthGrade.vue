<template>
<div class="auth-form container">
    <section class="row" data-section="message">
        <h2 class="col-12">
            Now, it's the last step for more activities
        </h2>
        <p class="col-12">
            You need to authenticate your email address for further activity.<br>
            Please check your email!
        </p>
    </section>
    <section class="row" data-section="time">
        <p v-if="!isExpired" class="col-12">
            {{ computedLeftTime.minutes() }} min {{ computedLeftTime.seconds() }} sec left
        </p>
        <p v-else="isExpired">
            Expired
        </p>
    </section>
    <section class="row" data-section="control">
        <div class="col-6" @click="sendEmailAgain">
            <button class="btn">Send email again</button>
        </div>
        <div class="col-6">
            <router-link :to="{ name: 'home' }">
                <button class="btn">Later</button>
            </router-link>
        </div>
    </section>
</div>
</template>

<style lang="scss">
    @import './AuthGrade';
</style>

<script>
    import AuthGrade from './AuthGrade';
    export default AuthGrade;
</script>
