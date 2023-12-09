//lista de opciones para el formulario, tiene las opciones por tipo de aporte
export class opcionesColaboracion {

    listAportesSolidario: any = [
        {value: "Refrigerios", key: "Refrigerios"},
        {value: "Papeleria", key: "Papeleria"},
    ];

    listAportesApadrinamiento: any = [
        {value:'Utiles', key: 'Utiles'}, 
        {value:'Matrícula', key: 'Matrícula'} ,
        {value:'Desayunos saludables', key: 'Desayunos saludables'},
    ]

    listTiempo: any = [
        {value:'Voluntariado', key: 'Voluntariado'},
        {value:'Facilitador', key: 'Facilitador' },
        {value:'Pasantía', key: 'Pasantía'},
    ]
}