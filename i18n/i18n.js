(function(){window.i18n||(window.i18n={})
var
f={"en":function (n){return n===1?"one":"other"}},
c=function(d){if(!d)throw new Error("MessageFormat: No data passed to function.")},
n=function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: `"+k+"` isnt a number.");return d[k]-(o||0)},
v=function(d,k){c(d);return d[k]},
p=function(d,k,o,l,p){c(d);return d[k] in p?p[d[k]]:(k=f[l](d[k]-o),k in p?p[k]:p.other)},
s=function(d,k,p){c(d);return d[k] in p?p[d[k]]:p.other};
window.i18n["en"] = {
"weekday_n":function(d){return p(d,"N",0,"en",{"0":"Sunday","1":"Monday","2":"Tuesday","3":"Wednesday","4":"Thursday","5":"Friday","6":"Saturday","other":"???"})},
"month_n":function(d){return p(d,"N",0,"en",{"0":"January","1":"February","2":"March","3":"April","4":"May","5":"June","6":"July","7":"August","8":"September","9":"October","10":"November","11":"December","other":"???"})},
"time_diff":function(d){return v(d,"T")+" "+p(d,"T_UNIT",0,"en",{"0":"seconds","1":"minutes","2":"hours","3":"days","4":"weeks","5":"months","6":"years","other":"???"})+" "+s(d,"T_PAST",{"true":"ago","other":"from now"})},
"search_hint":function(d){return "<b>Hint:</b> search is for full words in the item title, description, room, and participants. You may use * and ? as wildcards and \"quoted words\" for exact phrases."},
"search_example":function(d){return "For example, you could try <b>"+v(d,"X")+"</b>"},
"part_filter":function(d){return s(d,"T",{"first":"All participants by first name:","last":"All participants by last name:","other":"All programme participants"})},
"no_ko_id":function(d){return "No ID set! Please assign konopas_set.id a unique identifier."},
"old_browser":function(d){return "Unfortunately, your browser doesn't support some of the Javascript features required by KonOpas. To use, please try a different browser."},
"private_mode":function(d){return "It looks like you're using an iOS or Safari browser in private mode, which disables localStorage. This will result in a suboptimal KonOpas experience."},
"item_not_found":function(d){return "Program id <b>"+v(d,"ID")+"</b> not found!"},
"next_ended":function(d){return "There are no more program items scheduled."},
"next_start":function(d){return "The next program item starts in "+p(d,"H",0,"en",{"0":"","one":"one hour and","other":n(d,"H")+" hours and"})+" "+p(d,"M",0,"en",{"one":"one minute","other":n(d,"M")+" minutes"})+" after the set time."},
"star_export_this":function(d){return "Your current selection is encoded in <a href=\""+v(d,"THIS")+"\" target=\"_blank\">this page's URL</a>, which you may open elsewhere to share your selection."},
"star_export_share":function(d){return "For easier sharing, you can also generate a <a href=\""+v(d,"SHORT")+"\">shorter link</a> or a <a href=\""+v(d,"QR")+"\">QR code</a>."},
"star_import_this":function(d){return "Your previously selected items are shown with a highlighted interior, while those imported via <a href=\""+v(d,"THIS")+"\">this link</a> have a highlighted border."},
"star_import_diff":function(d){return "Your previous selection "+p(d,"PREV",0,"en",{"0":"was empty","one":"had one item","other":"had "+n(d,"PREV")+" items"})+", and the imported selection has "+p(d,"NEW",0,"en",{"0":"no new items","one":"one new item","other":n(d,"NEW")+" new items"})+p(d,"SAME",0,"en",{"0":"","one":"and one which was already selected","other":"and "+n(d,"SAME")+" which were already selected"})+"."},
"star_import_bad":function(d){return p(d,"BAD",0,"en",{"0":"","one":"One of the imported items had an invalid ID.","other":n(d,"BAD")+" of the imported items had invalid IDs."})},
"star_set":function(d){return "Set my selection to the imported selection"},
"add_n":function(d){return "add "+v(d,"N")},
"discard_n":function(d){return "discard "+v(d,"N")},
"star_add":function(d){return "Add the "+p(d,"N",0,"en",{"one":"new item","other":n(d,"N")+" new items"})+" to my selection"},
"star_export_link":function(d){return "<a href=\""+v(d,"URL")+"\">Export selection</a> ("+p(d,"N",0,"en",{"one":"one item","other":n(d,"N")+" items"})+")"},
"star_hint":function(d){return "To \"star\" a program item, click on the square next to it. Your selections will be remembered, and shown in this view. You currently don't have any program items selected, so this list is empty."},
"filter_sum_id":function(d){return "Listing "+p(d,"N",0,"en",{"one":"one item: "+v(d,"TITLE"),"other":n(d,"N")+" items with id "+v(d,"ID")})},
"filter_sum":function(d){return "Listing "+p(d,"N",0,"en",{"one":"one "+v(d,"TAG")+" item","other":v(d,"ALL")+" "+n(d,"N")+" "+v(d,"TAG")+" items"})+" "+s(d,"GOT_DAY",{"true":"on "+v(d,"DAY"),"other":""})+" "+s(d,"GOT_AREA",{"true":"in "+v(d,"AREA"),"other":""})+" "+s(d,"GOT_Q",{"true":"matching the query "+v(d,"Q"),"other":""})},
"server_cmd_fail":function(d){return "The command \""+v(d,"CMD")+"\" failed."},
"show_comments":function(d){return "Show "+p(d,"N",0,"en",{"one":"one comment","other":n(d,"N")+" comments"})},
"post_author":function(d){return v(d,"N")+" posted…"},
"ical_login":function(d){return "For other export options, please login."},
"ical_link":function(d){return "Your selection is available as an iCal (.ics) calendar at:"},
"ical_hint":function(d){return "Note that changes you make in this guide may take some time to show in your external calendar software."},
"ical_make":function(d){return "To view your selection in your calendar app, you may also <br class=\"wide-only\">"+v(d,"A_TAG")+"make it available</a> in iCal (.ics) calendar format"},
"login_why":function(d){return "Once you've verified your e-mail address, you'll be able to sync your data between different clients (including external calendars), as well as vote & comment on items."}}
})();