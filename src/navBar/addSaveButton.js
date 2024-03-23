import { canvas } from "../data/variables.js";

import { userData } from "../data/userData.js";

export const downloadSvgAsJpeg = () => {
    const saveButton = document.getElementById("saveas-button");

    saveButton.addEventListener("click", () => {
        // Create a temporary canvas for the white background
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext("2d");

        // Draw a white background on the temporary canvas
        tempCtx.fillStyle = "white";
        tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

        // Draw the existing content on the temporary canvas
        tempCtx.drawImage(canvas, 0, 0);

        // Convert the temporary canvas to data URL
        var dataURL = tempCanvas.toDataURL("image/jpeg");

        // Create a link element
        var link = document.createElement("a");

        // Set the download attribute with the provided file name
        if (userData.userSettings.fileName === "Untitled_Project") {
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1;
            let dd = today.getDate();

            if (dd < 10) dd = "0" + dd;
            if (mm < 10) mm = "0" + mm;

            const formattedToday = dd + "/" + mm + "/" + yyyy;
            link.download = `Untitled_Project\|${formattedToday}.jpeg`;
        } else {
            link.download = `${userData.userSettings.fileName}.jpeg`;
        }

        // Set the href attribute with the data URL
        link.href = dataURL;

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger a click on the link to start the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
    });
};
