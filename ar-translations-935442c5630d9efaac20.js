(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{2996:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.messages=a.locale=a.areTranslationsLoaded=void 0;var t,o=r(130),i=r(3020),l=(t=i)&&t.__esModule?t:{default:t};(0,o.addLocaleData)(l.default);a.areTranslationsLoaded=!0,a.locale="ar",a.messages={"Terra.actionHeader.back":"العودة","Terra.actionHeader.close":"إغلاق","Terra.actionHeader.maximize":"تكبير","Terra.actionHeader.minimize":"تصغير","Terra.actionHeader.next":"التّالي","Terra.actionHeader.previous":"السابق","Terra.ajax.error":"This content failed to load.","Terra.alert.advisory":"Advisory.","Terra.alert.alert":"Alert.","Terra.alert.dismiss":"Dismiss","Terra.alert.error":"Error.","Terra.alert.info":"Information.","Terra.alert.success":"Success.","Terra.alert.warning":"Warning.","Terra.application.tabs.more":"المزيد","Terra.application.utility.back":"العودة","Terra.application.utility.button":"زر الأداة المساعدة","Terra.application.utility.close":"إغلاق","Terra.application.utility.menu":"قائمة الأداة المساعدة","Terra.applicationLayout.applicationHeader.menuToggleLabel":"Toggle Menu","Terra.applicationLayout.utilityDefaults.about":"About","Terra.applicationLayout.utilityDefaults.appearance":"Appearance","Terra.applicationLayout.utilityDefaults.changePhoto":"Change Photo","Terra.applicationLayout.utilityDefaults.gettingStarted":"Getting Started","Terra.applicationLayout.utilityDefaults.help":"Help","Terra.applicationLayout.utilityDefaults.logOut":"Log Out","Terra.applicationLayout.utilityDefaults.menu":"Menu","Terra.applicationLayout.utilityDefaults.security":"Security","Terra.applicationLayout.utilityDefaults.settings":"Settings","Terra.applicationLayout.utilityDefaults.termsOfUse":"Terms of Use","Terra.applicationLayout.utilityDefaults.userInformation":"User Information","Terra.Clinical.ActionHeader.back":"العودة","Terra.Clinical.ActionHeader.close":"إغلاق","Terra.Clinical.ActionHeader.maximize":"تكبير","Terra.Clinical.ActionHeader.minimize":"تصغير","Terra.Clinical.ActionHeader.next":"التّالي","Terra.Clinical.ActionHeader.previous":"السابق","Terra.collapsibleMenuView.more":"المزيد","Terra.datePicker.openCalendar":"Open Calendar","Terra.datePicker.today":"Today","Terra.dateTimePicker.timeClarification.button.daylightSaving":"Before (Daylight Saving)","Terra.dateTimePicker.timeClarification.button.standardTime":"After (Standard Time)","Terra.dateTimePicker.timeClarification.message":"The time selected occurs during the transition from Daylight Saving Time to Standard Time. Would you like to enter this before or after the time change from Daylight Saving to Standard time?","Terra.dateTimePicker.timeClarification.title":"Time Clarification","Terra.demographicsBanner.dateOfBirth":"DOB","Terra.demographicsBanner.deceased":"Deceased","Terra.demographicsBanner.gestationalAge":"GA","Terra.demographicsBanner.noDataProvided":"--","Terra.demographicsBanner.postMenstrualAge":"PMA","Terra.dialog.close":"إغلاق","Terra.form.field.optional":"(اختياري)","Terra.form.select.add":'"{text}" إضافة',"Terra.form.select.defaultDisplay":"- Select -","Terra.form.select.noResults":'لا توجد نتائج مطابقة لـ"{text}"',"Terra.menu.back":"العودة","Terra.menu.close":"إغلاق","Terra.Overlay.loading":"Loading...","Terra.searchField.search":"Search","Terra.status-view.error":"خطأ","Terra.status-view.no-data":"لا نتائج","Terra.status-view.no-matching-results":"لا يوجد نتائج مطابقة","Terra.status-view.not-authorized":"غير مخول","Terra.tabs.more":"المزيد","Terra.timeInput.am":"مساءً","Terra.timeInput.hh":"س س","Terra.timeInput.hours":"ساعات","Terra.timeInput.minutes":"دقائق","Terra.timeInput.mm":"د د","Terra.timeInput.pm":"صباحًا"}},3020:function(e,a,r){e.exports=function(){"use strict";return[{locale:"ar",pluralRuleFunction:function(e,a){var r=String(e).split("."),t=Number(r[0])==e&&r[0].slice(-2);return a?"other":0==e?"zero":1==e?"one":2==e?"two":t>=3&&t<=10?"few":t>=11&&t<=99?"many":"other"},fields:{year:{displayName:"السنة",relative:{0:"السنة الحالية",1:"السنة القادمة","-1":"السنة الماضية"},relativeTime:{future:{zero:"خلال {0} سنة",one:"خلال سنة واحدة",two:"خلال سنتين",few:"خلال {0} سنوات",many:"خلال {0} سنة",other:"خلال {0} سنة"},past:{zero:"قبل {0} سنة",one:"قبل سنة واحدة",two:"قبل سنتين",few:"قبل {0} سنوات",many:"قبل {0} سنة",other:"قبل {0} سنة"}}},month:{displayName:"الشهر",relative:{0:"هذا الشهر",1:"الشهر القادم","-1":"الشهر الماضي"},relativeTime:{future:{zero:"خلال {0} شهر",one:"خلال شهر واحد",two:"خلال شهرين",few:"خلال {0} أشهر",many:"خلال {0} شهرًا",other:"خلال {0} شهر"},past:{zero:"قبل {0} شهر",one:"قبل شهر واحد",two:"قبل شهرين",few:"قبل {0} أشهر",many:"قبل {0} شهرًا",other:"قبل {0} شهر"}}},day:{displayName:"يوم",relative:{0:"اليوم",1:"غدًا",2:"بعد الغد","-2":"أول أمس","-1":"أمس"},relativeTime:{future:{zero:"خلال {0} يوم",one:"خلال يوم واحد",two:"خلال يومين",few:"خلال {0} أيام",many:"خلال {0} يومًا",other:"خلال {0} يوم"},past:{zero:"قبل {0} يوم",one:"قبل يوم واحد",two:"قبل يومين",few:"قبل {0} أيام",many:"قبل {0} يومًا",other:"قبل {0} يوم"}}},hour:{displayName:"الساعات",relative:{0:"الساعة الحالية"},relativeTime:{future:{zero:"خلال {0} ساعة",one:"خلال ساعة واحدة",two:"خلال ساعتين",few:"خلال {0} ساعات",many:"خلال {0} ساعة",other:"خلال {0} ساعة"},past:{zero:"قبل {0} ساعة",one:"قبل ساعة واحدة",two:"قبل ساعتين",few:"قبل {0} ساعات",many:"قبل {0} ساعة",other:"قبل {0} ساعة"}}},minute:{displayName:"الدقائق",relative:{0:"هذه الدقيقة"},relativeTime:{future:{zero:"خلال {0} دقيقة",one:"خلال دقيقة واحدة",two:"خلال دقيقتين",few:"خلال {0} دقائق",many:"خلال {0} دقيقة",other:"خلال {0} دقيقة"},past:{zero:"قبل {0} دقيقة",one:"قبل دقيقة واحدة",two:"قبل دقيقتين",few:"قبل {0} دقائق",many:"قبل {0} دقيقة",other:"قبل {0} دقيقة"}}},second:{displayName:"الثواني",relative:{0:"الآن"},relativeTime:{future:{zero:"خلال {0} ثانية",one:"خلال ثانية واحدة",two:"خلال ثانيتين",few:"خلال {0} ثوانٍ",many:"خلال {0} ثانية",other:"خلال {0} ثانية"},past:{zero:"قبل {0} ثانية",one:"قبل ثانية واحدة",two:"قبل ثانيتين",few:"قبل {0} ثوانِ",many:"قبل {0} ثانية",other:"قبل {0} ثانية"}}}}},{locale:"ar-AE",parentLocale:"ar",fields:{year:{displayName:"السنة",relative:{0:"هذه السنة",1:"السنة التالية","-1":"السنة الماضية"},relativeTime:{future:{zero:"خلال {0} سنة",one:"خلال سنة واحدة",two:"خلال سنتين",few:"خلال {0} سنوات",many:"خلال {0} سنة",other:"خلال {0} سنة"},past:{zero:"قبل {0} سنة",one:"قبل سنة واحدة",two:"قبل سنتين",few:"قبل {0} سنوات",many:"قبل {0} سنة",other:"قبل {0} سنة"}}},month:{displayName:"الشهر",relative:{0:"هذا الشهر",1:"الشهر القادم","-1":"الشهر الماضي"},relativeTime:{future:{zero:"خلال {0} شهر",one:"خلال شهر واحد",two:"خلال شهرين",few:"خلال {0} أشهر",many:"خلال {0} شهرًا",other:"خلال {0} شهر"},past:{zero:"قبل {0} شهر",one:"قبل شهر واحد",two:"قبل شهرين",few:"قبل {0} أشهر",many:"قبل {0} شهرًا",other:"قبل {0} شهر"}}},day:{displayName:"يوم",relative:{0:"اليوم",1:"غدًا",2:"بعد الغد","-2":"أول أمس","-1":"أمس"},relativeTime:{future:{zero:"خلال {0} يوم",one:"خلال يوم واحد",two:"خلال يومين",few:"خلال {0} أيام",many:"خلال {0} يومًا",other:"خلال {0} يوم"},past:{zero:"قبل {0} يوم",one:"قبل يوم واحد",two:"قبل يومين",few:"قبل {0} أيام",many:"قبل {0} يومًا",other:"قبل {0} يوم"}}},hour:{displayName:"الساعات",relative:{0:"الساعة الحالية"},relativeTime:{future:{zero:"خلال {0} ساعة",one:"خلال ساعة واحدة",two:"خلال ساعتين",few:"خلال {0} ساعات",many:"خلال {0} ساعة",other:"خلال {0} ساعة"},past:{zero:"قبل {0} ساعة",one:"قبل ساعة واحدة",two:"قبل ساعتين",few:"قبل {0} ساعات",many:"قبل {0} ساعة",other:"قبل {0} ساعة"}}},minute:{displayName:"الدقائق",relative:{0:"هذه الدقيقة"},relativeTime:{future:{zero:"خلال {0} دقيقة",one:"خلال دقيقة واحدة",two:"خلال دقيقتين",few:"خلال {0} دقائق",many:"خلال {0} دقيقة",other:"خلال {0} دقيقة"},past:{zero:"قبل {0} دقيقة",one:"قبل دقيقة واحدة",two:"قبل دقيقتين",few:"قبل {0} دقائق",many:"قبل {0} دقيقة",other:"قبل {0} دقيقة"}}},second:{displayName:"الثواني",relative:{0:"الآن"},relativeTime:{future:{zero:"خلال {0} ثانية",one:"خلال ثانية واحدة",two:"خلال ثانيتين",few:"خلال {0} ثوانٍ",many:"خلال {0} ثانية",other:"خلال {0} ثانية"},past:{zero:"قبل {0} ثانية",one:"قبل ثانية واحدة",two:"قبل ثانيتين",few:"قبل {0} ثوانِ",many:"قبل {0} ثانية",other:"قبل {0} ثانية"}}}}},{locale:"ar-BH",parentLocale:"ar"},{locale:"ar-DJ",parentLocale:"ar"},{locale:"ar-DZ",parentLocale:"ar"},{locale:"ar-EG",parentLocale:"ar"},{locale:"ar-EH",parentLocale:"ar"},{locale:"ar-ER",parentLocale:"ar"},{locale:"ar-IL",parentLocale:"ar"},{locale:"ar-IQ",parentLocale:"ar"},{locale:"ar-JO",parentLocale:"ar"},{locale:"ar-KM",parentLocale:"ar"},{locale:"ar-KW",parentLocale:"ar"},{locale:"ar-LB",parentLocale:"ar"},{locale:"ar-LY",parentLocale:"ar"},{locale:"ar-MA",parentLocale:"ar"},{locale:"ar-MR",parentLocale:"ar"},{locale:"ar-OM",parentLocale:"ar"},{locale:"ar-PS",parentLocale:"ar"},{locale:"ar-QA",parentLocale:"ar"},{locale:"ar-SA",parentLocale:"ar"},{locale:"ar-SD",parentLocale:"ar"},{locale:"ar-SO",parentLocale:"ar"},{locale:"ar-SS",parentLocale:"ar"},{locale:"ar-SY",parentLocale:"ar"},{locale:"ar-TD",parentLocale:"ar"},{locale:"ar-TN",parentLocale:"ar"},{locale:"ar-YE",parentLocale:"ar"}]}()}}]);
//# sourceMappingURL=ar-translations-935442c5630d9efaac20.js.map