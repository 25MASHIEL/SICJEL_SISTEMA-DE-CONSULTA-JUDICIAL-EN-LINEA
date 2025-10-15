/* --- BASE DE DATOS SIMULADA --- */
const UNIQUE_EXPEDIENT_PARTS = {
    field1: '00661',
    field2: '2025',
    field3: '0',
    field4: '2101',
    field5: 'JR',
    field6: 'CI',
    field7: '02'
};
const UNIQUE_EXPEDIENT_FULL = Object.values(UNIQUE_EXPEDIENT_PARTS).join('-');
const CAPTCHA_CODES = ['ABC12', 'X7Y9Z', '4P2Q6', 'W8E3R', 'T5U1I'];
let currentCaptchaAnswer = '';
const EXPEDIENT_DATA = {
    number: UNIQUE_EXPEDIENT_FULL,
    jurisdiction: '2° JUZGADO CIVIL - SEDE CENTRAL PUNO',
    judge: 'MARTHA IRENE AGUILAR CASTILLO',
    date: '10/07/2025',
    observation: 'El usuario, sí registró el arancel judicial. El usuario, no registró el depósito judicial.',
    materia: 'CAMBIO DE NOMBRE, SUPRESION DE NOMBRE Y/O ADICION DE NOMBRE',
    stage: 'GENERAL',
    location: 'POOL ASIST. JUDICIAL',
    summary: 'SOLICITO EL CAMBIO DE ORDEN DE APELLIDOS',
    district: 'PUNO',
    specialist: 'TAPIA SANCHEZ MARY ELENIA',
    process: 'SUMARISIMO',
    specialty: 'CIVIL',
    state: 'SENTENCIA INFUNDADA (EN PLAZO DE APELACIÓN)',
    conclusionDate: '-------',
    conclusionReason: '-------',
    parties: [
        { part: 'DEMANDADO', type: 'JURIDICA', paternal: 'MUNICIPALIDAD DISTRITAL DE ACORA', maternal: '', name: '' },
        { part: 'DEMANDADO', type: 'JURIDICA', paternal: 'PROCURADOR PUBLICO DE LA MUNICIPALIDAD DISTRITAL DE ACORA', maternal: '', name: '' },
        { part: 'DEMANDADO', type: 'JURIDICA', paternal: 'PROCURADOR PUBLICO DE LA RENEC', maternal: '', name: '' },
        { part: 'DEMANDADO', type: 'JURIDICA', paternal: 'REGIST. NAC. DE IDENTIF. Y ESTADO CIVIL', maternal: '', name: '' },
        { part: 'DEMANDANTE', type: 'NATURAL', paternal: 'UMPIRI', maternal: 'CANO', name: 'CHRISTIAN MARTIN' }
    ],
    history: [
        { num: 1, date: '10/07/2025', act: 'ANEXOS DE DEMANDA', observation: 'Adjuntados a la demanda inicial (Copia de DNI, Partida de Nacimiento, etc.).', document: true, doc_name: 'Anexos.zip' },
        { num: 2, date: '10/07/2025', act: 'ESCRITO DE DEMANDA', observation: 'Presentación formal de la solicitud principal del demandante.', document: true, doc_name: 'Demanda.pdf' },
        {
            num: 3,
            date: '14/07/2025',
            act: 'RESOLUCIÓN N° 1',
            observation: 'AUTO INADMISIBLE (Se requiere subsanación).',
            document: true,
            doc_name: 'Res_001.pdf',
            notifications: [
                { date: '14/07/2025 11:28', act: 'NOTIFICACIÓN N° 2025-0039213-JR-CI', observation: 'Destinatario: UMPIRI CANO CHRISTIAN MARTIN. Anexo(s): RESOLUCION UNO. Entrega: CÉDULA ELECTRÓNICA.' }
            ]
        },
        {
            num: 4,
            date: '17/07/2025',
            act: 'ESCRITO QUE SUBSANA OBSERVACIONES Y OTRO',
            observation: 'Ingreso de escrito subsanatorio.',
            document: true,
            doc_name: 'Subsanacion.pdf'
        },
        {
            num: 5,
            date: '18/07/2025',
            act: 'RESOLUCIÓN N° 2',
            observation: 'AUTO ADMISORIO. Se admite a trámite la demanda y se corre traslado.',
            document: true,
            doc_name: 'Res_002.pdf',
            notifications: [
                { date: '21/07/2025 15:55', act: 'NOTIFICACIÓN N° 2025-0040935-JR-CI', observation: 'Destinatario: UMPIRI CANO CHRISTIAN MARTIN. Anexo(s): RESOLUCION DOS. Entrega: CÉDULA ELECTRÓNICA.' },
                { date: '22/07/2025 09:36', act: 'NOTIFICACIÓN N° 2025-0040936-JR-CI', observation: 'Destinatario: RENIEC. Anexo(s): SE ADJUNTA LA RES: N° 02, 01, SE ADJ: COPIA DE LA DEMANDA, ANEXOS, ESCRITO DE SUBSANACION, ADMISORIO, ( VA EN DUPLEX). Entrega: SELLO.' },
                { date: '22/07/2025 09:28', act: 'NOTIFICACIÓN N° 2025-0040937-JR-CI', observation: 'Destinatario: MUNICIPALIDAD DISTRITAL DE ACORA. Anexo(s): SE ADJUNTA LA RES: N° 02, 01, SE ADJ: COPIA DE LA DEMANDA, ANEXOS, ESCRITO DE SUBSANACION, ADMISORIO, ( VA EN DUPLEX). Entrega: SELLO.' },
                { date: '21/07/2025 15:55', act: 'NOTIFICACIÓN N° 2025-0040938-JR-CI', observation: 'Destinatario: PROCURADOR PUBLICO DE LA RENIEC. Anexo(s): SE ADJUNTA LA RES: N° 02, 01, SE ADJ: COPIA DE LA DEMANDA, ANEXOS, ESCRITO DE SUBSANACION, ADMISORIO, ( VA EN DUPLEX). Entrega: CÉDULA ELECTRÓNICA.' },
                { date: '22/07/2025 09:32', act: 'NOTIFICACIÓN N° 2025-0040939-JR-CI', observation: 'Destinatario: PROCURADOR PUBLICO DE LA RENIEC. Anexo(s): SE ADJUNTA LA RES: N° 02, 01, SE ADJ: COPIA DE LA DEMANDA, ANEXOS, ESCRITO DE SUBSANACION, ADMISORIO, ( VA EN DUPLEX). Entrega: SELLO.' },
                { date: '22/07/2025 09:28', act: 'NOTIFICACIÓN N° 2025-0040940-JR-CI', observation: 'Destinatario: PROCURADOR PUBLICO DE LA MUNICIPALIDAD DISTRITAL DE ACORA. Anexo(s): SE ADJUNTA LA RES: N° 02, 01, SE ADJ: COPIA DE LA DEMANDA, ANEXOS, ESCRITO DE SUBSANACION, ADMISORIO, ( VA EN DUPLEX). Entrega: SELLO.' },
            ]
        },
        { num: 6, date: '24/07/2025', act: 'ANEXOS DE CONTESTACIÓN DE DEMANDA', observation: 'Adjuntados a la contestación (Poder, copias, etc.).', document: true, doc_name: 'Anexos_Contestacion.zip' },
        { num: 7, date: '24/07/2025', act: 'CONTESTACIÓN DE DEMANDA', observation: 'Ingreso de escrito por el Procurador Público Adjunto de la RENIEC.', document: true, doc_name: 'Contestacion.docx' },
        {
            num: 8,
            date: '31/07/2025',
            act: 'RESOLUCIÓN N° 3',
            observation: 'AUTO: Apersonamiento del Procurador Público de la RENIEC, se da por absuelto el traslado de la demanda.',
            document: true,
            doc_name: 'Res_003.pdf',
            notifications: [
                { date: '31/07/2025 16:33', act: 'NOTIFICACIÓN N° 2025-0042402-JR-CI', observation: 'Destinatario: UMPIRI CANO CHRISTIAN MARTIN. Anexo(s): ESCRITO 18291-2025 ESCRITO 18291-2025 ESCRITO 18291-2025 RESOLUCION TRES. Entrega: CÉDULA ELECTRÓNICA.' },
                { date: '01/08/2025 09:27', act: 'NOTIFICACIÓN N° 2025-0042403-JR-CI', observation: 'Destinatario: RENIEC. Anexo(s): RESOLUCION TRES. Entrega: SELLO.' },
                { date: '01/08/2025 09:29', act: 'NOTIFICACIÓN N° 2025-0042404-JR-CI', observation: 'Destinatario: MUNICIPALIDAD DISTRITAL DE ACORA. Anexo(s): RESOLUCION TRES. Entrega: SELLO.' },
                { date: '31/07/2025 16:33', act: 'NOTIFICACIÓN N° 2025-0042405-JR-CI', observation: 'Destinatario: PROCURADOR PUBLICO DE LA RENIEC. Anexo(s): ESCRITO 18507-2025 ESCRITO 18507-2025 RESOLUCION TRES. Entrega: CÉDULA ELECTRÓNICA.' },
                { date: '01/08/2025 09:29', act: 'NOTIFICACIÓN N° 2025-0042406-JR-CI', observation: 'Destinatario: PROCURADOR PUBLICO DE LA MUNICIPALIDAD DISTRITAL DE ACORA. Anexo(s): RESOLUCION TRES. Entrega: SELLO.' },
            ]
        },
        { num: 9, date: '05/08/2025', act: 'ESCRITO', observation: 'ESCRITO PRESENTADO POR EL PROCURADOR PÚBLICO ADJUNTO DE LA RENIEC. Sumilla: CUMPLE MANDATO.', document: 'ESCRITO_PRIVADO' },
        { num: 10, date: '06/08/2025 22:18', act: 'ESCRITO', observation: 'ESCRITO PRESENTADO POR LA PROCURADURÍA PÚBLICA MUNICIPAL DE ACORA. Sumilla: APERSONAMIENTO Y OTRO.', document: 'ESCRITO_PRIVADO' },
        {
            num: 11,
            date: '08/08/2025',
            act: 'RESOLUCION N° 4',
            observation: 'DECRETO. Provee los escritos presentados por el Procurador Público de la RENIEC y la Procuraduría Pública Municipal de ACORA.',
            document: true,
            doc_name: 'Res_004.pdf',
            notifications: [
                { date: '11/08/2025 14:53', act: 'NOTIFICACIÓN N° 2025-0044195-JR-CI', observation: 'Destinatario: UMPIRI CANO CHRISTIAN MARTIN. Anexo(s): ESCRITO 18934-2025 ESCRITO 19260-2025 RESOLUCION CUATRO. Entrega: CÉDULA ELECTRÓNICA.' },
                { date: '12/08/2025 09:36', act: 'NOTIFICACIÓN N° 2025-0044196-JR-CI', observation: 'Destinatario: RENIEC. Anexo(s): RESOLUCION CUATRO. Entrega: SELLO.' },
                { date: '12/08/2025 09:37', act: 'NOTIFICACIÓN N° 2025-0044197-JR-CI', observation: 'Destinatario: MUNICIPALIDAD DISTRITAL DE ACORA. Anexo(s): RESOLUCION CUATRO. Entrega: SELLO.' },
                { date: '11/08/2025 14:53', act: 'NOTIFICACIÓN N° 2025-0044198-JR-CI', observation: 'Destinatario: PROCURADOR PUBLICO DE LA RENIEC. Anexo(s): ESCRITO 19260-2025 RESOLUCION CUATRO. Entrega: CÉDULA ELECTRÓNICA.' },
                { date: '11/08/2025 14:53', act: 'NOTIFICACIÓN N° 2025-0044199-JR-CI', observation: 'Destinatario: PROCURADOR PUBLICO DE LA MUNICIPALIDAD DISTRITAL DE ACORA. Anexo(s): ESCRITO 18934-2025 RESOLUCION CUATRO. Entrega: CÉDULA ELECTRÓNICA.' },
                { date: '02/09/2025 09:37', act: 'NOTIFICACIÓN 2025-0049357-JR-CI', observation: 'Destinatario: PROCURADOR PUBLICO DE LA MUNICIPALIDAD DISTRITAL DE ACORA. Anexo(s): ESCRITO 18934-2025 RESOLUCION CUATRO. Entrega: NOTIFICADO EN CASILLA.' },
            ]
        },
        {
            num: 12,
            date: '12/09/2025',
            act: 'RESOLUCION N° 5',
            observation: 'AUTO. Se da por absuelto el traslado de la demanda por parte de la Municipalidad Distrital de Acora.',
            document: true,
            doc_name: 'Res_005.pdf',
            notifications: [
                { date: '12/09/2025 15:21', act: 'NOTIFICACIÓN N° 2025-0052287-JR-CI', observation: 'Destinatario: UMPIRI CANO CHRISTIAN MARTIN. Anexo(s): ESCRITO 22669-2025 ESCRITO 22669-2025 ESCRITO 22669-2025 RESOLUCION CINCO. Entrega: CÉDULA ELECTRÓNICA.' },
                { date: '12/09/2025 15:21', act: 'NOTIFICACIÓN N° 2025-0052288-JR-CI', observation: 'Destinatario: PROCURADOR PUBLICO DE LA RENIEC. Anexo(s): ESCRITO 22669-2025 ESCRITO 22669-2025 ESCRITO 22669-2025 RESOLUCION CINCO. Entrega: CÉDULA ELECTRÓNICA.' },
                { date: '12/09/2025 15:21', act: 'NOTIFICACIÓN N° 2025-0052289-JR-CI', observation: 'Destinatario: PROCURADOR PUBLICO DE LA MUNICIPALIDAD DISTRITAL DE ACORA. Anexo(s): RESOLUCION CINCO. Entrega: CÉDULA ELECTRÓNICA.' },
            ]
        },
        {
            num: 13,
            date: '24/09/2025',
            act: 'INDICE DE ACTO DE AUDIENCIA UNICA',
            observation: 'DECRETO. Registro y finalización de la Audiencia Única.',
            document: true,
            doc_name: 'Indice_Audiencia.pdf',
            notifications: [
                { date: '25/09/2025 14:58', act: 'NOTIFICACIÓN N° 2025-0055034-JR-CI', observation: 'Destinatario: PROCURADOR PUBLICO DE LA MUNICIPALIDAD DISTRITAL DE ACORA. Anexo(s): RESOLUCION INDICE DE ACTA DE AUDIENCIA UNICA. Entrega: CÉDULA ELECTRÓNICA.' },
                { date: '26/09/2025 09:28', act: 'NOTIFICACIÓN N° 2025-0055035-JR-CI', observation: 'Destinatario: MUNICIPALIDAD DISTRITAL DE ACORA. Anexo(s): RESOLUCION INDICE DE ACTA DE AUDIENCIA UNICA, LA MISMA QUER ES IMPRIMIDA EN AMBAS CARAS. Entrega: SELLO.' },
            ]
        },
        {
            num: 14,
            date: '30/09/2025',
            act: 'SENTENCIA INFUNDADA',
            observation: 'Declara infundada la demanda. RESOLUCIÓN SEIS - SENTENCIA NRO. 0188-2025.',
            document: true,
            doc_name: 'Sentencia.pdf',
            notifications: [
                { date: '02/10/2025 08:59', act: 'NOTIFICACIÓN N° 2025-0056632-JR-CI', observation: 'Destinatario: UMPIRI CANO CHRISTIAN MARTIN. Anexo(s): RESOLUCION SEIS - SENTENCIA NRO. 0188-2025, LA MISMA QUE ES IMPRIMIDA EN AMBAS CARAS. Entrega: BAJO PUERTA.' },
                { date: '02/10/2025 08:59', act: 'NOTIFICACIÓN N° 2025-0056633-JR-CI', observation: 'Destinatario: RENIEC. Anexo(s): RESOLUCION SEIS - SENTENCIA NRO. 0188-2025, LA MISMA QUE ES IMPRIMIDA EN AMBAS CARAS. Entrega: SELLO.' },
                { date: '02/10/2025 09:02', act: 'NOTIFICACIÓN N° 2025-0056634-JR-CI', observation: 'Destinatario: MUNICIPALIDAD DISTRITAL DE ACORA. Anexo(s): RESOLUCION SEIS - SENTENCIA NRO. 0188-2025, LA MISMA QUE ES IMPRIMIDA EN AMBAS CARAS. Entrega: SELLO.' },
                { date: '02/10/2025 08:59', act: 'NOTIFICACIÓN N° 2025-0056635-JR-CI', observation: 'Destinatario: PROCURADOR PUBLICO DE LA RENIEC. Anexo(s): RESOLUCION SEIS - SENTENCIA NRO. 0188-2025, LA MISMA QUE ES IMPRIMIDA EN AMBAS CARAS. Entrega: SELLO.' },
                { date: '02/10/2025 09:04', act: 'NOTIFICACIÓN N° 2025-0056636-JR-CI', observation: 'Destinatario: PROCURADOR PUBLICO DE LA MUNICIPALIDAD DISTRITAL DE ACORA. Anexo(s): RESOLUCION SEIS - SENTENCIA NRO. 0188-2025, LA MISMA QUE ES IMPRIMIDA EN AMBAS CARAS. Entrega: NOTIFICADO EN CASILLA.' },
            ]
        },
    ],
    resultSummary: {
        instance: '2° JUZGADO CIVIL',
        state: 'SENTENCIA INFUNDADA (EN PLAZO DE APELACIÓN)',
        lastAction: 'SENTENCIA INFUNDADA (30/09/2025)'
    }
};

