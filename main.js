var images = ["family book.png","Medhansh.jpg","Dad.jpg","MOM.jpeg","Family.jpg","Uncle.jpg","aunt.jpg","cosin2.jpg","cosin3.jpg","Aunt2.jpg","cousin.JPG"];
var names = ["My Family Book","Medhansh Mamadge","Mahesh Mamadge","Ashwini Mamadge","My Family","Bharat Ige","Mahi Ige","Niyati Ige","Vihaan Mule","Anu Mamadge","Pritam Mamadge"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 10
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}


var images1 = ["family book.png","Medhansh.jpg","Dad.jpg","MOM.jpeg","Family.jpg","Uncle.jpg","aunt.jpg","cosin2.jpg","cosin3.jpg","Aunt2.jpg","cousin.JPG"];
var names1 = ["My Family Book","Medhansh Mamadge","Mahesh Mamadge","Ashwini Mamadge","My Family","Bharat Ige","Mahi Ige","Niyati Ige","Vihaan Mule","Anu Mamadge","Pritam Mamadge"];
var j = 10;
function update1()
{
    j = j - 1;
    var numbers_of_family_member_in_array = 10
    if(j > numbers_of_family_member_in_array)
      {
          j =10;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images1[j]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names1[j]] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
