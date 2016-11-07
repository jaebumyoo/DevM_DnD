export default function(userService){

    const dash = this;

    dash.currentUser = userService.user;
    dash.campaigns = [];

    dash.getCampaigns = () => {
        for(let i = 0; i < dash.currentUser.campaigns; i++){
            userService.getUserCampaigns(dash.currentUser.campaigns[i]._id)
                .then(campaign => {
                    dash.campaigns.push(campaign);
                });
        }
    }

    dash.getCampaigns();

}
