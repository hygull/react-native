# React Native

A JavaScript framework for building native mobile applications(apps).

[Getting started](https://facebook.github.io/react-native/docs/getting-started.html)

[ES6 or ECMASCRIPT 2015](https://babeljs.io/learn-es2015/)

[DialogBox](https://www.npmjs.com/package/react-native-dialogbox)

[Font families](./docs/font-families.md)

[React Native Flat Button](https://www.npmjs.com/package/react-native-flat-button)

[Layouts](https://code.tutsplus.com/tutorials/get-started-with-layouts-in-react-native--cms-27418)

[React Native Video](https://www.npmjs.com/package/react-native-video)  (installed)

[Colors](https://facebook.github.io/react-native/docs/colors.html)

[Video on TouchableHighlight](https://egghead.io/lessons/react-make-a-button-in-react-native-with-touchablehighlight)

[Video to make a login screen](https://youtu.be/1xu1eeRCPEk)

### Password 
```javascript
<TextInput 
    placeholder="password"
    placeholderTextColor="rgba(255,255,255, 0.7)"
    style={styles.password}
    secureTextEntry
/>
```

I have listed most of the errors  [here](./docs/do-not-do-this.mdown) that I faced while creating ios application. Just check it.

You can also check list of great links [here](./docs/links.md)

| program/technology | version |
| ------------------ | ------- |
| node | 7.10.0 |
| npm | 4.2.0 |

### React Native Components

* Image

* Text

* TextInput

### Props 

Most components can be customized when they are created, with different parameters. These creation parameters are called props.

### Instructions

To get started, edit index.android.js/index.ios.js
Press **Cmd+R** to reload
**Cmd+D** or shake for dev menu

### CSS properties

margin, fontSize, fontWeight, backgroundColor, alignItems, justifyContent, flex, color, textAlign
[more...](https://facebook.github.io/react-native/docs/flexbox.html)

```css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  company: {
    textAlign: 'center',
    color: 'green',
    marginBottom: 5,
  },
  instruction:{
    textAlign:"center",
    color:"navy",
    margin:5,
  },
  company_text:{
    textAlign:"center",
    color:"gray",
    margin:1,
    fontWeight:"bold",
  }

});
```

### Prerequisites

1) Basic React JS knowledge

2) Solid JavaScript knowledge

### With React Native we 

1)	build mobile apps using only JavaScript.

2)	don't build a mobile web app, an HTML5 app, or a hybrid app. 

3)	build a real mobile app that's indistinguishable from an app built using Objective-C or Java.

4)	use the same fundamental **UI building blocks** as regular iOS and Android apps. You just put those **building blocks** together using JavaScript and React.

### React Native features

**React** − Framework for building web and mobile apps using JavaScript.

**Native** − You can use native components controlled by JavaScript.

**Platforms** − Supports IOS and Android platform.

### React Native Advantages

**JavaScript** − You can use existing JavaScript knowledge to build native mobile apps.

**Code sharing** − You can share most of your code on different platforms.

**Community** − Community around React and React Native is large, and you will be able to find any answer you need.

### React Native Limitations

**Native Components** − If you want to create native functionality which isns't created yet, you will need to write some platform specific code.

### Building platform 

I am using MAC OS X as a building platform (Tutorialpoint is also using the same)

### Environment SetUp

1) Install **NODE** and **NPM**.

2) Now follow the following steps:

| Steps | Command(Instruction) |
| ----- | ------- |
| Install Homebrew | /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" | 
| Install watchman | brew install watchman |
| Install React Native | npm install -g react-native-cli
| Install Android/iOS | Install Visual Studio(for Android) &<br> XCode(for iOS) |

```
admins-MacBook-Pro-3:ReactNative admin$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
==> This script will install:
/usr/local/bin/brew
/usr/local/share/doc/homebrew
/usr/local/share/man/man1/brew.1
/usr/local/share/zsh/site-functions/_brew
/usr/local/etc/bash_completion.d/brew
/usr/local/Homebrew

Press RETURN to continue or any other key to abort
==> /usr/bin/sudo /bin/mkdir -p /Library/Caches/Homebrew
Password:
==> /usr/bin/sudo /bin/chmod g+rwx /Library/Caches/Homebrew
==> /usr/bin/sudo /usr/sbin/chown admin /Library/Caches/Homebrew
==> Downloading and installing Homebrew...
remote: Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
HEAD is now at 2b72638 info: fix conflicts formatting.
Updated 1 tap (caskroom/cask).
==> Cleaning up /Library/Caches/Homebrew...
==> Migrating /Library/Caches/Homebrew to /Users/admin/Library/Caches/Homebrew...
==> Deleting /Library/Caches/Homebrew...
==> Installation successful!

==> Homebrew has enabled anonymous aggregate user behaviour analytics.
Read the analytics documentation (and how to opt-out) here:
  http://docs.brew.sh/Analytics.html

==> Next steps:
- Run `brew help` to get started
- Further documentation: 
    http://docs.brew.sh
admins-MacBook-Pro-3:ReactNative admin$ 
```

```
admins-MacBook-Pro-3:ReactNative admin$ brew install watchman
==> Installing dependencies for watchman: pcre
==> Installing watchman dependency: pcre
==> Downloading https://homebrew.bintray.com/bottles/pcre-8.40.el_capitan.bottle.tar.gz
######################################################################## 100.0%
==> Pouring pcre-8.40.el_capitan.bottle.tar.gz
==> Using the sandbox
🍺  /usr/local/Cellar/pcre/8.40: 204 files, 5.4MB
==> Installing watchman 
==> Downloading https://homebrew.bintray.com/bottles/watchman-4.7.0.el_capitan.bottle.tar.gz
######################################################################## 100.0%
==> Pouring watchman-4.7.0.el_capitan.bottle.tar.gz
==> launchctl unload -F /Users/admin/Library/LaunchAgents/com.github.facebook.watchman.plist
🍺  /usr/local/Cellar/watchman/4.7.0: 21 files, 429.4KB
```

```
admins-MacBook-Pro-3:ReactNative admin$ npm install -g react-native-cli
/usr/local/bin/react-native -> /usr/local/lib/node_modules/react-native-cli/index.js
/usr/local/lib
└─┬ react-native-cli@2.0.1 
  ├─┬ chalk@1.1.3 
  │ ├── ansi-styles@2.2.1 
  │ ├── escape-string-regexp@1.0.5 
  │ ├─┬ has-ansi@2.0.0 
  │ │ └── ansi-regex@2.1.1 
  │ ├── strip-ansi@3.0.1 
  │ └── supports-color@2.0.0 
  ├── minimist@1.2.0 
  ├─┬ prompt@0.2.14 
  │ ├── pkginfo@0.4.0 
  │ ├─┬ read@1.0.7 
  │ │ └── mute-stream@0.0.7 
  │ ├── revalidator@0.1.8 
  │ ├─┬ utile@0.2.1 
  │ │ ├── async@0.2.10 
  │ │ ├── deep-equal@1.0.1 
  │ │ ├── i@0.3.5 
  │ │ ├─┬ mkdirp@0.5.1 
  │ │ │ └── minimist@0.0.8 
  │ │ ├── ncp@0.4.2 
  │ │ └─┬ rimraf@2.6.1 
  │ │   └─┬ glob@7.1.1 
  │ │     ├── fs.realpath@1.0.0 
  │ │     ├─┬ inflight@1.0.6 
  │ │     │ └── wrappy@1.0.2 
  │ │     ├── inherits@2.0.3 
  │ │     ├─┬ minimatch@3.0.4 
  │ │     │ └─┬ brace-expansion@1.1.7 
  │ │     │   ├── balanced-match@0.4.2 
  │ │     │   └── concat-map@0.0.1 
  │ │     ├── once@1.4.0 
  │ │     └── path-is-absolute@1.0.1 
  │ └─┬ winston@0.8.3 
  │   ├── colors@0.6.2 
  │   ├── cycle@1.0.3 
  │   ├── eyes@0.1.8 
  │   ├── isstream@0.1.2 
  │   ├── pkginfo@0.3.1 
  │   └── stack-trace@0.0.10 
  └── semver@5.3.0 

```

```
admins-MacBook-Pro-3:Apps admin$ react-native init CabBookingApp
This will walk you through creating a new React Native project in /Users/admin/projects/ReactNative/src/Apps/CabBookingApp
Installing react-native...
Consider installing yarn to make this faster: https://yarnpkg.com
CabBookingApp@0.0.1 /Users/admin/projects/ReactNative/src/Apps/CabBookingApp
├── UNMET PEER DEPENDENCY react@16.0.0-alpha.6
└─┬ react-native@0.44.0 
  ├── absolute-path@0.0.0 
  ├── art@0.10.1 
  ├── async@2.4.0 
  ├─┬ babel-core@6.24.1
  ...
  ...
  ...
  ...
  ...
  ...
To run your app on iOS:
   cd /Users/admin/projects/ReactNative/src/Apps/CabBookingApp
   react-native run-ios
   - or -
   Open ios/CabBookingApp.xcodeproj in Xcode
   Hit the Run button
To run your app on Android:
   cd /Users/admin/projects/ReactNative/src/Apps/CabBookingApp
   Have an Android emulator running (quickest way to get started), or a device connected
   react-native run-android
```

3)	Create **First App**:

| Commands |
| -------- |
| cd /Users/Desktop |
| react-native init CabBookingApp  **(Run React Native packager)** |
| cd CabBookingApp |
| react-native start |
| react-native run-ios<br> **or** <br> react-native run-android |

```
admins-MacBook-Pro-3:CabBookingApp admin$ ls
__tests__		app.json		index.ios.js		node_modules
android			index.android.js	ios			package.json
```

I saw the command **react-native run-ios**, so I thought **react-native run-android** will also work & it worked(it installed automatically for the web).

```
admins-MacBook-Pro-3:CabBookingApp admin$ react-native run-android
Scanning 555 folders for symlinks in /Users/admin/projects/ReactNative/src/Apps/CabBookingApp/node_modules (5ms)
JS server already running.
Building and installing the app on the device (cd android && ./gradlew installDebug)...
Downloading https://services.gradle.org/distributions/gradle-2.14.1-all.zip
...........................................................................
...
...
```

# ANDROID_HOME

Visit [here](http://stackoverflow.com/questions/28296237/set-android-home-environment-variable-in-mac) to see how to set.

```
admins-MacBook-Pro-3:~ admin$ echo $ANDROID_HOME
/Users/admin/Library/Android/sdk/
```

# React Navigation

Visit [here](https://facebook.github.io/react-native/docs/navigation.html)

Visit [here](https://reactnavigation.org/docs/intro/) to know about StackNavigator

```javascript
npm install --save react-navigation
```


