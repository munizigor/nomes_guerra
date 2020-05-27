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



        //Definição de cada nome no array
//        arr_names[0] = function () {return names[0]}
//
//        arr_names[1] = function () {return ((names[1].length > 3) ? names[1]:names[2])}
//
//        arr_names[2] = function () {
//            if (names_len < 3) {
//                return names[0][0]+". "+ names[1]
//            }
//            else if (names[1].length <= 3) {
//                return names[0]+" "+ names[2]
//            }
//            else if (names[2].length > 3) {
//                return names[2]
//            }
//            else if (names[3].length > 3) {
//                return names[3]
//            }
//            else {
//                return
//            }
//        }
//
//        arr_names[3] = function () {
//            if (names[names_len-1] > 1 && names[names_len-2] > 1) {
//                return names[names_len-2]+" "+ names[names_len-1]
//            }
//            else {
//                return names[0]+" "+ names[1]
//            }
//        }
//
//        if (names_len > 2) {
//            arr_names[4] = function () {
//                if (names[names_len-1] > 1 && names[names_len-2] > 1) {
//                    return names[names_len-2]+" "+ names[names_len-1]
//                }
//                else {
//                    return names[0]+" "+ names[1]
//                }
//            }
//        }

//        names[3]

//        names[4]

//        names[5]

//        names[6]

//        names[7]

        arr_names.forEach(name => {
            select_box.options[select_box.options.length] = new Option (name)
        })
    }