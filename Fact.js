html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Factorial</h1>
        <form action="factorial.jsp">
            Enter Name:<input type="text" name="num">
            <br>
            <input type="submit" value="Factorial">
            </form>
      
         <%     String input=request.getParameter("num");
            int i,n;
            long f=1;
           
            if(input!=null && ! input.isEmpty()){
                try{
                 n=Integer.parseInt(input);
            for(i=2;i<=n;i++){
                f*=i;
            }
            %>
    <p>Factorial of <%=n%> is <%=f%></p> 
         <%   
                }
                catch(NumberFormatException e){
                %>
                <p>Enter valid number</p>
                <%
               }
}
                    
                   %>
    </body>
</html>
