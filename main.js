function getParagraph1()
{
    var inputs = [];
    document.getElementById("showParagraph1").innerHTML = inputs.join(". ");

    for(var i = 1 ; i <=6 ; i++)
    {
      inputs.push(document.getElementById("para1_input_box_1" + i).value);  
    }
}

function getParagraph2()
{
    document.getElementById("showParagraph2").innerHTML = inputs.join(". ");

    for(var i = 1 ; i <=6 ; i++)
    {
      inputs.push(document.getElementById("para2_input_box_1" + i).value);  
    }
}