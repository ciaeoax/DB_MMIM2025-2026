const MODO_DESARROLADOR = true;

if (MODO_DESARROLADOR){
	console.log('modo desarrollador');
} else{
	const firebaseConfig = {
		apiKey: "YOUR_API_KEY",
		authDomain: "indtodo.firebaseapp.com",
		databaseURL: "https://indtodo-default-rtdb.firebaseio.com/",
		projectId: "indtodo",
		storageBucket: "indtodo.appspot.com",
		messagingSenderId: "YOUR_SENDER_ID",
		appId: "YOUR_APP_ID"
	};	  
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
}

// ***********  VALORES INICIALES ************* //
unidades1 = ['UMF 01 Oaxaca','UMF 38 FFCC.','UMF 65 Sta Lucia del Camino','UMF 64 Tuxtepec','UMF 13 Cuicatlán','UMF 05 Sto.Dgo.Tehuantepec',
			'UMF 06 Juchitán','UMF 17 Magdalena Apasco','UMF 12 Sto. Domingo Ingenio','UMF 23 Cd. Ixtepec','UMF 27 Ocotlán','UMF 31 Zimatlán de Álvarez',
			'UMF 30 San Pedro Tapanatepec','UMF 40 Ixtlan de Juárez','UMF 32 Puerto Escondido','UMF 33 Pedro Pochutla','UMF 29 Barrio La Soledad',
			'UMF 26 Pinotepa','UMF 58 Teotitlán','UMF 57 San Pablo Villa de Etla','UMF 56 San Pablo Huitzo','UMF 59 Loma Bonita','UMRM 21 Tamazulapan','UMAA Oaxaca'];
unidades2 = ['HGZ 01 Oaxaca','HGZMF 02 Salina Cruz','HGZ 03 Tuxtepec','HGSMF 41 Huatulco','Oaxaca'];
nombres_unidades = ['UMF 01 Oaxaca', 'UMF 05 Sto.Dgo.Tehuantepec', 'UMF 06 Juchitán', 'UMF 12 Sto. Domingo Ingenio', 'UMF 13 Cuicatlán', 
	'UMF 17 Magdalena Apasco', 'UMF 23 Cd. Ixtepec', 'UMF 26 Pinotepa', 'UMF 27 Ocotlán','UMF 29 Barrio La Soledad', 'UMF 30 San Pedro Tapanatepec', 
	'UMF 31 Zimatlán de Álvarez', 'UMF 32 Puerto Escondido', 'UMF 33 Pedro Pochutla', 'UMF 38 FFCC.', 'UMF 40 Ixtlan de Juárez', 
	'UMF 56 San Pablo Huitzo', 'UMF 57 San Pablo Villa de Etla', 'UMF 58 Teotitlán', 'UMF 59 Loma Bonita', 'UMF 64 Tuxtepec', 
	'UMF 65 Sta Lucia del Camino', 'UMRM 21 Tamazulapan', 'HGZ 01 Oaxaca', 'HGZMF 02 Salina Cruz', 'HGZ 03 Tuxtepec', 'HGSMF 41 Huatulco', 'Oaxaca'];

const meses = [
	"enero", "febrero", "marzo", "abril", "mayo", "junio",
	"julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];

lista_indicadores = ['DM 01', 'DM 02', 'DM 03', 'DM 04', 'DM 05', 'DM 06', 'EH 01', 'EH 02', 'EH 03', 'EH 04', 'CAMama 01', 'CAMama 02', 'CAMama 03', 'CAMama 04', 'CACU 01', 'CACU 02', 'CACU 03', 'CACU 04', 'Materna 01', 'Materna 02', 'Materna 03', 'Materna 04', 'Materna 05', 'Neonatal 01', 'Neonatal 02', 'Neonatal 03', 'Neonatal 04', 'Neonatal 05', 'Neonatal 06', 'S.Ob 01', 'S.Ob 02', 'S.Ob 03', 'S.Ob 04', 'CUPN 01', 'CUPN 02', 'CUPN 03', 'CUPN 04', 'CUPN 05', 'CUPN 06', 'CUPN 07', 'CUSN 01', 'CUSN 02', 'CE 01', 'CE 02', 'CVE 01', 'CVE 02', 'IAAS 01', 'IAAS 02', 'CES 01', 'CES 02', 'CES 03', 'CES 04', 'CIS 01', 'CIS 02', 'CIS 03', 'CIS 04', 'CIS 05', 'CIS 06', 'CIS 07', 'HOSP 01', 'HOSP 02', 'HOSP 03', 'HOSP 04', 'HOSP 05', 'HOSP 06', 'HOSP 07', 'HOSP 08', 'HOSP 09', 'HOSP 10'];
indicadores_nombres = { 'DM 01' : 'Cobertura de detección de diabetes 20+ años.' }

labels = ["Esperado", "Bajo", "Medio", "Sin Datos"];
labels_2 = ["Esperado", "Bajo", "Medio", "No Aplica"];
colors_desempeños = ["green", "red", "orange", "lightgray"];
colors = ["green", "red", "orange", "lightgray"];
fechas = ['diciembre 2024', 'enero 2025', 'febrero 2025', 'marzo 2025', 'abril 2025', 'mayo 2025', 'junio 2025', 'julio 2025', 'agosto 2025', 'septiembre 2025', 'enero 2026']; // agregar una nueva fecha cada año

mes_deseado = fechas[fechas.length - 1].split(' ')[0];
año_deseado = fechas[fechas.length - 1].split(' ')[1];;
fecha_deseada = '';
console.log(`La fecha predeterminada es: ${fecha_deseada}`);

desempeño = 'Bajo';
color_deseado = 'red';
console.log(`El desempeño predeterminado es: ${desempeño}, color: ${color_deseado}`);

unidad_deseada = 'Oaxaca';
indicador_deseado = 'CES 04';
console.log(`La unidad predeterminada es: ${unidad_deseada} y el indicador predeterminado es: ${indicador_deseado}`);
// ---------- RANKING ------------------ //
nivel_deseado = 'Primer Nivel';
procesos = ['DM', 'EH', 'CAMama', 'CACU', 'Materna', 'Neonatal', 'S.Ob'];
normativos = ['CUPN', 'CUSN', 'IAAS', 'CVE', 'CES','HOSP', 'CIS'];

puntoResaltado = null;
n_indicadores = "--";

selectedMonth = ''; //meses.indexOf(mes_deseado);
currentYear = año_deseado;

// ***** colores **** //
const color_verde = '#00584e';
const color_amarillo = '#f59e0b';
const color_rojo = '#ef4444';
colors_desempeños = [color_verde, color_rojo, color_amarillo, 'lightgray']
colors = [color_verde, color_rojo, color_amarillo, 'lightgray']


// ***********  VALORES INICIALES ************* //
// *****************  HEADER ****************** //
const loader = document.getElementById('loader-overlay');

// *****************  HEADER ****************** //
// ***********  GRAFICAS INICIALES ************ //
var locale={moduleType:"locale",name:"es",dictionary:{Autoscale:"Autoescalar","Box Select":"Seleccionar Caja","Click to enter Colorscale title":"Introducir el t\xedtulo de la Escala de Color","Click to enter Component A title":"Introducir el t\xedtulo del Componente A","Click to enter Component B title":"Introducir el t\xedtulo del Componente B","Click to enter Component C title":"Introducir el t\xedtulo del Componente C","Click to enter Plot title":"Introducir el t\xedtulo de la Gr\xe1fica","Click to enter Plot subtitle":"Introducir el subt\xedtulo de la Gr\xe1fica","Click to enter X axis title":"Introducir el t\xedtulo del eje X","Click to enter Y axis title":"Introducir el t\xedtulo del eje Y","Click to enter radial axis title":"Introducir el t\xedtulo del eje radial","Compare data on hover":"Comparar datos al pasar por encima","Double-click on legend to isolate one trace":"Haga doble-clic en la leyenda para aislar una traza","Double-click to zoom back out":"Haga doble-clic para restaurar la escala","Download plot as a PNG":"Descargar gr\xe1fica como PNG","Download plot":"Descargar gr\xe1fica","Edit in Chart Studio":"Editar en Chart Studio","IE only supports svg.  Changing format to svg.":"IE solo soporta svg. Cambiando formato a svg.","Lasso Select":"Seleccionar con lazo","Orbital rotation":"Rotaci\xf3n esf\xe9rica",Pan:"Modo Panor\xe1mica","Produced with Plotly.js":"Hecho con Plotly.js",Reset:"Reiniciar","Reset axes":"Reiniciar ejes","Reset camera to default":"Restaurar c\xe1mara predeterminada","Reset camera to last save":"Restaurar anterior c\xe1mara","Reset view":"Restaurar vista","Reset views":"Restaurar vistas","Show closest data on hover":"Mostrar el dato m\xe1s cercano al pasar por encima","Snapshot succeeded":"La captura de la instant\xe1nea finaliz\xf3 correctamente","Sorry, there was a problem downloading your snapshot!":"\xa1La descarga de la instant\xe1nea fall\xf3!","Taking snapshot - this may take a few seconds":"Capturando una instant\xe1nea - podr\xeda tardar unos segundos","Toggle Spike Lines":"Mostrar/Ocultar Gu\xedas","Toggle show closest data on hover":"Activar/Desactivar mostrar el dato m\xe1s cercano al pasar por encima","Turntable rotation":"Rotaci\xf3n plana",Zoom:"Modo Ampliar/Reducir","Zoom in":"Ampliar","Zoom out":"Reducir","close:":"cierre:","high:":"alza:","incoming flow count:":"flujo de entrada:","kde:":"edp:","lat:":"lat:","lon:":"lon:","low:":"baja:","lower fence:":"l\xedmite inferior:","max:":"m\xe1x:","mean \xb1 \u03c3:":"media \xb1 \u03c3:","mean:":"media:","median:":"mediana:","min:":"m\xedn:","new text":"nuevo texto","open:":"apertura:","outgoing flow count:":"flujo de salida:","q1:":"q1:","q3:":"q3:","source:":"fuente:","target:":"destino:",trace:"traza","upper fence:":"l\xedmite superior:"},format:{days:["Domingo","Lunes","Martes","Mi\xe9rcoles","Jueves","Viernes","S\xe1bado"],shortDays:["Dom","Lun","Mar","Mi\xe9","Jue","Vie","S\xe1b"],months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],shortMonths:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],date:"%d/%m/%Y",decimal:".",thousands:","}};"undefined"==typeof Plotly?(window.PlotlyLocales=window.PlotlyLocales||[],window.PlotlyLocales.push(locale)):Plotly.register(locale);

const BASE_LAYOUT = {
	paper_bgcolor: 'transparent',
	plot_bgcolor: 'transparent',
	font: {
		family: 'Noto Sans, sans-serif',
		size: 14,
		color: '#0f172a',
		weight: 'bold'
	},
	margin: { b: 80, l:10, r:10, t:40 },
	hoverlabel: {
		bgcolor: '#ffffff',
		font: { family: 'Noto Sans', size: 14 }
	},
	yaxis: { showticklabels: false,	showgrid: false	},
	xaxis: {
		tickangle: -60, //
		tickfont: { size: 12 },
		ticklabelstandoff: 5,
		showgrid: false,
	},
	barcornerradius: 5,
	showlegend: false,
	autosize: true,/*
	plot_bgcolor: '#ffff00',
	paper_bgcolor: '#fffaaa'*/
}

const BASE_LAYOUT_vertical = {
	paper_bgcolor: 'transparent',
	plot_bgcolor: 'transparent',
	font: {
		family: 'Noto Sans, sans-serif',
		size: 14,
		color: '#0f172a',
		weight: 'bold'
	},
	margin: { b: 10, l:70, r:20, t:40 },
	hoverlabel: {
		bgcolor: '#ffffff',
		color: '#0000000',
		font: { family: 'Inter', size: 16 }
	},
	xaxis: { showticklabels: false,	showgrid: false	},
	yaxis: {
		tickfont: { size: 12 },
		autorange: 'reversed',
		ticklabelstandoff: 10
	},
	barcornerradius: 5,
	showlegend: false,
	autosize: true,/*
	plot_bgcolor: '#ffff00',
	paper_bgcolor: '#fffaaa'*/
}

