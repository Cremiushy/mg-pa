// ============================================================
// MG-PA SHARED DATA & UTILITIES
// La Crema Propiedades — Portal Administrativo
// ============================================================

var TENANTS = [
  {id:0,name:'Carlos Méndez Rodríguez',short:'Carlos',initials:'CM',apt:'4B',edif:'Los Pinos',cedula:'001-1234567-8',tel:'809-590-0429',email:'carlos.mendez@gmail.com',status:'red',renta:48000,pagado:0,saldo:48000,daysLate:38,inicio:'15 mar 2023',vence:'15 mar 2026',contrato:'CONT-2025-1000',deposito:'RD$ 96,000',
    bills:[{id:'b1',icon:'🏠',name:'Renta abril',amount:48000,status:'pend'},{id:'b2',icon:'💡',name:'Electricidad',amount:2800,status:'warn'},{id:'b3',icon:'💧',name:'Agua',amount:800,status:'ok'},{id:'b4',icon:'📶',name:'Internet',amount:1500,status:'ok'},{id:'b5',icon:'🏢',name:'Área común',amount:1200,status:'warn'}],
    history:[{date:'22 feb',concept:'Renta marzo',amount:'RD$ 48,000',method:'Banreservas',ref:'TRF-0881'},{date:'3 feb',concept:'Renta febrero',amount:'RD$ 48,000',method:'BHD',ref:'TRF-0774'},{date:'5 ene',concept:'Renta enero',amount:'RD$ 48,000',method:'BHD',ref:'TRF-0661'}],
    suggests:[{from:'Admin',initials:'AD',time:'Ayer',tag:'mant',tagLbl:'Mantenimiento',text:'Orden de trabajo para A/C creada. Técnico visitará el martes 9am–12pm.'}]},
  {id:1,name:'María González López',short:'María',initials:'MG',apt:'5A',edif:'Los Pinos',cedula:'001-3334445-6',tel:'809-555-0411',email:'maria.gonzalez@gmail.com',status:'olive',renta:28000,pagado:28000,saldo:0,daysLate:0,inicio:'5 may 2022',vence:'5 may 2026',contrato:'CONT-2025-1003',deposito:'RD$ 56,000',
    bills:[{id:'b1',icon:'🏠',name:'Renta abril',amount:28000,status:'ok'},{id:'b2',icon:'💡',name:'Electricidad',amount:2400,status:'ok'},{id:'b3',icon:'💧',name:'Agua',amount:800,status:'ok'},{id:'b4',icon:'📶',name:'Internet',amount:1500,status:'ok'},{id:'b5',icon:'🏢',name:'Área común',amount:1200,status:'ok'}],
    history:[{date:'Hoy',concept:'Renta abril',amount:'RD$ 28,000',method:'BHD',ref:'TRF-0912'},{date:'3 mar',concept:'Renta marzo',amount:'RD$ 28,000',method:'BHD',ref:'TRF-0833'},{date:'4 feb',concept:'Renta febrero',amount:'RD$ 28,000',method:'Popular',ref:'TRF-0722'}],
    suggests:[]},
  {id:2,name:'Luis Fernández Cruz',short:'Luis',initials:'LF',apt:'3B',edif:'Edificio Palma',cedula:'001-7778889-1',tel:'809-555-0522',email:'luis.fernandez@yahoo.com',status:'olive',renta:22500,pagado:22500,saldo:0,daysLate:0,inicio:'20 ago 2021',vence:'20 ago 2026',contrato:'CONT-2025-1004',deposito:'RD$ 45,000',
    bills:[{id:'b1',icon:'🏠',name:'Renta abril',amount:22500,status:'ok'},{id:'b2',icon:'💡',name:'Electricidad',amount:2100,status:'warn'},{id:'b3',icon:'💧',name:'Agua',amount:800,status:'ok'},{id:'b4',icon:'📶',name:'Internet',amount:1500,status:'ok'},{id:'b5',icon:'🏢',name:'Área común',amount:1200,status:'ok'}],
    history:[{date:'Ayer',concept:'Renta abril',amount:'RD$ 22,500',method:'Popular',ref:'TRF-0901'},{date:'20 mar',concept:'Renta marzo',amount:'RD$ 22,500',method:'Popular',ref:'TRF-0801'}],
    suggests:[{from:'Admin',initials:'AD',time:'Hace 2 días',tag:'info',tagLbl:'Información',text:'Hola Luis, respecto a la renovación de contrato, puede comunicarse para coordinar.'}]},
  {id:3,name:'Rosa Almonte Peña',short:'Rosa',initials:'RA',apt:'2A',edif:'Edificio Palma',cedula:'001-9876543-2',tel:'809-555-0287',email:'rosa.almonte@gmail.com',status:'red',renta:36500,pagado:0,saldo:36500,daysLate:32,inicio:'1 jun 2022',vence:'1 jun 2026',contrato:'CONT-2025-1001',deposito:'RD$ 73,000',
    bills:[{id:'b1',icon:'🏠',name:'Renta abril',amount:36500,status:'pend'},{id:'b2',icon:'💡',name:'Electricidad',amount:2400,status:'ok'},{id:'b3',icon:'💧',name:'Agua',amount:800,status:'ok'},{id:'b4',icon:'📶',name:'Internet',amount:1500,status:'ok'},{id:'b5',icon:'🏢',name:'Área común',amount:1200,status:'warn'}],
    history:[{date:'15 feb',concept:'Renta marzo',amount:'RD$ 36,500',method:'Popular',ref:'TRF-0802'}],
    suggests:[{from:'Rosa Almonte',initials:'RA',time:'Hoy',tag:'mant',tagLbl:'Mantenimiento',text:'Fuga pequeña en la llave del baño desde hace varios días. Por favor enviar técnico.'}]},
  {id:4,name:'Juan Reyes Castillo',short:'Juan',initials:'JR',apt:'7C',edif:'Edificio Centro',cedula:'001-5557891-0',tel:'809-555-0399',email:'juan.reyes@hotmail.com',status:'red',renta:52000,pagado:0,saldo:52000,daysLate:31,inicio:'10 ene 2023',vence:'10 ene 2026',contrato:'CONT-2025-1002',deposito:'RD$ 104,000',
    bills:[{id:'b1',icon:'🏠',name:'Renta abril',amount:52000,status:'pend'},{id:'b2',icon:'💡',name:'Electricidad',amount:2800,status:'ok'},{id:'b3',icon:'💧',name:'Agua',amount:800,status:'ok'},{id:'b4',icon:'📶',name:'Internet',amount:1500,status:'pend'},{id:'b5',icon:'🏢',name:'Área común',amount:1200,status:'ok'}],
    history:[{date:'18 feb',concept:'Renta marzo',amount:'RD$ 52,000',method:'Banreservas',ref:'TRF-0791'}],
    suggests:[]},
];

