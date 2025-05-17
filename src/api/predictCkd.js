import axios from 'axios';

export async function predictCKD(form) {
  const formatted = {};
  for (const key in form) {
    if (["rbc", "pc", "pcc", "ba", "htn", "dm", "cad", "appet", "pe", "ane","pvc","wc"].includes(key)) {
      formatted[key] = parseInt(form[key]);
    } else {
      formatted[key] = parseFloat(form[key]);
    }
  }

 const res =axios.post('https://chronic-kidney-disease-prediction-enly.onrender.com/predict', formatted);
  
  return res.data;
}

export default predictCKD;