const CONFIGURACION = {
	responsive: true,
	locale: 'es',
	displayModeBar: true,
	displaylogo: false,
	modeBarButtonsToRemove: ['select2d','lasso2d','zoomIn2d','zoomOut2d'],
}

Plotly.newPlot("ranking_general_1N",
	[
		{
			type: "bar",
			x: ['UMF 01 Oaxaca','UMF 38 FFCC.','UMF 65 Sta Lucia del Camino','UMF 64 Tuxtepec','UMF 13 Cuicatlán','UMF 05 Sto.Dgo.Tehuantepec',
				'UMF 06 Juchitán','UMF 17 Magdalena Apasco','UMF 12 Sto. Domingo Ingenio'],
			y: [1, 0.75, 0.5, 0.25, 1, 0.8, 0.5, 0.25, 0.6],
			cliponaxis: false,
			textposition: 'outside',
			texttemplate: '<b>%{y:.1f}</b>',
			marker: { color: color_deseado },
			hovertemplate: '%{text}<br>%{y:.2f}<extra></extra>'
		},
		{
			mode: 'lines',
			line: {
				dash: 'dashdot',
				width: 2,
				color: 'deepskyblue'
			},
			x: ['UMF 01 Oaxaca','UMF 38 FFCC.','UMF 65 Sta Lucia del Camino','UMF 64 Tuxtepec','UMF 13 Cuicatlán','UMF 05 Sto.Dgo.Tehuantepec',
				'UMF 06 Juchitán','UMF 17 Magdalena Apasco','UMF 12 Sto. Domingo Ingenio'],
			y: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
		}
	],
	{
		title: {
			text: `Ranking de Primer Nivel`,//, ${fecha_deseada}`,
			x: 0,
			xanchor: 'left',
			weight: 'bold'
		},
		...BASE_LAYOUT,
	},
	CONFIGURACION
); // ranking_general_1N

Plotly.newPlot("ranking_general_2N",
	[
		{
			type: "bar",
			x: ['UMF 01 Oaxaca','UMF 38 FFCC.','UMF 65 Sta Lucia del Camino','UMF 64 Tuxtepec','UMF 13 Cuicatlán'],
			y: [1, 0.75, 0.5, 0.25, 1],
			cliponaxis: false,
			textposition: 'outside',
			texttemplate: '<b>%{y:.2f}</b>',
			marker: { color: color_deseado },
		},
		{
			mode: 'lines',
			line: {
				dash: 'dashdot',
				width: 2,
				color: 'deepskyblue'
			},
			x: ['UMF 01 Oaxaca','UMF 38 FFCC.','UMF 65 Sta Lucia del Camino','UMF 64 Tuxtepec','UMF 13 Cuicatlán'],
			y: [0.2, 0.2, 0.2, 0.2, 0.2],
		}
	],
	{
		...BASE_LAYOUT,
		title: {
			text: `Ranking de Segundo Nivel`,//, ${fecha_deseada}`,
			x: 0
		},
		barmode: 'overlay',
	}, 
	CONFIGURACION
); // ranking_general_2N

Plotly.newPlot("historico-delegacional",
	[
		{
			type: "lines",
			x: meses,
			y: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
			cliponaxis: false,
			textposition: 'outside',
			texttemplate: '<b>%{y:.1f}</b>',
			marker: { color: '#0284c7', size: 8 },
			line: {
				dash: 'solid',
				width: 6,
				color: '#0284c7'
			},
		},
		{
			type: 'lines',
			x: meses,
			y: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
			marker: { color: '#888', size: 5 },
			line: {
				dash: 'dashdot',
				width: 2,
				color: '#888'
			},
		}
	],
	{
		title: {
			text: `Ranking General Oaxaca`,
			x: 0
		},
		...BASE_LAYOUT,
		barmode: 'overlay',
		xaxis: {
			tickangle: 0, //
			tickfont: { size: 12 },
			ticklabelstandoff: 5,
			showgrid: false
		},
		margin: { b: 30, l:10, r:25, t:50 },
		showlegend: true,
		legend: {
			//orientation: 'h',
			xanchor: 'right',
			//yanchor: 'top',
			x: 1.2,
			y: 1,
			font: { size: 10 }
		},
		yaxis: {
			range: [0, 100], 
			tickfont: { size: 10 }, 
			side: 'right'
		},
	}, 
	CONFIGURACION
); // historico-delegacional

// ***********  GRAFICAS INICIALES ************ //
// ***********  TABLAS INICIALES ************** //
const data = [
	{
		indicador: 'Oaxaca',
		ponderacion_obtenida: 0.15,
		ponderacion_estimada: 0.00,
		ponderacion_ajustada: 0.03,
		diferencia: 0.0,
		_children: [
			{
				id: "ps",
				indicador: "Procesos de Salud",
				ponderacion_obtenida: 66.15,
				ponderacion_estimada: 87.00,
				ponderacion_ajustada: 76.03,
				diferencia: 10.0,
				_children: [
					{ indicador: "DM", ponderacion_obtenida: 7.02, ponderacion_estimada: 20, ponderacion_ajustada: 35.11, diferencia: 10.0 },
					{ indicador: "EH", ponderacion_obtenida: 13.39, ponderacion_estimada: 16, ponderacion_ajustada: 83.68, diferencia: 40.0 },
					{ indicador: "CAMama", ponderacion_obtenida: 15.23, ponderacion_estimada: 16, ponderacion_ajustada: 95.16, diferencia: 5.0 },
					{ indicador: "CACU", ponderacion_obtenida: 14.74, ponderacion_estimada: 15, ponderacion_ajustada: 98.30, diferencia: 10.0 },
					{ indicador: "Materna", ponderacion_obtenida: 4.00, ponderacion_estimada: 4, ponderacion_ajustada: 100, diferencia: 8.0 },
					{ indicador: "Neonatal", ponderacion_obtenida: 4.00, ponderacion_estimada: 4, ponderacion_ajustada: 100, diferencia: 9.0 },

					{
						indicador: "S.Ob",
						ponderacion_obtenida: 7.77,
						ponderacion_estimada: 12,
						ponderacion_ajustada: 64.75,
						diferencia: 10.0,
						_children: [
							{ indicador: "S.Ob 01", ponderacion_obtenida: 3.82, ponderacion_estimada: 4, ponderacion_ajustada: 95.46, diferencia: 5.0 },
							{ indicador: "S.Ob 02", ponderacion_obtenida: 3.95, ponderacion_estimada: 4, ponderacion_ajustada: 98.79, diferencia: 12.0, },
							{ indicador: "S.Ob 04", ponderacion_obtenida: 0.00, ponderacion_estimada: 4, ponderacion_ajustada: 0.00, diferencia: 2.0 },
						]
					},
				]
			},
			{
				id: "cn",
				indicador: "Coordinaciones Normativas",
				ponderacion_obtenida: 14.77,
				ponderacion_estimada: 15.00,
				ponderacion_ajustada: 98.45,
				diferencia: 10.0,
				_children: [
					{ indicador: "CUPN", ponderacion_obtenida: 10.77, ponderacion_estimada: 11, ponderacion_ajustada: 97.89, diferencia: 5.0 },
					{ indicador: "CES",  ponderacion_obtenida: 4.00,  ponderacion_estimada: 4,  ponderacion_ajustada: 100, diferencia: 8.0 },
				]
			}
		]
	}
];

const data_2 = [
	{
		indicador: 'DM',
		mes_ant: '15.00',
		mes_act: '15.00',
		diferencia: '0.00'
	},
	{
		indicador: 'EH',
		mes_ant: '15.44',
		mes_act: '15.40',
		diferencia: '-0.04'
	},
	{
		indicador: 'CAMama',
		mes_ant: '6.08',
		mes_act: '6.86',
		diferencia: '0.78'
	},
	{
		indicador: 'CACU',
		mes_ant: '13.76',
		mes_act: '13.79',
		diferencia: '0.03'
	}
];

const tabla_ranking_comp_21 = new Tabulator("#tabla_rank_comp_21", {
    data: data_2,
    // Enable tree structure
	layout: 'fitData',
    dataTree: true,
    dataTreeSelectPropagate: true,
    columns: [
        { title: "Indicador", field: "indicador", tooltip: function(e, cell) {
				if (!cell || typeof cell.getRow !== "function") return null;		
				const row = cell.getRow();
				const nombre_indicador_ = row.getData().indicador;
				const descr_indicador_ = indicadores_nombres[nombre_indicador_] ? indicadores_nombres[nombre_indicador_] : '-';
				
				return descr_indicador_;
        }},
		{ title: "Puntuación", field: "puntuacion", headerHozAlign:'center', hozAlign: "center", formatter: formatoTablaAnalisis_2, },
    ],
});

const tabla_ranking_comp_22 = new Tabulator("#tabla_rank_comp_22", {
    data: data_2,
    // Enable tree structure
	layout: 'fitData',
    dataTree: true,
    dataTreeSelectPropagate: true,
    columns: [
        { title: "Indicador", field: "indicador", tooltip: function(e, cell) {
				if (!cell || typeof cell.getRow !== "function") return null;		
				const row = cell.getRow();
				const nombre_indicador_ = row.getData().indicador;
				const descr_indicador_ = indicadores_nombres[nombre_indicador_] ? indicadores_nombres[nombre_indicador_] : '-';
				
				return descr_indicador_;
        }},
		{ title: "Puntuación", field: "puntuacion", headerHozAlign:'center', hozAlign: "center", formatter: formatoTablaAnalisis_2},
    ],
});

const tabla_ranking_comp_1 = new Tabulator("#tabla_rank_comp_unidad_1", {
    data: data_2,
    // Enable tree structure
	layout: 'fitData',
    dataTree: true,
    dataTreeSelectPropagate: true,
    columns: [
    	// { title: 'n', formatter: 'rownum', hozAlign: "center", },
        { title: "Indicadores", field: "indicador", formatter: formateadorIndicador, tooltip: function(e, cell) {
			if (!cell || typeof cell.getRow !== "function") return null;		
			const row = cell.getRow();
			const nombre_indicador_ = row.getData().indicador;
			const descr_indicador_ = indicadores_nombres[nombre_indicador_] ? indicadores_nombres[nombre_indicador_] : '-';
			
			return descr_indicador_;
        }, cellClick: function(e, cell) {
			const row = cell.getRow();
			const indicador_deseado = row.getData().indicador;
			mostrarVista('vista-indicador');
			document.getElementById('unidad_select').hidden = false; // mostrar la seleccion de unidades
			document.getElementById('indicador_select').hidden = false; // mostrar la seleccion de indicadores
			datos_indicadores = filtrarUnidad(filtrarFecha(datos, fecha_deseada), unidad_deseada);
			actualizando_lista_desplegable_indicador(datos_indicadores);
			//console.log(unidad_deseada, indicador_deseado);
			updateSelectedIndicador(indicador_deseado);
			ActualizarCadaGrafica(1);
		}},
        { title: "Mes anterior", field: "mes_ant", headerHozAlign:'center', hozAlign: "center", formatter: formato2decimas },
        { title: "Mes actual", field: "mes_act", headerHozAlign:'center', hozAlign: "center", formatter: formato2decimas },
        { title: "Puntuación", field: "puntuacion", headerHozAlign:'center', hozAlign: "center", formatter: formatoTablaAnalisis_2, },
		// { title: "Aporte", field: "aporte", headerHozAlign:'center', hozAlign: "center", },
    ],
});