var PAYMENTS=[
  {id:'P-0041',tid:1,amount:'RD$ 28,000',bank:'BHD',date:'Hoy',concept:'Renta abril',status:'ok'},
  {id:'P-0040',tid:2,amount:'RD$ 22,500',bank:'Popular',date:'Ayer',concept:'Renta abril',status:'ok'},
  {id:'P-0039',tid:1,amount:'RD$ 28,000',bank:'BHD',date:'Hace 2 días',concept:'Agua',status:'ok'},
  {id:'P-0038',tid:0,amount:'RD$ 48,000',bank:'Banreservas',date:'22 feb',concept:'Renta marzo',status:'late'},
  {id:'P-0037',tid:3,amount:'RD$ 36,500',bank:'Popular',date:'15 feb',concept:'Renta marzo',status:'ok'},
  {id:'P-0036',tid:4,amount:'RD$ 52,000',bank:'Banreservas',date:'18 feb',concept:'Renta marzo',status:'ok'},
];

var ADMIN_NUMBERS = {
  principal: '+1 809-356-4915',
  secundario: '+1 929-257-5851'
};

// AI Reply Engine
function aiReply(q, tenant) {
  var ql = q.toLowerCase();
  var n = tenant.short || tenant.name.split(' ')[0];

  if (ql.includes('debo') || ql.includes('saldo') || ql.includes('pendiente') || (ql.includes('cuánto') && !ql.includes('resta'))) {
    return tenant.saldo > 0
      ? 'Hola ' + n + ' 👋 Según su cuenta tiene *RD$ ' + tenant.saldo.toLocaleString() + '* pendientes' + (tenant.daysLate > 0 ? ' con *' + tenant.daysLate + ' días de atraso*' : '') + '. ¿Coordina su pago hoy?'
      : 'Hola ' + n + ' 😊 Su cuenta está completamente al día. No tiene saldo pendiente. ✅';
  }
  if (ql.includes('resta') || ql.includes('quedé') || (ql.includes('pagué') && ql.match(/\d+/))) {
    var m = q.match(/\d[\d,.]*/g);
    var p = m ? parseInt(m[0].replace(/[,.]/g, '')) : 0;
    if (p && p < tenant.renta) {
      var r = tenant.renta - p;
      return 'Entendido ' + n + '. Si pagó *RD$ ' + p.toLocaleString() + '*, le resta *RD$ ' + r.toLocaleString() + '* para completar la renta de *RD$ ' + tenant.renta.toLocaleString() + '*. Envíenos el comprobante y lo verificamos. 📎';
    }
    return tenant.saldo > 0
      ? 'Revisando su historial ' + n + ': el sistema muestra *RD$ ' + tenant.saldo.toLocaleString() + ' pendientes*. Si realizó algún abono, envíe el comprobante para registrarlo. 📎'
      : 'Hola ' + n + ', su cuenta no muestra saldos pendientes. Si tiene dudas, envíe su comprobante. 📎';
  }
  if (ql.includes('pago') || ql.includes('recibido') || ql.includes('confirmado')) {
    return tenant.pagado > 0
      ? 'Sí ' + n + ' ✅ Confirmamos su pago de *RD$ ' + tenant.pagado.toLocaleString() + '*. ¡Gracias por su puntualidad!'
      : 'Hola ' + n + ', *no registramos ningún pago* este mes. Saldo pendiente: *RD$ ' + tenant.saldo.toLocaleString() + '*. ¿Tiene comprobante?';
  }
  if (ql.includes('contrato') || ql.includes('vence') || ql.includes('renovar')) {
    return 'Su contrato vence el *' + tenant.vence + '*. Le notificaremos 60 días antes para la renovación. ¿Alguna consulta adicional?';
  }
  if (ql.includes('renta') || ql.includes('alquiler')) {
    return 'Hola ' + n + ', su renta mensual es *RD$ ' + tenant.renta.toLocaleString() + '*' + (tenant.saldo > 0 ? ' y tiene *RD$ ' + tenant.saldo.toLocaleString() + ' pendientes*.' : ' y está al corriente.') + ' ¿En qué más puedo ayudarle?';
  }
  if (ql.includes('luz') || ql.includes('electricidad')) {
    var elec = tenant.bills[1];
    return 'Hola ' + n + ', su electricidad: *' + (elec.status === 'ok' ? 'Al día' : 'RD$ ' + elec.amount.toLocaleString() + ' pendiente') + '*. Puede pagar desde el portal web. 💻';
  }
  if (ql.includes('agua')) {
    return 'Hola ' + n + ', su agua está *al día*. ¿Alguna otra consulta?';
  }
  if (ql.includes('internet')) {
    var inet = tenant.bills[3];
    return 'Hola ' + n + ', su internet: *' + (inet.status === 'ok' ? 'Al día' : 'RD$ ' + inet.amount.toLocaleString() + ' pendiente') + '*. Puede pagar desde el portal web. 💻';
  }
  if (ql.includes('servicio')) {
    return 'Hola ' + n + ', sus servicios: Agua: *al día* | Electricidad: *' + (tenant.bills[1].status === 'ok' ? 'al día' : 'pendiente') + '* | Internet: *' + (tenant.bills[3].status === 'ok' ? 'al día' : 'pendiente') + '* | Área común: *' + (tenant.bills[4].status === 'ok' ? 'al día' : 'pendiente') + '*. ¿Necesita atención en alguno?';
  }
  if (ql.includes('parte') || ql.includes('abono') || ql.includes('plazo')) {
    return 'Hola ' + n + ', los abonos se coordinan directamente con el administrador. Saldo actual: *RD$ ' + tenant.saldo.toLocaleString() + '*. ¿Desea que le contactemos para un plan de pago?';
  }
  if (ql.includes('horario') || ql.includes('oficina') || ql.includes('contacto')) {
    return 'Nuestro horario: *Lunes–Viernes 8AM–8PM* y *Sábados 9AM–2PM*. También puede llamar al *' + ADMIN_NUMBERS.principal + '*. Este chat está disponible 24/7. 😊';
  }
  return 'Hola ' + n + ' 👋 He registrado su consulta. Un agente le responderá pronto. Para urgencias: *' + ADMIN_NUMBERS.principal + '*. ¿Puedo ayudarle en algo más?';
}

