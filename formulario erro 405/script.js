function enviar() {
    ocultaparagrafoinicial()
    let tarefa = document.getElementById('idtarefa').value;
    let data = document.getElementById('iddata').value;
    let horario = document.getElementById('idhorario').value;

    let task = document.querySelector('div.tasks');
    let novaTask = document.createElement('div');
    novaTask.innerHTML = `<p style="text-transform: uppercase; color: green"><strong>${tarefa}</strong></p>
                          <p>DATA: ${data}</p>
                          <p>HORÁRIO: ${horario}</p>`;
    
    mostraFormulario();
    task.appendChild(novaTask);
}

function mostraFormulario() {
    var displayForm = document.getElementById('formulario').style.display;

    if(displayForm == 'block') {
        document.getElementById('formulario').style.display = 'none'
    }

    if (displayForm == '') {
        document.getElementById('formulario').style.display = 'block'
    }

    if(displayForm == 'none') {
        document.getElementById('formulario').style.display = 'block'
    }
}

function ocultaparagrafoinicial() {
    document.getElementById('paragrafoinicial').style.display = 'none';
}