const tabla_ranking_comp_2 = new Tabulator("#tabla_rank_comp_unidad_2", {
    data: data_2,
    // Enable tree structure
	layout: 'fitData',
    dataTree: true,
    dataTreeSelectPropagate: true,
    columns: [
    	// { title: 'n', formatter: 'rownum', hozAlign: "center", },
        { title: "Indicadores", field: "indicador", formatter: formateadorIndicador, tooltip: function(e, cell) {
				if (!cell || typeof cell.getRow !== "function") return null;		
				const row = cell.getRow();
				const nombre_indicador_ = row.getData().indicador;
				const descr_indicador_ = indicadores_nombres[nombre_indicador_] ? indicadores_nombres[nombre_indicador_] : '-';
				
				return descr_indicador_;
        }, cellClick: function(e, cell) {
			const row = cell.getRow();
			const indicador_deseado = row.getData().indicador;
			mostrarVista('vista-indicador');
			document.getElementById('unidad_select').hidden = false; // mostrar la seleccion de unidades
			document.getElementById('indicador_select').hidden = false; // mostrar la seleccion de indicadores
			datos_indicadores = filtrarUnidad(filtrarFecha(datos, fecha_deseada), unidad_deseada);
			actualizando_lista_desplegable_indicador(datos_indicadores);
			//console.log(unidad_deseada, indicador_deseado);
			updateSelectedIndicador(indicador_deseado);
			ActualizarCadaGrafica(1);
		}},
        { title: "Mes anterior", field: "mes_ant", headerHozAlign:'center', hozAlign: "center", formatter: formato2decimas },
        { title: "Mes actual", field: "mes_act", headerHozAlign:'center', hozAlign: "center", formatter: formato2decimas },
        { title: "Puntuación", field: "puntuacion", headerHozAlign:'center', hozAlign: "center", formatter: formatoTablaAnalisis_2, },
		// { title: "Aporte", field: "aporte", headerHozAlign:'center', hozAlign: "center", },
    ],
});

const tabla_ranking_1 = new Tabulator("#tabla_unidad_1", {
	data: data,
	layout: "fitColumns",
	columnDefaults:{
		headerSort: false,  // <--- ESTO desactiva el ordenamiento
	},
	// Enable tree structure
	dataTree: true,
	dataTreeChildField: "_children",
	//dataTreeSelectPropagate: true,
	dataTreeStartExpanded: [true, true, false],
	columns: [
		//{ title: 'n', formatter: 'rownum', hozAlign: "center", },
		{ title: "Indicador<br>1° Nivel", field: "indicador", tooltip: function(e, cell) {
				if (!cell || typeof cell.getRow !== "function") return null;		
				const row = cell.getRow();
				const nombre_indicador_ = row.getData().indicador;
				const descr_indicador_ = indicadores_nombres[nombre_indicador_] ? indicadores_nombres[nombre_indicador_] : '-';
				let depth = 0;
				let parent = row.getTreeParent();
				while (parent) {
					depth++;
					parent = parent.getTreeParent();
				}
				if (depth === 3) return descr_indicador_;
				return null;
			}
		},
		{ title: 'mes anterior', field: 'mes_ant', headerHozAlign:'center', columns: [
			{ title: "Ponderación<br>Obtenida", field: "ponderacion_obtenida_ant", headerHozAlign:'center', hozAlign: "right", formatter: formato2decimas },
			{ title: "Desempeño", field: "ponderacion_ajustada_ant", headerHozAlign:'center', hozAlign: "right", formatter: formato2decimas, width: 175, formatter: function(celda, formatterParams) {
				let value = Number(celda.getValue());
				if (!value & value != 0)
					return celda.getValue();
				value = Number(celda.getValue()).toFixed(2);
				const el = celda.getElement();
				if (value < 60) {
					el.style.color = color_rojo;
				} else if (value >= 60 && value < 80) {
					el.style.color = color_amarillo;
				} else if (value >= 80) {
					el.style.color = color_verde;
				}
				return `<span style="font-weight:bold;">${value}%</span>`; // show the number
				
			}},
		]},
		{ title: 'mes actual', field: 'mes_act', headerHozAlign:'center', columns: [
			{ title: "Ponderación<br>Obtenida", field: "ponderacion_obtenida", headerHozAlign:'center', hozAlign: "right", formatter: formato2decimas },
			{ title: "Desempeño", field: "ponderacion_ajustada", headerHozAlign:'center', hozAlign: "right", formatter: formato2decimas, width: 175, formatter: function(celda, formatterParams) {
				let value = Number(celda.getValue());
				if (!value & value != 0)
					return celda.getValue();
				value = Number(celda.getValue()).toFixed(2);
				const el = celda.getElement();
				if (value < 60) {
					el.style.color = color_rojo;
				} else if (value >= 60 && value < 80) {
					el.style.color = color_amarillo;
				} else if (value >= 80) {
					el.style.color = color_verde;
				}
				return `<span style="font-weight:bold;">${value}%</span>`; // show the number
				
			}},
		]},
    ],
});

const tabla_ranking_2 = new Tabulator("#tabla_unidad_2", {
	data: data,
	layout: "fitColumns",
	columnDefaults:{
		headerSort: false,  // <--- ESTO desactiva el ordenamiento
	},
	// Enable tree structure
	dataTree: true,
	dataTreeChildField: "_children",
	dataTreeSelectPropagate: true,
	dataTreeStartExpanded: [true, true, false],
	columns: [
		//{ title: 'n', formatter: 'rownum', hozAlign: "center", },
		{ title: "Indicador<br>2° Nivel", field: "indicador", tooltip: function(e, cell) {
				if (!cell || typeof cell.getRow !== "function") return null;		
				const row = cell.getRow();
				const nombre_indicador_ = row.getData().indicador;
				const descr_indicador_ = indicadores_nombres[nombre_indicador_] ? indicadores_nombres[nombre_indicador_] : '-';
				let depth = 0;
				let parent = row.getTreeParent();
				while (parent) {
					depth++;
					parent = parent.getTreeParent();
				}
				if (depth === 3) return descr_indicador_;
				return null;
			}
		},
		{ title: 'mes anterior', field: 'mes_ant', headerHozAlign:'center', columns: [
			{ title: "Ponderación<br>Obtenida", field: "ponderacion_obtenida_ant", headerHozAlign:'center', hozAlign: "right", formatter: formato2decimas },
			{ title: "Desempeño", field: "ponderacion_ajustada_ant", headerHozAlign:'center', hozAlign: "right", formatter: formato2decimas, width: 175, formatter: function(celda, formatterParams) {
				let value = Number(celda.getValue());
				if (!value & value != 0)
					return celda.getValue();
				value = Number(celda.getValue()).toFixed(2);
				const el = celda.getElement();
				if (value < 60) {
					el.style.color = color_rojo;
				} else if (value >= 60 && value < 80) {
					el.style.color = color_amarillo;
				} else if (value >= 80) {
					el.style.color = color_verde;
				}
				return `<span style="font-weight:bold;">${value}%</span>`; // show the number
				
			}},
		]},
		{ title: 'mes actual', field: 'mes_act', headerHozAlign:'center', columns: [
			{ title: "Ponderación<br>Obtenida", field: "ponderacion_obtenida", headerHozAlign:'center', hozAlign: "right", formatter: formato2decimas },
			{ title: "Desempeño", field: "ponderacion_ajustada", headerHozAlign:'center', hozAlign: "right", formatter: formato2decimas, width: 175, formatter: function(celda, formatterParams) {
				let value = Number(celda.getValue());
				if (!value & value != 0)
					return celda.getValue();
				value = Number(celda.getValue()).toFixed(2);
				const el = celda.getElement();
				if (value < 60) {
					el.style.color = color_rojo;
				} else if (value >= 60 && value < 80) {
					el.style.color = color_amarillo;
				} else if (value >= 80) {
					el.style.color = color_verde;
				}
				return `<span style="font-weight:bold;">${value}%</span>`; // show the number
				
			}},
		]},
    ],
});

// ***********  TABLAS INICIALES ************** //
// **************** FUNCIONES ***************** //
function loadFirebaseData() { 
	// Create references to your Firebase paths 
	const resultadosRef = firebase.database().ref('data'); 
	const ponderacionesRef = firebase.database().ref('rank'); 
	const descripcionRef = firebase.database().ref('desc'); 
	// Fetch all data simultaneously 
	Promise.all([ 
		resultadosRef.once('value'), 
		ponderacionesRef.once('value'), 
		descripcionRef.once('value') 
	]) 
	.then(([resultadosSnapshot, ponderacionesSnapshot, descripcionSnapshot]) => { 
		// Process resultados data (previously data_1) 
		const data_1 = resultadosSnapshot.val(); 
		datos = Object.values(data_1).map(row => ({ 
			fecha: formatearFecha(row['FECHA']), 
			unidad: row["UNIDAD"], 
			ind: row["IND"], 
			indicador: row["INDICADOR"], 
			nombre_indicador: row["NOMBRE INDICADOR"], 
			valor: parseFloat(row["VALOR"]), 
			color: calcularColor(row["VALOR"], row["ESPERADO"], row["MEDIO"], row["BAJO"]), 
			esperado: obtenerRangoNumero(row['ESPERADO']), 
			medio: obtenerRangoNumero(row['MEDIO']), 
			bajo: obtenerRangoNumero(row['BAJO']), 
			esperado_: row['ESPERADO'], 
			medio_: row['MEDIO'], 
			bajo_: row['BAJO'], 
			numerador: row['NUM'], 
			denominador: row['DEN'] 
		})); 

		// Process ponderaciones data (previously data_2) 
		const data_2 = ponderacionesSnapshot.val();
		datos_pond = Object.values(data_2).map(row => ({ 
			fecha: formatearFecha(row['FECHA']), 
			indicador: row['INDICADOR'], 
			unidad: row['UNIDAD MEDICA'], 
			ind: row['IND'], 
			valor: row['VALOR'],
			pond_est: row['POND_ ESTIMADA'], 
			pond_obt: row['POND_ OBTENIDA'], 
			nivel: row['NIVEL'] 
		})); 

		// Process descripcion data (previously data_3) 
		const data_3 = descripcionSnapshot.val();
		datos_desc = Object.values(data_3).map(row => ({ 
			indicador: row['INDICADOR'], 
			nombre_indicador: row['NOMBRE'], 
			nombre_num: row['NUM'], 
			nombre_den: row['DEN'], 
			factor: row['FACTOR'], 
			es_rank: row['RANKING'] == 1 ? true : false,
			den_fijo: row['DEN_FIJO'] == 1 ? true : false 
		}));  

		// Call any functions that depend on this data 
		//initializeAfterDataLoad(); 
		fechas = obtenerFechas(datos);
		fecha_deseada = fechas[fechas.length - 1];
		mes_deseado = fecha_deseada.split(' ')[0];
		selectedMonth = meses.indexOf(mes_deseado);
		console.log('La ultima fecha es: ', fecha_deseada);
		console.log("Termina de comunicarse. Comienza a graficar.");
		datos_desc.forEach(row => {
			indicadores_nombres[row.indicador] = row.nombre_indicador;
		});
		updateYearDisplay();
		updateSelectedMonth();
		ActualizarCadaGrafica(1);

		document.getElementById('loader-overlay').style.display = 'none';
		loader.classList.remove('show-loader');		
	}) 
	.catch(error => { 
		console.error("Error loading Firebase data:", error); 
		// Add error handling UI here 
	}); 
}

