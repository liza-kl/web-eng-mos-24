function loadScript(src) {
    return new Promise(function(resolve, reject) { // Entfernung des Callback Parameters, Hinzufügen des Promise Objekts 
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => reject(new Error(`Script load error for ${src}`));
    //script.onload = () => resolve(script); // Anstatt des callbacks das Promise resolve
    script.onerror = () => reject(new Error(`Script load error for ${src}`));
    document.head.append(script);
  });
}