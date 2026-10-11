import { getInfo, getDeviceModel, getOsVersion } from 'KMP_template_shared-shared';

const kmpMessageEl = document.getElementById('kmp_message');
const kmpDeviceEl = document.getElementById('kmp_device');
const kmpOsEl = document.getElementById('kmp_os');

const message = getInfo();
kmpMessageEl.textContent = message;
kmpDeviceEl.textContent = `Device: ${getDeviceModel()}`;
kmpOsEl.textContent = `OS: ${getOsVersion()}`;
