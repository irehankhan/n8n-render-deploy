const { exec } = require("child_process");

console.log("Starting n8n automation service on Render...");
exec("npx n8n start", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) console.error(`stderr: ${stderr}`);
  console.log(`stdout: ${stdout}`);
});
