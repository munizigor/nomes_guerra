    if (document.getElementById("itMesPagto")!=null) {
        var HttpPgto = new XMLHttpRequest();
        var mespgto;
        HttpPgto.open("GET", '/dep/mesfolha/');
        HttpPgto.responseType="text";
        HttpPgto.send();

        HttpPgto.onreadystatechange = (e) => {
              mespgto = JSON.parse(HttpPgto.responseText);
              document.getElementById("itMesPagto").value = mespgto[1].toUpperCase();
              diapgto = new Date(mespgto[0]).toUTCString();
         }
     }
    function createAlias() {
        var names = [];
        var select_box = document.getElementById("nome_guerra");
        var full_name = document.getElementById("nome_completo").value;

        select_box.innerHTML = ""
        names = full_name.split(" ")
        names.forEach(name => {
            select_box.options[select_box.options.length] = new Option (name)
        })
    }