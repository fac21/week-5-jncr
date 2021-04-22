function sharedContent(content) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="">
      <link rel="icon" type="image/png" href="#"/>
      <link rel="stylesheet" type="text/css" href="style.css">
      <title>FacBook</title>
    </head>
    <body>
    <header>
    <a href="/new-user">Add a new profile!</a>
    </header>
      ${content}
    </body>
    </html>
    `;
};

module.exports = { sharedContent };