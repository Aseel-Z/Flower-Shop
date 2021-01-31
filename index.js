var favflower = prompt('What is your favorite flower (Daisy/Rose/Tulip)?');
var BouquetNo = prompt("How many Bouquets do you want?");
while (favflower !== "Daisy" && favflower !== "Rose" && favflower !== "Tulip") {
    favflower = prompt('What is your favorite flower (Daisy/Rose/Tulip)?');}
var flowerimage;
var numberofimages = ''

function FinalResult (favflower,BouquetNo){
    
    if (favflower == "Daisy") {
        flowerimage = '<img src="Images/Daisy.jpg"/>';
    }
    else if (favflower == "Rose") {
        flowerimage = '<img src="Images/Roses.jpg"/>';}
    else if (favflower == "Tulip") {
        flowerimage = '<img src="Images/Tulip.jpg"/>';}

  
    for (let i = 0; i < BouquetNo; i++) {
        numberofimages = numberofimages + flowerimage;}

    return numberofimages
}

FinalResult (favflower,BouquetNo)
document.write(numberofimages);
confirm("Are you satisfied with our service?");
alert("Thank you for shopping with us");









// var favflower = prompt('What is your favorite flower (Daisy/Rose/Tulip)?');

// while (favflower !== "Daisy" && favflower !== "Rose" && favflower !== "Tulip") {
//     favflower = prompt('What is your favorite flower (Daisy/Rose/Tulip)?');
// }

// var flowerimage;
// if (favflower == "Daisy") {
//     flowerimage = '<img src="Images/Daisy.jpg"/>';
// }
// else if (favflower == "Rose") {
//     flowerimage = '<img src="Images/Roses.jpg"/>';}
// else if (favflower == "Tulip") {
//     flowerimage = '<img src="Images/Tulip.jpg"/>';}

// var BouquetNo = prompt("How many Bouquets do you want?");

// var numberofimages = ''
// for (let i = 0; i < BouquetNo; i++) {
//     numberofimages = numberofimages + flowerimage;}
// document.write(numberofimages);


// confirm("Are you satisfied with our service?");
// alert("Thank you for shopping with us");