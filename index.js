$(".over").hide();    //dialog box hide
$("#succ").hide();    //success notification hide
$("#err").hide();  //error_notification_hide


//notification function
let notification=(target,message)=>{

                                    $(target).html(message);
                                    $(target).slideDown('slow');   //notification_show
                                    setTimeout(()=>{
                                                   $(target).slideUp('slow');  //after 4 sec notification off
                                                   },4000);

                                  }
                                  


//read 
var load=function(){
        $("#getRecord").html("");
         var cont="";
         $.ajax({       
                       url:"http://localhost/restapicrud/read.php",
                       type:"POST",
                       success:data=>{
                                       if(data.status=="false")
                                       {
                                           alert(status.message);
                                       }
                                       else
                                       {
                                           let i=1;
                                           $("#getRecord").append('<table class="table table-bordered table-striped border-dark table-hover newt"><thead class="table-primary border-dark">'
                                                                 +'<tr>'
                                                                 +'<th scope="col">Id</th>'
                                                                  +'<th scope="col">Full Name</th>'
                                                                   +'<th scope="col">Delete</th>'
                                                                   +'<th scope="col">Edit</th>'
                                                                     +'</tr>'
                                                                     +'</thead>'
                                                                     +'<tbody id="et"></tbody></table>'
                                                                     +'<a href="" id="load" class="btn btn-success btn-lg btn-block" value="load more.." style="margin-top:35px;" >load more..</a>'
                                                                     );


                                           $.each(data,(key,value)=>{                                            
                                                   $("#et").append('<tr>'
                                                                    +'<th scope="row">'+i+'</th>'
                                                                    +'<td>'+value.fname+'&nbsp;'+value.lname+'</td>'
                                                                    +'<input type="hidden" class="idr" value="">'
                                                                    +'<td><a class="del btn btn-danger" href="" data-did="'+value.id+'" >Delete</a></td>'
                                                                    +'<td><a class="ed btn btn-success" href=""  data-eid="'+value.id+'" >Edit</a></td>'
                                                                    +'</tr>'
                                                                    +'</tbody>'
                                                                    );

                                                                    $("#dr").val(2);

                                               i++;             
                                               
                                               $("#dr2").val(i);

                                              
                                      
                                               
                                           });

                                       }

                                    
                                 }

                    });

             }



load();


 //insert

 
 
 $("#submit").on("click",function(e)   //submit button click
 {
    let rec=$("#trp").serializeArray();
    let object={};
    for(let i=0;i<rec.length;i++)
    {
       object[rec[i].name]=rec[i].value;
                    
    }
    jsondata=JSON.stringify(object);       //object to Json
    e.preventDefault();
    if($("#fname").val()=="" || $("#lname").val()=="")
    {
        notification("#err","Please! fill All fields");   //notification function call
    }
    else{
    $.ajax({
            url:"http://localhost/restapicrud/insert.php",
            type:"POST",
            data:jsondata,
            success:function(data){
                if(data.status==true)
                {
                    load();
                    notification("#succ",data.message);    //notification function call
                    $("#trp").trigger('reset',true);
                }
                else
                {
                    notification("#err",data.message);   //notification function call
                    alert('something wrong'+data);

                }
            }


    });
}




 });
 


//load more

$(document).on("click","#load",function(e)
{
e.preventDefault();

var pg=$("#dr").val();
var inc=$("#dr2").val();
var el=this;

$.ajax({
         
        url:"http://localhost/restapicrud/read.php?page="+pg,
        beforeSend:()=>{                                          //function for loading b/w data send
                      $(el).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style="position:relative;top:-3px;"></span>&nbsp;Loading...');
                      $(el).addClass("disabled");
                      },
        success:data=>{
            $(el).html("load more..");
            $(el).removeClass("disabled");
            $.each(data,(key,value)=>{                             //function for load more data 
                if(value.fname!=undefined)
                {                                           
                $("#et").append('<tr>'
                                 +'<th scope="row">'+inc+'</th>'
                                 +'<td>'+value.fname+'&nbsp;'+value.lname+'</td>'
                                 +'<input type="hidden" class="idr" value="">'
                                 +'<td><a class="del btn btn-danger" href="" data-did="" >Delete</a></td>'
                                 +'<td><a class="ed btn btn-success" href=""  data-eid="" >Edit</a></td>'
                                 +'</tr>'
                                 +'</tbody>'
                                 );
                                 
                                
                              
           inc++;
           $("#dr2").val(inc);
                }
                else
                {
                    $(el).html("no more records!");
                    $(el).addClass('disabled');

                }
               
        });
        pg++;
        $("#dr").val(pg);           

        }

     });



});

