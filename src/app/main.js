/*
 * Detect Platform
 * If you wish to change the hide behavior with ngShow/ngHide then this can be achieved by
 * restating the styles for the .ng-hide class in CSS:
 * <pre>
 * .ng-hide {
 *   <div annotation title="CSS Specificity" content="Not to worry, this will override the AngularJS default...">
 *   display:block!important;
 *   </div>
 *
 *   //this is just another form of hiding an element
 *   position:absolute;
 *   top:-9999px;
 *   left:-9999px;
 * }
 * </pre>
 */
var os="Unknown ";
if (navigator.appVersion.indexOf("Win")!=-1) os="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) os="Mac";
if (navigator.appVersion.indexOf("Linux")!=-1) os="Linux";
var isNodeWebkit = (typeof process == "object");
var platformModule = null;
//Global
var win;
var mute = false;

//NW
if(isNodeWebkit) {
    platformModule = 'zenNodeWebkitModule';
}else{
    platformModule = 'zenWebModule';
}

//Initialize Application
var zenNotebook = angular.module("zenNotebook", ['ngSanitize', platformModule])
    .run(function($rootScope, storageFactory){
        //Sound
        $rootScope.mute = mute;
        if(storageFactory.getStorage('mute')){
            $rootScope.mute = storageFactory.getStorage('mute');
        }
        //Active Component
        $rootScope.active_component = storageFactory.getStorage('active_component');
        if(!$rootScope.active_component){
            $rootScope.active_component = 'notebook';
        }
        //TODO: Load Configuration and Features here

    });