## Security Concerns

### What prevents a user from accessing another user's data?

1.  Realm requires that a user be logged in and that user is tied to the database handle. (App Services > Authentication > Providers)
2.  App Service Rules limit (per collection) a user to their own data (App Services > Rules)
3.  User IDs (owner_id) are randomly-generated and non-sequential (can't be guessed)

## Origins: Allow Mongo Requests from specific domains only

App Services > App Settings > Allowed Request Origins

## Custom User Data (metadata like preferred language, date of birth, and other settings)

App Services > App Users > User Settings

https://www.mongodb.com/docs/atlas/app-services/users/custom-metadata/

## Rules

### Limit users to their own data only (all collections)

App Services > Rules > user_data > readOwnWriteOwn

## Limitations of Google One Tap

### Oauth in a WebView is not recommended

https://support.google.com/faqs/answer/12284343

### Although, most browsers are supported (including Chrome on Android)

https://developers.google.com/identity/gsi/web/guides/supported-browsers

### How to fix it

https://www.google.com/search?q=how+to+make+google+auth+work+with+webview

#### Use Chrome Custom Tabs?

https://support.google.com/faqs/answer/12284343