function loadDatosEmulados() { 
	// Fetch all data simultaneously 
	Promise.all([ 
		fetch('data.json') .then( res => { if(!res.ok) throw new Error(); return res.json(); }),
		fetch('rank.json') .then( res => { if(!res.ok) throw new Error(); return res.json(); }),
		fetch('desc.json') .then( res => { if(!res.ok) throw new Error(); return res.json(); })
	]) 
	.then(([data_1, data_2, data_3]) => { 
		// Process resultados data (previously data_1) 
		datos = Object.values(data_1).map(row => ({ 
			fecha: formatearFecha(row['FECHA']), 
			unidad: row["UNIDAD"], 
			ind: row["IND"], 
			indicador: row["INDICADOR"], 
			nombre_indicador: row["NOMBRE INDICADOR"], 
			valor: parseFloat(row["VALOR"]), 
			color: calcularColor(row["VALOR"], row["ESPERADO"], row["MEDIO"], row["BAJO"]), 
			esperado: obtenerRangoNumero(row['ESPERADO']), 
			medio: obtenerRangoNumero(row['MEDIO']), 
			bajo: obtenerRangoNumero(row['BAJO']), 
			esperado_: row['ESPERADO'], 
			medio_: row['MEDIO'], 
			bajo_: row['BAJO'], 
			numerador: row['NUM'], 
			denominador: row['DEN'] 
		})); 

		// Process ponderaciones data (previously data_2) 
		datos_pond = Object.values(data_2).map(row => ({ 
			fecha: formatearFecha(row['FECHA']), 
			indicador: row['INDICADOR'], 
			unidad: row['UNIDAD MEDICA'], 
			ind: row['IND'], 
			valor: row['VALOR'],
			pond_est: row['POND_ ESTIMADA'], 
			pond_obt: row['POND_ OBTENIDA'], 
			nivel: row['NIVEL'] 
		})); 

		// Process descripcion data (previously data_3) 
		datos_desc = Object.values(data_3).map(row => ({ 
			indicador: row['INDICADOR'], 
			nombre_indicador: row['NOMBRE'], 
			nombre_num: row['NUM'], 
			nombre_den: row['DEN'], 
			factor: row['FACTOR'], 
			es_rank: row['RANKING'] == 1 ? true : false,
			den_fijo: row['DEN_FIJO'] == 1 ? true : false 
		}));  

		// Call any functions that depend on this data 
		//initializeAfterDataLoad(); 
		fechas = obtenerFechas(datos);
		fecha_deseada = fechas[fechas.length - 1];
		mes_deseado = fecha_deseada.split(' ')[0];
		selectedMonth = meses.indexOf(mes_deseado);
		console.log('La ultima fecha es: ', fecha_deseada);
		console.log("Termina de comunicarse. Comienza a graficar.");
		datos_desc.forEach(row => {
			indicadores_nombres[row.indicador] = row.nombre_indicador;
		});
		updateYearDisplay();
		updateSelectedMonth();
		ActualizarCadaGrafica(1);

		document.getElementById('loader-overlay').style.display = 'none';
		loader.classList.remove('show-loader');		
	}) 
	.catch(error => { 
		console.error("Error cargando datos descargados:", error); 
		// Add error handling UI here 
	}); 
}

function obtenerFechas(datos) {
	datos_ = filtrarUnidad(datos, 'Oaxaca');
	datos_ = filtrarIndicador(datos_, 'DM 01');
	fechas = datos_.map(row => row['fecha']);
	return fechas;
}

function formatearFecha(fecha) {
	const date = new Date(fecha);
	const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 
					'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 
					'diciembre'];
	const mesNombre = meses[date.getMonth()];
	const año = date.getFullYear();
	return `${mesNombre} ${año}`;
}

function formateadorIndicador(cell) {
    const val = cell.getValue();
    if (!val) return ""; // Si está vacía la celda, no pinta nada
    return `<span style="color: #000000; cursor: pointer; text-decoration: underline; font-weight: bold;">${val}</span>`;
}

function formato2decimas(celda){
	if (Number(celda.getValue()) && Number(celda.getValue()) != 0)
		return Number(celda.getValue()).toFixed(2);
	else
		return celda.getValue();
}

function obtenerFechaAnterior(fecha_deseada){
	[mes, año] = fecha_deseada.split(' ');
	if (meses.indexOf(mes) == 0){
		mes_ant = 'diciembre'
		año = año - 1
	}
	else{
		mes_ant = meses[meses.indexOf(mes) - 1];
	}
	fecha_ant = mes_ant + ' ' + año
	return fecha_ant;
}

function colorByPonderacion(resultado){
	if (resultado >= 80) return color_verde;
	if (resultado >= 60) return color_amarillo;
	return color_rojo;
}

function textColorByPonderacion(resultado){
	if (resultado >= 80) return 'rgba(255,255,255,1)';
	if (resultado >= 60) return 'rgba(0,0,0,1)';
	return 'rgba(255,255,255,1)';
}

function calcularColor(valor, esperado, medio, bajo) { 
	if (evaluarCondicion(valor, esperado)) { 
		return "green"; 
	} else if (evaluarCondicion(valor, bajo)) { 
		return "red"; 
	} else if (evaluarCondicion(valor, medio)) { 
		return "orange"; 
	} else { return "lightgray"; } 
}

function contarColores(datosFiltrados) {
	//console.log(datosFiltrados);
	const conteo = {
		green: 0,
		red: 0,
		orange: 0,
		lightgray: 0
	};
	datosFiltrados.forEach(d => {
		if (conteo[d.color] !== undefined) {
			conteo[d.color]++;
		}
	});
	//console.log(conteo);
	return conteo;
}

function contarColoresPonderacion(datosFiltrados){
	//console.log(datosFiltrados);
	const conteo = {
		green: 0,
		red: 0,
		orange: 0,
		lightgray: 0
	};
	datosFiltrados.forEach(indicador => {
		//console.log(indicador);
		pond_obt = indicador.pond_obt;
		pond_est = indicador.pond_est;
		porcentaje = indicador.pond_obt / indicador.pond_est * 100;
		if (pond_est == 0) color = 'lightgray'
		else if (pond_obt == 0) color = 'red'
		else if (pond_obt == pond_est) color = 'green'
		else color = 'orange'
		//console.log(color);
		if (conteo[color] !== undefined){
			conteo[color]++;
		}
	});
	//console.log(conteo);
	return conteo;
}

function evaluarCondicion(numero, condicionTexto) {
    if (!condicionTexto) return false;
    condicionTexto = condicionTexto.toLowerCase().replace(/\s+/g, "");
    const condiciones = condicionTexto.split("o");
    return condiciones.some(cond => {
    	if (/^\d+(\.\d+)?$/.test(cond)) {
    		return numero === parseFloat(cond);
		} else if (/^<=\d+(\.\d+)?$/.test(cond)) {
			return numero <= parseFloat(cond.slice(2));
		} else if (/^>=\d+(\.\d+)?$/.test(cond)) {
			return numero >= parseFloat(cond.slice(2));
		} else if (/^<\d+(\.\d+)?$/.test(cond)) {
			return numero < parseFloat(cond.slice(1));
		} else if (/^>\d+(\.\d+)?$/.test(cond)) {
			return numero > parseFloat(cond.slice(1));
		} else if (/^\d+(\.\d+)?-\d+(\.\d+)?/.test(cond)) {
			const [inicio, fin] = cond.split("-").map(Number);
			return numero >= inicio && numero <= fin;
        }
		return false;
	});
}

function obtenerRangoNumero(valor){ 
	if (valor == null || valor === "") { 
		return null; 
	} 
	valor = valor.toString(); 
	valor = valor.trim(); 

	if (valor.includes("o")) { 
		const partes = valor.split("o").map(v => v.trim()); 
		return partes.map(parte => obtenerRangoNumero(parte)); // Recursivo para limpiar cada parte 
	} 

	if (valor.includes("-")) { 
		const partes = valor.split("-").map(v => parseFloat(v.trim())); 
		return [partes[0], partes[1]]; 
	} else if (valor.startsWith(">=")) { 
		return parseFloat(valor.substring(2).trim()) // { tipo: "mayorIgual", valor: parseFloat(valor.substring(2).trim()) }; 
	} else if (valor.startsWith("<=")) { 
		return parseFloat(valor.substring(2).trim()) // { tipo: "menorIgual", valor: parseFloat(valor.substring(2).trim()) }; 
	} else if (valor.startsWith(">")) { 
		return parseFloat(valor.substring(1).trim()) // { tipo: "mayor", valor: parseFloat(valor.substring(1).trim()) }; 
	} else if (valor.startsWith("<")) { 
		return parseFloat(valor.substring(1).trim()) // { tipo: "menor", valor: parseFloat(valor.substring(1).trim()) }; 
	} else { return parseFloat(valor); } 
}

function updateYearDisplay() {
	//document.querySelector('.año-actual').textContent = currentYear;
	document.getElementsByClassName('selected-year')[0].textContent = currentYear;
	document.getElementsByClassName('selected-year')[1].textContent = currentYear;
}

function updateSelectedMonth() {
	document.getElementsByClassName('selected-month')[0].textContent = meses[selectedMonth];
	document.getElementsByClassName('selected-month')[1].textContent = meses[selectedMonth];
	mes_deseado = meses[selectedMonth];
	fecha_deseada = `${meses[selectedMonth]} ${currentYear}`;
	checkMonths(fecha_deseada);
}
// Checar las disponibilidad del boton en header
function checkMonths(fecha) {
	if (fecha == fechas[fechas.length - 1]){
		document.getElementById('prev-month').disabled = false;
		document.getElementById('next-month').disabled = true;
	} else if (fecha == fechas[0]){      
		document.getElementById('prev-month').disabled = true;
		document.getElementById('next-month').disabled = false;
	} else{
		document.getElementById('prev-month').disabled = false;
		document.getElementById('next-month').disabled = false;
	}
}

function calcularError(numero, rango){
	if (Array.isArray(rango)){
		if (Array.isArray(rango[0])){
			err1 = numero - rango[0][0];
			err2 = numero - rango[0][1];
			err3 = numero - rango[1][0];
			err4 = numero - rango[1][1];
			errores = [err1, err2, err3, err4];
			errores_abs = [Math.abs(err1), Math.abs(err2), Math.abs(err3), Math.abs(err4)];
			error_ = Math.min(...errores_abs);
			index = errores_abs.indexOf(error_);
			error = errores[index];
		} else {
			err1 = numero - rango[0];
			err2 = numero - rango[1];
			error = (Math.abs(err1) < Math.abs(err2)) ? err1 : err2;
		}
	} else {
		error = numero - rango;
	}
	return error;
}

function filtrarErrores(datosFiltrados) {
	const datosConError = datosFiltrados.map(row => {
		const indicador = row['indicador'];
		const valor = row['valor'];
		const Resperado = row['esperado'];
		const Rmedio = row['medio'];
		const Rbajo = row['bajo'];
		const fecha = row['fecha'];
		const color = row['color'];
		const esperado_ = row['esperado_'];
		const medio_ = row['medio_'];
		const bajo_ = row['bajo_'];

		let errorEsperado = calcularError(valor, Resperado);
		let errorMedio = calcularError(valor, Rmedio);
		let errorBajo = calcularError(valor, Rbajo);

		if (color == 'red') {
			error = (Math.abs(errorMedio) <= Math.abs(errorEsperado)) ? errorMedio : errorEsperado;
			errorColor = (Math.abs(errorMedio) < Math.abs(errorEsperado)) ? 'orange' : 'green';
		} else if (color == 'orange'){
			error = errorEsperado;
			errorColor = 'green';
		} else if (color == 'green') {
			error = (Math.abs(errorMedio) <= Math.abs(errorBajo)) ? errorMedio : errorBajo;
			errorColor = (Math.abs(errorMedio) < Math.abs(errorBajo)) ? 'orange' : 'red';
		}
		valor_esperado = valor - error;
		return {
			indicador: indicador,
			error: error,
			valor: valor,
			limite: valor_esperado,
			colorError: errorColor,
			fecha: fecha,
			esperado_: esperado_,
			medio_: medio_,
			bajo_: bajo_
		};
	});
	return datosConError;
}

function filtrarUnidad(datos, unidadSeleccionada){
	return datos.filter(d =>
      d.unidad === unidadSeleccionada
    );
}

function filtrarFecha(datos, fechaSeleccionada){
	return datos.filter(d =>
      d.fecha === fechaSeleccionada
    );
}

function filtrarIndicador(datos, indicadorSeleccionado){
	return datos.filter(d =>
      d.indicador === indicadorSeleccionado
    );
}

function obtenerNivel(unidad_deseada){
	if (unidades1.includes(unidad_deseada))
		return 'Primer Nivel';
	else if (unidades2.includes(unidad_deseada) && unidad_deseada != 'Oaxaca')
		return 'Segundo Nivel';
	else
		return 'Delegacional';
}

function obtenerPuntuaciones(datos_pond, unidad_deseada, fecha_deseada, nivel){
	datos_ = filtrarFecha(datos_pond, fecha_deseada);
	ponderaciones = analisisRanking(datos_, nivel);
	unidad = ponderaciones[unidad_deseada];
	return unidad;
}

