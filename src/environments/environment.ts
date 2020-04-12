// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // Firebase Config
  firebase: {
    apiKey: "AIzaSyD0NqB__OpRwUekrFw_jEDhqPwD1EaPSkM",
    authDomain: "notes-dbfs.firebaseapp.com",
    databaseURL: "https://notes-dbfs.firebaseio.com",
    projectId: "notes-dbfs",
    storageBucket: "notes-dbfs.appspot.com",  
    messagingSenderId: "1056513810532",
    appId: "1:1056513810532:web:6af6adce0bf1920cf9bf71"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
