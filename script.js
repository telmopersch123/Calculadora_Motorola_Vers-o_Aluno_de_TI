// ------ RESTRUTURAÇÃO DE CÓDIGO -------------//
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const date = new Date().toLocaleTimeString();
let select = document.getElementById('select-list');
let option = document.createElement('option');
let option1 = document.createElement('option');
let Global = []
let verificador = []
let cVerif = false
let contand1 = 0
let prox = false
let pos3 = 0
let pos2 = 0
let cot1 = false
let cot = 0
let ray = false
let guard = 0
let Raiz2 = 0
let verif = false;
let lua = false
function abrir() {
  let form = document.getElementById('forme2');
  form.style.display = 'block'
}
function fechar() {
  let form = document.getElementById('forme2');
  form.style.display = 'none'
}
function adicionar_parametro(parametro) {
  let input = document.getElementById("inputAparenc");
  let par = document.getElementById
    ("parametroCalculado");
  par.style.color = 'black'
  if (parametro == '/' && Global.length == 0) {
    document.getElementById("inputAparenc").value = 0
  } else {
    if (parametro == '*' && Global.length == 0) {
      document.getElementById("inputAparenc").value = 0
    } else {
      if (parametro == '+' && Global.length == 0) {
        document.getElementById("inputAparenc").value = 0
      } else {
        verificador.push(parametro)

        if (Global[Global.length - 1] == '**' && verificador[verificador.length - 1] == '+') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('+')
        }
        if (Global[Global.length - 1] == '**' && verificador[verificador.length - 1] == '**') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('**')
        }
        if (Global[Global.length - 1] == '+' && verificador[verificador.length - 1] == '**') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('**')
        }
        if (Global[Global.length - 1] == '-' && verificador[verificador.length - 1] == '**') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('**')
        }

        if (Global[Global.length - 1] == '/' && verificador[verificador.length - 1] == '**') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('**')
        }
        if (Global[Global.length - 1] == '**' && verificador[verificador.length - 1] == '/') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('/')
        }
        if (Global[Global.length - 1] == '*' && verificador[verificador.length - 1] == '**') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('**')
        }
        if (Global[Global.length - 1] == '**' && verificador[verificador.length - 1] == '*') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('*')
        }
        if (Global[Global.length - 1] == '/' && verificador[verificador.length - 1] == '+') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('+')
        }
        if (Global[Global.length - 1] == '+' && verificador[verificador.length - 1] == '/') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('/')
        }
        if (Global[Global.length - 1] == '-' && verificador[verificador.length - 1] == '+') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('+')
        }
        if (Global[Global.length - 1] == '+' && verificador[verificador.length - 1] == '-') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('-')
        }
        if (Global[Global.length - 1] == '*' && verificador[verificador.length - 1] == '+') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('+')
        }
        if (Global[Global.length - 1] == '+' && verificador[verificador.length - 1] == '*') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('*')
        }
        if (Global[Global.length - 1] == '-' && verificador[verificador.length - 1] == '*') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('*')
        }
        if (Global[Global.length - 1] == '*' && verificador[verificador.length - 1] == '-') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('-')
        }
        if (Global[Global.length - 1] == '/' && verificador[verificador.length - 1] == '-') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('-')
        }
        if (Global[Global.length - 1] == '-' && verificador[verificador.length - 1] == '/') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('/')
        }
        if (Global[Global.length - 1] == '/' && verificador[verificador.length - 1] == '*') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('*')
        }
        if (Global[Global.length - 1] == '*' && verificador[verificador.length - 1] == '/') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('/')
        }
        if (Global[Global.length - 1] == '+' && verificador[verificador.length - 1] == '+') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);

          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('+')

        }
        if (Global[Global.length - 1] == '-' && verificador[verificador.length - 1] == '-') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('-')
        }
        if (Global[Global.length - 1] == '*' && verificador[verificador.length - 1] == '*') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('*')
        }
        if (Global[Global.length - 1] == '/' && verificador[verificador.length - 1] == '/') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          Global.pop()
          verificador.pop()
          verificador.pop()
          verificador.push('/')
        }

        pos2 = 0
        let ap = []
        while (pos2 < Global.length) {
          pos2++
          if (Global[Global.length - pos2] == '+' || Global[Global.length - pos2] == '-' || Global[Global.length - pos2] == '**' || Global[Global.length - pos2] == '*' || Global[Global.length - pos2] == '(' || Global[Global.length - pos2] == ')' || Global[Global.length - pos2] == '%' || Global[Global.length - pos2] == '/') {
            ap.push(pos2)
          }
        }

        if (parametro == '.') {
          pos3 = 0
          while (pos3 < ap[0]) {
            pos3++
            if (Global[Global.length - pos3] == '.') {
              cot1 = false
              ap[0] = pos3
            } else {
              cot1 = true
              cot = 0
            }
          }
          if (Global.indexOf('+') == -1 && Global.indexOf('-') == -1 && Global.indexOf('**') == -1 && Global.indexOf('%') == -1 && Global.indexOf('*') == -1 && Global.indexOf('/') == -1 && Global.indexOf('(') == -1 && Global.indexOf(')') == -1) {
            if (Global.indexOf('.') == -1) {
              cot1 = true
              cot = 0
            } else {
              cot1 = false
            }
          }

          if (cot == 0 && ray == false && cot1 == true) {
            ray == true
            cot = 3
            if (Global.length > 0) {
              Global.push('.')
              document.getElementById("inputAparenc").value += '.'
            }

            input.focus()
          } else {
            document.getElementById("inputAparenc").value += ''
            input.focus()
          }
        } else {
          Global.push(parametro)
          if (parametro == '*') {
            parametro = 'x'
          } else {
            if (parametro == '/') {
              parametro = '÷'
            }
          }
          document.getElementById("inputAparenc").value += parametro
          input.focus()
        }

        if (Global[Global.length - 1] == '+' && Global[Global.length - 2] == '(') {
          Global.pop()
          verificador.pop()
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
        }
        if (Global[Global.length - 1] == '*' && Global[Global.length - 2] == '(') {
          Global.pop()
          verificador.pop()
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
        }
        if (Global[Global.length - 1] == '/' && Global[Global.length - 2] == '(') {
          Global.pop()
          verificador.pop()
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
        }
        if (Global[Global.length - 1] == '**' && Global[Global.length - 2] == '(') {
          Global.pop()
          verificador.pop()
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
        }
        if (Global[Global.length - 1] != '+' && Global[Global.length - 1] != '-' && Global[Global.length - 1] != '/' && Global[Global.length - 1] != '*' && Global[Global.length - 1] != '**' && Global[Global.length - 2] == ')') {
          let input2 = input.value
          input.value = input2.substring(0, input2.length - 1);
          input.removeAttribute('disabled')
          input.value += '*'
          input.value += parametro
          Global.pop()
          Global.push('*')
          Global.push(parametro)
        }

        if (Global.length == 1) {
          input.style.color = 'white'
          input.value = parametro
        }
        if (Global.length > 0) {
          document.getElementById("parametroCalculado").value = ''
          document.getElementById("parametroCalculado").value = eval(Global.join(''))
          Raiz2 = document.getElementById("parametroCalculado").value
          guard = document.getElementById("parametroCalculado").value
        }
      }
    }
  }
  input.focus()
}
function numPorcentagem() {
  if (Global.length > 0) {
    let conta = guard + '/ 100'
    document.getElementById("inputAparenc").value = eval(conta)
    document.getElementById("parametroCalculado").value = eval(conta)
    Global = []
    Global.push(eval(conta))
  }
}
function elevado(parametro) {
  let input = document.getElementById("inputAparenc");
  if (Global.length == 0) {
    document.getElementById("inputAparenc").value = 0
  } else {
    parametro = '**'
    verificador.push(parametro)

    if (Global[Global.length - 1] == '**' && verificador[verificador.length - 1] == '**') {
      let input2 = input.value
      input.value = input2.substring(0, input2.length - 1);
      input.removeAttribute('disabled')
      Global.pop()
      verificador.pop()
      verificador.pop()
      verificador.push('**')
    }
    if (Global[Global.length - 1] == '**' && verificador[verificador.length - 1] == '+') {
      let input2 = input.value
      input.value = input2.substring(0, input2.length - 1);
      input.removeAttribute('disabled')
      Global.pop()
      verificador.pop()
      verificador.pop()
      verificador.push('+')
    }
    if (Global[Global.length - 1] == '+' && verificador[verificador.length - 1] == '**') {
      let input2 = input.value
      input.value = input2.substring(0, input2.length - 1);
      input.removeAttribute('disabled')
      Global.pop()
      verificador.pop()
      verificador.pop()
      verificador.push('**')
    }
    if (Global[Global.length - 1] == '-' && verificador[verificador.length - 1] == '**') {
      let input2 = input.value
      input.value = input2.substring(0, input2.length - 1);
      input.removeAttribute('disabled')
      Global.pop()
      verificador.pop()
      verificador.pop()
      verificador.push('**')
    }

    if (Global[Global.length - 1] == '/' && verificador[verificador.length - 1] == '**') {
      let input2 = input.value
      input.value = input2.substring(0, input2.length - 1);
      input.removeAttribute('disabled')
      Global.pop()
      verificador.pop()
      verificador.pop()
      verificador.push('**')
    }
    if (Global[Global.length - 1] == '**' && verificador[verificador.length - 1] == '/') {
      let input2 = input.value
      input.value = input2.substring(0, input2.length - 1);
      input.removeAttribute('disabled')
      Global.pop()
      verificador.pop()
      verificador.pop()
      verificador.push('/')
    }
    if (Global[Global.length - 1] == '*' && verificador[verificador.length - 1] == '**') {
      let input2 = input.value
      input.value = input2.substring(0, input2.length - 1);
      input.removeAttribute('disabled')
      Global.pop()
      verificador.pop()
      verificador.pop()
      verificador.push('**')
    }
    if (Global[Global.length - 1] == '**' && verificador[verificador.length - 1] == '*') {
      let input2 = input.value
      input.value = input2.substring(0, input2.length - 1);
      input.removeAttribute('disabled')
      Global.pop()
      verificador.pop()
      verificador.pop()
      verificador.push('*')
    }
    document.getElementById("inputAparenc").value += '^'
    Global.push('**')
    if (Global[Global.length - 1] == '**' && Global[Global.length - 2] == '(') {
      Global.pop()
      verificador.pop()
      let input2 = input.value
      input.value = input2.substring(0, input2.length - 1);
      input.removeAttribute('disabled')
    }
  }
}
function fatorial() {
  if (document.getElementById("inputAparenc").value != Infinity) {
    if (document.getElementById("parametroCalculado").value != Infinity) {
      if (Global.length > 0) {
        var fatorial = eval(Global.join(''))
        var resultado = fatorial;
        for (var i = 1; i < fatorial; i++) {
          resultado *= i;
        }
        document.getElementById("inputAparenc").value = resultado
        document.getElementById("parametroCalculado").value = resultado
        Global = []
        Global.push(resultado)
        if (document.getElementById("inputAparenc").value > 1000000 || document.getElementById("parametroCalculado").value > 1000000) {
          document.getElementById("inputAparenc").value = Infinity
          Global = []
          Global.push(Infinity)
        }
      }
    } else {
      alert('Valores inseridos são considerados infinitos')
    }
  } else {
    alert('Valores inseridos são considerados infinitos')
  }
}
function numPI() {
  if (document.getElementById("inputAparenc").value != Infinity) {
    if (document.getElementById("parametroCalculado").value != Infinity) {
      let input2 = document.getElementById("parametroCalculado").value
      let input = document.getElementById("inputAparenc");
      if (input.value == 0) {
        document.getElementById("inputAparenc").value = 3.141592653589793
        ValPI = document.getElementById("parametroCalculado").value = 3.141592653589793
      } else {
        let ValPI = Math.PI * input2
        document.getElementById("inputAparenc").value = ValPI
        document.getElementById("parametroCalculado").value = ValPI
        Global = []
        Global.push(ValPI)
      }
      input.style.color = 'white'
    } else {
      alert('Valores inseridos são considerados infinitos')
    }
  } else {
    alert('Valores inseridos são considerados infinitos')
  }
}
function numRaizQ() {
  if (Global.length > 0) {
    document.getElementById("inputAparenc").value = Math.sqrt(Raiz2)
    document.getElementById("parametroCalculado").value = ''
    document.getElementById("parametroCalculado").value = Math.sqrt(Raiz2)
    guard = Math.sqrt(Raiz2)
    Global = []
    Global.push((document.getElementById("parametroCalculado").value))
    Raiz2 = Math.sqrt(Raiz2)
  }
}
function aparec() {
  let divisao = document.getElementById('sumir-aparecer');
  let seta1 = document.getElementById('fa1');
  let seta2 = document.getElementById('fa2');
  if (prox == false) {
    divisao.style.display = 'block'
    seta1.style.display = 'none'
    seta2.style.display = 'block'
    prox = true
  }else{
    divisao.style.display = 'none'
    seta1.style.display = 'block'
    seta2.style.display = 'none'
    prox = false
  }

}
function numParents() {
  if (Global.length > 0) {
    let input = document.getElementById("inputAparenc");
    if (Global[Global.length - 1] == ')' && Global[Global.length - 2] == '(' && Global[Global.length - 3] == '*') {
      let par = document.getElementById("parametroCalculado");
      let input = document.getElementById("inputAparenc");
      input.style.color = 'red'
      document.getElementById("parametroCalculado").value = 'Parametros Inválidos'
      par.style.color = 'red'
    } else {
      let par = document.getElementById("parametroCalculado");
      let input = document.getElementById("inputAparenc");
      input.style.color = 'white'
      par.style.color = 'black'
    }
    if (Global[Global.length - 1] != ')' && Global[Global.length - 2] != '(' && Global[Global.length - 3] != '*') {

      if (Global.length == 0) { input.value = '' }
      input.style.color = 'white'
      contand1 = 0
      if (Global.indexOf('(') == -1) {
        cVerif = false
      }
      while (contand1 < Global.length) {
        contand1++
        if (Global[Global.length - contand1] == '(') {
          contand1 = Global.length
          cVerif = true
        }
        if (Global[Global.length - contand1] == ')') {
          contand1 = Global.length
          cVerif = false
        }
      }

      if (cVerif == false) {
        if (Global[Global.length - 1] != '+' && Global[Global.length - 1] != '-' && Global[Global.length - 1] != '*' && Global[Global.length - 1] != '/' && Global[Global.length - 1] != '**' && Global.length >= 1) {
          Global.push('*')
          verificador.push('*')
          document.getElementById("inputAparenc").value += '*'
        }
        Global.push('(')
        verificador.push('(')
        document.getElementById("inputAparenc").value += '('
        document.getElementById("parametroCalculado").value = eval(Global.join(''))
      }
      if (cVerif == true) {
        Global.push(')')
        verificador.push(')')
        document.getElementById("inputAparenc").value += ')'
        document.getElementById("parametroCalculado").value = eval(Global.join(''))
      }
      n = false
      input.focus()
    }
  }
}
function limpaTudo() {
  let input = document.getElementById("inputAparenc");
  document.getElementById("inputAparenc").value = 0
  document.getElementById("parametroCalculado").value = ''
  Global = []
  verificador = []
  cot = 0
  cool = false
  input.style.color = 'red'
}
function removerUm() {
  let input = document.getElementById("inputAparenc");
  Global.pop()
  verificador.pop()


  let input2 = input.value
  input.value = input2.substring(0, input2.length - 1);
  input.removeAttribute('disabled')

  let par = document.getElementById("parametroCalculado");
  input.style.color = 'white'
  par.style.color = 'black'
  document.getElementById("parametroCalculado").value = ''
  document.getElementById("parametroCalculado").value = eval(Global.join(''))

  guard = document.getElementById("parametroCalculado").value
  Raiz2 = document.getElementById("parametroCalculado").value

  if (Global.length == 0) {
    input.value = 0
    input.style.color = 'red'
    document.getElementById("parametroCalculado").value = ''

  }
}
function result() {
  if (document.getElementById("parametroCalculado").value != '') {
    verif = true
    document.getElementById("inputAparenc").value = eval(document.getElementById("parametroCalculado").value)
    Global = []
    Global.push(eval(document.getElementById("parametroCalculado").value))
    Raiz2 = document.getElementById("parametroCalculado").value
    guard = document.getElementById("parametroCalculado").value
    select = document.getElementById('select-list');
    option = document.createElement('option');
    option1 = document.createElement('option');
    option1.text += today.toLocaleDateString();
    option1.text += 'ﾠﾠ'
    option1.text += date
    option.text = document.getElementById("parametroCalculado").value
    option.style.padding = '0.5em'
    option1.style.opacity = '50%'
    option1.style.fontSize = '0.75em'
    option1.disabled = '$'
    select.appendChild(option1)
    select.appendChild(option)
    document.getElementById("parametroCalculado").value = ''
  }
  if (window.matchMedia("(max-width:600px)").matches) {
    if (lua == false) {
      option.style.color = 'white'
      option1.style.color = 'white'
    } else {
      option.style.color = 'black'
      option1.style.color = 'black'
    }
  }
}
function noPerm(e) {
  e.preventDefault();
}
function myFunction() {
  if (Global.length > 0 || verif == true) {
    input = document.getElementById("inputAparenc");
    input.style.color = 'white'
    document.getElementById("inputAparenc").value = select.options[select.selectedIndex].value
    document.getElementById("parametroCalculado").value = select.options[select.selectedIndex].value
    Raiz2 = select.options[select.selectedIndex].value
    guard = select.options[select.selectedIndex].value
    Global = []
    Global.push(select.options[select.selectedIndex].value)
  }
}

