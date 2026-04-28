sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"empdetails/test/integration/pages/employeeList",
	"empdetails/test/integration/pages/employeeObjectPage"
], function (JourneyRunner, employeeList, employeeObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('empdetails') + '/test/flp.html#app-preview',
        pages: {
			onTheemployeeList: employeeList,
			onTheemployeeObjectPage: employeeObjectPage
        },
        async: true
    });

    return runner;
});

