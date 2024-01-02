const fs = require("fs");

// Step 1: Read the file and store the data
fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Step 2: Remove all extra spaces
    let newData = data.replace(/\s+/g, ' ');

    console.log("Original Data:", data);
    console.log("Modified Data:", newData);

    // Step 3: Write the modified data back to the file
    fs.writeFile("a.txt", newData, (err) => {
        if (err) {
            console.error(err);
            return;
        }

        // Step 4: Read the file again to verify the changes
        fs.readFile("a.txt", "utf-8", (err, updatedData) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("Updated Data:", updatedData);
        });
    });
});