/* --- MAPA DE IDs DE DOCUMENTOS (Para simular acceso a Google Drive) --- */
const FILE_IDS_MAP = {
    // Archivos Actualizados
    'Demanda.pdf': '1k98ImFjrQM25fHi8lzW0GLhQQKfmDxuQ', // ESCRITO DE DEMANDA (No cambia)
    'Anexos.zip': '1D6BLgbXSzQRRL7kcPys51MbQcGW5yf5J', // ANEXOS DE DEMANDA
    'Res_001.pdf': '1nVP8ONbB3Bubcw4A6EBnXAVZOeZmwKRr', // RESOLUCIÓN N° 1
    'Subsanacion.pdf': '1CgBZg-imozkKWqU0NqHE6G0jSgXgYeuM', // ESCRITO QUE SUBSANA OBSERVACIONES Y OTRO
    'Res_002.pdf': '1hR7t35UlhxXaHJHdG8UZ7AIoS9gSGedG', // RESOLUCIÓN N° 2
    'Anexos_Contestacion.zip': '1yLyFYDNToLcQ7mIbT4o-QoZ4VwIaP2Ss', // ANEXOS DE CONTESTACIÓN DE DEMANDA
    'Contestacion.docx': '12n3QhDuHyf0yldersDmSXbScYeMKosJy', // CONTESTACIÓN DE DEMANDA
    'Res_003.pdf': '17AWjt6PVb1VP7yuqT9-TJsWXV8fG8oci', // RESOLUCIÓN N° 3
    'Res_004.pdf': '1OWKl5MgoJbdJSB8O9PLCFZJS0TzQ3qXk', // RESOLUCION N° 4
    'Res_005.pdf': '1YJr7wPyl7SnwB90hmtFp2GDFQiDFl_is', // RESOLUCION N° 5
    'Indice_Audiencia.pdf': '1zwpiRLIwegQx0C34VtNzX9oS9TuELCuj', // INDICE DE ACTO DE AUDIENCIA UNICA
    'Sentencia.pdf': '1_0uQyTWjDNP6BZRjhRdokzPj-b2klJVD', // SENTENCIA INFUNDADA
    // ID por defecto, si un archivo no tiene un ID específico (basado en el primer link proporcionado)
    'DEFAULT': '1D6BLgbXSzQRRL7kcPys51MbQcGW5yf5J',
};


