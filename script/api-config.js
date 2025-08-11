  var baseUrlApi = 'http://localhost:8090';
	var readMovieUrl = baseUrlApi + "/movie/datatable";
    var readMovieStatusUrl = baseUrlApi + "/movie-status/allstatus";
    var readMovieTypeUrl = baseUrlApi + "/movie-types/alltypes";
	var readMovLanguageUrl = baseUrlApi + "/languages/alllangugage";
	var readMovSummaryByIdURl = baseUrlApi + "/movie/moviebyId?id=";
	var readActorsBylanIdUrl = baseUrlApi +"/movie-person/movie_by_languagae?id=";
	var readMovieRolesUrl = baseUrlApi + "/roles-in-movie/getAllRole";
	var addMovieRoleUrl   =   baseUrlApi + "/roles-in-movie/addRoleInMovie"
	var addMovieUrl =  baseUrlApi + "/movie/addMovie"
	var readActorInMovByMovIdUrl = baseUrlApi  + "/actors-in-movie/actorsInMovieById?id=";
	var addActorInMovieUrl = baseUrlApi  + "/actors-in-movie/addMovieActor";
    var deleteActorInMovieUrl = baseUrlApi  + "/actors-in-movie/deleteMoviePlay?id=";
	var readShareTypeByMovIdUrl = baseUrlApi  + "/share-types/movie/" ;
	var addUpdateShareTypeUrl = baseUrlApi + "/share-types/updateInsert/";
	var deleteShareTypeUrl = baseUrlApi + "/share-types/deleteShareType/";
	var readMovieEintyByMovIdUrl = baseUrlApi + "/movie/entity/moviebyId?id=";
    var dataTablePromotionTypeUrl = baseUrlApi  + "/promotion-types/page";
	var readPromoByIdUrl =  baseUrlApi  + "/promotion-types/promotionType/";
    var upateInsertPromoTypeUrl =  baseUrlApi  + "/promotion-types/insertUpdate";
    var deletePromoByIdUrl   = baseUrlApi + "/promotion-types/deleteBromoType/";
	var readAllPromoTypeUrl = baseUrlApi  + "/promotion-types/findAll";
	var dataTableRewardUrl =  baseUrlApi  + "/reward-types/page";
    var insertRewardTypeUrl = baseUrlApi  + "/reward-types/insert";
    var readRewardByIdUrl = baseUrlApi  + "/reward-types/rewards/";
	var updateRewardUrl = baseUrlApi  + "/reward-types/update/";
    var deleteRewardByIdUrl =  baseUrlApi +"/reward-types/delete/";
	var dataTableOfferTypeUrl = baseUrlApi + "/offertypes/paged"
	var insertOfferTypeUrl = baseUrlApi  + "/offertypes/insert";
    var readOfferTypeByIdUrl = baseUrlApi  + "/offertypes/type/";
    var updateOfferTypeByIdUrl = baseUrlApi  + "/offertypes/update/";
	var deleteOfferTypeByIdUrl = baseUrlApi  + "/offertypes/delete/";
	var dataTableOfferUrl = baseUrlApi + "/offers/paged"
    var insertOfferUrl = baseUrlApi  + "/offers/insert";
	var readOfferByIdUrl = baseUrlApi  + "/offers/offerId/";
    var updateOfferByIdUrl = baseUrlApi  + "/offers/update/";
    var deleteOfferByIdUrl = baseUrlApi  + "/offers/delete/";
	var readAllOfferUrl = baseUrlApi  + "/offers/all";
    var readMovieBylangIdUrl = baseUrlApi + "/movie/language/"
    var readMovieOfferBymovIdUrl =  baseUrlApi   + "/offers/movieOffer/";
    var insertMovieShareOfferUrl = baseUrlApi   + "/offer-mappings/ ";
    var readMovieShareOfferByOfferIdUrl = baseUrlApi   + "/offer-mappings/readShareOffer/";
    var updateMovieShareOfferUrl = baseUrlApi   + "/offer-mappings/update/";
    var deleteMovieShareOfferUrl = baseUrlApi   + "/offer-mappings/delete/";
    var dataTablePromoCodeUrl = baseUrlApi + "/promo-codes/page"
	var readRewardByTypeIdUrl =  baseUrlApi +"/reward-types/rewardsbytype/";
    var inserrPromotionCodesUrl = baseUrlApi + "/promo-codes/create"
    var dataTablePromoRewardMapUrl =  baseUrlApi +  "/promotion-rewards-map/page/"
	var deleteRewardMapUrl = baseUrlApi   + "/promotion-rewards-map/delete/";
    var insertPromoCodeUrl = baseUrlApi   + "/promo-codes/createPromoCode";
	var updatePromoCodeUrl = baseUrlApi   + "/promo-codes/updatePromoCode";
    var deletePromoUrl =  baseUrlApi +  "/promo-codes/delete/"
    var dataTableUserInvestUrl =  baseUrlApi +  "/movieInvest/dataTableUserInvestment"
	var readInvestShareBymovIdUrl =  baseUrlApi +  "/movieInvest/readInvestbymovie/"
    var saveInvestStatusChangeUrl = baseUrlApi +  "/movieInvest/udpateStatus"
	var dataTableUserPayoutUrl =  baseUrlApi +  "/payout/dataTableUserPayout"
    var readInvestShareByShareIdUrl =  baseUrlApi +  "/movieInvest/readInvestbymoviebyshareId/"
    var readPayoutByuserIdAndMovIdUrl = baseUrlApi +  "/payout/readPayoutByUserIdAndMovieId/"
    var repayAlLreturnforMovieUrl = baseUrlApi +  "/payout/repayAlLreturnforMovie"
	var repayAlLreturnforShareUrl = baseUrlApi +  "/payout/repayAlLreturnforShare"
    var repayAllInvestedforShareUrl = baseUrlApi +  "/movieInvest/repayAllInvestedforShare"
    var dataTableUserUrl = baseUrlApi +  "/users/dataTableUsers"
	var updateUserStatus = baseUrlApi +  "/users/udpateStatus"
	var dataTableAnnounUrl = baseUrlApi +  "/announcements/dataTable"
	var insertAnnounUrl = baseUrlApi +  "/announcements/add"
    var deleteAnnounUrl = baseUrlApi +  "/announcements/delete/"
    var readAnnounUrl = baseUrlApi +  "/announcements/annoncebyid/"
    var updateAnnounUrl = baseUrlApi +  "/announcements/update/"
   	var dataTableInfluencerUrl = baseUrlApi +  "/influencers/dataTable"
    var insertInfluencerUrl = baseUrlApi +  "/influencers/add"
	var readInfluencerUrl = baseUrlApi +  "/influencers/influencerbyid/"
	var updateInfluencerUrl = baseUrlApi +  "/influencers/update/"
	var deleteInfluencerUrl = baseUrlApi +  "/influencers/delete/"
	var dataTablePartnerUrl = baseUrlApi +  "/partners/dataTable"
	var insertPartnerUrl = baseUrlApi +  "/partners/add"
    var readPartnerUrl = baseUrlApi +  "/partners/read/"
    var updatePartnerUrl = baseUrlApi +  "/partners/update/"
	 var deletePartnerUrl = baseUrlApi +  "/partners/delete/"
	var dataTableSettingUrl = baseUrlApi +  "/settings/dataTable"
    var insertSettingUrl = baseUrlApi +  "/settings/add"
	var readSettingUrl = baseUrlApi +  "/settings/read/"
	var updateSettingUrl = baseUrlApi +  "/settings/update/"
    var deleteSettingUrl = baseUrlApi +  "/settings/delete/"
	var readSettingGroupUrl = baseUrlApi +  "/settings/readGroup"
	var dataTableAuditUrl = baseUrlApi +  "/audit/dataTable"
	var readAuditEntityGroupUrl = baseUrlApi +  "/audit/readGroupEntity"
    var dataTableActorUrl = baseUrlApi + "/movie-person/dataTable"
    var readactorRolesUrl = baseUrlApi + "/movie-person-role/allRole";
    var insertActorUrl = baseUrlApi +  "/movie-person/add"
    var readActorUrl = baseUrlApi +  "/movie-person/read/"
	var updateActorUrl = baseUrlApi +  "/movie-person/update/"
	var deleteActorUrl = baseUrlApi +  "/movie-person/delete/"
	var dashBoadReadUrl = baseUrlApi + "/dashboard/readDashBoard"
	var dashBoardChartUrl = baseUrlApi + "/dashboard/dashBoardChart"
    var dataTableAdminUsersUrl = baseUrlApi + "/admin-users/dataTableAdminUsers"
	var insertAdminUsersUr = baseUrlApi +  "/admin-users/create"
    var readAdminByIdUrl = baseUrlApi +  "/admin-users/read/"
	var updateAdminUrl = baseUrlApi +  "/admin-users/update/"
    var deleteAdminUserUrl = baseUrlApi +  "/admin-users/delete/"
	var readAdminRolesUrl = baseUrlApi +  "/roles/allRoles"
	var adminLoginVerifyUrl =  baseUrlApi +  "/login/web/login"	
	var validateTokenUrl =  baseUrlApi + "/login/web/verify-token";
    var validateRefreshTokenUrl =  baseUrlApi + "/login/web/refresh-token";
    var moviePayoutMovieDetailUrl =  baseUrlApi + "/movie-profit/investment-summary/";
    var moviePayoutCalculateUrl =  baseUrlApi + "/movie-profit/calculate";
    var moviePayoutStatusUrl =  baseUrlApi + "/movie-profit/movieProfitStatus/";
    var initiateMoviePayoutUrl =  baseUrlApi + "/movie-profit/initiateMoviePayout";
    var initiateMovieReadHistoryUrl =  baseUrlApi + "/movie-profit/movieProfitStatusHistory/";
    var updateMovieStatusReadHistoryUrl =  baseUrlApi + "/movie-profit/updateStatus";
    var resheduleProfitSummaryFailureUrl =  baseUrlApi + "/movie-profit/resheduleProfitSummaryFailure";
    var dataTableUserPayoutInitiationUrl  = baseUrlApi + "/payoutInitiation/dataTableUserPayoutInitiation";
    var readPayoutInitiationByuserIdAndMovIdUrl = baseUrlApi +  "/payoutInitiation/readPayoutInitiationByUserIdAndMovieId/"


	
	
	function getBasePathxy() {
 const path = window.location.pathname;  // e.g., /filmbit/adminPanel.html
    const projectName = path.split('/')[1]; // 'filmbit'
    
    if (projectName) {
        return '/' + projectName + '/';     // => '/filmbit/'
    } else {
        return '/';                         // fallback to root
    }
}