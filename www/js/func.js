log = function($msg) {
    console.log($msg);
};


//This can pass function with parameters.
function partial(func /*, 0..n args */) {
    var args = Array.prototype.slice.call(arguments).splice(1);
    return function() {
        var allArguments = args.concat(Array.prototype.slice.call(arguments));
        return func.apply(this, allArguments);
    };
}

//String starts  with
//"Hello World!".startsWith("He"); // true
//var data = "Hello world";
//var input = 'He';
//data.startsWith(input); // true
if (typeof String.prototype.startsWith != 'function') {
    // see below for better implementation!
    String.prototype.startsWith = function(str) {
        return this.indexOf(str) == 0;
    };
}

isDigit = function($str) {
    var intRegex = /^\d+$/;
    if (intRegex.test($str)) {
        return true;
    } else {
        return false;
    }
};

json_obj_to_db = function($json) {
    return JSON.stringify(JSON.stringify($json));
};

json_string_to_db = function($json) {
    return JSON.stringify($json);
};

json_obj_from_db = function($str) {
    return JSON.parse(JSON.parse($str));
};

get_all_localstorage = function() {
    var i = 0, oJson = {}, sKey;
    for (; sKey = window.localStorage.key(i); i++) {
        oJson[sKey] = window.localStorage.getItem(sKey);
    }
//    console.log(oJson);
    return oJson;
}



print_good = function() {
    console.log("GOOD");
};

print_bad = function() {
    console.log("BAD");
};

print_ccc = function() {
    console.log("CCC");
};


vvv = function(data) {
    log("VVV");
    log(data);
    log("ZZZ");
};

test_ccc = function() {
    ajax_post(window.api_url + window.get_ad_api, vvv);
    return true;
};

//function ajax_json_post(url, next_fun, para) {
//    $.ajax({
//        url: url,
////        url: window.api_url + window.get_ad_api,
//        crossDomain: true,
//        data: para,
//        dataType: "json",
//        type: 'POST',
//        success: function(data) {
//            next_fun(data);
//        }
//    });
//}


function page_off_on(dom,func){
    $(dom).off("pageshow").on("pageshow",function(event){
        func();
    });
}


function get_dive_GPS(func) {
    $.ajax({
        url: window.api_url + window.dive_GPS_api,
        crossDomain: true,
        data: {account: window.user_data.account},
        dataType: "json",
        type: 'POST'
//                    success: function(data) {
//                        log("GET_DIVE_GPS");
////                        window.ccc = data;
//                        if (data.sys_code === "200") {
//                        } else {
//                        }
//                    }
    }).done(func);
}


function get_dive_all_list(func){
    $.post(window.api_url + window.dive_list_all_api,{},function(data) {
//        log("GET_DIVE_LIST");
        window.dive_all_data = data.data;
        func();
    },"json");
}

function get_dive_list(func) {
    
    $.post(window.api_url + window.dive_list_api,{account: window.user_data.account},function(data) {
//    $.post(window.api_url + window.dive_list_api,{},function(data) {
//        log("GET_DIVE_LIST");
        window.dive_data = data.data;
        func();
    },"json");
//    ajax_json_post(window.api_url + window.dive_list_api, function(data) {
//        log("GET_DIVE_LIST");
//        window.dive_data = data.data;
//        func();
//    },{account: window.user_data.account});

//    $.ajax({
//        url: window.api_url + window.dive_list_api,
//        crossDomain: true,
//        data: {account: window.user_data.account},
//        dataType: "json",
//        type: 'POST',
//        success: function(data) {
//            log("GET_DIVE_LIST");
//            window.dive_data = data.data;
//        }
//    }).done(func);
}


upload_avatar_to_server = function(imageData) {
    $.post(window.api_url + window.upload_avatar_api, {account: window.user_data.account, avatar: imageData}, function(data) {
        log("RESULT = " + data);
        window.alert("UPLOAD SUCCESS");
        $(":mobile-pagecontainer").pagecontainer("change", "profile.html", {role: "page", transition: "slide", reverse: true});
    });
};

upload_liscense_to_server = function(imageData) {
    $.post(window.api_url + window.upload_liscense_api, {account: window.user_data.account, avatar: imageData}, function(data) {
        log("RESULT = " + data);
        window.alert("UPLOAD SUCCESS");
        $(":mobile-pagecontainer").pagecontainer("change", "profile.html", {role: "page", transition: "slide", reverse: true});
    });
};

getPictureFILEFromPhotoLibrary = function(func) {
    navigator.camera.getPicture(onSuccessFromLib, null, {
        allowEdit: true,
        quality: 40,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
        targetHeight: 288,
        targetWidth: 288
    });
    function onSuccessFromLib(imageData) {
        func(imageData);
//        $.post(window.api_url + window.upload_avatar_api, {account: window.user_data.account, avatar: imageData}, function(data) {
//            log("RESULT = " + data);
//            window.alert("UPLOAD SUCCESS");
//            success();
//        });
    }
};

getPictureFILEFromCamera = function(func) {

    navigator.camera.getPicture(onSuccessFromLib, null, {
        allowEdit: true,
        quality: 40,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: navigator.camera.PictureSourceType.CAMERA,
        targetHeight: 288,
        targetWidth: 288
    });
    function onSuccessFromLib(imageData) {
        func(imageData);
//        $.post(window.api_url + window.upload_avatar_api, {account: window.user_data.account, avatar: imageData}, function(data) {
//            log("RESULT = " + data);
//            window.alert("UPLOAD SUCCESS");
//            success();
//        });
    }
};


reload_dive_data = function() {

};


i18n = function(arr, lan) {
    $.each(arr[lan], function(index, value) {
        $('.' + index).text(value);
//      $("[lang='"+index+"']").text(value);
    });
};