function obtenerDatoCard(unidad_, ponderaciones, i){
	//console.log(unidad_);
	unidad_corto = unidad_.split(' ').slice(0,2).join(' ');
	pond_aju_ant = ponderaciones[0].pond_aju.toFixed(2);
	pond_aju_act = ponderaciones[1].pond_aju.toFixed(2);
	color_pond = colorByPonderacion(pond_aju_act);
	diferencia = pond_aju_act - pond_aju_ant;
	mes_ant = fecha_ant.split(' ').slice(0,1)
	color = diferencia < 0 ? color_rojo : color_verde;
	signo = diferencia < 0 ? "▼" : "▲";
	texto_comp = `<span style="color: ${color}; font-weight: 700">${signo}${diferencia.toFixed(1)}%</span><span style="font-size: 10px"> vs ${mes_ant}</span>`;
	//console.log(unidad_corto, pond_aju_ant, pond_aju_act, texto_comp);
	
	dato = {
		lugar: i+1,
		nombre: unidad_corto,
		pond_aju: pond_aju_act,
		color: color_pond,
		comparativo: texto_comp
	}
	return dato;
}

function agruparRanking(datos_pond){
	const resultado_2 = {
		inds: {},
		pond_proc_obt: 0,
		pond_norm_obt: 0,
		pond_proc_est: 0,
		pond_norm_est: 0,
		pond_aju: 0,
		color: 'orange'
	};

	datos_pond.forEach(row => {
		const indicador = row.indicador;
		const ind = row.ind;
		const pond_est = parseFloat(row.pond_est) || 0;
		const pond_obt = parseFloat(row.pond_obt) || 0;
		const unidad = row.unidad;

		// Inicializa estructura

		// Inicializa estructura para grupo indicador si no existe
		if (!resultado_2.inds[ind]){
			resultado_2.inds[ind] = {
				indicadores: {},
				pond_obt: 0,
				pond_est: 0          
			};
		}

		// Inicializa estructura para indicador si no existe
		if (!resultado_2.inds[ind].indicadores[indicador]){
			resultado_2.inds[ind].indicadores[indicador] = {
				pond_obt: 0,
				pond_est: 0          
			};
		}

		// Inicializa estructura para indicador si no existe
		if (!resultado_2.inds[ind].indicadores[indicador]){
			resultado_2.inds[ind].indicadores[indicador] = {
				pond_obt: 0,
				pond_est: 0          
			};
		}

		// Suma los valores en el indicador
		resultado_2.inds[ind].indicadores[indicador].pond_obt += pond_obt;
		resultado_2.inds[ind].indicadores[indicador].pond_est += pond_est;

		// Suma los valores en el grupo indicador
		resultado_2.inds[ind].pond_obt += pond_obt;
		resultado_2.inds[ind].pond_est += pond_est;

		// Suma los totales del indicador
		if (procesos.includes(ind)){
			resultado_2.pond_proc_obt += pond_obt*0.6;
			resultado_2.pond_proc_est += pond_est*0.6;
		} else if (normativos.includes(ind)){
			resultado_2.pond_norm_obt += pond_obt*0.4;
			resultado_2.pond_norm_est += pond_est*0.4;
		}
	});

	// Calcula pond_aju para cada indicador
	resultado_2.pond_aju = ((resultado_2.pond_proc_obt/resultado_2.pond_proc_est*60) + (resultado_2.pond_norm_obt/resultado_2.pond_norm_est*40));
	if (resultado_2.pond_aju >= 80) 
		resultado_2.color = color_verde;
	else if (resultado_2.pond_aju >= 60)
	resultado_2.color = color_amarillo;
	else
	resultado_2.color = color_rojo;
	return resultado_2;
}

function analisisRanking(datos_pond_fecha, nivel){
	const resultado = {};
	//console.log(datos_pond_fecha, nivel);

	datos_pond_fecha.forEach(row => {
		const indicador = row.indicador;
		const ind = row.ind;
		const unidad = row.unidad;
		const pond_obt = parseFloat(row.pond_obt) || 0;
		const pond_est = parseFloat(row.pond_est) || 0;

		if (row.nivel == nivel || row.nivel == 'Ambos'){
			// Inicializa estructura para unidad si no existe
			if (!resultado[unidad]){
				resultado[unidad] = {
				inds: {},
				pond_proc_obt: 0,
				pond_norm_obt: 0,
				pond_proc_est: 0,
				pond_norm_est: 0,
				pond_aju: 0,
				color: 'orange'
				};
			}

			// Inicializa estructura para grupo indicador si no existe
			if (!resultado[unidad].inds[ind]){
				resultado[unidad].inds[ind] = {
					indicadores: {},
					pond_obt: 0,
					pond_est: 0          
				};
			}

			// Inicializa estructura para indicador si no existe
			if (!resultado[unidad].inds[ind].indicadores[indicador]){
				resultado[unidad].inds[ind].indicadores[indicador] = {
					pond_obt: 0,
					pond_est: 0     
				};
			}

			// Suma los valores en el indicador
			resultado[unidad].inds[ind].indicadores[indicador].pond_obt += pond_obt;
			resultado[unidad].inds[ind].indicadores[indicador].pond_est += pond_est;

			// Suma los valores en el grupo indicador
			resultado[unidad].inds[ind].pond_obt += pond_obt;
			resultado[unidad].inds[ind].pond_est += pond_est;

			// Suma los totales del indicador
			if (procesos.includes(ind)){
				resultado[unidad].pond_proc_obt += pond_obt*0.6;
				resultado[unidad].pond_proc_est += pond_est*0.6;
			} else if (normativos.includes(ind)){
				resultado[unidad].pond_norm_obt += pond_obt*0.4;
				resultado[unidad].pond_norm_est += pond_est*0.4;
			}
		}
	});

	// Calcula pond_aju para cada indicador
	Object.values(resultado).forEach(obj => {
		obj.pond_aju = ((obj.pond_proc_obt/obj.pond_proc_est*60) + (obj.pond_norm_obt/obj.pond_norm_est*40));
		if (obj.pond_aju >= 80)
			obj.color = color_verde;
		else if (obj.pond_aju >= 60)
			obj.color = color_amarillo;
		else 
			obj.color = color_rojo;
	});
	return resultado;
}

function analisisRanking_2(datos_mes_act, datos_mes_ant) {
	const indicadores_ = Object.keys(datos_mes_ant.inds);

	const resultado = indicadores_.map(indicador_ => {
		const datoAnt = datos_mes_ant.inds[indicador_];
		const datoAct = datos_mes_act.inds[indicador_];

		const pondAnt = datoAnt ? datoAnt.pond_obt : 0;
		const pondAct = datoAct ? datoAct.pond_obt : 0;
		const diferencia = pondAct - pondAnt;

		const puntuacion = procesos.includes(indicador_) ? diferencia * 0.6 : diferencia * 0.4;

		return {
			indicador: indicador_,
			mes_ant: pondAnt,
			mes_act: pondAct,
			diferencia: diferencia,
			puntuacion: puntuacion
		};
	});
	return resultado;//*/
}

function analisisRanking_3(datos_mes_act, datos_mes_ant) {
	const indicadores_ = Object.keys(datos_mes_ant.inds);
	peores = [];
	mejores = [];
	otros = []
	pond_proc_est = Math.round(datos_mes_act.pond_proc_est / 0.6);
	pond_norm_est = Math.round(datos_mes_act.pond_norm_est / 0.4);
	//console.log(pond_proc_est, pond_norm_est);

	indicadores_.map(indicador_ => {
		const datos_ant_ind = datos_mes_ant.inds[indicador_];
		const datos_act_ind = datos_mes_act.inds[indicador_];
		const ind = Object.keys(datos_ant_ind.indicadores);

		ind.map(ind_ => {
			const datoAnt = datos_ant_ind.indicadores[ind_];
			const datoAct = datos_act_ind.indicadores[ind_];

			const pondAct = datoAct ? datoAct.pond_obt : NaN;
			const pondAnt = datoAnt ? datoAnt.pond_obt : NaN;
			const diferencia = pondAct - pondAnt;
			const puntuacion = diferencia;//procesos.includes(indicador_) ? diferencia * 0.6 : diferencia * 0.4;

			division = (procesos.includes(indicador_)) ? 0.6 : 0.4;
			pond_est = (procesos.includes(indicador_)) ? pond_proc_est : pond_norm_est;
			pond_est_division = parseInt((pond_est / division).toFixed(0));
			//console.log(indicador_, datoAct, datoAct.pond_obt, pond_est_division, procesos, procesos.includes(indicador_), pond_proc_est, pond_norm_est);
			aporte_rank_positivo = (diferencia / pond_est * division * 100).toFixed(2);
			//aporte_rank_negativo = ((pond_est_unidad - pond_obt_unidad) / pond_est_division * division * 100).toFixed(2);
			//console.log(ind_, datoAct.pond_obt, pond_est, pond_est_division, division, aporte_rank_positivo, `${aporte_rank_positivo}%`);
			dato = {
				indicador : ind_,
				mes_ant : pondAnt.toFixed(2),
				mes_act : pondAct.toFixed(2),
				diferencia : pondAct - pondAnt,
				puntuacion : puntuacion,
				aporte: `${aporte_rank_positivo}%`
			};
			
			if (diferencia < 0)
				peores.push(dato);
			else if (diferencia > 0)
				mejores.push(dato);
			else {
				otros.push(dato);
			}
		});
	});
	return [mejores, peores, otros];
}

function formatoTablaAnalisis(unidad, unidad_ant, nombre_unidad) {
	const result = [];
	//console.log(unidad, unidad_ant);
	const desempeño_procesos = unidad.pond_proc_obt / unidad.pond_proc_est * 100;
	const desempeño_normativ = unidad.pond_norm_obt / unidad.pond_norm_est * 100;
	const desempeño_procesos_ant = unidad_ant.pond_proc_obt / unidad_ant.pond_proc_est * 100;
	const desempeño_normativ_ant = unidad_ant.pond_norm_obt / unidad_ant.pond_norm_est * 100;
	
	const umfNode = {
		indicador: nombre_unidad,
		//ponderacion_obtenida: unidad_.pond_proc_obt + unidad_.pond_norm_obt,
		//ponderacion_estimada: unidad_.pond_proc_est + unidad_.pond_norm_est,
		ponderacion_ajustada: unidad.pond_aju,
		ponderacion_ajustada_ant: unidad_ant.pond_aju,
		color: unidad.color,
		_children: []
	};
	// Create 2 middle groups
		const procesosNode = {
		indicador: "Procesos Salud - Enfermedad",
		ponderacion_obtenida: `${(unidad.pond_proc_obt / 0.6).toFixed(2)} / ${(unidad.pond_proc_est / 0.6).toFixed(2)}`,
		ponderacion_obtenida_ant: `${(unidad_ant.pond_proc_obt / 0.6).toFixed(2)} / ${(unidad_ant.pond_proc_est / 0.6).toFixed(2)}`,
		//ponderacion_estimada: unidad_.pond_proc_est/0.6,
		ponderacion_ajustada: `${desempeño_procesos.toFixed(1)}% * 60% = ${(desempeño_procesos*0.6).toFixed(2)}%`,
		ponderacion_ajustada_ant: `${desempeño_procesos_ant.toFixed(1)}% * 60% = ${(desempeño_procesos_ant*0.6).toFixed(2)}%`,
		_children: []
	};

	const normativasNode = {
		indicador: "Coordinaciones Normativas",
		ponderacion_obtenida: `${(unidad.pond_norm_obt / 0.4).toFixed(2)} / ${(unidad.pond_norm_est / 0.4).toFixed(2)}`,
		ponderacion_obtenida_ant: `${(unidad_ant.pond_norm_obt / 0.4).toFixed(2)} / ${(unidad_ant.pond_norm_est / 0.4).toFixed(2)}`,
		//ponderacion_estimada: unidad_.pond_norm_est/0.4,
		ponderacion_ajustada: `${desempeño_normativ.toFixed(1)}% * 40% = ${(desempeño_normativ*0.4).toFixed(2)}%`,
		ponderacion_ajustada_ant: `${desempeño_normativ_ant.toFixed(1)}% * 40% = ${(desempeño_normativ_ant*0.4).toFixed(2)}%`,
		_children: []
	};
	// Loop each main indicator
	Object.keys(unidad.inds).forEach(indicador => {
		const ind = unidad.inds[indicador];
		const ind_ant = unidad_ant.inds[indicador];

		const indNode = {
			indicador: indicador,
			ponderacion_obtenida: `${ind.pond_obt.toFixed(2)} / ${(ind.pond_est).toFixed(2)}`,
			ponderacion_obtenida_ant: `${ind_ant.pond_obt.toFixed(2)} / ${(ind_ant.pond_est).toFixed(2)}`,
			//ponderacion_estimada: ind.pond_est,
			ponderacion_ajustada: ind.pond_est > 0 ? (ind.pond_obt / ind.pond_est) * 100 : 0,
			ponderacion_ajustada_ant: ind_ant.pond_est > 0 ? (ind_ant.pond_obt / ind_ant.pond_est) * 100 : 0,
			_children: []
		};

		// Sub-indicators
		if (ind.indicadores) {
			Object.keys(ind.indicadores).forEach(sub => {
				const subInd = ind.indicadores[sub];
				const subInd_ant = ind_ant.indicadores[sub];

				indNode._children.push({
					indicador: sub,
					ponderacion_obtenida: `${subInd.pond_obt.toFixed(2)} / ${subInd.pond_est.toFixed(2)}`,
					ponderacion_obtenida_ant: `${subInd_ant.pond_obt.toFixed(2)} / ${subInd_ant.pond_est.toFixed(2)}`,
					//ponderacion_estimada: subInd.pond_est,
					ponderacion_ajustada: subInd.pond_est > 0 ? (subInd.pond_obt / subInd.pond_est) * 100 : 0,
					ponderacion_ajustada_ant: subInd_ant.pond_est > 0 ? (subInd_ant.pond_obt / subInd_ant.pond_est) * 100 : 0
				});
			});
		}

		if (indNode._children.length === 0) delete indNode._children;

		// Decide group based on array membership
		if (procesos.includes(indicador)) {
			procesosNode._children.push(indNode);
		} else if (normativos.includes(indicador)) {
			normativasNode._children.push(indNode);
		} else {
		// If indicator belongs to neither array → put in root
			umfNode._children.push(indNode);
		}
	});

	// Only add groups if they have children
	if (procesosNode._children.length > 0) umfNode._children.push(procesosNode);
	if (normativasNode._children.length > 0) umfNode._children.push(normativasNode);

	result.push(umfNode);
	return result;
}