function apag_acend() {
  let sol_lua = document.getElementById('apagar');
  let botoes = document.getElementById('value01');
  let botoes0 = document.getElementById('value02');
  let botoes1 = document.getElementById('value03');
  let botoes2 = document.getElementById('value04');
  let botoes3 = document.getElementById('value05');
  let botoes4 = document.getElementById('value06');
  let botoes5 = document.getElementById('value07');
  let botoes6 = document.getElementById('value08');
  let botoes7 = document.getElementById('value09');
  let botoes8 = document.getElementById('value10');
  let botoes9 = document.getElementById('value11');
  let botoes10 = document.getElementById('value12');
  let botoes11 = document.getElementById('value13');
  let botoes12 = document.getElementById('value14');
  let botoes13 = document.getElementById('value15');
  let botoes14 = document.getElementById('value16');
  let botoes15 = document.getElementById('value17');
  let botoes16 = document.getElementById('value18');
  let botoes17 = document.getElementById('value19');
  let botoes18 = document.getElementById('value20');
  let botoes19 = document.getElementById('value21');
  let botoes20 = document.getElementById('value22');
  let botoes21 = document.getElementById('value24');
  let parteinferior = document.getElementById('selectId');
  let titulo = document.getElementById('titul');
  let fundo = document.getElementById('fundo');
  let select = document.getElementById('select-list');
  let footer = document.getElementById('rodape');
  let form = document.getElementById('form');

  if (!lua) {
    lua = true

    if (window.matchMedia("(max-width:600px)").matches) {
      select.style.background = '	#DCDCDC'
      option.style.color = 'black'
      option1.style.color = 'black'
      fundo.style.background = 'rgb(51, 76, 129, 0.200)'
      parteinferior.style.background = 'rgb(51, 76, 129, 0.00)'
      document.body.style.background = 'rgb(51, 76, 129, 0.200)'
      sol_lua.style.backgroundImage = 'url(https://img.icons8.com/cotton/344/sun--v2.png)'

    } else {
      form.style.background = 'rgba(0, 0, 0, 0.703)'
      form.style.color = 'rgb(238, 231, 231)'
      document.body.style.background = 'rgb(238, 231, 231)'
      titulo.style.background = 'rgba(0, 0, 0, 0.703)'
      select.style.background = 'rgb(51, 76, 129, 0.700)'
      fundo.style.background = 'rgb(51, 76, 129, 0.700)'
      parteinferior.style.background = 'rgb(51, 76, 129)'
      footer.style.background = 'rgba(0, 0, 0, 0.753)'
      footer.style.color = 'rgb(238, 231, 231)'
      sol_lua.style.backgroundImage = 'url(https://cdn-icons-png.flaticon.com/512/5538/5538387.png)'
    }
    botoes.style.background = 'rgba(0, 0, 0, 0.251)'
    botoes0.style.background = 'rgba(0, 0, 0, 0.251)'
    botoes1.style.background = 'rgba(0, 0, 0, 0.251)'
    botoes2.style.background = 'rgba(0, 0, 0, 0.251)'
    botoes3.style.background = '#116d11'
    botoes4.style.background = 'rgba(0, 0, 0, 0.645)'
    botoes5.style.background = 'rgba(0, 0, 0, 0.645)'
    botoes6.style.background = 'rgba(0, 0, 0, 0.645)'
    botoes7.style.background = 'rgba(0, 0, 0, 0.451)'
    botoes8.style.background = 'rgba(0, 0, 0, 0.451)'
    botoes9.style.background = 'rgba(0, 0, 0, 0.451)'
    botoes10.style.background = 'rgba(0, 0, 0, 0.645)'
    botoes11.style.background = 'rgba(0, 0, 0, 0.451)'
    botoes12.style.background = 'rgba(0, 0, 0, 0.451)'
    botoes13.style.background = 'rgba(0, 0, 0, 0.451)'
    botoes14.style.background = 'rgba(0, 0, 0, 0.645)'
    botoes15.style.background = 'rgba(0, 0, 0, 0.451)'
    botoes16.style.background = 'rgba(0, 0, 0, 0.451)'
    botoes17.style.background = 'rgba(0, 0, 0, 0.451)'
    botoes18.style.background = 'rgba(0, 0, 0, 0.645)'
    botoes19.style.background = 'rgba(0, 0, 0, 0.451)'
    botoes20.style.background = 'rgba(0, 0, 0, 0.451)'
    botoes21.style.background = 'rgb(34, 34, 117)'
  } else {
    lua = false

    if (window.matchMedia("(max-width:600px)").matches) {
      option.style.color = 'white'
      option1.style.color = 'white'
      select.style.background = 'rgb(28, 38, 56)'
      fundo.style.background = 'rgba(0, 0, 0, 0.24)'
      parteinferior.style.background = 'rgb(27, 43, 73)'
      document.body.style.background = 'rgb(27, 43, 73)'
      sol_lua.style.backgroundImage = 'url(https://img.icons8.com/dusk/344/waning-gibbous.png)'
    } else {
      document.body.style.background = 'rgb(44, 53, 71)'
      titulo.style.background = 'rgba(0, 0, 0, 0.137)'
      select.style.background = 'rgb(28, 38, 56)'
      fundo.style.background = 'rgba(0, 0, 0, 0.24)'
      parteinferior.style.background = 'rgb(27, 43, 73)'
      form.style.background = 'rgba(0, 0, 0, 0.124)'
      form.style.color = 'white'
      footer.style.background = 'rgb(27, 43, 73)'
      footer.style.color = 'rgba(255, 255, 255, 0.075)'
      sol_lua.style.backgroundImage = 'url(https://cdn-icons-png.flaticon.com/512/6217/6217489.png)'
    }

    botoes.style.background = 'rgba(0, 0, 0, 0.103)'
    botoes0.style.background = 'rgba(0, 0, 0, 0.103)'
    botoes1.style.background = 'rgba(0, 0, 0, 0.103)'
    botoes2.style.background = 'rgba(0, 0, 0, 0.103)'
    botoes3.style.background = '#116d11'
    botoes4.style.background = 'rgb(51, 76, 129)'
    botoes5.style.background = 'rgb(51, 76, 129)'
    botoes6.style.background = 'rgb(51, 76, 129)'
    botoes7.style.background = 'rgb(34, 34, 117)'
    botoes8.style.background = 'rgb(34, 34, 117)'
    botoes9.style.background = 'rgb(34, 34, 117)'
    botoes10.style.background = 'rgb(51, 76, 129)'
    botoes11.style.background = 'rgb(34, 34, 117)'
    botoes12.style.background = 'rgb(34, 34, 117)'
    botoes13.style.background = 'rgb(34, 34, 117)'
    botoes14.style.background = 'rgb(51, 76, 129)'
    botoes15.style.background = 'rgb(34, 34, 117)'
    botoes16.style.background = 'rgb(34, 34, 117)'
    botoes17.style.background = 'rgb(34, 34, 117)'
    botoes18.style.background = 'rgb(51, 76, 129)'
    botoes19.style.background = 'rgb(34, 34, 117)'
    botoes20.style.background = 'rgb(34, 34, 117)'
    botoes21.style.background = 'rgb(51, 76, 129)'
  }
}

