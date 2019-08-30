({
    doInit : function(component, event, helper) {
        var tilesMenu = [];
        var obj = {};
        obj.tileLabel = 'Member Maintenace';
        obj.communityPage = 'membermaintenance';
        obj.iconName = 'standard:service_crew';
        tilesMenu.push(obj);
        var obj2 = {};
        obj2.tileLabel = 'Pay Bills';
        obj2.communityPage = 'billpay';
        obj2.iconName = 'standard:currency';
        tilesMenu.push(obj2);
        var obj3 = {};
        obj3.tileLabel = 'Policy Documents';
        obj3.communityPage = 'policydocuments';
        obj3.iconName = 'standard:service_crew';
        tilesMenu.push(obj3);
        component.set("v.tilesMenu",tilesMenu);
	},
	handleClick : function(component, event, helper) {
        var id = event.target.parentNode.dataset.menuItemId;
		console.log('working so far');
        console.log(id);
        /*var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
          "url": id,
            "isredirect":true
        });
        urlEvent.fire();*/
        component.find("navService").navigate({
            type: "comm__namedPage",
            attributes: {
                pageName: id 
            }
        });
	},
})
