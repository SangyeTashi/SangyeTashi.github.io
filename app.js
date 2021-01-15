var profile = $(".profile");
var profilePicture = $(".profile__picture");
var profileName = $(".profile__name");
var navList = $(".nav__list");
$("button").on("click", () => {
    profile.toggleClass("profile--mini");
    profilePicture.toggleClass("profile__picture--mini");
    profileName.toggleClass("profile__name--mini");
    navList.toggleClass("nav__list--mini");
    $("#navbar__nav").toggleClass("navbar__nav");
    $(".nav").toggleClass("nav--mini");
});