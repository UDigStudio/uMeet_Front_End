# uMeet_Front_End
Front end React Native app of uMeet application.

# uMeet
A mobile/web based game used to encourage interaction between randomly chosen people by giving them a question to ask the other person within a certain timeframe.

## Summary
This project is to create an "ice breaker", pointing type game that encourages interaction between pairs of people. You will be randomly assigned a person to meet and given a question to ask them once you find each other.
This game is intended to encourage interaction between people who don't know each others.
A leaderboard will also be present, giving you points after you've successfully interacted with someone.

## Purpose of this Repo
This repo contains the UI for [uMeet](https://github.com/UDigStudio/uMeet).

## Issues
The only issues filed in this repo should pertain directly to the UI codebase for uMeet. Services and requirements issues belong elsewhere. See the [parent repo](https://github.com/UDigStudio/uMeet) for more info.

## Target Audience
uMeet is designed to be contributer friendly and open to anyone that uses the [github flow](https://guides.github.com/introduction/flow/)!

## Installation Instructions
To perform front-end development, you will need an iPhone and Android emulator to view how the application renders on the two different devices. Follow the steps below to configure your Mac for React Native development and feel free to skip any applications that you already have installed:

1. Install XCode:
  * Go to the App Store
  * Search for XCode
  * Download and install the most recent version of XCode
2. Install XCode Command Line Tools:
  * Open MacOS Terminal
  * Type this command and hit Enter: xcode-select --install
3. Install Homebrew:
  * Open MacOS Terminal
  * Type this command and hit Enter: ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  * Type this command to make sure that Homebrew is installed correctly: brew doctor
4. Install Yarn:
  * Open MacOS Terminal
  * Type this command and hit Enter: brew install yarn
  * Type this command and hit Enter: brew upgrade yarn
5. Configure XCode:
  * Open XCode
  * Select Preferences
  * Select Locations
  * Select the Command Line Tools from the dropdown
6. Install Java JDK:
  * Go to this URL: https://java.com/en/download/mac_download.jsp
  * Download Java
  * Follow the installation instructions to install Java
7. Install Android Studio
  * Go to this URL: https://developer.android.com/studio/
  * Download Android Studio
  * Choose a Custom setup during installation
  * Check the following boxes:
    * Android SDK
    * Android SDK Platform
    * Performance (Intel HAXM)
    * Android Virtual Device
  * Launch Android Studio
  * Click Configure
  * Select SDK Manager
  * Select SDK Platforms
  * Select the following boxes:
    * Android API 28
    * Android 8.0
    * Android 6.0 (Marshmallow)
    * Android 7.0
    * Android 7.1.1
  * Select SDK Tools
  * Select the following boxes:
    * Android SDK Build-Tools
    * Android SDK Platform-Tools
    * Android SDK Tools
    * Android Emulator
    * Intel x86 Emulator Accelerator (HAXM Installer)
    * Android Support Repository
  * Select OK
  * Continue Installation
  * Set your JAVA_HOME variable
    * Open MacOS Terminal
    * Type this command: vim ~/.bash_profile
    * Add a line in this file to export the location of your java installation
    * Type this command: source ~/.bash_profile
  * Add Android SDK to your path:
    * Open Android Studio
    * Select Configure
    * Select SDK Manager
    * Select Appearance and Behavior
    * Select System Settings
    * Select Android SDK
    * Look for Android SDK Location
    * Open MacOS Terminal
    * Type this command: vim ~/.bash_profile
    * Add the Android SDK Location your found as an export in this file
    * Type this command: source ~/.bash_profile
    * Type this command in MacOS Terminal and verify output: adb
8. Setup Android emulator
  * Open Android Studio
  * Select Start a New Android Stuid project
  * Install any dependencies that fail
  * Select Tools
  * Select AVD Manager
  * Select the Checkbox to Enable ADB Integration
  * Select Create Virtual Device
  * Select an image
  * Finish and complete installation
  * Click Play
9. To configure the Android emulator for Create React Native App, follow the instructions at this [URL](https://bit.ly/2IWqQ8n)
