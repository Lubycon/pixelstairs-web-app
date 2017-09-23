<template>
<div class="container">
    <section class="row">
        <h1>Manage your Account</h1>
    </section>

    <section class="row" data-section="profile-img">
        <div class="setting--profile-img" >
            <!-- Profile Image DOM -->
            <img v-if="!croppedNewProfileRaw && hasProfileSrc" :src="myProfileSrc">
            <img v-else-if="!croppedNewProfileRaw && !hasProfileSrc" :src="myProfileSrc">
            <img v-else="croppedNewProfileRaw" :src="croppedNewProfileRaw">
            <!-- /Profile Image DOM -->
            <button class="setting--change-btn icon-btn" @click="uploadTrigger">
                <i class="pxs-pen"></i>
            </button>
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
        <b-form-group label="Email" class="col-12">
            <b-form-input
                name="Email"
                type="email"
                :value="me.email"
                disabled
                readonly
            ></b-form-input>
        </b-form-group>
        <b-form-group label="Name" class="col-12">
            <b-form-input
                name="name"
                type="text"
                v-model="newUsername"
            ></b-form-input>
        </b-form-group>
    </section>

    <section class="row" data-section="control">
        <div class="col-12">
            <b-button @click="postData">Save</b-button>
        </div>
    </section>

    <!-- MODAL -->
    <image-crop-modal ref="cropModal" :image="newProfileRaw" @cropped="setThumbnail" />
    <!-- /MODAL -->
</div>
</template>

<style lang="scss">
    @import './UserSetting';
</style>

<script>
import UserSetting from './UserSetting';
export default UserSetting;
</script>
