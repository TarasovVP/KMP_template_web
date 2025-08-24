import { getInfo } from 'KMP_template_shared-shared';

const kmpMessageEl = document.getElementById('kmp_message');

const message = getInfo();
kmpMessageEl.textContent = message;
