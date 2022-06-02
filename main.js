pizza_list_array = [];

function getmenu()
	{    
        // Give the appropriate id name as pizza_name
        var item = document.getElementById("pizza_name").value; 
       
        //Add push() function to push item into array
        pizza_list_array.push(item);
        
        var remove_commas = pizza_list_array.join("<br># ");
        document.getElementById("display_menu").innerHTML =  "# " + remove_commas;
	}
menu_list_array = [ "Cheesy Margherita Supreme Pizza",                  
 "Meaty Madness Pizza",
 "Vegan and Volatile Pizza",
 "Crusty Crustacean Pizza",
 "Ultimate Italian Pizza", 
 "Foodies Flavor Custom Pizza"
]; //Add more Pizza item names

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion(){
    //Give the appropriate id name as add_item
	var item = document.getElementById("add_item").value;
    //Use the push() function to push the item into menu_list_array
    menu_list_array.     (item);
}
