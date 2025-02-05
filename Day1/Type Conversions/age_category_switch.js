let age = 25;

switch (true) {
    case (age <= 12):
        console.log("child");
        break;
    case (age >= 13 && age <= 18):
        console.log("teen");
        break;
    default:
        console.log("adult");
}