// Toast
function toast(msg, color) {
  var t = document.createElement('div');
  t.textContent = msg;
  t.style.cssText = 'position:fixed;bottom:20px;right:20px;background:' + (color || 'var(--gold)') + ';color:' + (color ? '#fff' : 'var(--navy)') + ';padding:9px 18px;border-radius:8px;font-size:12px;font-weight:600;z-index:9999;font-family:var(--fb);pointer-events:none;animation:fadeUp .25s ease';
  document.body.appendChild(t);
  setTimeout(function() { t.remove(); }, 2500);
}

// Format helpers
function fmtCard(el) { var v = el.value.replace(/\D/g, '').slice(0, 16); el.value = v.replace(/(.{4})/g, '$1 ').trim(); }
function fmtExp(el) { var v = el.value.replace(/\D/g, ''); if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2, 4); el.value = v; }
function fmtCed(el) { var v = el.value.replace(/\D/g, ''); if (v.length > 3 && v.length <= 10) v = v.slice(0, 3) + '-' + v.slice(3); if (v.length > 11) v = v.slice(0, 11) + '-' + v.slice(11); el.value = v; }

// Chart builder
function buildBarChart(id, labels, vals, colors) {
  var el = document.getElementById(id); if (!el) return;
  var max = Math.max.apply(null, vals); el.innerHTML = '';
  labels.forEach(function(l, i) {
    var h = Math.round((vals[i] / max) * 100);
    var isLast = !colors && i === labels.length - 1;
    var bg = colors ? colors[i] : (isLast ? 'var(--gold)' : 'rgba(201,168,76,.3)');
    var d = document.createElement('div'); d.className = 'bc';
    d.innerHTML = '<div class="bv">' + (isLast ? '<b>' : '') + Math.round(vals[i] / 1000) + 'K' + (isLast ? '</b>' : '') + '</div><div class="bbar" style="height:' + h + 'px;background:' + bg + '"></div><div class="bl">' + l + '</div>';
    el.appendChild(d);
  });
}
