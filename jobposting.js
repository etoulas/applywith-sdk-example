'use strict';

window.onload = init_applywith;

function init_applywith() {
  window.JobCloudSDK.install({
    accessKey: 'my-prod-key', // The key provided by JobCloud to identify your app.
                              // Please contact service@jobs.ch

    locale: 'de',             // Locale. Supported locales are 'de', 'fr' or 'en'.

    injectElement: '#applywith', // A query selector string that references the HTML
                              // element in which the ApplyWith button will be rendered.
                              // Examples would be '#elementId' or '.elementClass'.

    env: 'test',              // Setting 'test' here boots the SDK in test mode which
                              // can be used to test the implementation without hitting
                              // the actual JobCloud oAuth service. Also a genuine accessKey
                              // is not needed.

    callback: (data) => {     // The callback function that gets called when the process was
                              // successful to provide the applicants data. Use this to
                              // map the data to the application form.
      alert('success :)');
    }    

  });
}