function actualizarAnalisis_1(ponds, ponds_ant, id_element, tabla_, nivel, unidad_deseada){
	cuadro_tabla = document.getElementById(id_element);
	tabla_.clearData();
	let data = new Object();

	data = formatoTablaAnalisis(ponds, ponds_ant, unidad_deseada);
	//console.log(data);
	tabla_.updateOrAddData(data);
	mostrarTablas1_2Nivel(nivel);
	//console.log(tabla_, tabla_.getColumns());
	console.log(fecha_ant, fecha_deseada);

	const encabezado_ = tabla_.getColumn('mes_ant_');
	//console.log(encabezado_);
	if (encabezado_){
		console.log('si existe');
		tabla_.getColumn("mes_ant")?.updateDefinition({title: fecha_ant});
		tabla_.getColumn("mes_act")?.updateDefinition({title: fecha_deseada});
	}
}

function formatoTablaAnalisis_2(celda, formatterParams, onredered) {
	value = celda.getValue();
	var displayValue = Math.abs(value).toFixed(2); 

	if(value > 0)
		return `<span style="color:#009900; font-weight:bold;">▲ ${displayValue}</span>`;
	else if(value < 0)
		return `<span style="color:#cc0000; font-weight:bold;">▼ ${displayValue}</span>`;
	else
		return `<span style="color:black; font-weight:bold;">— ${displayValue}</span>`;
}

function ActualizarCadaGrafica(paso){
	if (document.getElementById('vista-indicador').checkVisibility()){
		indicador_deseado = selector_indicador.value;
	}
	console.log('actualizando grafica: ', unidad_deseada, indicador_deseado);
	updateSelectedUnit(unidad_deseada);
	ranking_1_grafica_general = document.getElementById('ranking_general_1N');
	ranking_2_grafica_general = document.getElementById('ranking_general_2N');
	ranking_1_grafica_indicador = document.getElementById('ranking_indicador_1N');
	ranking_2_grafica_indicador = document.getElementById('ranking_indicador_2N');

	actualizarRank(datos_pond, 'Oaxaca', fecha_deseada, 'Delegacional');

	loader.style.display = 'flex';
	loader.classList.add('show-loader');
	
	// ** VISTA PRINCIPAL ** //
	unidades_1N_ranking = actualizarGraficaRankingGeneral(datos_pond, fecha_deseada, 'Primer Nivel', 'ranking_general_1N');
	unidades_2N_ranking = actualizarGraficaRankingGeneral(datos_pond, fecha_deseada, 'Segundo Nivel', 'ranking_general_2N');
	if (document.getElementById('vista-principal').checkVisibility()){
		// ** Primera parte ** //
		//actualizarRank(datos_pond, 'Oaxaca', fecha_deseada, 'Delegacional');
		indices_1N = [0, 1, 2, 22, 23, 24];
		indices_2N = [0, 1, 2, 3];
		//console.log(unidades_1N_ranking, unidades_2N_ranking);
		// Cards
		actualizarCardsRanking('card-rank-1N', datos_pond, fecha_deseada, 'Primer Nivel', unidades_1N_ranking, indices_1N);
		actualizarCardsRanking('card-rank-2N', datos_pond, fecha_deseada, 'Segundo Nivel', unidades_2N_ranking, indices_2N);

		// ** Segunda parte ** //
		// Grafica
		actualizarGraficaHistorico(datos_pond, 'Oaxaca', 'Delegacional', 'historico-delegacional');
		actualizarCardsRanking('historico_act', datos_pond, fecha_deseada, 'Delegacional', ['Oaxaca'], [0]);
		document.querySelector('#historico_act .card-ranking-header').innerHTML = '<span>Desempeño actual</span>';
		actualizarCardsRanking('historico_ant', datos_pond, obtenerFechaAnterior(fecha_deseada), 'Delegacional', ['Oaxaca'], [0]);
		document.querySelector('#historico_ant .card-ranking-header').innerHTML = '<span>Desempeño anterior</span>';
		document.querySelector('#historico_ant .card-ranking-barfill').remove();
		document.querySelector('#historico_ant .card-ranking-footer').remove();
		// Tablas
		actualizarAnalisis_2(datos_pond, 'Oaxaca', fecha_deseada, 'Delegacional', tabla_ranking_comp_21, tabla_ranking_comp_22);
	}

	// ** VISTA RANKING UNIDAD ** //
	if (document.getElementById('vista-rank-unidad').checkVisibility()){
		console.log('Realizando la segunda actualizacion de elementos gráficos.');
		// ** Primera parte ** //
		//Cards
		updateSelectedUnit(unidad_deseada);	
		nivel_ = obtenerNivel(unidad_deseada);	
		mostrarTablas1_2Nivel(nivel_);
		console.log(unidad_deseada, nivel_);

		if (unidad_deseada != 'HGZMF 02 Salina Cruz' && unidad_deseada != 'HGSMF 41 Huatulco'){
			unidades_ranking = (nivel_ == 'Primer Nivel') ? unidades_1N_ranking : unidades_2N_ranking;
			lugar = unidades_ranking.indexOf(unidad_deseada);
			inicio_id = (nivel_ == 'Primer Nivel') ? 'rank-unidad1' : 'rank-unidad2';
			//console.log(unidad_deseada, nivel_, lugar, unidades_ranking);
			// lugar de ranking
			document.querySelector('#'+inicio_id+'-posicion .card-ranking-porcentage').innerHTML = (lugar + 1) + `° <span class='card-ranking-nota'>de ${unidades_ranking.length}</span>`;
			id_grafica_historico = (nivel_ == 'Primer Nivel') ? 'historico-puntuacion1' : 'historico-puntuacion2';
			actualizarGraficaHistorico(datos_pond, unidad_deseada, nivel_, id_grafica_historico);
			//console.log(datos_pond, unidad_deseada, nivel_, id_grafica_historico);
			// puntuacion actual y anterior
			datosCardRanking_ = actualizarCardsRanking(inicio_id+'-puntuacion', datos_pond, fecha_deseada, nivel_, [unidad_deseada], [0]);
			document.querySelector('#'+inicio_id+'-puntuacion .card-ranking-header').innerHTML = '<span>Desempeño actual</span>';
			datosCardRanking_ = actualizarCardsRanking(inicio_id+'-puntuacion_ant', datos_pond, obtenerFechaAnterior(fecha_deseada), nivel_, [unidad_deseada], [0]);
			document.querySelector('#'+inicio_id+'-puntuacion_ant .card-ranking-header').innerHTML = '<span>Desempeño anterior</span>';
			document.querySelector('#'+inicio_id+'-puntuacion_ant .card-ranking-footer').remove();
			//console.log(datosCardRanking_);
			// Tablas
			ponds = obtenerPuntuaciones(datos_pond, unidad_deseada, fecha_deseada, nivel_);
			ponds_ant = obtenerPuntuaciones(datos_pond, unidad_deseada, obtenerFechaAnterior(fecha_deseada), nivel_);
			console.log(ponds);
			tabla_id = (nivel_ == 'Primer Nivel') ? 'tabla_unidad_1' : 'tabla_unidad_2';
			tabla_ranking = (nivel_ == 'Primer Nivel') ? tabla_ranking_1 : tabla_ranking_2;
			actualizarAnalisis_1(ponds, ponds_ant, tabla_id, tabla_ranking, nivel_, unidad_deseada);
			grafica_id = (nivel_ == 'Primer Nivel') ? 'ranking_indicador_1N' : 'ranking_indicador_2N';
			actualizarGraficaRankingIndicador(datos_pond, unidad_deseada, fecha_deseada, nivel_, grafica_id);
		} else{
			lugar1 = unidades_1N_ranking.indexOf(unidad_deseada);
			lugar2 = unidades_2N_ranking.indexOf(unidad_deseada);
			//console.log(unidad_deseada, lugar1, lugar2);
			// lugar de ranking
			document.querySelector('#rank-unidad1-posicion .card-ranking-porcentage').innerHTML = (lugar1 + 1) + `° <span class='card-ranking-nota'>de ${unidades_1N_ranking.length}</span>`;
			document.querySelector('#rank-unidad2-posicion .card-ranking-porcentage').innerHTML = (lugar2 + 1) + `° <span class='card-ranking-nota'>de ${unidades_2N_ranking.length}</span>`;
			actualizarGraficaHistorico(datos_pond, unidad_deseada, 'Primer Nivel', 'historico-puntuacion1');
			actualizarGraficaHistorico(datos_pond, unidad_deseada, 'Segundo Nivel', 'historico-puntuacion2');
			// puntuacion actual y anterior
			datosCardRanking_ = actualizarCardsRanking('rank-unidad1-puntuacion', datos_pond, fecha_deseada, 'Primer Nivel', [unidad_deseada], [0]);
			datosCardRanking_ = actualizarCardsRanking('rank-unidad2-puntuacion', datos_pond, fecha_deseada, 'Segundo Nivel', [unidad_deseada], [0]);
			document.querySelector('#rank-unidad1-puntuacion .card-ranking-header').innerHTML = '<span>Desempeño actual</span>';
			document.querySelector('#rank-unidad2-puntuacion .card-ranking-header').innerHTML = '<span>Desempeño actual</span>';
			datosCardRanking_ = actualizarCardsRanking('rank-unidad1-puntuacion_ant', datos_pond, obtenerFechaAnterior(fecha_deseada), 'Primer Nivel', [unidad_deseada], [0]);
			datosCardRanking_ = actualizarCardsRanking('rank-unidad2-puntuacion_ant', datos_pond, obtenerFechaAnterior(fecha_deseada), 'Segundo Nivel', [unidad_deseada], [0]);
			document.querySelector('#rank-unidad1-puntuacion_ant .card-ranking-header').innerHTML = '<span>Desempeño anterior</span>';
			document.querySelector('#rank-unidad2-puntuacion_ant .card-ranking-header').innerHTML = '<span>Desempeño anterior</span>';
			document.querySelector('#rank-unidad1-puntuacion_ant .card-ranking-footer').remove();
			document.querySelector('#rank-unidad2-puntuacion_ant .card-ranking-footer').remove();
			//console.log(datosCardRanking_);
			// Tablas
			ponds1 = obtenerPuntuaciones(datos_pond, unidad_deseada, fecha_deseada, 'Primer Nivel');
			ponds1_ant = obtenerPuntuaciones(datos_pond, unidad_deseada, obtenerFechaAnterior(fecha_deseada), 'Primer Nivel');
			ponds2 = obtenerPuntuaciones(datos_pond, unidad_deseada, fecha_deseada, 'Segundo Nivel');
			ponds2_ant = obtenerPuntuaciones(datos_pond, unidad_deseada, obtenerFechaAnterior(fecha_deseada), 'Segundo Nivel');
			//console.log(ponds);
			actualizarAnalisis_1(ponds1, ponds1_ant, 'tabla_unidad_1', tabla_ranking_1, 'Primer Nivel', unidad_deseada);
			actualizarAnalisis_1(ponds2, ponds2_ant, 'tabla_unidad_2', tabla_ranking_2, 'Segundo Nivel', unidad_deseada);
			actualizarGraficaRankingIndicador(datos_pond, unidad_deseada, fecha_deseada, 'Primer Nivel', "ranking_indicador_1N");
			actualizarGraficaRankingIndicador(datos_pond, unidad_deseada, fecha_deseada, 'Segundo Nivel', "ranking_indicador_2N");
		}
		// ** Segunda Parte ** //
		//console.log(datos_pond, unidad_deseada, fecha_deseada, nivel, tabla_ranking_comp_1, tabla_ranking_comp_2);
		actualizarAnalisis_2(datos_pond, unidad_deseada, fecha_deseada, nivel_, tabla_ranking_comp_1, tabla_ranking_comp_2);
		actualizarGraficaDesempeñosPastel('desempeños', datos_pond, unidad_deseada, fecha_deseada, desempeño, 'ranking', `Distribución de Desempeño<br><span style="font-size:10px;">(solo ranking)</span>`);
	}

	// ** VISTA INDICADOR ** //
	if (document.getElementById('vista-indicador').checkVisibility()){
		console.log('Iniciando cálculo de vista por indicador');
		datos_indicadores = filtrarUnidad(filtrarFecha(datos, fecha_deseada), unidad_deseada);
		datos_ponderaciones = filtrarUnidad(filtrarFecha(datos_pond, fecha_deseada), unidad_deseada);
		nivel_deseado = obtenerNivel(unidad_deseada);
		ponderaciones = obtenerPuntuaciones(datos_pond, unidad_deseada, fecha_deseada, nivel_deseado)
		//console.log(fecha_deseada, unidad_deseada, indicador_deseado, nivel_deseado, ponderaciones);
		lista_indicadores = inicializando_vista_indicador(datos_indicadores, datos_desc, fecha_deseada, unidad_deseada, indicador_deseado);	
		//console.log(datos_indicadores, lista_indicadores);
		[d_, d_p_, d_d_] = obtener_info_indicador(datos, datos_pond, datos_desc, unidad_deseada, fecha_deseada, indicador_deseado);
		//console.log(d_, d_p_, d_d_);
		actualizar_cards_informacion(d_, d_p_, d_d_, ponderaciones, unidades_1N_ranking, unidades_2N_ranking);
		//calcular_bloques_semaforo(d_);
		graficarRangosPonderacion('distribucion_rangos', d_);
		graficarResultadoIndicador('historico_valor', datos, unidad_deseada, indicador_deseado);
		graficarNumDenIndicador('historico_numden', datos, unidad_deseada, indicador_deseado, fecha_deseada);

		datos_desempeños = actualizarGraficaDesempeñosPastel('desempeños_2', datos, unidad_deseada, fecha_deseada, desempeño, 'no-ranking', `Distribución de Desempeño<br><span style="font-size:10px;">(solo este mes)</span>`);
		enlistarIndicadoresDesempeños(datos_desempeños);
	}
	loader.style.display = 'none';
}