function abrir0() {
  if (window.matchMedia("(max-width:600px)").matches) {
  let table = document.getElementById('button01');
  table.style.display = 'block'
  setTimeout(function () {
    $('#button01').fadeOut('fast');
  }, 1000);
  $('#GFG_DOWN').text("Div hides after 1 second.");
}
}
function abrir1() {
  if (window.matchMedia("(max-width:600px)").matches) {
  let table1 = document.getElementById('button02');
  table1.style.display = 'block'
  setTimeout(function () {
    $('#button02').fadeOut('fast');
  }, 1000);
  $('#GFG_DOWN').text("Div hides after 1 second.");
}
}
function abrir2() {
  if (window.matchMedia("(max-width:600px)").matches) {
  let table2 = document.getElementById('button03');
  table2.style.display = 'block'
  setTimeout(function () {
    $('#button03').fadeOut('fast');
  }, 1000);
  $('#GFG_DOWN').text("Div hides after 1 second.");
}
}
function abrir3() {
  if (window.matchMedia("(max-width:600px)").matches) {
  let table3 = document.getElementById('button04');
  table3.style.display = 'block'
  setTimeout(function () {
    $('#button04').fadeOut('fast');
  }, 1000);
  $('#GFG_DOWN').text("Div hides after 1 second.");
}
}
function abrir4() {
  if (window.matchMedia("(max-width:600px)").matches) {
  let table4 = document.getElementById('button05');
  table4.style.display = 'block'
  setTimeout(function () {
    $('#button05').fadeOut('fast');
  }, 1000);
  $('#GFG_DOWN').text("Div hides after 1 second.");
}
}
/*
function changeValue(event){
  event.value = addCommas(event.value);
}
function addCommas(value) {
return value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
function changeValue1(event){
  event.value = addCommas1(event.value);
}
function addCommas1(value) {
return value.replace(/\B(?=(\d{3})+(?!\d))/g, '...');
}
*/
