<template>
<div class="container">
    <section class="row">
        <h1>Account Setting</h1>
    </section>

    <section class="row" data-section="profile-img">
        <div class="setting--profile-img" @click="uploadTrigger">
            <!-- Profile Image DOM -->
            <img v-if="!newProfileSrc && hasProfileSrc" :src="userProfileSrc">
            <img v-else-if="!newProfileSrc && !hasProfileSrc" :src="userProfileSrc">
            <img v-else="newProfileSrc" :src="newProfileSrc">
            <!-- /Profile Image DOM -->
            <div class="setting--profile-img overlay">
                Change
            </div>
        </div>
        <b-form-file
            class="file-upload--profile"
            ref="fileinput"
            accept="image/jpeg, image/png"
            v-model="newProfile"
            @input="onChangedFile"
        >
        </b-form-file>
    </section>

    <section class="row" data-section="info">
        <b-form-group label="Email">
            <b-form-input
                name="Email"
                type="email"
                :value="user.email"
                disabled
                readonly
            ></b-form-input>
        </b-form-group>
        <b-form-group label="Name">
            <b-form-input
                name="name"
                type="text"
                v-model="newUsername"
            ></b-form-input>
        </b-form-group>
    </section>

    <section class="row" data-section="control">
        <b-button @click="postData">Save</b-button>
    </section>
</div>
</template>

<style lang="scss">
    @import './UserSetting';
</style>

<script lang="ts">
import UserSetting from './UserSetting';
export default UserSetting;
</script>