/* --- FUNCIONES AUXILIARES --- */

/**
 * Genera la URL de visualización o descarga de Google Drive.
 * @param {string} fileName Nombre del archivo.
 * @param {string} type 'view' o 'download'.
 * @returns {string} URL de Google Drive.
 */
function getDriveUrls(fileName, type) {
    const fileId = FILE_IDS_MAP[fileName] || FILE_IDS_MAP['DEFAULT'];
    if (type === 'view') {
        return `https://docs.google.com/gview?url=https://drive.google.com/uc?id=${fileId}&embedded=true`;
    } else if (type === 'download') {
        return `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
    return '#';
}

/**
 * Muestra el modal de notificaciones para un acto procesal.
 * @param {Array<Object>} notifications Lista de notificaciones.
 */
function showNotificationsModal(notifications) {
    const modal = document.getElementById('notification-modal');
    const modalBody = document.getElementById('notification-modal-body');
    const modalTitle = document.getElementById('notification-modal-title');

    modalTitle.textContent = "Detalle de Notificaciones";
    modalBody.innerHTML = '';

    if (notifications && notifications.length > 0) {
        notifications.forEach(notif => {
            const item = document.createElement('div');
            item.className = 'notification-modal-item';

            item.innerHTML = `
                <div class="notification-header">
                    <span><strong>Acto:</strong> ${notif.act}</span>
                    <span><strong>Fecha:</strong> ${notif.date.substring(0, 10)}</span>
                </div>
                <div class="notification-body">
                    <p><strong>Cédula:</strong> ${notif.act}</p>
                    <p><strong>Destinatario:</strong> ${notif.observation.match(/Destinatario: ([^.]*)/)?.[1] || 'N/A'}</p>
                    <p><strong>Entrega:</strong> ${notif.observation.match(/Entrega: ([^.]*)/)?.[1] || 'N/A'}</p>
                </div>
            `;
            modalBody.appendChild(item);
        });
    } else {
        modalBody.innerHTML = '<p style="text-align: center; color: #666;">No hay detalles de notificaciones disponibles para este acto.</p>';
    }

    modal.style.display = 'flex';
}

/**
 * Cierra el modal de notificaciones.
 */
function closeNotificationModal() {
    document.getElementById('notification-modal').style.display = 'none';
}

/**
 * Genera y muestra un código CAPTCHA.
 */
function generateCaptcha() {
    const randomIndex = Math.floor(Math.random() * CAPTCHA_CODES.length);
    currentCaptchaAnswer = CAPTCHA_CODES[randomIndex];
    document.getElementById('captcha-code-display').textContent = currentCaptchaAnswer;
    document.getElementById('captcha-input').value = '';
}

/**
 * Actualiza la ruta de navegación (breadcrumb).
 * @param {string} view 'home', 'results', o 'detail'.
 */
function updateBreadcrumb(view) {
    document.getElementById('breadcrumb-home').style.display = 'inline';
    document.getElementById('breadcrumb-results').style.display = 'none';
    document.getElementById('breadcrumb-detail').style.display = 'none';

    if (view === 'results') {
        document.getElementById('breadcrumb-results').style.display = 'inline';
    } else if (view === 'detail') {
        document.getElementById('breadcrumb-results').style.display = 'inline';
        document.getElementById('breadcrumb-detail').style.display = 'inline';
    }
}

/**
 * Establece el enlace de navegación activo.
 * @param {string} id ID del enlace de navegación.
 */
function setActiveNavLink(id) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('current');
    });
    document.getElementById(id).classList.add('current');
}

/**
 * Oculta todas las vistas principales.
 */
function hideAllViews() {
    document.getElementById('search-view').style.display = 'none';
    document.getElementById('results-view').style.display = 'none';
    document.getElementById('detail-view').style.display = 'none';
    document.getElementById('static-page-view').style.display = 'none';
}

/**
 * Abre el visor de documentos PDF.
 * @param {string} fileName Nombre del archivo.
 */
function openPdfViewer(fileName) {
    const viewUrl = getDriveUrls(fileName, 'view');
    document.getElementById('modal-doc-name').textContent = `Visualizando: ${fileName}`;
    document.getElementById('pdf-viewer-iframe').src = viewUrl;
    document.getElementById('pdf-modal').style.display = 'flex';
}

/**
 * Cierra el visor de documentos PDF.
 */
function closePdfViewer() {
    document.getElementById('pdf-modal').style.display = 'none';
    document.getElementById('pdf-viewer-iframe').src = ''; // Detener la carga/video
}

/**
 * Muestra la vista de resultados.
 * @param {string} expedientNumber Número de expediente consultado.
 * @param {string} origin Origen de la llamada ('search', 'all', 'detail').
 */
function showResults(expedientNumber, origin) {
    hideAllViews();
    document.getElementById('results-view').style.display = 'block';

    // Simulación: solo EXPEDIENT_DATA es encontrado
    const resultsBody = document.getElementById('results-body');
    resultsBody.innerHTML = '';

    let message = `Mostrando resultados para: <strong>${expedientNumber}</strong>`;

    if (origin === 'search') {
        // Lógica de búsqueda individual (simulada)
        if (expedientNumber === UNIQUE_EXPEDIENT_FULL) {
            message = `¡Éxito! Expediente <strong>${expedientNumber}</strong> encontrado.`;
            // Inyectar el resultado
            const row = resultsBody.insertRow();
            row.innerHTML = `
                <td><a href="#" class="expedient-link">${EXPEDIENT_DATA.number}</a></td>
                <td>${EXPEDIENT_DATA.resultSummary.instance}</td>
                <td>${EXPEDIENT_DATA.materia}</td>
                <td>${EXPEDIENT_DATA.resultSummary.state}</td>
                <td>${EXPEDIENT_DATA.resultSummary.lastAction}</td>
            `;
        } else {
            message = `No se encontraron expedientes con el número: <strong>${expedientNumber}</strong>`;
        }
    } else if (origin === 'all') {
        // Lógica de "Todos los Expedientes" (simulada, solo muestra el único)
        message = `Mostrando todos los expedientes de prueba. (1 resultado)`;
        const row = resultsBody.insertRow();
        row.innerHTML = `
            <td><a href="#" class="expedient-link">${EXPEDIENT_DATA.number}</a></td>
            <td>${EXPEDIENT_DATA.resultSummary.instance}</td>
            <td>${EXPEDIENT_DATA.materia}</td>
            <td>${EXPEDIENT_DATA.resultSummary.state}</td>
            <td>${EXPEDIENT_DATA.resultSummary.lastAction}</td>
        `;
    } else if (origin === 'detail') {
        // Volver de detalle (se mantiene el contenido anterior, solo se actualiza el breadcrumb)
        // Se asume que la tabla ya tiene el contenido cargado
    }

    document.getElementById('result-message').innerHTML = message;

    // Se asume que si hay una fila, se puede hacer clic.
    const expedientLink = resultsBody.querySelector('.expedient-link');
    if (expedientLink) {
        expedientLink.addEventListener('click', (e) => {
            e.preventDefault();
            showDetails();
        });
    }

    updateBreadcrumb('results');
}

/**
 * Muestra la vista de detalle del expediente.
 */
function showDetails() {
    hideAllViews();
    document.getElementById('detail-view').style.display = 'block';
    updateBreadcrumb('detail');

    const data = EXPEDIENT_DATA;

    // Pestaña 1: Información General
    document.getElementById('id-number').textContent = data.number;
    document.getElementById('id-district').textContent = data.district;
    document.getElementById('id-jurisdiction').textContent = data.jurisdiction;
    document.getElementById('id-specialist').textContent = data.specialist;
    document.getElementById('id-judge').textContent = data.judge;
    document.getElementById('id-process').textContent = data.process;
    document.getElementById('id-date').textContent = data.date;
    document.getElementById('id-specialty').textContent = data.specialty;
    document.getElementById('id-materia').textContent = data.materia;
    document.getElementById('id-state').textContent = data.state;
    document.getElementById('id-stage').textContent = data.stage;
    document.getElementById('id-location').textContent = data.location;
    document.getElementById('id-summary').textContent = data.summary;
    document.getElementById('id-observation').textContent = data.observation;
    document.getElementById('id-conclusion-date').textContent = data.conclusionDate;
    document.getElementById('id-conclusion-reason').textContent = data.conclusionReason;

    // Pestaña 2: Partes Procesales
    const partiesBody = document.getElementById('parties-body');
    partiesBody.innerHTML = '';
    data.parties.forEach(p => {
        const row = partiesBody.insertRow();
        const roleClass = (p.part === 'DEMANDANTE') ? 'rol-demandante' : 'rol-demandado';
        row.innerHTML = `
            <td><span class="${roleClass}">${p.part}</span></td>
            <td>${p.type}</td>
            <td>${p.paternal}</td>
            <td>${p.maternal}</td>
            <td>${p.name}</td>
        `;
    });

    // Pestaña 3: Historial Procesal
    const historyBody = document.getElementById('history-body');
    historyBody.innerHTML = '';
    data.history.forEach(h => {
        const row = historyBody.insertRow();

        let documentCellContent = '';

        if (h.document === true && h.doc_name) {
            // Documento visible (PDF/ZIP)
            documentCellContent += `
                <a href="#" class="document-link view-link" onclick="openPdfViewer('${h.doc_name}'); return false;">
                    <i class="fas fa-file-pdf"></i> Ver Documento
                </a>
                <a href="${getDriveUrls(h.doc_name, 'download')}" class="document-link download-link" target="_blank" title="Descargar">
                    <i class="fas fa-download"></i> Descargar
                </a>
            `;
        } else if (h.document === 'ESCRITO_PRIVADO') {
             // Documento privado (ESCRITO)
            row.classList.add('private-document-row');
            documentCellContent += `<div class="private-document-info">
                                                 <i class="fas fa-ban"></i> <strong>Acceso Restringido</strong>
                                                 </div>`;
        }

        if (h.notifications && h.notifications.length > 0) {
            // Notificaciones
            documentCellContent += `
                <a href="#" class="document-link notification-link" onclick="showNotificationsModal(${JSON.stringify(h.notifications).replace(/"/g, '&quot;')}); return false;">
                    <i class="fas fa-bell"></i> Ver Notificaciones (${h.notifications.length})
                </a>
            `;
        }

        row.innerHTML = `
            <td>${h.num}</td>
            <td>${h.date.substring(0, 10)}</td>
            <td>${h.act}</td>
            <td>${h.observation}</td>
            <td>${documentCellContent}</td>
        `;
    });
}

/**
 * Muestra una página estática (Ayuda/Contacto).
 * @param {string} title Título de la página.
 * @param {string} contentHTML Contenido HTML.
 */
function showStaticPage(title, contentHTML) {
    hideAllViews();
    const staticView = document.getElementById('static-page-view');
    document.getElementById('static-page-title').textContent = title;
    document.getElementById('static-page-content').innerHTML = contentHTML;
    staticView.style.display = 'block';
    updateBreadcrumb('home');
}


/* --- LISTENERS Y LÓGICA DE INICIALIZACIÓN --- */
document.addEventListener('DOMContentLoaded', () => {

    // **1. AÑADIR MENSAJE DE SIMULACIÓN**
    const searchView = document.getElementById('search-view');
    const simulationMessage = document.createElement('p');
    simulationMessage.id = 'simulation-message';
    simulationMessage.innerHTML = '* Esta es una simulación de la página de Consulta de Expedientes Judiciales (CEJ) con fines didácticos.';
    // Insertar el mensaje al inicio de la vista de búsqueda
    searchView.insertBefore(simulationMessage, searchView.firstChild);

    // Configuración Inicial
    hideAllViews();
    document.getElementById('search-view').style.display = 'block';

    document.getElementById('unique-expedient-id').textContent = UNIQUE_EXPEDIENT_FULL;
    generateCaptcha();
    updateBreadcrumb('home');

    const searchForm = document.getElementById('search-form');
    const searchButton = document.getElementById('search-button');
    const captchaInput = document.getElementById('captcha-input');
    const generalError = document.getElementById('general-error');
    const field1 = document.getElementById('field1');

    // LISTENERS DEL MODAL DE PDF
    document.getElementById('close-pdf-modal').addEventListener('click', closePdfViewer);
    document.getElementById('pdf-modal').addEventListener('click', (e) => {
        if (e.target.id === 'pdf-modal') {
            closePdfViewer();
        }
    });

    // LISTENERS DEL MODAL DE NOTIFICACIONES
    document.getElementById('close-notification-modal').addEventListener('click', closeNotificationModal);
    document.getElementById('notification-modal').addEventListener('click', (e) => {
        if (e.target.id === 'notification-modal') {
            closeNotificationModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (document.getElementById('pdf-modal').style.display === 'flex') {
                closePdfViewer();
            } else if (document.getElementById('notification-modal').style.display === 'flex') {
                closeNotificationModal();
            }
        }
    });

    // REFRESH CAPTCHA
    document.getElementById('refresh-captcha-button').addEventListener('click', generateCaptcha);

    // LÓGICA DE AUTOCOMPLETADO (SOLO CON TAB)
    function autoFillExpedient() {
        document.getElementById('field1').value = UNIQUE_EXPEDIENT_PARTS.field1;
        document.getElementById('field2').value = UNIQUE_EXPEDIENT_PARTS.field2;
        document.getElementById('field3').value = UNIQUE_EXPEDIENT_PARTS.field3;
        document.getElementById('field4').value = UNIQUE_EXPEDIENT_PARTS.field4;
        document.getElementById('field5').value = UNIQUE_EXPEDIENT_PARTS.field5;
        document.getElementById('field6').value = UNIQUE_EXPEDIENT_PARTS.field6;
        document.getElementById('field7').value = UNIQUE_EXPEDIENT_PARTS.field7;
    }

    // El autocompletado SOLO se activa con TAB en el primer campo.
    field1.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            autoFillExpedient();
            captchaInput.focus();
        }
    });

    // MANEJO DE LA BÚSQUEDA
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const fields = ['field1', 'field2', 'field3', 'field4', 'field5', 'field6', 'field7'];
        const expedientParts = fields.map(id => document.getElementById(id).value.trim());
        const inputExpedientFull = expedientParts.join('-');

        const allFieldsFilled = expedientParts.every(part => part.length > 0);
        const captchaCorrect = captchaInput.value.toUpperCase() === currentCaptchaAnswer;

        if (!allFieldsFilled) {
            generalError.textContent = 'Por favor, complete todos los campos del número de expediente.';
            generalError.style.display = 'block';
            return;
        }

        if (!captchaCorrect) {
            generalError.textContent = 'El código de seguridad (CAPTCHA) es incorrecto. Inténtelo de nuevo.';
            generalError.style.display = 'block';
            generateCaptcha();
            return;
        }

        searchButton.classList.add('loading');
        searchButton.disabled = true;
        generalError.style.display = 'none';

        // Simulación de espera
        setTimeout(() => {
            searchButton.classList.remove('loading');
            searchButton.disabled = false;

            // Llama a la función que muestra los resultados
            showResults(inputExpedientFull, 'search');

        }, 1500);
    });

    // DE VUELTA A LA BÚSQUEDA
    document.getElementById('back-button').addEventListener('click', () => {
        hideAllViews();
        document.getElementById('search-view').style.display = 'block';
        updateBreadcrumb('home');
        setActiveNavLink('nav-inicio');
    });

    // MANEJO DE CLIC EN RESULTADOS
    document.getElementById('results-body').addEventListener('click', (e) => {
        if (e.target.classList.contains('expedient-link')) {
            e.preventDefault();
            showDetails();
        }
    });

    // MANEJO DE NAVEGACIÓN PRINCIPAL
    document.getElementById('nav-inicio').addEventListener('click', (e) => {
        e.preventDefault();
        hideAllViews();
        document.getElementById('search-view').style.display = 'block';
        setActiveNavLink('nav-inicio');
        updateBreadcrumb('home');
    });

    document.getElementById('nav-todos').addEventListener('click', (e) => {
        e.preventDefault();
        showResults(UNIQUE_EXPEDIENT_FULL, 'all');
        setActiveNavLink('nav-todos');
    });

    // **2. MANEJO DE PÁGINAS ESTÁTICAS (CONTACTO - Contenido Actualizado)**
    document.getElementById('nav-contacto').addEventListener('click', (e) => {
        e.preventDefault();
        setActiveNavLink('nav-contacto');

        const contactContent = `
            <div class="contact-grid">
                <div class="contact-item contact-fcjp">
                    <h4>Información de Contacto FCJP - UNAP</h4>
                    <p><strong>Teléfono:</strong> <a href="tel:051353482">(051) 353482</a></p>
                    <p><strong>Correo Electrónico:</strong> <a href="mailto:fcjp.mp@unap.edu.pe">fcjp.mp@unap.edu.pe</a></p>
                    <p><strong>Instagram:</strong> @unap.fcjp</p>
                </div>
                <div class="contact-item contact-support">
                    <h4>Soporte Técnico del Sistema CEJ-UNAP</h4>
                    <p>Para consultas o problemas con el funcionamiento del sistema simulado:</p>
                    <p><strong>Email de Soporte:</strong> <a href="mailto:soporte.cej@unap.edu.pe">soporte.cej@unap.edu.pe</a></p>
                    <p><strong>Horario de Atención:</strong> Lunes a Viernes, 8:00 AM - 4:00 PM</p>
                </div>
            </div>
            <div class="contact-map">
                <h4>Ubicación</h4>
                <p>Facultad de Ciencias Jurídicas y Políticas - UNAP</p>
                <div class="map-placeholder"></div>
            </div>
        `;
        showStaticPage('Contacto', contactContent);
    });

    // **3. MANEJO DE PÁGINAS ESTÁTICAS (AYUDA)**
    document.getElementById('nav-ayuda').addEventListener('click', (e) => {
        e.preventDefault();
        setActiveNavLink('nav-ayuda');

        const helpContent = `
            <div class="help-section">
                <h3>¿Cómo realizar una consulta?</h3>
                <ol>
                    <li>Complete los **siete campos** del número de expediente judicial (ej: 00661-2025-0-2101-JR-CI-02).</li>
                    <li>Introduzca el código de seguridad (**CAPTCHA**) que aparece en el recuadro.</li>
                    <li>Haga clic en el botón **Buscar**. Si el expediente existe, verá un resumen en la vista de resultados.</li>
                    <li>Para ver el detalle (partes, historial, documentos), haga clic en el número de expediente.</li>
                </ol>
            </div>
            <div class="help-section">
                <h3>Acerca de los Documentos</h3>
                <p>La columna "Documento" en el historial procesal muestra:</p>
                <ul>
                    <li>**Ver Documento / Descargar:** Acceso a documentos públicos (Resoluciones, Demandas, etc.).</li>
                    <li>**Ver Notificaciones:** Muestra una lista de los destinatarios y el tipo de entrega de la resolución.</li>
                    <li>**Acceso Restringido:** Indica documentos de carácter privado (escritos de partes) que no son de acceso público.</li>
                </ul>
            </div>
        `;
        showStaticPage('Ayuda y Preguntas Frecuentes', helpContent);
    });

    // MANEJO DE VUELTA A RESULTADOS DESDE DETALLE (breadcrumb)
    document.getElementById('breadcrumb-results-link').addEventListener('click', (e) => {
        e.preventDefault();
        // Llama a showResults con el origen 'detail' para volver a la vista de resultados
        // Mantiene los resultados anteriores sin necesidad de re-buscar
        showResults(EXPEDIENT_DATA.number, 'detail');
    });

});