function actualizarGraficaRankingGeneral(datos_pond, fecha_deseada, nivel_deseado, id_grafica){	
	datos_pond_fecha = filtrarFecha(datos_pond, fecha_deseada);
	ranking_nivel_1 = analisisRanking(datos_pond_fecha, nivel_deseado);

	const datosOrdenados_1 = Object.entries(ranking_nivel_1)
	.map(([unidad, valores]) => ({
		unidad,
		pond_aju: valores.pond_aju,
		color: valores.color
	}))
	.sort((a, b) => b.pond_aju - a.pond_aju);  // De mayor a menor

	const unidades_sinPromedio = datosOrdenados_1.map(d => d.unidad);
	const sumaTotal = datosOrdenados_1.reduce((acc, d) => acc + d.pond_aju, 0);
	const promedio = sumaTotal / datosOrdenados_1.length;
	datosOrdenados_1.push({
		unidad: 'Promedio',
		pond_aju: promedio,
		color: 'deepskyblue'
	})
	datosOrdenados_1.sort((a, b) => b.pond_aju - a.pond_aju);		

	const unidades = datosOrdenados_1.map(d => d.unidad); // etiquetas
	const valores = datosOrdenados_1.map(d => d.pond_aju);
	const colores_ranking = datosOrdenados_1.map(d => d.color);
	const textos = datosOrdenados_1.map((valor, i) => {
		const unidad = unidades[i];
		const index = unidades_sinPromedio.indexOf(unidad) + 1;
		const posicion = (index == 0) ? '' : (index+'° ');
		return `<b>${posicion} ${unidad}</b>`;
	});
	const linea_promedio = Array(unidades.length).fill(promedio);
	const unidades_cortos = unidades.map(unidad =>{
		return unidad.split(' ').slice(0,2).join(' ');
	});
	//const unidad_deseada_corta = unidad_deseada.split(' ').slice(0,2).join(' ');

	Plotly.react(id_grafica,
		[
			{
				type: "bar",
				x: unidades_cortos,
				y: valores,
				text: textos,
				cliponaxis: false,
				textposition: 'outside',
				texttemplate: '<b>%{y:.1f}</b>',
				marker: { color: colores_ranking },
				hovertemplate: '%{text}<br>%{y:.2f}<extra></extra>'
			},
			
			{
				mode: 'lines',
				x: unidades_cortos,
				y: linea_promedio,
				line: {
					dash: 'dashdot',
					width: 1,
					color: 'deepskyblue',
				},
				hoverinfo: 'none'
			}
		],
		{
			...BASE_LAYOUT,
			barmode: 'overlay',
			title: {
				text: `Ranking de Primer Nivel`, //, ${fecha_deseada}`,
				x: 0,
				weight: 'bold'
			},
			uniformtext: { minsize: 10 }, // Tamaño mínimo de fuente 
		},
		{
			...CONFIGURACION,
			toImageButtonOptions: {
				format: 'svg', // o 'svg' para calidad infinita
				filename: id_grafica,
				scale: 3 // Esto duplica la resolución para que se vea nítido
			}
		}
	); // ranking_general_1N / ranking_general_2N
	return unidades_sinPromedio;
}

function actualizarGraficaRankingIndicador(datos_pond, unidad_deseada, fecha_deseada, nivel_deseado, id_grafica){
	datos_pond_fecha = filtrarFecha(datos_pond, fecha_deseada);
	ponderaciones = analisisRanking(datos_pond_fecha, nivel_deseado);
	//console.log(datos_pond, unidad_deseada, fecha_deseada, nivel_deseado);

	const pond_unidad = Object.fromEntries(Object.entries(ponderaciones).filter(([unidad]) => unidad === unidad_deseada));
	let grupo_indicadores = {};

	if (pond_unidad[unidad_deseada]) {
		const unidad = pond_unidad[unidad_deseada];
		grupo_indicadores = Object.entries(unidad.inds);
	} else{
		return;
	}

	const x_labels = grupo_indicadores.map(([nombre]) => nombre);
	const estimados = grupo_indicadores.map(([_, valor]) => valor.pond_est);
	const obtenidos = grupo_indicadores.map(([_, valor]) => valor.pond_obt);
	const resultados = grupo_indicadores.map(([_, valor]) => {
		return valor.pond_obt / valor.pond_est * 100;
	});
	const col_obtenidos = grupo_indicadores.map(([_, valor]) => {
		const resultado = valor.pond_obt / valor.pond_est * 100;
		return colorByPonderacion(resultado);
	});
	const col_estimados = grupo_indicadores.map(([_,valor]) => {
		const resultado = valor.pond_obt / valor.pond_est * 100;
		return colorByPonderacion(resultado).replace(",1)",",.25)");
	});
	const textos = x_labels.map((valor, i) => {
		const estimado = estimados[i];
		const obtenido = obtenidos[i];
		const resultado = resultados[i];
		const faltante = estimado - obtenido;
		return `<b> — ${resultado.toFixed(2)}%</b><br>Ponderación Obtenida<br>${obtenido.toFixed(2)} de ${estimado.toFixed(2)} <br>Diferencia: ▼${(Math.abs(faltante)).toFixed(2)}`;
	});
	const txt_color = col_obtenidos.map((valor, i) => {
		if (valor == 'rgba(255,192,0,1)'){ return 'black'; } else { return 'white'; }
	});

	Plotly.react(id_grafica, 
		[
			{
				type: "bar",
				orientation: 'h',
				y: x_labels,
				x: estimados,
				text: textos,
				textposition: 'outside',
				texttemplate: '<b>%{x:.1f}</b>',
				marker: { 
					color: "rgba(0,0,0,0.2)", 
					line: {color: "rgba(0,0,0,0.2)", width: 1}
				},
          		hovertemplate: `<b>%{label}</b>%{text}<extra></extra>`,
			},
			{
				type: "bar",
				orientation: 'h',
				y: x_labels,
				x: obtenidos,
				text: textos,
				textposition: 'inside',
				texttemplate: '<b>%{x:.2f}</b>',
				marker: { color: col_obtenidos },
				hovertemplate: `<b>%{label}</b>%{text}<extra></extra>`,
			}
		], 
		{
			title: {
				text: `Ponderación obtenida vs estimada`,//<br>${unidad_deseada}, ${fecha_deseada}`,
				x: 0,
			},
			...BASE_LAYOUT_vertical,
			barmode: 'overlay',
		},
		{
			...CONFIGURACION,
			toImageButtonOptions: {
				format: 'svg', // o 'svg' para calidad infinita
				filename: id_grafica,
				scale: 3 // Esto duplica la resolución para que se vea nítido
			}
		}
	); // ranking_indicador_1N / ranking_indicador_2N
	return pond_unidad;
}

