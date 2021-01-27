var Budget= prompt("What is your Budget?");

var flowertype;

if ( Budget<=30 && Budget>15 ) 
{
    flowertype = "Daisies";
} 
else if (Budget>30 && Budget<50) 
{
    flowertype = "Garden Roses";
} 
else if (Budget>=50 && Budget<100) 
{
    flowertype = "Tulips";
}
 else if (Budget == 0)
{
    flowertype = "Error";
} 
else 
{  
    flowertype = "Any";
} 

document.write(flowertype);
confirm("Are you satisfied with service provided?");
alert("Thank you for shopping with us");