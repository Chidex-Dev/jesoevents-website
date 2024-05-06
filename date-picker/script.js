// CSS STYLES ARE INJECTED TO HEAD IN CODEPEN SETTINGS
import { MonthPicker } from "https://cdn.skypack.dev/monthpicker-lite-js@1.2.0";
const monthPicker = new MonthPicker(document.querySelector('.app'));
monthPicker.open();

// monthPicker.onchange  = (e) => {
//     e.preventDefault()
//     alert('2')
// }