function actualizarGraficaDesempeñosPastel(id_grafica, datos, unidad_deseada, fecha_deseada, desempeño, tipo, titulo) {
	const pulled = [0, 0, 0, 0];    // Posición de las secciones de desempeños (centradas o salidas)
	//console.log(tipo);
	const datos_ = filtrarFecha(datos, fecha_deseada);
	const datosFiltrados_ = filtrarUnidad(datos_, unidad_deseada);
	if (tipo == 'ranking') {
		console.log('here');
		conteo_ = contarColoresPonderacion(datosFiltrados_);
	} else { 
		conteo_ = contarColores(datosFiltrados_);
	}
	const values_2 = [conteo_.green, conteo_.red, conteo_.orange, conteo_.lightgray];

	nivel_ = obtenerNivel(unidad_deseada);

	index_color = labels.indexOf(desempeño);
	n_indicadores = datosFiltrados_.length;//values[index_color];

	Plotly.react(id_grafica, 
		[
			{
				type: "pie",
				values: values_2,
				labels: labels_2,
				marker: { colors: colors_desempeños },
				textinfo: "label+percent",
				textposition: 'closest',
				insidetextorientation: "horizontal",
				pull: pulled,
				hole: 0.5,
				hovertemplate: '<b>%{label}</b> — %{percent:.1%}<br><b>%{value}</b> indicadores.<extra></extra>',
			}
		], 
		{
			...BASE_LAYOUT,
			title: {
				text: titulo,
				y: 0.95
			},
			annotations: [{  // Texto en el centro
				text: `<b>No.<br>Indicadores:<br><br><span style="font-size:20px; margin:25px;">${n_indicadores}</span><b>`,
				font: { size: 11 },
				showarrow: false,
				x: 0.5,  // Posición X (0-1)
				y: 0.5,  // Posición Y (0-1)
				xanchor: 'center',
				yanchor: 'middle',
			}],
			showlegend: false,
			hoverlabel: {
				shadow: {
					color: 'rgba(0,0,0,0.5)',
					x: 3,
					y: 3,
					blur: 10
				}
			},
			margin: { t: 50, b: 40, l: 0, r: 0 }, // Márgenes ajustados
			font: {
				family: 'Noto Sans',
				size: 12,
				weight: 'bold',
				color: 'black'
			},
		},
		{
			...CONFIGURACION,
			toImageButtonOptions: {
				format: 'svg', // o 'svg' para calidad infinita
				filename: id_grafica,
				scale: 3 // Esto duplica la resolución para que se vea nítido
			}
		}
	); // grafica - desempeños
	return datosFiltrados_;
}

function actualizarRank(datos_pond, unidad_deseada, fecha_deseada, nivel){
	datos_pond_fecha = filtrarFecha(datos_pond, fecha_deseada);
	// ** DELEGACIONAL ** //
	ponderaciones = analisisRanking(datos_pond_fecha, nivel);
	const pond = Object.fromEntries(Object.entries(ponderaciones).filter(([unidad]) => unidad === unidad_deseada));
	unidad = pond[unidad_deseada];
	document.getElementById('rank_2').innerHTML = unidad.pond_aju.toFixed(2);
	document.getElementById('rank_unidad_2').style.background = colorByPonderacion(unidad.pond_aju).replace(",1)",",.8)");
	document.getElementById('rank_unidad_2').style.color = textColorByPonderacion(unidad.pond_aju);
	// ** FIN DELEGACIONAL ** //
}

function analisis_comparativo(datos_pond, unidad_deseada, fecha_deseada, nivel){
	console.log("Entrando a analisis comparativo ");

	[mes, año] = fecha_deseada.split(' ');
	if (meses.indexOf(mes) == 0){
		mes_ant = 'diciembre'
		año = año - 1
	}
	else{
		mes_ant = meses[meses.indexOf(mes) - 1];
	}
	fecha_ant = mes_ant + ' ' + año

	ponderaciones_act = obtenerPuntuaciones(datos_pond, unidad_deseada, fecha_deseada, nivel);
	ponderaciones_ant = obtenerPuntuaciones(datos_pond, unidad_deseada, fecha_ant, nivel);

	//console.log(ponderaciones_act, ponderaciones_ant);

	return [ponderaciones_ant, ponderaciones_act, fecha_ant];
}

function actualizarCardsRanking(nombre_contenedor, datos_pond, fecha_deseada, nivel, unidades, indices){
	datosCardRanking = [];
	unidades_ = indices.map(i => unidades[i]);
	//console.log(unidades_);
	i = 0;
	for (unidad_ of unidades_){
		ponderaciones = analisis_comparativo(datos_pond, unidad_, fecha_deseada, nivel);
		dato = obtenerDatoCard(unidad_, ponderaciones, indices.at(i));		
		datosCardRanking.push(dato);
		i++;
	}
	//console.log(datosCardRanking);
	
	// **** CREACION DE TARJETAS **** //
	const contenedor = document.getElementById(nombre_contenedor);
	let htmlcards = '';
	datosCardRanking.forEach( unidad => {
		htmlcards += `
			<div class="card-ranking">
				<div class="card-ranking-header">
					<span class="card-ranking-badge" >${unidad.lugar}°</span>
					<span>${unidad.nombre}</span>
				</div>
				<div class="card-ranking-porcentage">${unidad.pond_aju}%</div>
				<div class="card-ranking-barfill" style="background-color: ${unidad.color}; width: ${unidad.pond_aju}%"></div>
				<div class="card-ranking-footer">
					${unidad.comparativo}
				</div>
			</div>
		`
	});

	contenedor.innerHTML = htmlcards;
	return datosCardRanking;
}

function actualizarGraficaHistorico(datos_pond, unidad_deseada, nivel, id_grafica){
	console.log("Entrando a actualizar grafica historico")
    const datos_ = filtrarUnidad(datos_pond, unidad_deseada);
    const datosFiltrados3 = filtrarIndicador(datos_, indicador_deseado);
	console.log(datos_, datosFiltrados3, indicador_deseado);
    const fechas = datosFiltrados3.map(row => row['fecha']);

	datos_grafica = [];
	console.log(fechas);
	for (fecha of fechas){
		puntuaciones = obtenerPuntuaciones(datos_pond, unidad_deseada, fecha, nivel);
		puntuacion_ajustada = puntuaciones.pond_aju;
		mes = fecha.split(' ')[0];
		año = fecha.split(' ')[1];
		dato = {
			mes: mes,
			anio: año,
			rank: puntuacion_ajustada
		};
		datos_grafica.push(dato);
	}

	const datosPorAnio = {};
	datos_grafica.forEach(item => {
		if (!datosPorAnio[item.anio]) {
			datosPorAnio[item.anio] = {};
		}
		datosPorAnio[item.anio][item.mes] = item.rank;
	});
	//console.log(datosPorAnio);

	const traces = [];
	const añosDisponibles = Object.keys(datosPorAnio).sort();

	añosDisponibles.forEach(año => {
		const x = meses.map(mes => mes.slice(0,3));
		const y = meses.map(mes => datosPorAnio[año][mes] !== undefined ? datosPorAnio[año][mes] : null);
		const textos = meses.map((mes, i) => `${mes} ${año}`);

		const es_ultimo = (año == año_deseado);
		const color_linea = es_ultimo ? '#0284c7' : '#cbd5e1';
		const ancho_linea = es_ultimo ? 4 : 2;
		const modo_grafico = es_ultimo ? 'lines+markers+text' : 'lines+markers';
		const dash_linea = es_ultimo ? 'solid' : 'dashdot';
		//console.log('aqui intentando');
		traces.push({
			x: x,
			y: y,
			text: textos,
			cliponaxis: false,
			textposition: 'top left',
			texttemplate: '<b>%{y:.1f}</b>',
			mode: modo_grafico,
			name: `Año ${año}`,
			line:{
				color: color_linea,
				width: ancho_linea,
				dash: dash_linea
				//shape: 'spline'
			},
			marker: {
				size: es_ultimo ? 8 : 5,
				color: color_linea
			},
			connectgaps: false,
			hovertemplate: '%{text}<br>%{y:.2f}%<extra></extra>'
		});		
	});
	const x_seleccionada = fecha_deseada.slice(0,3);
	const mes_seleccionado = fecha_deseada.split(' ')[0]
	const año_seleccionado = fecha_deseada.split(' ')[1]
	console.log(x_seleccionada, año_seleccionado, x_seleccionada);
	const y_seleccionado = datosPorAnio[año_seleccionado][mes_seleccionado];

	traces.push({
		x: [x_seleccionada],
		y: [y_seleccionado],
		mode: 'markers',
		textposition: 'outside',
		texttemplate: '<b>%{y:.1f}</b>',
		marker: {
			size: 12,
			color: 'rgba(255, 0, 0, 0.8)'
		},
		showlegend: false,
		hoverinfo: 'none',
	});

	Plotly.react(id_grafica, traces, // historico-delegacional // historico
		{
			title: {
				text: `Desempeño Histórico de ${unidad_deseada}`,
				x: 0
			},
			...BASE_LAYOUT,
			barmode: 'overlay',
			hovermode: 'x unified',
			hoverlabel: { family: 'Noto Sans'},
			xaxis: {
				tickangle: 0, //
				tickfont: { size: 12 },
				ticklabelstandoff: 5,
				showgrid: false
			},
			margin: { b: 30, l:10, r:25, t:50 },
			showlegend: true,
			legend: {
				//orientation: 'h',
				xanchor: 'right',
				//yanchor: 'top',
				x: 1.2,
				y: 1,
				font: { size: 10 }
			},
			yaxis: {
				range: [0, 100], 
				tickfont: { size: 10 }, 
				side: 'right'
			},
		},
		{
			...CONFIGURACION,
			toImageButtonOptions: {
				format: 'svg', // o 'svg' para calidad infinita
				filename: id_grafica,
				scale: 3 // Esto duplica la resolución para que se vea nítido
			}
		}
	); // historico-delegacional // historico
    // Crear arrays para la gráfica
}

function actualizarAnalisis_2(datos_pond, unidad_deseada, fecha_deseada, nivel, tabla_1, tabla_2){
	console.log("Entrando a actualizar analisis 2");
	//console.log(datos_pond, unidad_deseada, fecha_deseada, nivel, tabla_1, tabla_2);
	tabla_1.clearData();
	tabla_2.clearData();

	datos_pond_ = filtrarUnidad(datos_pond, unidad_deseada);
	datos_mes_act = filtrarFecha(datos_pond_, fecha_deseada);
	//console.log(datos_pond_);
	[mes, año] = fecha_deseada.split(' ');
	if (meses.indexOf(mes) == 0){
		mes_ant = 'diciembre'
		año = año - 1
	}
	else{
		mes_ant = meses[meses.indexOf(mes) - 1];
	}
	fecha_ant = mes_ant + ' ' + año
	datos_mes_ant = filtrarFecha(datos_pond_, fecha_ant);
	//console.log(datos_mes_act, datos_mes_ant);

	ponderaciones_act = analisisRanking(datos_mes_act, nivel);
	ponderaciones_ant = analisisRanking(datos_mes_ant, nivel);
	//console.log(ponderaciones_act, ponderaciones_ant, indicador_deseado);

	unidad_act = ponderaciones_act[unidad_deseada];
	unidad_ant = ponderaciones_ant[unidad_deseada];

	ponderacion_act = unidad_act.pond_aju.toFixed(2);
	ponderacion_ant = unidad_ant.pond_aju.toFixed(2);
	
	//console.log(ponderacion_act, ponderacion_ant);
	//console.log(fecha_deseada, fecha_ant);	
	//console.log(datos_mes_act, datos_mes_ant);

	rank_mes_act = agruparRanking(datos_mes_act);
	rank_mes_ant = agruparRanking(datos_mes_ant);	
	//console.log(rank_mes_act, rank_mes_ant);

	//console.log(rank_mes_act, rank_mes_ant);
	//console.log(data_1);
	
	[data_mejor, data_peor, data_otro] = analisisRanking_3(rank_mes_act, rank_mes_ant);
	tabla_1.updateOrAddData(data_mejor);
	tabla_2.updateOrAddData(data_peor);
	//console.log(data_mejor, data_peor, data_otro, tabla_1);

	const encabezado = tabla_1.getColumn('mes_ant');
	if (encabezado){
		tabla_1.getColumn("mes_ant").updateDefinition({title: fecha_ant});
		tabla_1.getColumn("mes_act").updateDefinition({title: fecha_deseada});
		tabla_2.getColumn("mes_ant").updateDefinition({title: fecha_ant});
		tabla_2.getColumn("mes_act").updateDefinition({title: fecha_deseada});
	}
}

// **************** FUNCIONES ***************** //

console.log('INICIO')
document.getElementById('loader-overlay').style.display = 'flex';
loader.classList.add('show-loader');
if (MODO_DESARROLADOR) {
	window.addEventListener('DOMContentLoaded', loadDatosEmulados);
} else {
	window.addEventListener('DOMContentLoaded', loadFirebaseData);
}