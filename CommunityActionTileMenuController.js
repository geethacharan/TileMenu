({
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
	}
})