$(document).ready(function()
{
$(document).on("click",".ed",function(e)
{
e.preventDefault();
$(".over").fadeIn('slow');

$(".close").on('click',function()
{

$(".over").fadeOut('slow');

});
var tre=this;
var aj=()=>{
var getv=$(tre).data("eid");
var dtj={id:getv};
var jsn=JSON.stringify(dtj);




    $.ajax({
        url:"http://localhost/restapicrud/single-read.php",
        type:"POST",
        data:jsn,
        success:data=>{
                        $("#ufname").val(data[0].fname);
                        $("#ulname").val(data[0].lname);
                        


        }
        

       });

    }

    aj();

    var getv=$(tre).data("eid");
    
    $("#update").on("click",function(e)
    {
     var lastname=$("#ulname").val();
     var firstname=$("#ufname").val();   
     e.preventDefault();
     if(firstname!="" || lastname!="")
     {
     var objt={fname:firstname,lname:lastname,id:getv};
     jsnf=JSON.stringify(objt);

     $.ajax({
             url:"http://localhost/restapicrud/update.php",
             type:"POST",
             data:jsnf,
             success:data=>{
                             if(data.status==true)
                             {
                               notification("#succ",data.message);
                               $(".over").fadeOut('slow');
                               load();
                             }
                             else
                             {
                                notification("#err",data.message);
                             }
             }

    });
     }
     else
     {
         notification("#err","please! fill all fields");
     }

});



});

});


$(document).on("click",".del",function(e)
{
var element=this;
e.preventDefault();
var getdid=$(this).data("did");
var ob={id:getdid};
var njsn=JSON.stringify(ob);
$.ajax({
        url:"http://localhost/restapicrud/delete.php",
        type:"DELETE",
        data:njsn,
        success:data=>{

                    if(data.status==false)
                    {
                     notification("#err",data.message);

                    }
                    else
                    {
                        notification("#succ",data.message);
                        $(this).closest("tr").fadeOut('slow');
                        setTimeout(function()
                        {
                         load();
                        },600);
                    }

        }


    });

});

   
$("#search").on("keyup",function()
{
$("#getRecord").html("");
var newel=this;
$serch_term=$("#search").val();

$.ajax({
          
     url:"http://localhost/restapicrud/search.php?search="+$serch_term,
     type:"GET",
     success:data=>{
                    if(data.status==false)
                    {
                      $("#getRecord").html("<h4 style='margin-top:25px;'>"+data.message+"</h4>");
                    }
                    else
                    {   
                        $("#getRecord").append('<table class="table table-bordered table-striped border-dark table-hover newt"><thead class="table-primary border-dark">'
                        +'<tr>'
                        +'<th scope="col">Id</th>'
                         +'<th scope="col">Full Name</th>'
                          +'<th scope="col">Delete</th>'
                          +'<th scope="col">Edit</th>'
                            +'</tr>'
                            +'</thead>'
                            +'<tbody id="mt">'
                            +'</tbody></table>'

                        );

                        var i=1;
                        $.each(data,(key,value)=>{                                            

                        $("#mt").append('<tr>'
                            +'<th scope="row">'+i+'</th>'
                            +'<td>'+value.fname+'&nbsp;'+value.lname+'</td>'
                            +'<input type="hidden" class="idr" value="">'
                            +'<td><a class="del btn btn-danger" href="" data-did="'+value.id+'" >Delete</a></td>'
                            +'<td><a class="ed btn btn-success" href=""  data-eid="'+value.id+'" >Edit</a></td>'
                            +'</tr>'
                            );
                            i++;
                        });
                          
     }

}
});

});

