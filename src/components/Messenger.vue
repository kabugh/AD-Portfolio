<template>
  <div>
    <div id="fb-root"></div>
    <div
      class="fb-customerchat"
      attribution="setup_tool"
      page_id="168432936633504"
      theme_color="#a695c7"
      logged_in_greeting="Hej, jak mogę pomóc? 😇"
      logged_out_greeting="Hej, jak mogę pomóc? 😇"
      greeting_dialog_display="fade"
      greeting_dialog_delay="60"
      minimalised="true"
    ></div>
  </div>
</template>
<script>
export default {
  created() {
    window.fbAsyncInit = function() {
      /* eslint-disable prefer-const */
      // eslint-disable-next-line no-undef
      FB.init({
        appId: process.env.appId,
        autoLogAppEvents: true,
        xfbml: true,
        version: "v7.0"
      });
    };
    (function(d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }
};
</script>
