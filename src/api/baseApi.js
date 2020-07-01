export function onSuccess(response) {  
    if (response.ok){
      return response.json();
    } else{
      const err =  new Error(response.statusText);
      throw err
    }
  }