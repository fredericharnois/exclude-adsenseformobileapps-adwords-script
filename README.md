**Important Note:** As of September 2018, Google has [deprecated the adsenseformobileapps.com placement exclusion](https://support.google.com/google-ads/answer/9051067), rendering this script obsolete. 

# Exclude adsenseformobileapps.com AdWords Script

This script was built to ensure adsenseformobileapps.com is systematically excluded from display campaigns.

## Setup

The only part of the script that needs to be modified is replacing 'Display' by what you identify display campaigns with:

```javascript
// Your naming convention to identify display campaigns
var DISPLAY = 'Display'
```

You'll also want to schedule the script to run hourly.

## Considerations

While I realize that you could simply add adsenseformobileapps.com to your account placement exclusions (which can't be accessed through a script right now), this automates the process so you don't ever have to think about it.
