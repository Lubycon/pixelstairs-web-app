<template>
<div class="container-fluid">
    <div class="jumbotron">
        <div>
            <img :src="logo" alt="pixelstairs-logo">
            <h1>Connect your Creativity with the World</h1>
            <p>
                The <strong>Pixelstairs</strong> is dedicated to providing better opportunities<br>
                for their works and another inspired interaction with every artist in the world.
            </p>

            <b-button class="btn-border" @click="gotoScroll('intro')">READ MORE</b-button>
        </div>
    </div>
    <div class="container">
        <section ref="intro" data-section="intro">
            <div data-name="title">
                <h1>Hello, Creators!</h1>
                <h4>
                    " Massa porta rhoncus lectus velit cum. Platea nunc duis mid porta ridiculus amet.<br>
                    Magna turpis diam amet placerat odio tortor! In ultrices! Augue sed magnis! Platea ut tincidunt penatibus tincidunt est, integer! "
                </h4>
            </div>
            <div data-name="content">
                <ul class="row" data-name="icon">
                    <li class="col-12 col-sm-4" v-for="icon in introIcons">
                        <img :src="icon.icon" :title="icon.name">
                    </li>
                </ul>
                <p>
                    <strong>Pixelstairs</strong> allows users around the world who are active or interested in all areas of design and artwork to cross over the world<br>
                    and freely publish and share their creations without being bound by their skills and genres.<br>
                    And you can communicate with many people who have gathered together in common interests, communicate with the published creations, and support your work.<br>
                    As a result, the Pixelstairs Service is aiming for a free and intimate content / community platform.
                </p>
            </div>
        </section>
        <section ref="collabo" data-section="collabo">
            <div data-name="title">
                <h1>Make some awesome collaborations</h1>
                <h4>
                    " Your works can be anywhere even though that is not your location! "
                </h4>
            </div>
            <div data-name="content">
                <div data-name="icon">
                    <img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/globe-icon.png">
                </div>
                <p>
                    Placerat eros dolor sed dapibus est aliquam tristique turpis mattis phasellus odio dapibus parturient ultrices nascetur,<br>
                    turpis diam dapibus? Elit odio sociis mattis! Phasellus?
                </p>
            </div>
        </section>
        <section ref="not-pro" data-section="not-pro">
            <div data-name="title">
                <h1>No pursue professionalism and high quality works</h1>
                <h4>
                    " You are an artist even though you are not professinal one "
                </h4>
            </div>
            <div data-name="content">
                <div data-name="icon">
                    <img src="https://image.flaticon.com/icons/png/512/171/171420.png">
                </div>
                <p>
                    All users who will use <strong>Pixelstairs</strong> are not famous designers or artists.<br>
                    They may still be enthusiastic students, ordinary peoples who dosen't gave up the dreams, or just friends around you!<br>
                    That's the reason the content and community that <strong>Pixestairs</strong> pursues are not pursuing exceptional expertise or quality.<br>
                    Many of the works hidden in your room that have not yet seen the light can get the attention and feedback from here the <strong>Pixelstairs</strong>.<br>
                    The most important thing is that the <strong>Pixelstairs</strong> was made with just tiny motivation in the hands of people like you, and that you seek true service values in such content and communities.
                </p>
            </div>
        </section>
        <section ref="not-pro" data-section="creative-commons">
            <div data-name="title">
                <h1>Protect your precious works</h1>
                <h4>
                    " You have to protect your artworks from other people who using your works without permission "
                </h4>
            </div>
            <div data-name="content">
                <div data-name="icon">
                    <img src="http://files.softicons.com/download/social-media-icons/flat-gradient-social-icons-by-guilherme-lima/png/512x512/CreativeCommons.png">
                </div>
                <p>
                    The importance of copyright in today's world where many kinds of creative contents are actively displayed<br>
                    on the internet is an essential protection for all creators who produce such contents.<br>
                    So that reasons, We'll be protected against all forms of illegal<br>
                    activity, including commercial use, modification, redistribution, and identity theft, without permission, by applying the <strong>Creative Commons License 4.0</strong> global license to any design or artwork posted on the platform.<br>
                    Don't forget. Your content posted on the <strong>Pixelstairs</strong> service is your own creation and <strong>Pixelstairs</strong> is always there to help you exercise your rights.
                </p>
            </div>
        </section>
        <section ref="not-pro" data-section="free">
            <div data-name="title">
                <h1>Always use it freely</h1>
                <h4>
                    " I am going to tell you one secret.<br>
                    Actually, We are not a company. We are artists just like you! "
                </h4>
            </div>
            <div data-name="content">
                <div data-name="icon">
                    <img src="https://loanssos.com/wp-content/uploads/2014/07/credit-card.png">
                </div>
                <p>
                    <strong>Pixelstairs</strong> provides all services and functions free of charge without pay extension service,<br>
                    and is operated by the proceeds from users' voluntary donations, so that you can freely use all the services provided without any financial burden.<br>
                    So, <strong>Pixelstairs</strong>, which is continuously developing, continues to be used as a free service.<br>
                    Of course there are no ads in <strong>Pixelstairs</strong>!
                </p>
            </div>
        </section>
        <section ref="not-pro" data-section="contactus">
            <div data-name="title">
                <h1>Contact us anytime!</h1>
            </div>
            <div data-name="content">
                <div data-name="icon">
                    <img src="https://cdn2.iconfinder.com/data/icons/ios-7-style-metro-ui-icons/512/MetroUI_Mail.png">
                </div>
                <p>
                    If you have any questions about <strong>Pixelstairs</strong> practices or policies, further business with this service,<br>
                    or requests for improvement, please click on the button below or contact us at <strong><a href="mailto:lubycon@gmail.com">lubycon@gmail.com</a></strong>.
                </p>
            </div>
        </section>
    </div>
</div>
</template>

<style lang="scss" scoped>
    @import './Aboutus';
</style>

<script>
    import Aboutus from './Aboutus';
    export default Aboutus;
</script>
