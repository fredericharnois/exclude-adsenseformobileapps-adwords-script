/**
*
* Exclude adsenseformobileapps.com
*
* This script excludes adsenseformobileapps.com
* from all display campaigns.
*
* Version: 1.0
* Google AdWords Script maintained by Frederic Harnois
*
**/

// Choose your accounts
var ACCOUNTS = 'INSERT_CIDs'

// Your naming convention to identify display campaigns
var DISPLAY = 'Display'

function main() {

  // Gets accounts within MCC
  var accountSelector = MccApp.accounts()
    
    // Selects accounts (CIDs)
    .withIds([ACCOUNTS]); 
  var accountIterator = accountSelector.get();
  
  // Iterates through the list of accounts
  while (accountIterator.hasNext()) {

    // Gets account info
    var account = accountIterator.next();    
    var accountName = account.getName();
    
    // Selects the client account
    MccApp.select(account);

    // Creates an array with the account's labels
    var accountLabels = []
    var labelSelector = AdWordsApp.labels();
    var labelIterator = labelSelector.get();
    while (labelIterator.hasNext()) {
    	var label = labelIterator.next();
    	accountLabels.push(label.getName())
    }

    // Creates the "Apps Excluded" label if it doesn't exist
    if (accountLabels.indexOf('Apps Excluded') == -1) {
    	AdWordsApp.createLabel('Apps Excluded')
    	Logger.log('Created the "Apps Excluded" label')
    }

    	else {
    		Logger.log('"Apps Excluded" label already exists')
    	}

    // Selects display campaigns
	var campaignSelector = AdWordsApp.campaigns()
		.withCondition("Name CONTAINS " + DISPLAY)

		// Excludes campaigns the script has already run on
		.withCondition("LabelNames CONTAINS_NONE ['Apps Excluded']");

		// Goes through the selected campaigns
		var campaignIterator = campaignSelector.get();
		while (campaignIterator.hasNext()) {
			var campaign = campaignIterator.next();

			// Excludes adsenseformobileapps.com
			var placementBuilder = campaign.display().newPlacementBuilder()
				.withUrl("adsenseformobileapps.com")
				.exclude()
			Logger.log('Excluded ' + placementBuilder.getResult().getUrl() + ' from ' + campaign.getName())
			
			// Adds a campaign label
			campaign.applyLabel('Apps Excluded');
		}
	}
}




