import { getInfo, getDeviceModel } from 'KMP_template_shared-shared';

const kmpMessageEl = document.getElementById('kmp_message');
const kmpDeviceEl = document.getElementById('kmp_device');

const message = getInfo();
kmpMessageEl.textContent = message;
kmpDeviceEl.textContent = `Device: ${getDeviceModel()}`;
