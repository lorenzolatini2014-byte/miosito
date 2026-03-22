const SECRET = "482910573846291";

/*
👇👇👇 Qui inserisci il contenuto del file 👇👇👇
Tutto deve stare tra i backtick `...`
*/
const FILE_CONTENT = `
domlom.a@icartena.onmicrosoft.com Domenico301013
viopal.s@icartena.onmicrosoft.com Viola1308@

Scrivi qui il contenuto del tuo file.

Esempio:
Nome: Mario
Ruolo: Test

Puoi modificare tutto questo.
`;

document.getElementById("downloadBtn").addEventListener("click", function() {
  const code = document.getElementById("code").value;

  if (code === SECRET) {
    const blob = new Blob([FILE_CONTENT], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "file.txt";
    a.click();

    document.getElementById("msg").innerText = "Download completato!";
    document.getElementById("msg").style.color = "green";
  } else {
    document.getElementById("msg").innerText = "Codice errato!";
    document.getElementById("msg").style.color = "red";
  }
});