function op(m)
{
    var stockprice=[][], payoff=[][];

        var n=parseInt(document.getElementById("n").value);
        var S=parseInt(document.getElementById("S").value);
        var K=parseInt(document.getElementById("K").value);
        var T=parseInt(document.getElementById("T").value);
        var r=parseInt(document.getElementById("r").value);
        var u=parseInt(document.getElementById("u").value);
        var d=parseInt(document.getElementById("d").value);


    var p=(Math.exp(1*r*T)-d)/(u-d)
    stockprice[0][0]=S
    for(var i=0; i<n; i++)
    {
        stockprice[i+1][j]=stockprice[j][i]*u;
        for(var j=0; j<=i; j++)
        {
            stockprice[i+1][j+1]=stockprice[j][i]*d;
        }
    }

    //var trace={x: xarray, y: yarray, type: 'scatter'};
    //Plotly.newPlot('div', [trace]);
    document.write("<p>Stock Price: "+for(var j=0; j<i; j++){for( var i=0; i<n; i++){stockprice[i][j]+"/n"}+" "});
}
function f(){
var n=document.getElementById("num").value;
var str="<meta name='viewport' content='width=device-width, initial-scale=1'><meta name='viewport' content='width=device-width, initial-scale=1'><link rel='stylesheet' href='style.css'><link rel='stylesheet' type='text/css' href='footer.css'><BODY BGCOLOR='black'><H1>REGRESSLYSER</H1><p>Enter the observation data: </p><p><FORM ID='form2' method='POST'>";
for(var i=0; i<n; i++)
{
    str=str+"<p>x"+i+"=<INPUT ID='x"+i+"' TYPE='NUMBER"+i+"' NAME='x"+i+"'> y"+i+"=<INPUT ID='y"+i+"' TYPE='NUMBER"+i+"' NAME='y"+i+"'></p>";
}
str=str+"<INPUT TYPE='submit' VALUE='Regress' ONCLICK='regress("+n+"); return false'></FORM></p><div class='footer'>&copy AARYAN DEORI</div></BODY>";
document.write(str);
}