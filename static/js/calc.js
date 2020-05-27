    function removerAcentos(s) {
        return s.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    }

        //Requisição AJAX
        var nomes_guerra;
        if (document.getElementById("nome_guerra")!="") {
            var HttpNomeGuerra = new XMLHttpRequest();
            //TODO: Definir como se dará o request. Simulando com um JSON
            HttpNomeGuerra.open("GET", '/nomes_guerra/static/js/dados.js');
            HttpNomeGuerra.responseType="text";
            HttpNomeGuerra.send();

            HttpNomeGuerra.onreadystatechange = (e) => {
                  nomes_guerra = JSON.parse(HttpNomeGuerra.responseText);
                  nomes_guerra = nomes_guerra.map(function (num) {return removerAcentos(num)})
            }
         }

    function createAlias() {
        //Definição de variáveis
        var arr_names = [];
        var arr_obj = [];
        var select_box = document.getElementById("nome_guerra");
        var full_name = document.getElementById("nome_completo").value;


        //Limpar caixa de seleção
        select_box.innerHTML = ""
        full_name = full_name.replace(/ {1,}/g," ");
        var names = full_name.toUpperCase().split(" ");
        var names_len = names.length;

        names.forEach(name => {
            if (name.length > 1) {
                arr_obj.push({name : name, long : ((name.length > 3)? true:false)})
                // COmposiçao imediata com nomes próprios
                if (name.length > 3) {
                    arr_names.push(name)
                }
            }
        })
        // COmposiçao com letra do primeiro nome e sobrenome
        for (c=0 ; c < arr_obj.length - 1 ; c++) {
            if (arr_obj[c].long){
                for (i=c ; i < arr_obj.length - 1 ; i++) {
                    if (arr_obj[i+1].long){
                        // Composiçao com primeira letra do nome/sobrenome e sobrenome seguinte
                        arr_names.push(arr_obj[c].name[0]+". "+arr_obj[i+1].name)
                        // Composiçao com nome/sobrenome e sobrenome seguinte
                        arr_names.push(arr_obj[c].name+" "+arr_obj[i+1].name)
                    }
                }
            }
            else {
                for (i=c ; i < arr_obj.length - 1 ; i++) {
                    if (arr_obj[i+1].long){
                        arr_names.push(arr_obj[c].name+" "+arr_obj[i+1].name)
                    }
                }
            }
        }
        arr_names.forEach(name => {
            if (!nomes_guerra.includes(removerAcentos(name))) {
                select_box.options[select_box.options.length] = new Option (name)
            }
        })
    }